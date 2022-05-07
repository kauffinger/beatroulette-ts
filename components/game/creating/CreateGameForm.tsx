import { Group, Box, Text } from "@mantine/core";
import { useForm, formList, yupResolver } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import * as Yup from "yup";
import { CircleCheck, X } from "tabler-icons-react";

import { createGame } from "../../../lib/functions";
import AppButton from "../../ui/AppButton";
import RoundFormInput from "./RoundFormInput";

const FormSchema = Yup.object({
  rounds: Yup.array()
    .min(2, "Play at least two rounds.")
    .max(10, "Currently the max rounds is 10.")
    .of(
      Yup.object({
        name: Yup.string()
          .max(15, "choose a description shorter than 15 characters")
          .min(3, "choose a description longer than 3 characters")
          .required("Give this a name."),
      })
    )
    .required("You need to add rounds."),
});

function CreateGameForm() {
  const form = useForm({
    schema: yupResolver(FormSchema),
    initialValues: {
      rounds: formList([
        { name: "Sample" },
        { name: "Drums" },
        { name: "Melody" },
      ]),
    },
  });

  const router = useRouter();

  const submitHandler = async () => {
    let validated = form.validate();
    if (validated.hasErrors) {
      return;
    }

    showNotification({
      id: "submit-game-creation",
      disallowClose: true,
      autoClose: false,
      title: "Game is being created...",
      message: "Give this time, Google likes to take it's slow.",
      color: "blue",
      loading: true,
    });

    let values = form.values;

    const res = await createGame({
      maxrounds: values.rounds.length,
      roundinfo: values.rounds,
    });

    if (res.data.created) {
      updateNotification({
        id: "submit-game-creation",
        disallowClose: false,
        autoClose: 3000,
        title: "Game Created!",
        message: "Get ready and invite your players.",
        color: "teal",
        loading: false,
        icon: <CircleCheck />,
      });
      router.push(`/game/play/${res.data.gameId}`);
    } else
      updateNotification({
        id: "submit-game-creation",
        disallowClose: false,
        autoClose: 3000,
        title: "Error while creating the game.",
        message: res.data.info,
        color: "red",
        loading: false,
        icon: <X />,
      });
  };

  const fields = form.values.rounds.map((_, index) => (
    <RoundFormInput
      key={index}
      index={index}
      listInputProps={form.getListInputProps("rounds", index, "name")}
      removeFunction={() => form.removeListItem("rounds", index)}
    />
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <form onSubmit={submitHandler}>
        {fields.length > 0 ? (
          <Group mb="xs">
            <Text weight={500} size="sm" sx={{ flex: 1 }}>
              Rounds
            </Text>
          </Group>
        ) : (
          <Text color="dimmed" align="center">
            Start by adding a round...
          </Text>
        )}

        <DragDropContext
          onDragEnd={({ destination, source }) =>
            form.reorderListItem("rounds", {
              from: source.index,
              to: destination ? destination.index : source.index,
            })
          }
        >
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {fields}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <Group position="center" mt="md">
          <AppButton
            className="border-accent border-2 text-white"
            variant="outline"
            onClick={() => form.addListItem("rounds", { name: "" })}
          >
            Add round
          </AppButton>
          <AppButton
            className="border-accent border-2 text-white"
            variant="outline"
            onClick={submitHandler}
          >
            Submit
          </AppButton>
        </Group>
      </form>
    </Box>
  );
}

export default CreateGameForm;

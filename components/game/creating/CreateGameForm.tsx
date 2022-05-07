import { Group, Box, Text } from "@mantine/core";
import { useForm, formList, yupResolver } from "@mantine/form";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import * as Yup from "yup";

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

  const submitHandler = () => {
    let validated = form.validate();
    let values = form.values;
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

import { Group, TextInput, Box, Text, Center } from "@mantine/core";
import { useForm, formList } from "@mantine/form";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { GripVertical } from "tabler-icons-react";

import AppButton from "../../ui/AppButton";
import RoundFormInput from "./RoundFormInput";

function CreateGameForm() {
  const form = useForm({
    initialValues: {
      rounds: formList([
        { name: "Sample" },
        { name: "Drums" },
        { name: "Melody" },
      ]),
    },
  });

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
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
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
      </Group>
    </Box>
  );
}

export default CreateGameForm;


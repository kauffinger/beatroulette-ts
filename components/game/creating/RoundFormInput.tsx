import { Draggable } from "react-beautiful-dnd";
import { Group, Center, TextInput } from "@mantine/core";
import { GripVertical, Trash } from "tabler-icons-react";
import { useHover } from "@mantine/hooks";
import { GetInputPropsPayload } from "@mantine/form/lib/types";



interface Props {
  index: number;
  listInputProps: GetInputPropsPayload;
  removeFunction: () => void;
}


function RoundFormInput({
  index,
  listInputProps,
  removeFunction,
}: Props): JSX.Element {
  const { hovered, ref } = useHover();
  return (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <div className="flex space-x-3 relative" ref={ref}>
            <Center {...provided.dragHandleProps}>
              <GripVertical size={18} />
            </Center>
            <TextInput
              className="bg-rgray-800 focus:ring-red-500 focus:border-red-500 block shadow-sm text-sm border-gray-600 rounded-md text-white"
              placeholder="Round Theme"
              {...listInputProps}
            />
            {hovered && (
              <div
                className="absolute inset-y-0 right-1 h-full inline-flex"
                onClick={removeFunction}
              >
                <Trash className="my-auto hover:cursor-pointer" />
              </div>
            )}
          </div>
        </Group>
      )}
    </Draggable>
  );
}

export default RoundFormInput;

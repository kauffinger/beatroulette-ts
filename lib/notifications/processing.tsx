import { showNotification, updateNotification } from "@mantine/notifications";
import { CircleCheck, X } from "tabler-icons-react";

// Note that when starting this notification, you always have to send success or failure afterwards, otherwise it will not be removed.

export const notifyStart = ({
  id,
  title,
  message = "Give this time, Google likes to take it slow.",
}: {
  id: string;
  title: string;
  message?: string;
}) => {
  showNotification({
    id: id,
    disallowClose: true,
    autoClose: false,
    title: title,
    message: message,
    color: "blue",
    loading: true,
  });
};

export const notifySuccess = ({
  id,
  title,
  message,
}: {
  id: string;
  title: string;
  message: string;
}) => {
  updateNotification({
    id: id,
    disallowClose: false,
    autoClose: 3000,
    title: title,
    message: message,
    color: "teal",
    loading: false,
    icon: <CircleCheck />,
  });
};

export const notifyFailure = ({
  id,
  title,
  message,
}: {
  id: string;
  title: string;
  message: string;
}) => {
  updateNotification({
    id: id,
    disallowClose: false,
    autoClose: 3000,
    title: title,
    message: message,
    color: "red",
    loading: false,
    icon: <X />,
  });
};

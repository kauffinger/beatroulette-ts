import React from "react";
import {
  Button,
  Text,
  ButtonVariant,
  ColorInputStylesParams,
  ColorScheme,
  ColProps,
  MantineColor,
} from "@mantine/core";
import clsx from "clsx";
import { useModals } from "@mantine/modals";
import type { Icon } from "../../lib/types";

interface Props {
  onClick?: () => void;
  className?: string;
  color?: MantineColor;
  children?: React.ReactNode;
  loading?: boolean;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isDangerous?: boolean;
}

function AppButton({
  onClick,
  className,
  color,
  children,
  loading = false,
  variant = "subtle",
  type = "button",
  disabled = false,
  isDangerous = false,
}: Props) {
  const modals = useModals();
  const wrappedOnClick = () => {
    if (!isDangerous) {
      return onClick;
    }
    return () =>
      modals.openConfirmModal({
        title: "Please confirm your action",
        children: (
          <Text size="sm">
            This action is so important that you are required to confirm it with
            a modal. Please click one of these buttons to proceed.
          </Text>
        ),
        labels: { confirm: "Confirm", cancel: "Cancel" },
        onCancel: () => {},
        onConfirm: () => {
          if (!onClick) {
            console.error(
              "onClick is not defined. When isDangerous is true, onClick must be defined."
            );
          } else {
            onClick();
          }
        },
      });
  };
  return (
    <Button
      onClick={onClick}
      className={clsx("", className)}
      variant={variant}
      loading={loading}
      type={type}
      disabled={disabled}
    >
      <span className="inline-flex space-x-2">{children}</span>
    </Button>
  );
}

export default AppButton;

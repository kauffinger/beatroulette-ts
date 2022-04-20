import React from "react";
import {
  Button,
  ButtonVariant,
  ColorInputStylesParams,
  ColorScheme,
  ColProps,
  MantineColor,
} from "@mantine/core";
import clsx from "clsx";

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
}: Props) {
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

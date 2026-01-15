import clsx from "clsx";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "dark"
  | "link"
  | "icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",

  outline:
    "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300",

  dark: "bg-gray-900 text-white hover:bg-black focus:ring-gray-600 border border-gray-800",

  link: "bg-transparent text-blue-600 hover:text-blue-700 underline underline-offset-4 p-0 h-auto",

  icon: "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300 p-2 rounded-full",
};

const sizeStyles = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  isLoading = false,
  className,
  children,
  ...props
}) => {
  const isIconOnly = variant === "icon" && !children;

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        !isIconOnly && variant !== "link" && sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}

      {/* Left Icon */}
      {!isLoading && leftIcon && <span className="text-lg">{leftIcon}</span>}

      {/* Text */}
      {children && <span>{children}</span>}

      {/* Right Icon */}
      {!isLoading && rightIcon && <span className="text-lg">{rightIcon}</span>}
    </button>
  );
};

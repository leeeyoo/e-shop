"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        hover:opacity-80
        transition
        w-full
        border-black
        flex items-center
        justify-center
        gap-2
        ${outline ? "bg-white" : "bg-black"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-base font-medium" : "text-lg font-semibold"}
        ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-[3px]"}
        ${custom ? custom : ""}
      `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
}

export default Button;
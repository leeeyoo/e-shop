"use client"

import { FieldValues, UseFormRegister } from "react-hook-form"

interface CustomCheckBoxProps {
  id: string
  label: string
  disabled?: boolean
  register: UseFormRegister<FieldValues>
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  id,
  label,
  disabled,
  register,
}) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        placeholder=""
        className="peer cursor-pointer relative appearance-none shrink-0 w-5 h-5 border-2 border-neutral-300 rounded bg-white checked:bg-sky-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
      />
      <svg
        className="absolute w-5 h-5 pointer-events-none hidden peer-checked:block stroke-white outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="butt"
        strokeLinejoin="inherit"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label htmlFor={id} className="font-medium cursor-pointer">{label}</label>
    </div>
  );
}

export default CustomCheckBox;
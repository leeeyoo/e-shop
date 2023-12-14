"use client"

import { ImageType } from "@/app/admin/add-products/AddProductForm"
import React, { useCallback, useEffect, useState } from "react"
import SelectImage from "./SelectImage"
import Button from "../Button"

interface SelectColorProps {
  item: ImageType
  addImageToState: (value: ImageType) => void
  removeImageFromState: (value: ImageType) => void
  isProductCreated: boolean
}

const SelectColor: React.FC<SelectColorProps> = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated
}) => {
  const [isSelected, setIsSelected] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false)
      setFile(null)
    }
  }, [isProductCreated])

  const handleFileChange = useCallback((value: File) => {
    setFile(value)
    addImageToState({ ...item, image: value })
  }, [addImageToState, item])

  const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked)
    if (!e.target.checked) {
      setFile(null)
      removeImageFromState(item)
    }
  }, [item, removeImageFromState])

  return (
    <div className="grid grid-cols-1 overflow-y-auto border-b-[1.2px] border-neutral-200 items-center p-2">
      <div className="flex flex-row gap-2 items-center h-[60px]">
        <input id={item.color} type="checkbox" checked={isSelected} onChange={handleCheck} className="peer cursor-pointer relative appearance-none shrink-0 w-5 h-5 border-2 border-neutral-300 rounded bg-white checked:bg-sky-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400" />
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
        <label htmlFor={item.color} className="font-medium cursor-pointer">{item.color}</label>
      </div>
      <>
        {isSelected && !file && (
          <div className="col-span-2 text-center">
            <SelectImage item={item} handleFileChange={handleFileChange} />
          </div>
        )}
        {file && (
          <div className="flex flex-row gap-2 text-sm col-span-2 items-center justify-between">
            <p>{file?.name}</p>
            <div className="w-[76px]">
              <Button
                label="Cancel"
                small
                outline
                onClick={() => { setFile(null); removeImageFromState(item); }}
              />
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default SelectColor;
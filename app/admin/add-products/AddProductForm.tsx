"use client"

import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Input from "@/app/components/inputs/Input";
import SelectColor from "@/app/components/inputs/SelectColor";
import TextArea from "@/app/components/inputs/TextArea";
import { categories } from "@/utils/Categories";
import { colors } from "@/utils/Colors";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
}

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
}

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
    }
  })

  const category = watch("category")
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  return (
    <>
      <Heading title="Add a Product" center />
      <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
      <Input id="price" label="Price" type="number" disabled={isLoading} register={register} errors={errors} required />
      <Input id="brand" label="Brand" disabled={isLoading} register={register} errors={errors} required />
      <TextArea id="description" label="Description" disabled={isLoading} register={register} errors={errors} required />
      <CustomCheckBox id="inStock" label="This product is in stock" register={register} />
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
          {categories.map((item) => {
            if (item.label === "All") { return null }
            return (
              <div key={item.label} className="col-span-1">
                <CategoryInput
                  label={item.label}
                  icon={item.icon}
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full flex flex-col  gap-4">
        <div>
          <div className="font-bold">Select the available product colors and upload their images.</div>
          <div className="text-sm">You must upload an image for each of the color selected otherwise your color selection will be ignored.</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return (
              <SelectColor key={index} item={item} addImageToState={() => { }} removeImageFromState={() => { }} isProductCreated={false} />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default AddProductForm;
"use client"

import Heading from "@/app/components/Heading";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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

  return (
    <>
      <Heading title="Add a Product" center />
      <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
      <Input id="price" label="Price" type="number" disabled={isLoading} register={register} errors={errors} required />
      <Input id="brand" label="Brand" disabled={isLoading} register={register} errors={errors} required />
      <TextArea id="description" label="Description" disabled={isLoading} register={register} errors={errors} required />
      <CustomCheckBox id="inStock" label="This product is in stock" register={register} />
    </>
  );
}

export default AddProductForm;
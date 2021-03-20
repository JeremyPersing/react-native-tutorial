import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./forms/ErrorMessage";
import ImageInputList from "./ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    // name will be defined in initialValues obj but not values obj
    if (imageUris === undefined) {
      setFieldValue(name, [uri]);
    } else {
      setFieldValue(name, [...imageUris, uri]);
    }
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;

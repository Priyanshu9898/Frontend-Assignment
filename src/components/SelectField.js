import React, { useContext, useEffect } from "react";
import { Select, FormControl, FormLabel } from "@chakra-ui/react";
import { FormDataContext } from "../Pages/Home/DynamicForm.js";
import { useFormContext } from "../FormContext.js";

const SelectField = ({ schema }) => {
  const { formData, setFormData, updateFormData, handleResetData } = useFormContext();
  const [selectedValue, setSelectedValue] = React.useState(
    schema.validate.defaultValue
  );
  useEffect(() => {
    updateFormData(schema.jsonKey, schema.validate.defaultValue);
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    updateFormData(schema.jsonKey, event.target.value);
  };

  return (
    <FormControl isRequired={schema.validate.required} marginTop={"5"}>
      {/* <HStack gap={"12px"}> */}
      <FormLabel htmlFor={schema.jsonKey}>{schema.label}</FormLabel>

      <Select
        id={schema.jsonKey}
        value={selectedValue}
        onChange={handleChange}
        isDisabled={schema.validate.immutable}
        placeholder={schema.placeholder}
      >
        {schema.validate.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {/* </HStack> */}
    </FormControl>
  );
};

export default SelectField;

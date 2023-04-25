import React, { useState } from "react";
import InputField from "../../components/InputField";
import FormComponent from "../../components/FormComponent";
import SwitchField from "../../components/SwitchField";
import SelectField from "../../components/SelectField";
import RadioField from "../../components/RadioField";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";

// Create a context for the form data and update function
export const FormDataContext = React.createContext();

const DynamicForm = ({ formSchema }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (jsonKey, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [jsonKey]: value,
    }));
  };
  

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderJsonElements = (schema) => {
    return (
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>JSON to be sent to the backend</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
            {Object.entries(schema).map(([key, value]) => (
                <Text key={key} marginTop={2}>
                  <strong>{key}: </strong>
                  {JSON.stringify(value, null, 2)}
                </Text>
              ))}
              
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  

  return (
    <>
      <FormDataContext.Provider value={updateFormData}>
        <form>
          {formSchema.map((schema, index) => {
            return (
              <React.Fragment key={index}>
                {schema.uiType === "Input" && (
                  <InputField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Switch" && (
                  <SwitchField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Select" && (
                  <SelectField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Radio" && (
                  <RadioField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Group" && (
                  <FormComponent
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}
              </React.Fragment>
            );
          })}
          {formSchema.length > 0 && (
            <Box style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <Button Button colorScheme='blue' marginTop={"10px"} onClick={handleOpenModal} >Submit</Button>
              {renderJsonElements(formData)}
            </Box>
          )}
        </form>
      </FormDataContext.Provider>
    </>
  );
};

export default DynamicForm;

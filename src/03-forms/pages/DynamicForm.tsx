/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type == "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `El valor mínimo es de ${(rule as any).value || 2} caracteres`
      );
    }

    if (rule.type == "email") {
      // console.log("hi");
      schema = schema.email("El correo no tiene un formato válido");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

const isInput = (type: any): string => {
  if (type === "input" || type === "email" || type === "password") return type;
  return "";
};

function DynamicForm() {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              switch (type) {
                case isInput(type):
                  return (
                    <MyTextInput
                      type={type as any}
                      key={name}
                      label={label}
                      name={name}
                      placeholder={placeholder}
                    />
                  );
                case "select":
                  return (
                    <MySelect
                      key={name}
                      label={label}
                      name={name}
                      placeholder={placeholder}
                    >
                      {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </MySelect>
                  );
                default:
                  throw new Error(`Unknown type: ${type}`);
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DynamicForm;

import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

function MyChecbox({ label, ...props }: Props) {
  // const [field, meta] = useField({ ...props, type: "checkbox" });
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
}

export default MyChecbox;

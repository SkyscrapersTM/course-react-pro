import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

function FormikBasicPage() {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "First name is required";
    } else if (firstName.length > 15) {
      errors.firstName = "First name must be at most 15 characters long";
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
    } else if (lastName.length > 10) {
      errors.lastName = "Last name must be at least 15 characters long";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  return (
    <div>
      <h1>Formik Basic tutorial</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <span>First name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <span>Last name is required</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <span>Email is required</span>
        <span>Check for an valid email format</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormikBasicPage;

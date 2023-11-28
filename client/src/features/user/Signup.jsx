import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

import Button from "../../ui/Button";
import Back from "../../ui/Back";

// const isValidEmail = (str) => /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/.test(str);

function Signup() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <div className="flex flex-col  items-center w-screen h-screen">
        <div className="mt-6 w-2/3 mx-auto">
          <Back />
        </div>
        <div className="mt-20 border rounded-md px-6 py-4 border-gray-500 w-[330px]">
          <div className="flex justify-center items-center py-3">
            <FontAwesomeIcon className="text-6xl" icon={faCubesStacked} />
            <span className="text-2xl ms-4 font-bold">Jobshop</span>
          </div>
          <Form method="post">
            <div className="mb-3 flex flex-col ">
              <label className="">First Name</label>
              <input type="text" className="input" name="firstName" required />
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="">Last Name</label>
              <input type="text" className="input" name="lastName" required />
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="">Email</label>
              <input type="text" className="input" name="email" required />
              {formErrors?.email && (
                <p className="mt-2 rounded bg-red-100 p-2 text-xs text-red-700">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                required
              />
            </div>
            <div className="mb-3 flex flex-col ">
              <label className="">Confirm Password</label>
              <input
                type="password"
                className="input"
                name="passwordConfirm"
                required
              />
            </div>

            <Button type="primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
          <span>
            Already a member? <Button to="/login">Login</Button>
          </span>
        </div>
      </div>
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    const output = await res.json();
    if (output.error) {
      alert(output.message);
      return null;
    }
    toast.success("Registration successful");
    return redirect("/login");
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }

  // const errors = {};
  // if (!isValidEmail(data.email))
  //   errors.email =
  //     "Kindly fill in a valid email";

  // if (Object.keys(errors).length > 0) return errors;
}

export default Signup;

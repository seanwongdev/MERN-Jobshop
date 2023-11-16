import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Button from "../../ui/Button";
import { toast } from "react-toastify";

// const isValidEmail = (str) => /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/.test(str);

function Login() {
  const formErrors = useActionData()
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className=" border rounded-md px-6 py-4 border-gray-500 w-[330px]">
        <div className="flex justify-center items-center py-3">
          <FontAwesomeIcon className="text-6xl" icon={faCubesStacked} />
          <span className="text-2xl ms-4 font-bold">Jobshop</span>
        </div>

        <Form method="post">

          <div className="mb-3 flex flex-col ">
            <label className="">Email</label>
            <input
              type="text"
              className="input"
              name="email"
              required
              />
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

          <Button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
        </Form>
      </div>
    </div>
  )
}

export async function action({ request }) {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("/api/v1/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(res)
    const output = await res.json();
    if (output.error) {
      alert(output.message);
      return null;
    }
    toast.success('Logged In Successfully')
    return redirect('/dashboard')
  } catch (err) {
    console.log(err.message)
    return err;
  }

  // const errors = {};
  // if (!isValidEmail(data.email))
  //   errors.email =
  //     "Kindly fill in a valid email";

  // if (Object.keys(errors).length > 0) return errors;
}

export default Login

import { Form } from "react-router-dom"
import Button from "../../ui/Button";

const isValidEmail = (str) => /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/.test(str);

function Signup() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className=" border rounded-md px-6 py-4 border-gray-500 w-[300px]">



        <Form method="post">
          <div className="mb-5 flex flex-col ">
            <label className="">First Name</label>
            <input
              type="text"
              className="input"
              name="firstName"
              required
              />
          </div>

          <div className="mb-5 flex flex-col ">
            <label className="">Last Name</label>
            <input
              type="text"
              className="input"
              name="lastName"
              required
              />
          </div>

          <div className="mb-5 flex flex-col ">
            <label className="">Email</label>
            <input
              type="text"
              className="input"
              name="email"
              required
              />
          </div>

          <div className="mb-5 flex flex-col ">
            <label className="">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              required
              />
          </div>

          <div className="mb-5 flex flex-col ">
            <label className="">Confirm Password</label>
            <input
              type="password"
              className="input"
              name="confirmPassword"
              required
              />
          </div>
          <Button >Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Signup

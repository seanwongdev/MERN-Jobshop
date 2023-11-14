import { Form } from "react-router-dom"

function Signup() {
  return (
    <Form method="post">
      <label htmlFor="firstName">First Name</label>
      <input type="text" />
      <input type="submit" />
    </Form>
  )
}

export default Signup

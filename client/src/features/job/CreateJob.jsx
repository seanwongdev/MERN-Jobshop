import { useContext } from "react"
import { Form, Outlet } from "react-router-dom"
import Button from "../../ui/Button"

function CreateJob() {
  const user = useContext(Outlet)
  return (

    <div>
      <Form>
        <label className="">Company</label>
        <input
          type="text"
          className="input"
          name="company"
          required
          />

        <label className="">Position</label>
        <input
          type="text"
          className="input"
          name="position"
          required
          />

        <label className="">Type</label>
        <input
          type="text"
          className="input"
          name="type"
          required
          />

        <label className="">Status</label>
        <input
          type="text"
          className="input"
          name="status"
          required
          />
        <Button>Submit</Button>
      </Form>

    </div>
  )
}

export default CreateJob

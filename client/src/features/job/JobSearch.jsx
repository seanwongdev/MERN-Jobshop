import { Form } from "react-router-dom"
import Button from "../../ui/Button"

function JobSearch() {
  return (
    <Form>
      <label htmlFor="company">Company</label>
      <input type="text" />
      <Button></Button>
    </Form>
  )
}

export default JobSearch

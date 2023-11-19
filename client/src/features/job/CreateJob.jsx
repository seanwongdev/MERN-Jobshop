import { useContext } from "react";
import { Form, Outlet } from "react-router-dom";
import Button from "../../ui/Button";

function CreateJob() {
  const user = useContext(Outlet);
  return (
    <div>
      <Form>
        <label className="">Company</label>
        <input type="text" className="input" name="company" required />

        <label className="">Position</label>
        <input type="text" className="input" name="position" required />

        <label className="">Type</label>
        <select className="input" name="type" id="type">
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>

        <label className="">Status</label>
        <select className="input" name="status" id="status">
          <option value="application">Application</option>
          <option value="interview">Interview</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default CreateJob;

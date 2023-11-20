import { Form } from "react-router-dom";
import Button from "../../ui/Button";

function JobSearch() {
  return (
    <Form>
      <label htmlFor="search">Search</label>
      <input
        className="border-2 rounded"
        id="search"
        type="text"
        name="search"
        defaultValue="a"
      />
      <label htmlFor="type">Job Type</label>
      <select name="type" id="type">
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
      <label htmlFor="status">Job Status</label>
      <select name="status" id="status">
        <option value="Application">Application</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <Button type="primary"></Button>
    </Form>
  );
}

export default JobSearch;

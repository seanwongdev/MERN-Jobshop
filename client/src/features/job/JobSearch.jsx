import { Form } from "react-router-dom";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { jobStatusOptions } from "../../utils/constants";

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
        <option value="All">All</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
      <label htmlFor="status">Job Status</label>
      <select name="status" id="status">
        <option value="All">All</option>
        {jobStatusOptions.map((option, index) => {
          return (
            <option key={index} value={option.option}>
              {option.option}
            </option>
          );
        })}
      </select>

      <Button type="primary">Submit</Button>
      <LinkButton to={"/dashboard/jobs"}>Reset search Parameters</LinkButton>
    </Form>
  );
}

export default JobSearch;

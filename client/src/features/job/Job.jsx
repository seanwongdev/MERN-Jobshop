import { Form } from "react-router-dom";
import Button from "../../ui/Button";

function Job({ company, position, status, type, createdAt, id }) {
  return (
    <div className="divide-y w-full border-solid border-2 border-gray-200 rounded ">
      <div className="flex flex-col p-5">
        <p>{position}</p>
        <p>{company}</p>
      </div>
      <div className="grid grid-cols-2 p-5">
        <p>Location</p>
        <p>{createdAt}</p>
        <p>{type}</p>
        <p>{status}</p>
        <div className="flex items-center justify-left">
          <Button type="secondary" to={`/dashboard/jobs/${id}`}>
            Edit
          </Button>
          <Form method="post" action={`/dashboard/delete-job/${id}`}>
            <Button type="primary">Delete</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Job;

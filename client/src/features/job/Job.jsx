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
        <div>
          <Button type="secondary" to={`/dashboard/jobs/${id}`}>
            Edit
          </Button>
          <Button type="primary">Delete</Button>
        </div>
      </div>
    </div>
  );
}

export default Job;

import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { jobStatusOptions, jobType } from "../../utils/constants";

export const loader = async ({ params }) => {
  try {
    const res = await fetch(`/api/v1/jobs/${params.id}`);
    const { data } = await res.json();

    return data;
  } catch (err) {
    return redirect("/dashboard/jobs");
  }
};

function EditJob() {
  const { _id, company, position, type, status } = useLoaderData().job;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="md:px-8">
      <Form method="post">
        <label className="">Company</label>
        <input
          type="text"
          className="input"
          name="company"
          required
          defaultValue={company}
        />

        <label className="">Position</label>
        <input
          type="text"
          className="input"
          name="position"
          required
          defaultValue={position}
        />

        <label className="">Type</label>
        <select className="input" name="type" id="type" defaultValue={type}>
          <option value="">Select Type</option>
          {jobType.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>

        <label className="">Status</label>
        <select
          className="input"
          name="status"
          id="status"
          defaultValue={status}
        >
          <option value="">Select Status</option>
          {jobStatusOptions.map((option, index) => {
            return (
              <option key={index} value={option.option}>
                {option.option}
              </option>
            );
          })}
        </select>
        <Button type="primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const res = await fetch(`/api/v1/jobs/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    const output = await res.json();
    console.log(output);
    if (output.error) throw new Error(output.error.message);
    toast.success("Edited Job Successfully");
    return redirect("/dashboard/jobs");
  } catch (err) {
    toast.error(err.message);
    return null;
  }
}

export default EditJob;

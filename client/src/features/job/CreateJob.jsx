import {
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import Button from "../../ui/Button";
import { toast } from "react-toastify";

function CreateJob() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <Form method="post">
        <label className="">Company</label>
        <input type="text" className="input" name="company" required />

        <label className="">Position</label>
        <input type="text" className="input" name="position" required />

        <label className="">Type</label>
        <select className="input" name="type" id="type">
          <option value="">Select Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>

        <label className="">Status</label>
        <select className="input" name="status" id="status">
          <option value="">Select Status</option>
          <option value="Application">Application</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <Button type="primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/v1/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const output = await res.json();

    if (output.error) throw new Error(output.error.message);
    toast.success("Created Job Successfully");
    return redirect("/dashboard/jobs");
  } catch (err) {
    toast.error(err.message);
    return null;
  }
}

export default CreateJob;

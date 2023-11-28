import { Form, redirect, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDashboardContext } from "../../ui/DashboardLayout";
import { jobPortals, jobStatusOptions } from "../../utils/constants";

function CreateJob() {
  const { setActive } = useDashboardContext();
  useEffect(() => {
    setActive(0);
  }, [setActive]);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="py-24 md:py-6 mx-6 md:mx-10 md:px-10 md:border md:rounded-md md:border-primary md:border-opacity-30 md:border-l-0">
      <span className="text-dark font-semibold text-2xl">Add Job</span>
      <Form method="post">
        <div className="my-2">
          <label htmlFor="company" className="">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="input"
            name="company"
            placeholder="Gogglo"
            required
          />
        </div>

        <div className="my-2">
          <label htmlFor="position" className="">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="input"
            name="position"
            placeholder="Full Stack Developer"
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="salary" className="">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            className="input"
            name="salary"
            placeholder="$8,000"
          />
        </div>

        <div className="my-2">
          <label className="" htmlFor="type">
            Type
          </label>
          <select className="input" name="type" id="type">
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="my-2">
          <label className="" htmlFor="status">
            Status
          </label>
          <select className="input" name="status" id="status">
            <option value="">Select Status</option>
            {jobStatusOptions.map((option, index) => {
              return (
                <option key={index} value={option.option}>
                  {option.option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-2">
          <label htmlFor="jobPortal" className="">
            Job Portal
          </label>
          <select className="input" name="jobPortal" id="jobPortal">
            <option value="">Select Portal</option>
            {jobPortals.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        <div className="my-2">
          <label htmlFor="location" className="">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="input"
            name="location"
            placeholder="Changi"
          />
        </div>

        <div className="mb-2 mt-4 flex justify-end">
          <Button type="secondary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
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

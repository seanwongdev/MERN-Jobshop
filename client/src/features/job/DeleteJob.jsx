import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ params }) => {
  try {
    const res = await fetch(`/api/v1/jobs/${params.id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("deletion failed");

    toast.success("deletion successful");
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
  return redirect("/dashboard/jobs");
};

function DeleteJob() {}

export default DeleteJob;

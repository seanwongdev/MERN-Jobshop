import { useEffect } from "react";
import { useDashboardContext } from "../../ui/DashboardLayout";

function Profile() {
  const { setActive } = useDashboardContext();
  useEffect(() => {
    setActive(3);
  }, [setActive]);
  return (
    <div className="py-6 md:mx-10 md:px-10 border rounded-md border-primary border-opacity-30 border-l-0">
      profile page
    </div>
  );
}

export default Profile;

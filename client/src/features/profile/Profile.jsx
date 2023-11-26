import { useEffect } from "react";
import { useDashboardContext } from "../../ui/DashboardLayout";

function Profile() {
  const { setActive } = useDashboardContext();
  useEffect(() => {
    setActive(3);
  }, [setActive]);
  return <div className="md:px-8">profile page</div>;
}

export default Profile;

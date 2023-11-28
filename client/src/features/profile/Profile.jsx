import { useEffect } from "react";
import { useDashboardContext } from "../../ui/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const { setActive } = useDashboardContext();
  useEffect(() => {
    setActive(3);
  }, [setActive]);
  return (
    <div className="py-24 md:py-6 mx-6 md:mx-10 md:px-10 md:border md:rounded-md md:border-primary md:border-opacity-30 md:border-l-0 flex flex-col justify-center items-center">
      <span className="font-semibold text-3xl text-primary">
        Page is under construction. Look forward to it!
      </span>
      <FontAwesomeIcon
        className="text-5xl mt-5 text-dark"
        icon={faPersonDigging}
      />
    </div>
  );
}

export default Profile;

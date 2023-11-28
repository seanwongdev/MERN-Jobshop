import { useRouteError } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className=" flex justify-center items-center h-screen w-screen">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <FontAwesomeIcon
            className="text-9xl text-primary"
            icon={faFaceSadTear}
          />
          <p className="font-bold text-4xl text-dark">Page Not Found</p>
          <p className="text-secondary font-semibold">
            We can't seem to find the page you are looking for
          </p>
          <Button to="/">Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-center h-screen w-screen text-3xl font-bold">
      Something went wrong
    </div>
  );
}

export default Error;

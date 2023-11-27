import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

import LandingImage from "./LandingImage";

function Home() {
  return (
    <div className="block py-6 px-10 w-screen ">
      <div className="flex mx-auto items-center gap-6 md:w-5/6  ">
        <span className="text-3xl font-bold text-dark">Jobshop</span>
        <FontAwesomeIcon
          className=" text-6xl text-dark"
          icon={faCubesStacked}
        />
      </div>
      <div className="flex items-center justify-center mt-20 md:w-[650px] mx-auto relative">
        <div className="flex flex-col justify-center items-center z-10 ">
          <h1 className="text-5xl image">
            Job Applications{" "}
            <span className="font-bold md:text-bright">Tracker App</span>
          </h1>
          <p className="my-4 ">
            Getting a job is <span className="font-bold text-">hard</span>, and
            the number of job applica
            <span className="md:text-bright">
              tions you send out can easily pile up. To
            </span>{" "}
            take some weight off your shoulders, we are here to{" "}
            <span className="md:text-bright">
              {" "}
              help you keep track of your progress.
            </span>{" "}
            Track your applications for easy comparison, and ke
            <span className="md:text-bright">
              ep yourself updated on where you are in
            </span>{" "}
            the job hunt phase.
            <br />
            <br />
            Remember, today's rejection is just another building{" "}
            <span className="md:text-bright">block towards your success!</span>
          </p>
          <div className="flex items-center justify-start gap-5 w-full ">
            <Button type="primary" to={"/signup"}>
              Sign Up
            </Button>
            <Button type="primary" to={"/login"}>
              Login
            </Button>
          </div>
        </div>
        <div className="">
          <LandingImage />
        </div>
      </div>
    </div>
  );
}

export default Home;

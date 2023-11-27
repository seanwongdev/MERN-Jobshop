import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import LinkButton from "./LinkButton";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="py-6 px-10 md:px-10 flex flex-col items-center w-screen">
      <div className="flex flex-grow w-full items-center gap-6 ">
        <span className="text-3xl font-bold text-dark">Jobshop</span>
        <FontAwesomeIcon
          className=" text-6xl text-dark"
          icon={faCubesStacked}
        />
      </div>
      <div className="flex items-center justify-center mt-20">
        <div className="flex flex-col justify-center items-center w-1/3 flex-wrap">
          <h1 className="text-5xl">
            Job Applications <span className="font-bold">Tracker App</span>
          </h1>
          <p className="my-4 ">
            Getting a job is hard, and the number of job applications you send
            out can easily pile up. To take some weight off your shoulders, we
            are here to help you keep track of your progress. Track your
            applications for easy comparison, and keep yourself updated on where
            you are in the job hunt phase.
            <br />
            <br />
            Remember, today's failure is another building block towards your
            success!
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
      </div>
    </div>
  );
}

export default Home;

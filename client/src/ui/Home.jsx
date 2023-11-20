import Button from "./Button";
import LinkButton from "./LinkButton";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <LinkButton to={"/login"}>Login</LinkButton>
    </div>
  );
}

export default Home;

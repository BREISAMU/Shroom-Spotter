import AdvanceFromHome from "../components/AdvanceFromHomeButton";
import githubLogo from "../assets/githubResized.png"

export default function Home() {
  const display_home = () => {
    let ret = (
      <div className="home-container organize-center">
        <h1>Welcome to Shroom Spotter!</h1>
        <h2 className="mt-5 organize-center">On the following page, select the traits which best describe the mushroom you are attempting to identify. These selections will be compared across our database to determine the best predictive fit.</h2>
        <h5 className="mt-3 organize-center">If you are unfamiliar with the terms on the following page, consult the GitHub repository linked below the advance button. A few free, simple guides are linked in the README that may assist you.</h5>
        <AdvanceFromHome />
        <a href="https://github.com/BREISAMU/Shroom-Spotter">
          <img src={githubLogo}></img>
        </a>
      </div>
    );
    return ret;
  };

  return (
    <div className="bg-main organize-center">
      <div className="">{display_home()}</div>
      <div className="filler" />
    </div>
  );
}

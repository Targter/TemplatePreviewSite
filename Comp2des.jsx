import Comp3des from "./Comp3des";
import { Link, useNavigate } from "react-router-dom";
const Comp2des = () => {
  const Navigate = useNavigate();

  // exploreUrl;
  const MovetoexploreUrl = () => {
    Navigate("/discoverNew");

    setTimeout(() => {
      // Scroll to the desired section using the hash fragment
      window.location.href = "/discoverNew#exploreUrl";
    }, 100);
  };
  return (
    <>
      <div className="comp2des">
        <div className="comp2head">
          <img src="logo.png" alt="" />
        </div>
        <div className="explorebtn">
          {" "}
          <Link
            // to={"/discoverNew#exploreUrl"}

            style={{ color: "white", textDecoration: "none" }}
          >
            <img src="explorebtn.png" onClick={MovetoexploreUrl}></img>
          </Link>
        </div>
      </div>
      <Comp3des />
    </>
  );
};

export default Comp2des;

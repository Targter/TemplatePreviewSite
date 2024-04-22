import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  const [ShowBox, SetDropBox] = useState(false);
  const ShowDropBox = () => {
    SetDropBox(!ShowBox);
  };
  const Navigate = useNavigate();

  const handledropdownclick = () => {
    Navigate("/CategorySection");
  };

  const navigateToHomePageWithSection = () => {
    // Navigate to the root path "/"
    Navigate("/");

    // Wait for a short delay (optional) to ensure that the navigation to the root path is complete
    setTimeout(() => {
      // Scroll to the desired section using the hash fragment
      window.location.href = "/#communitysection";
    }, 80);
  };
  return (
    <nav>
      <div
        className="navcontainer"
        style={{
          width: "100%",
          height: "60px",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1500px",
        }}
      >
        <div
          className="logo"
          style={{
            fontSize: "1.5rem",
            color: "white",
            marginLeft: "20px",
            textDecoration: "none",
          }}
        >
          <Link
            to={"/"}
            className="ToHome"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            Abtemplates
          </Link>
        </div>

        {/* this is contianer */}
        <Itemcontainer>
          <div
            className="item1"
            style={{ color: "white", position: "relative" }}
          >
            <Link
              // href="#communitysection"
              to="/#communitysection"
              style={{ textDecoration: "none", color: "white" }}
              onClick={navigateToHomePageWithSection}
            >
              Categories
            </Link>
          </div>
          <div className="item1">
            <Link
              to={"/discoverNew"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Design templates
            </Link>
          </div>
          <div className="item1">Design tools</div>
          <div className="item1">Visual assests </div>
        </Itemcontainer>
        {/* end of this container */}
        <div className="publishcontainer" style={{ marginRight: "20px" }}>
          <button
            style={{
              width: "100px",
              height: "35px",
              borderRadius: "10px",
              background: "blue",
              border: "none",
              color: "white",
              outline: "none",
            }}
          >
            <Link
              to={"/PublishItem"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Publish
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Itemcontainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
  // display: none;
  color: white;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

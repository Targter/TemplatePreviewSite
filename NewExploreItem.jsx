import styled from "styled-components";
import { FaFigma } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";


const NewExploreitem = () => {
  const location = useLocation();
  const { data } = location.state || { data: {} };
  const { itemName, itemThumbnailURl, figmakey } = data;
  //   console.log(itemThumbnailURl, "this is the imageurl");
  // console.log(data, "fimgalakjfad;");
  //   const navigatetoFimga = useNavigate();
  //
  //   const NavigatetoFigma = () => {
  //     navigatetoFimga(figmaUrl);
  //   };
  const newUrl = `https://www.figma.com/file/${figmakey}`;
  console.log(newUrl);
  return (
    <>
      <div
        className="newexploreitem"
        style={{ overflow: "hidden", background: "black" }}
      >
        {/*  */}
        <RemainContainer>
          <ImageBox>
            <ShowimageName className="showimageName">
              <div
                className="figmaLogo"
                style={{
                  //   background: "blue",
                  width: "300px",
                  height: "30px",
                  marginBottom: "8px",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaFigma style={{ fontSize: "1.1rem", marginRight: "4px" }} />
                <span style={{ fontSize: "1.1rem", fontWeight: "bolder" }}>
                  Figma
                </span>
              </div>
              <div
                className="imagedetails"
                style={{
                  width: "300px",
                  height: "auto",
                  marginBottom: "20px",
                  fontSize: "1.9rem",
                  lineHeight: "35px",
                  fontWeight: "bold",
                }}
              >
                {itemName}
              </div>
              <div
                className="directbtn"
                style={{
                  width: "300px",
                  height: "40px",
                  marginBottom: "20px",
                  fontSize: "1.2rem",
                  //   background: "blue",
                }}
              >
                <a href={newUrl} target="_blank">
                  <button
                    style={{
                      width: "150px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "blue",
                      color: "white",
                      outline: "none",
                      border: "none",
                    }}
                    //   onClick={NavigatetoFigma}
                  >
                    Open in figma
                  </button>
                </a>
              </div>
            </ShowimageName>
            <ShowImageDetails className="showImageDetails">
              <img src={itemThumbnailURl} alt="" className="thumimgsize" />
            </ShowImageDetails>
          </ImageBox>
        </RemainContainer>
        <Footer></Footer>
      </div>
    </>
  );
};

export default NewExploreitem;

const RemainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
`;

const ImageBox = styled.div`
  height: calc(100vh - 56px);
  width: 100%;
  background: black;
  color: white;
  display: flex;
  justifycontent: center;
  alignitems: center;
  padding: 25px;
  padding-top: 40px;
`;

// const previewContainer = styled.div`
//   height: calc(100vh - 56px);
//   width: 100%;
// `;
const ShowimageName = styled.div`
  width: 30%;
  height: 80vh;
  //   background: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ShowImageDetails = styled.div`
  width: 70%;
  height: 80vh;
`;

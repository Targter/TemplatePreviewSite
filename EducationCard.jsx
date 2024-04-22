import { useContext } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Context } from "../Store/Context";
import { useLocation, useNavigate } from "react-router";
const EducationCard = () => {
  const {
    AllCards,
    Education,
    Bussiness,
    Marketing,
    HandleonChange,
    ShownCard,
    SetCardtoShow,
    SetDropDownValue,
  } = useContext(Context);

  // const Location = useLocation();
  // const { data } = Location.state || { data: {} };
  // console.log("this is location : ", data);
  // SetDropDownValue(data);

  // //
  const Navigation = useNavigate();
  const CardClick = (itemName, itemThumbnailURl, figmakey) => {
    Navigation("/previewItem", {
      state: { data: { itemName, itemThumbnailURl, figmakey } },
    });
  };
  return (
    <>
      <div className="cont2item3">
        {/* Render cards based on ShownCard */}
        {ShownCard.length === 0 ? (
          <>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mx-2" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status mx-2"> Loading...</span>
              </button>
            </div>
            <Footer />
          </>
        ) : (
          <>
            {ShownCard.map((item, index) => (
              <Card2
                key={index}
                onClick={() =>
                  CardClick(item.name, item.thumbnailUrl, item.figmakey)
                }
              >
                <img src={item.thumbnailUrl} className="figmatemplateimg" />
              </Card2>
            ))}
            <Footer />
          </>
        )}
        {/* {ShownCard.map((item, index) => (
              <Card2 key={index}>
                <img src={item} className="figmatemplateimg" />
              </Card2>
            ))} */}
      </div>
    </>
  );
};

export default EducationCard;

const Card2 = styled.div`
  width: 360px;
  height: 220px;
  background-color: grey;
  margin-bottom: 20px;
  position: relative;
`;

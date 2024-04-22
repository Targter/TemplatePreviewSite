import { useContext } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Context } from "../Store/Context";
import { useNavigate, useLocation } from "react-router";
const AllCardsss = () => {
  const { ShownCard, SetDropDownValue } = useContext(Context);

  //   fthis is for set the dropdown value:
  // const Location = useLocation();
  // const { data } = Location.state || { data: {} };
  // //   console.log("this is location : ", data);
  // SetDropDownValue(data);

  //
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
      </div>
    </>
  );
};

export default AllCardsss;

const Card2 = styled.div`
  width: 360px;
  height: 220px;
  background-color: grey;
  margin-bottom: 20px;
  position: relative;
`;

import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../Store/Context";
import { useNavigate } from "react-router";

// Define CSS styles as JavaScript objects
const card1Style = {
  width: "100%",
  height: "40px",
  fontSize: "25px",
  color: "white",
  fontWeight: "900",
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
  justifyContent: "space-between",
};

const NewCardcards = ({
  cardName,
  imageUrls,
  setShowMoreStates,
  toggleShowMore,
}) => {
  // console.log("iamgeUrls: ", imageUrls);

  const Navigate = useNavigate();
  const HandletoNavigationPath = (itemName, itemThumbnailURl, figmakey) => {
    // i pass this the preview item which take the page url name and fimgakey : by which i directly open it to the webPage
    // console.log(
    //   ":this is the main thing which i have to pass the preview: ",
    //   itemName
    // );
    Navigate("/previewItem", {
      state: { data: { itemName, itemThumbnailURl, figmakey } },
    });
  };
  // const { AllCards } = useContext(Context);
  // const ImageSrcContainer = AllCards.slice(0, 4).map(
  //   (card) => card.thumbnailUrl
  // );
  // console.log("this is imgsrccontianerdata", ImageSrcContainer);
  // console.log(
  //   "tghis is hte name as well as the figmakey",
  //   figmaKeyforNavigation
  // );
  // console.log("imageUrls:thumbnailUrl ", imageUrls);
  const [itemsToShow, setItemsToShow] = useState(4);

  const toggleItemsToShow = () => {
    setItemsToShow((prevItems) => (prevItems === 4 ? 8 : 4));
    toggleShowMore();
  };

  // for navigation to the previewItem:
  // const CardClick = (itemName, itemThumbnailURl, figmakey) => {
  //   Navigate("/previewItem", {
  //     state: { data: { itemName, itemThumbnailURl, figmakey } },
  //   });
  return (
    <>
      <NewCarditem2>
        <div className="card1" style={card1Style} id="exploreUrl">
          <div className="card1items1">{cardName}</div>
          <div
            className="card1items2"
            style={{ marginRight: "20px", fontSize: "18px" }}
            onClick={toggleItemsToShow}
          >
            {itemsToShow === 4 ? "Show more" : "Show less"}
          </div>
        </div>
        <div
          className="cards"
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: " space-evenly",
            alignItems: "space-evenly",
          }}
        >
          {imageUrls.slice(0, itemsToShow).map((imgsrc, index) => (
            <Caardcard key={index}>
              <img
                src={imgsrc.CardThumNailUrl}
                alt=""
                style={{ width: "100%", height: "100%" }}
                onClick={() => {
                  HandletoNavigationPath(
                    imgsrc.CardName,
                    imgsrc.CardThumNailUrl,
                    imgsrc.CardFigmaKey
                  );
                }}
              />
            </Caardcard>
          ))}
        </div>
      </NewCarditem2>
    </>
  );
};

export default NewCardcards;

const NewCarditem2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  padding: 20px;
  // gap: 20px;
`;

const Caardcard = styled.div`
  width: 320px;
  height: 220px;
  background-color: grey;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-top: 30px;
`;

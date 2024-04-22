import styled from "styled-components";
import NewCardcards from "./NewCardcards";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { Context } from "../Store/Context";
import { Link } from "react-router-dom";
//
const NewCard = () => {
  //
  const { AllCards } = useContext(Context);
  const NamesofCard = [
    "Laptop Mockups",
    "Instagram Templates",
    "Arrow designs",
    "Email design Inspiration",
    "Build a Landing Page",
  ];

  console.log("thisisAllcard:", AllCards);
  const [showMoreStates, setShowMoreStates] = useState(
    Array(NamesofCard.length).fill(false)
  );

  const toggleShowMore = (index) => {
    setShowMoreStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !prevStates[index];
      return newStates;
    });
  };
  // const { AllCards, Education, Bussiness, Marketing } = useContext(Context);
  // console.log("this is All card", AllCards);
  return (
    <>
      <MaincontainerCard>
        <NewCarditem1>
          <div className="Heading" style={{ fontSize: "3rem" }}>
            ThinkbeforeCode Community collections
          </div>
          <div
            className="NewCarditem1des"
            style={{
              marginTop: "25px",
              fontSize: "1.5rem",
              width: "50%",
              textAlign: "center",
              lineHeight: "35px",
            }}
          >
            Check out collections of some of our favorite design files, plugins,
            widgets, and creators from Figma Community.
          </div>
        </NewCarditem1>

        {NamesofCard.map((cardname, index) => (
          <NewCardcards
           
            key={index}
            cardName={cardname}
            imageUrls={AllCards.slice(
              index * 4,
              index * 4 + (showMoreStates ? 8 : 4)
            ).map((card) => ({
              CardThumNailUrl: card.thumbnailUrl,
              CardName: card.name,
              CardFigmaKey: card.figmakey,
            }))}
            // figmaKeyforNavigation={AllCards.slice(
            // FigmaKey: card.FigmaKey,
            // CarddName: card.name,
            //   index * 4,
            //   index * 4 + (showMoreStates ? 8 : 4)
            // ).map((card) => ({
            //   cardName: card.name,
            //   figmakey: card.figmaKey,
            // }))}
            setShowMoreStates={setShowMoreStates}
            toggleShowMore={toggleShowMore}
          />
        ))}
        <Footer></Footer>
      </MaincontainerCard>
    </>
  );
};

export default NewCard;

const MaincontainerCard = styled.div`
  height: auto;
  width: 100%;
  background-color: black;
  color: white;
`;

const NewCarditem1 = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

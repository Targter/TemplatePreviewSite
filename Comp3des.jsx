import styled from "styled-components";
import Comp2item1Card from "./Comp2item1Card";
import Comp2item1Card2 from "./Comp2item1Card2";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Store/Context";
import { Link, Route, useLocation, useNavigate } from "react-router-dom";
import AllCardsss from "./AllCards";

// import { useHistory } from "react-router-dom";
//

const Comp3des = () => {
  //

  // const HandleonChange = (event) => {
  //   event.preventDefault();
  //   const category = event.target.value;
  //   // console.log("thchantalkdf ava", category);
  //   switch (category) {
  //     case "Education":
  //       setCategory("Education");
  //       // Navigate("/Education", { replace: true });
  //       SetCardtoShow(Education);
  //       // history.push("/Education");
  //       break;
  //     case "Bussiness":
  //       setCategory("Bussiness");
  //       SetCardtoShow(Bussiness);
  //       break;
  //     case "Marketing":
  //       setCategory("Marketing");
  //       SetCardtoShow(Marketing);
  //       // Navigate("/Marketing");
  //       break;
  //     default:
  //       setCategory("All");
  //       SetCardtoShow(AllCards);
  //       Navigate("/", { replace: true });
  //       // Navigate("/");
  //       break;
  //   }
  // };

  //
  // const handleCategoryChange = (newCategory) => {
  //   setCategory(newCategory);
  //   window.history.pushState({}, "", `/${newCategory}`);
  // };
  const Navigate = useNavigate();
  const onchange = () => {
    Navigate("/discoverNew");
  };
  // const navigate = useHistory();
  const {
    AllCards,
    HandleonChange,
    Education,
    Bussiness,
    Marketing,
    SetCardtoShow,
  } = useContext(Context);
  // const [ShownCard, SetCardtoShow] = useState([]);
  // console.log("this si teh initialDropValue: ", intialDropDownValue);
  // console.log("allcards: ", ShownCard);
  useEffect(() => {
    SetCardtoShow(AllCards);
  }, [AllCards]);

  const CardClick = (itemName, itemThumbnailURl, figmakey) => {
    Navigate("/previewItem", {
      state: { data: { itemName, itemThumbnailURl, figmakey } },
    });
  };

  return (
    <>
      <div className="comp2cont">
        <div className="comp2cont1 comp2con1">
          <div className="comp2item1">
            <div className="item1Discover">Discover what's new </div>
            <button className="item1seeAll" onClick={onchange}>
              See all
            </button>
          </div>
          <Component2item1>
            <Comp2item1Card />
            <Comp2item1Card2 />
          </Component2item1>
        </div>
        <div className="comp2cont2" id="communitysection">
          <div className="cont2item1">By the community, for the community</div>
          <div className="cont2item2">
            <div className="communitydropdown">
              <select
                name="All"
                id="communitydropdownbtn"
                onChange={HandleonChange}
                style={{
                  background: "black",
                  color: "white",
                  outline: "none",
                  border: "none",
                }}
              >
                <option value="All">All Products</option>
                <option value="Education">Education</option>
                <option value="Bussiness">Bussiness</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
            <div className="communitydropdown">
              <select
                name="Paidfree"
                id="communitydropdownbtnpaidfree"
                style={{ marginLeft: "20px" }}
              >
                <option value="PaidFree">All</option>
                <option value="Paid">Paid</option>
                <option value="Free">Free</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp3des;

const Component2item1 = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

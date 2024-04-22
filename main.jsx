import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewCard from "./Component/NewCard.jsx";
import Comp2des from "./Component/Comp2des.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import NewExploreitem from "./Component/NewExploreItem.jsx";
import Publish from "./Component/PublishBtn.jsx";
import AllCardsss from "./Component/AllCards.jsx";
import EducationCard from "./Component/EducationCard.jsx";
import MarketingCard from "./Component/MaketingCard.jsx";
import BussinessCard from "./Component/BussinessCard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Comp2des />
            <AllCardsss />
          </>
        ),
      },

      {
        path: "/Education",
        element: (
          <>
            <Comp2des />
            <EducationCard />
          </>
        ),
      },
      {
        path: "/Marketing",
        element: (
          <>
            <Comp2des />
            <MarketingCard />
          </>
        ),
      },
      {
        path: "/Bussiness",
        element: (
          <>
            <Comp2des />
            <BussinessCard />
          </>
        ),
      },
      { path: "/discoverNew", element: <NewCard /> },
      { path: "/previewItem", element: <NewExploreitem /> },
      { path: "/publishItem", element: <Publish /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

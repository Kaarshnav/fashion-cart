import React from "react";
import { Outlet } from "react-router-dom";
import CategoryList from "../../components/directory/CategoryList";
const HomeComp = (props) => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <div>
      {/* outlet to render other matching component too if outlet is above next comp will be above else below  */}
      <Outlet />
      {/*  <h2 className="appTitle"> Jai shree Krishna </h2> */}
      <CategoryList categories={categories} />
    </div>
  );
};

export default HomeComp;

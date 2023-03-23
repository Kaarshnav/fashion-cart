import React from "react";

const CategoryItemComp = ({ category }) => {
  const { title, imageUrl } = category;
  console.log(category);
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="category-body-conatiner">
        <h2>{title}</h2>
        <p>Shop now </p>
      </div>
    </div>
  );
};

export default CategoryItemComp;

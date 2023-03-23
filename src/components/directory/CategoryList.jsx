import React from "react";
import CategoryCard from "../categoryList/CategoryCard";
const CategoryList = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryList;

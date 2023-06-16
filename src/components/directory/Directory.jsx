import CategoryItem from "../category-item/CategoryItem";

import "./directory.css";

function Directory(props){
  return (
    <div className="directory-container">
      {props.categories.map((value) => (
        <CategoryItem key={value.id} image={value.imageUrl} title={value.title} />
      ))}
    </div>
  );
};

export default Directory;

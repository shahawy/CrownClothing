import DirectoryItem from "../directory-item/DirectoryItem";

import "./directory.css";

function Directory(props) {
  return (
    <div className="directory-container">
      {props.categories.map((value) => {
        const navigationPath = value.title.slice(0, -1)  //Temporary instead of dynamic routing

        return (
          <DirectoryItem
            key={value.id}
            image={value.imageUrl}
            title={value.title}
            
            // Temporary
            navigation={props.navigation === "categories" ? `${navigationPath}-categories` : `/shop/${value.title}`}
            class={props.class}
          />
        );
      })}
    </div>
  );
}

export default Directory;

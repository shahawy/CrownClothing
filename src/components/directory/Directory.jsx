import DirectoryItem from "../directory-item/DirectoryItem";

import "./directory.css";

function Directory(props){
  return (
    <div className="directory-container">
      {props.categories.map((value) => (
        <DirectoryItem key={value.id} image={value.imageUrl} title={value.title} />
      ))}
    </div>
  );
};

export default Directory;

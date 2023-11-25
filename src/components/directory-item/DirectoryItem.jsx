import { useNavigate } from "react-router-dom";

import "./directoryItem.css";

function DirectoryItem(props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(props.navigation)}  // Temporary
      className={props.class}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      />
      <div className="body">
        <h2>{props.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;

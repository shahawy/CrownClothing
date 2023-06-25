import Button from "../button/Button";

import "./productCard.css";


function ProductCard(props) {

  return (
    <div className="product-card-container">
      <img loading="lazy" src={props.image} alt="product-image" />
      <div className="footer">
        <span className="name">{props.name}</span>
        <span className="price">${props.price}</span>
      </div>

      <Button onClick={props.addToCartClick} buttonName="Add To Cart" buttonType="inverted" />
    </div>
  );
}

export default ProductCard;

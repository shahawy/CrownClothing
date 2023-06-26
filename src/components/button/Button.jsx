import "./button.css"


const BUTTON_TYPE_CLASSES = {   // Related to styling of the button
google: "google-sign-in",
inverted: "inverted",
}

function Button({buttonName, buttonType, ...otherProps}) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {buttonName}
    </button>
  )
}

export default Button

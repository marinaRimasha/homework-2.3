class ChatButton {
  constructor(width, height, type, color) {
    this.props = {
      width,
      height,
      type,
      color,
    };
  }
  onClick() {
    console.log(this.props);
  }
}

function testButton() {
  const sendMessageButton = new ChatButton(100, 40, "button", "green");
  sendMessageButton.onClick();
  if (sendMessageButton instanceof ChatButton) {
    console.log("sendMessageButton is an instance of ChatButton.");
  } else {
    console.log("sendMessageButton is not an instance of ChatButton.");
  }

  //verify we provided correct color
  sendMessageButton.props.color === "green"
    ? console.log("The button is actually green!")
    : console.log(
        "The button color is somehow colored " + sendMessageButton.props.color
      );

  //verify we provided all 4 properties
  typeof sendMessageButton.props.width
    ? console.log("Provided correct type for color width")
    : console.log("Messed up with type for color width! ");
}

testButton();

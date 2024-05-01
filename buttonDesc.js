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
}

testButton();
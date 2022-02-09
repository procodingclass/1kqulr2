class Form {
  constructor() {
    this.input = createInput("Enter Your Name");
    this.message = createInput("Enter a Message");
    //Button element to be created using a image
    this.submitButton = createImg("submit.png")
    
  }
  display() {
    this.input.position(590,200);
    this.input.class("customInput");
    this.message.position(100,130);
    this.message.class("customInputBox");
    
    // This button to be added at 280, 355
    this.submitButton.position(280,355);
    
    
  }

}

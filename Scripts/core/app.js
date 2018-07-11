// core module - IIFE
(function() {
  // App variables
  let clickMeButton;
  let ButtonSection;
  let firstH1;

  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px; color:blue;"
    );

    clickMeButton = new objects.Button("/Assets/images/ClickMeButton.png", 200, 50);
    ButtonSection = document.getElementById("ButtonSection");
    firstH1 = document.getElementsByTagName("h1")[0];

    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px; color:green;");

    ButtonSection.appendChild(clickMeButton);

    clickMeButton.addEventListener("click", function(){
      firstH1.textContent = "clickMeButton Clicked!";
    });
  }

  window.addEventListener("load", Start);
})();

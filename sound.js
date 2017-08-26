// JavaQuery function that wraps everything
  $(document).ready(function() {

    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/sound.mp3");

    // Theme Button
    $(".music-button").on("click", function() {
      console.log("music button clicked")
      audioElement.play();

    });

    $(".pause-button").on("click", function() {
      console.log("pause button clicked")
      audioElement.pause();

  });

      });
document.addEventListener("DOMContentLoaded", function(event) {
    var scene = document.querySelector("a-scene");
    var video = document.getElementById("bird");

    if (scene.hasLoaded) {
      run();
    } else {
      scene.addEventListener("loaded", run);
    }

    function run () {
      scene.querySelector("#playButton").addEventListener("click", function(e){
            video.play();
        });
    }

  })

  AFRAME.registerComponent('click-stop', {
  init: function () {
    this.el.addEventListener('click', function (event) {
      document.getElementById("bird").pause();
    });
  }
});
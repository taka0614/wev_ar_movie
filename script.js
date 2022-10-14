AFRAME.registerComponent('movie', {
    init: function () {
      const el = this.el
  
      let isPlayed = false
      const movie = document.getElementById("movie")
  
      // a-videoがクリックされたら動画を再生
      this.el.addEventListener("click", () => {
        if(!isPlayed) {
          el.attributes["material"].value = "src: #movie"
          isPlayed = true
        }
  
        if(movie.paused) {
          movie.play()
        }else {
          movie.pause()
        }
      })
  
      // 動画の読み込みが完了したら動画を再生
      // ただしiPhoneでは自動再生ができないのでクリックする必要がある
      movie.addEventListener("loadeddata", () => {
        aVideo.attributes["material"].value = "src: #movie"
        isPlayed = true
        movie.play()
      })
    }
  })
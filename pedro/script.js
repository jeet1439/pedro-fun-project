let video = document.querySelector("#videoElement");
        if(navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream){
                video.srcObject = stream;
            })
            .catch(function (error){
                console.log("something went wrong: give cam permission");
            })
        }
        const animate = () =>{
        document.getElementById("container").id = "containerAni";
        document.getElementById("videoElement").id = "videoElementAni";
        document.getElementById("racoon").id = "dancingRacoon";
        };
        
        const playMusic = () =>{
          let audio = new Audio("pedro_song.mp3");
          audio.play();
        };
      let myBtn = document.querySelector("#startBtn");
      myBtn.addEventListener("click" , () =>{
        animate();
        playMusic();
      });
     
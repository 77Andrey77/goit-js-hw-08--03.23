import throttle from "lodash.throttle";


 const iframe = document.querySelector("iframe");
      const player = new Vimeo.Player(iframe);

      player.on("play", function () {
        console.log("played the video!");
        
      });
      
const callback = function (data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
  // console.log(data);

};

player.on('timeupdate', throttle(callback, 1000));

const timePause = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(timePause).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        alert("the time was less than 0 or greater than the video’s duration");
            break;

        default:
            // some other error occurred
            break;
    }
});




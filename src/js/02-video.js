import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");

const player = new Player(iframe);

player.on("play", function () {
  console.log("played the video!");
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});
player.on(
  "timeupdate",
  throttle(function (data) {
    {
      duration: 61.857;
      percent: 0.049;
      seconds: 3.034;
    }

    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
  }, 1000)
);

const time = localStorage.getItem("videoplayer-current-time");
try {
  const timeObject = JSON.parse(time).seconds;
  player
    .setCurrentTime(timeObject)
    .then(function () {})
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          break;

        default:
          break;
      }
    });
} catch (error) {
  console.log("✅ This is fine, we handled parse error in try...catch");
}

const startButton = document.querySelector(".box .start");
const stopButton = document.querySelector(".box .stop");
const heading = document.querySelector(".box h1");
const notification = document.querySelector("#notification");

let kaj;
let count = 0;


startButton.onclick = (e) => {
  kaj = setInterval(() => {
      heading.innerHTML = count + 1;
      notification.play();
    if (count >= 5) {
      heading.innerHTML = "0";
      clearInterval(kaj);
    }

    count++;
  }, 1000);
};

stopButton.onclick = () => {
  clearInterval(kaj);
  heading.innerHTML = "Stop.....";
};

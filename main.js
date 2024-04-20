const heading = document.querySelector(".box h1");
const notification = document.querySelector("#notification");

const digitalClockInit = () => {
  const date = new Date();
  heading.innerHTML = `
    ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:
    ${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:
    ${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
};
digitalClockInit();


setInterval(() => {
  digitalClockInit();
  notification.play();
}, 1000);
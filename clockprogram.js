const mylabel = document.getElementById("mylabel");

update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  mylabel.innerHTML = format(date);

  function format(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let amorpm = hours >= 12 ? "pm " : "am";

    // hours = formatzero(hours);
    // minutes = formatzero(minutes);
    // seconds = formatzero(seconds);

    return `${hours}:${minutes}:${seconds} ${amorpm}`;
  }

//   function formatzero(time) {
//     time = time.tostring();
//     return time.length < 2 ? "0" + time : time;
//   }
}

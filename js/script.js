
const p = document.querySelector("p");
const a = document.querySelector("a");

function printNumbers(from, to, interval) {
  const intervalID = setInterval(() => {
    console.log(from);
    from++;
    if (from > to) {
      clearInterval(intervalID);
    }
  }, interval * 1000);
}
function timer(i) {
  const intervalTime = setInterval(() => {
    i--;
    p.textContent = `Завантаження почнется через ${i}`;
    if (i === 0) {
      clearInterval(intervalTime);
      a.hidden = false;
      p.hidden = true;
    }
  }, 1000);
}

printNumbers(1, 4, 2);

timer(5);

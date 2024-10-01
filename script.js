let lastChecked = undefined;
let input = document.querySelectorAll("input");

fast.addEventListener("click", check);
cheap.addEventListener("click", check);
good.addEventListener("click", check);

function check(e) {
  let countChecked = 0;
  console.log(lastChecked);
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      countChecked++;
    }
  }
  if (countChecked > 2) {
    lastChecked.checked = false;
  }
  lastChecked = e.target;
}

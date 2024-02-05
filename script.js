const KLNT = {
  Hydrogen: 1,
  Carbon: 12,
  Fluorine: 19,
  Nitrogen: 14,
  Oxygen: 16,
  Sodium: 23,
  Magnesium: 24,
  Aluminium: 27,
  Silicon: 28,
  Phosphorus: 31,
  Sulfur: 32,
  Chlorine: 35.5,
  Potassium: 39,
  Calcium: 40,
  Maganese: 55,
  Iron: 56,
  Copper: 64,
  Zinc: 65,
  Bromine: 80,
  Silver: 108,
  Barium: 137,
  Mercury: 201,
  Lead: 207,
};
var input = document.getElementById("input");
var nguyenTo = document.getElementById("nguyento");
var form = document.getElementById("submit_form");
var randomNT = Math.floor(Math.random() * Object.keys(KLNT).length);
var nguyenToRandom = Object.keys(KLNT)[randomNT];
var giatri = KLNT[nguyenToRandom];
var statusLabel = document.getElementById("status");
var theStatus = "None";
var kq = document.getElementById("ketqua");
var quizzes = document.getElementById("quizzy");
var yayWin = document.getElementById("yayWin");
nguyenTo.innerHTML = nguyenToRandom;
form.addEventListener("submit", (e) => checkAnswer(e));

function checkLength() {
  if (Object.entries(KLNT).length == 0) {
    quizzes.style.display = "none";
    yayWin.style.display = "flex";
  }
}
function checkAnswer(e) {
  e.preventDefault();
  if (input.value == giatri) {
    theStatus = "Correct";
    statusLabel.style.color = "green";
    delete KLNT[nguyenToRandom];
    checkLength();
  } else {
    theStatus = "Incorrect";
    statusLabel.style.color = "red";
    kq.innerHTML = `Kết quả: ${giatri}`;
  }

  statusLabel.innerHTML = `Status: ${theStatus}`;
  setTimeout(() => {
    input.value = "";
    randomNT = Math.floor(Math.random() * Object.keys(KLNT).length);
    nguyenToRandom = Object.keys(KLNT)[randomNT];
    giatri = KLNT[nguyenToRandom];
    statusLabel.style.color = "black";
    theStatus = "None";
    statusLabel.innerHTML = `Status: ${theStatus}`;
    nguyenTo.innerHTML = nguyenToRandom;
    kq.innerHTML = "Kết quả: None";
  }, 1000);
}
function rePlay() {
  yayWin.style.display = "none";
  var counter = document.getElementById("counter");
  counter.style.display = "block";
  var second = 3;
  var str = `Reload lại trang sau: ${second}`;
  var counterLabel = document.getElementById("counterLabel");
  setTimeout(() => {
    second -= 1;
    str = `Reload lại trang sau: ${second}`;
    counterLabel.innerHTML = str;
    setTimeout(() => {
      second -= 1;
      str = `Reload lại trang sau: ${second}`;
      counterLabel.innerHTML = str;
      setTimeout(() => {
        second -= 1;
        str = `Reload lại trang sau: ${second}`;
        counterLabel.innerHTML = str;
        location.reload();
      }, 1000);
    }, 1000);
  }, 1000);
}

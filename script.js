const celciusTem = document.getElementById("celciusTem");
const farenhietTem = document.getElementById("farenhietTem");
const kelvinTem = document.getElementById("kelvinTem");

const faranhiet = document.getElementById("faranhiet");
const kelvin = document.getElementById("kelvin");

const calculate = document.getElementById("calculate");
const back = document.getElementById("back");
back.disabled = true;

let initialCalculationDone = false;

calculate.addEventListener("click", function () {
  calculateTemperature(celciusTem);
});
celciusTem.addEventListener("input", function () {
  if (initialCalculationDone) {
    calculateTemperature(celciusTem);
  }
});
back.addEventListener("click", function () {
  faranhiet.style.display = "none";
  kelvin.style.display = "none";
  farenhietTem.value = null;
  kelvinTem.value = null;
  celciusTem.value = null;
  initialCalculationDone = false;
  calculate.disabled = false;
});

function calculateTemperature(temperature) {
  if (temperature.value == "" || isNaN(temperature.value)) {
    alert("First Enter Temperature For Conversion");
    return;
  }
  const faranhietCal = (temperature.value * 9) / 5 + 32;
  const kelvinCal = temperature.value + 273.15;
  farenhietTem.value = faranhietCal;
  kelvinTem.value = kelvinCal;
  faranhiet.style.display = "flex";
  kelvin.style.display = "flex";
  calculate.disabled = true;
  back.disabled = false;
  initialCalculationDone = true;
}

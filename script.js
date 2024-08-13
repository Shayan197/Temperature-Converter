const celciusTem = document.getElementById('celciusTem');
const farenhietTem = document.getElementById('farenhietTem');
const kelvinTem = document.getElementById('kelvinTem');

const calculate = document.getElementById('calculate');
const back = document.getElementById('back');

const faranhiet = document.getElementById('faranhiet');
const kelvin = document.getElementById('kelvin');

calculate.addEventListener('click',function(){
    calculateTemperature(celciusTem);
});

function calculateTemperature(temperature){
    const numberValue = parseFloat(temperature.value);
    const faranhietCal = (numberValue * 9/5) + 32;
    const kelvinCal = numberValue + 273.15;
    farenhietTem.value = faranhietCal;
    kelvinTem.value = kelvinCal;
    faranhiet.style.display = 'flex';
    kelvin.style.display = 'flex';
}
back.addEventListener('click',function(){
    faranhiet.style.display = 'none';
    kelvin.style.display = 'none';
    farenhietTem.value = null;
    kelvinTem.value = null;
    celciusTem.value = null;
})
const convertBtn = document.getElementById('convert-btn');
let degrees = document.querySelector('#degrees');
let celsiuselem = document.getElementById('result-heading');
let tempType = document.getElementById('temp');

convertBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    convertToCelsius();
})

window.addEventListener('load',()=>{
    degrees.value = "";
    celsiuselem.innerHTML = "";
});


function convertToCelsius(){
    let inputValue = degrees.value;

    if(tempType.value == 'farenheit'){
        const FarenheitToCelsius = (inputValue*9/5) + 32;
        celsiuselem.innerHTML = `${FarenheitToCelsius.toFixed(3)} &deg;c`;
    }
    else if(tempType.value == 'kelvin'){
        const KelvinToCelsius = parseInt(inputValue) + 273.15;
        celsiuselem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
        console.log(inputValue);
    }
}




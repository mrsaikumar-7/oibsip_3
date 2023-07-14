console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
  let fa = document.getElementById('fa');
  fa.innerHTML = "&#xf2cb";
  fa.style.color = "#ffa41b";

  setTimeout(() => {
    fa.innerHTML = "&#xf2ca;";
    fa.style.color = "#ffa41b";
  }, 1000)

  setTimeout(() => {
    fa.innerHTML = "&#xf2c9;";
  }, 2000)

  setTimeout(() => {
    fa.innerHTML = "&#xf2c8;";
  }, 3000)

  setTimeout(() => {
    fa.innerHTML = "&#xf2c7;";
    fa.style.color = "#ff5151";
  }, 4000)
}

setInterval(() => {
  fa.style.color = "#ffa41b";
  tempLoad();
}, 5000);

tempLoad();

const calculateTemp = () => {
  const form = document.getElementById('tempCalc');
  form.classList.add('show-result');

  const numberTemp = document.getElementById('temp').value;
  const tempSelected = document.querySelector('#temp_diff');
  const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;

  // Convert temperature from Celsius to Fahrenheit
  const celToFah = (cel) => {
    let fahrenheit = cel * (9 / 5) + 32;
    return fahrenheit;
  }

  // Convert temperature from Fahrenheit to Celsius
  const fahToCel = (fah) => {
    let celsius = (fah - 32) * (5 / 9);
    return celsius;
  }

  // Convert temperature from Celsius to Kelvin
  const celToKel = (cel) => {
    let kelvin = cel + 273.15;
    return kelvin;
  }

  // Convert temperature from Kelvin to Celsius
  const kelToCel = (kel) => {
    let celsius = kel - 273.15;
    return celsius;
  }

  let result;
  if (valeTemp === "cel") {
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${numberTemp}°Celsius = ${result.toFixed(3)}°Fahrenheit`;
  } else if (valeTemp === "fah") {
    result = fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${numberTemp}°Fahrenheit = ${result.toFixed(3)}°Celsius`;
  } else if (valeTemp === "kel") {
    result = kelToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${numberTemp} kelvin = ${result.toFixed(3)}°Celsius`;
  }

  setTimeout(() => {
    form.reset();
    form.classList.remove('show-result');
  }, 3000);
}

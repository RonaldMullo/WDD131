//Update year
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

//  Wind Chill Calculation ( °C)
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(1) + " °C";
    }
    return "N/A";
}

// Static values (example)
const temperature = 10;
const windSpeed = 5;

document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed);
// Act year
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Calculate
function calculateWindChill(temp, windSpeed, unit = 'C') {
    if ((unit === 'C' && temp <= 10 && windSpeed > 4.8) || 
        (unit === 'F' && temp <= 50 && windSpeed > 3)) {
        return unit === 'C' 
            ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C"
            : (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°F";
    }
    return "N/A";
}

// Example
const temperature = 18; // °C
const windSpeed = 6;    // km/h

// Result
document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed, 'C');
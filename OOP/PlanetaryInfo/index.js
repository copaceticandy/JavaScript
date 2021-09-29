//Write a constructor for a "planet" object, and use it to create ten objects that store the planetary information on this web page:

function Planet(planet, aveDist, siderealPeriod, synodicPeriod, semiMajorAxisA, siderealPeriodP, eccentricity, orbitalInclination) {
    this.planet = planet;
    this.aveDist = aveDist;
    this.siderealPeriod = siderealPeriod;
    this.synodicPeriod = synodicPeriod;
    this.semiMajorAxisA = semiMajorAxisA;
    this.siderealPeriodP = siderealPeriodP;
    this.eccentricity = eccentricity;
    this.orbitalInclination = orbitalInclination;
}
Planet.prototype.getPlanetInfo = function() {
    return `Name: ${this.planet} \nAverage Distance: ${this.aveDist} \nsiderealPeriod: ${this.siderealPeriod} \nSynodic Period: ${this.synodicPeriod} \nSemi Major Axis A: ${this.semiMajorAxisA} \nSidereal Period P: ${this.siderealPeriodP} \nEccentricity: ${this.eccentricity} \nOrbital Inclination: ${this.orbitalInclination}`
}

let Planets = [new Planet(...["Sun", "0", "0", "0", "0", "0", "0", "0"]), new Planet(...["Mercury", "0.3781 AU", "0.2408 y", "115.88 d", "0.3871 AU", "0.2408 y", "0.0.206", "7.00\xB0"]), new Planet(...["Venus", "0.7233 AU", "0.6512 y", "583.92 d", "0.7233 AU", "0.6512 y", "0.007", "3.39&deg;"]), new Planet(...["Earth", "1 AU", "1.0000 y", "", "1.000 AU", "1.0000 y", "0.017", "0.00&deg;"]), new Planet(...["Mars", "1.5237 AU", "1.8809 y", "779.94 d", "1.5237 AU", "1.8809 y", "0.093", "1.85&deg;"]), new Planet(...["Jupiter", "5.2028 AU", "11.863 y", "398.9 d", "5.2028 AU", "11.862 y", "0.048", "1.31&deg;"]), new Planet(...["Saturn", "9.5388 AU", "29.458 y", "378.1 d", "9.5388 AU", "29.458 y", "0.056", "2.49&deg;"]), new Planet(...["Uranus", "19.1914 AU", "84.01 y", "369.7 d", "19.1914 AU", "84.01 y", "0.046", "0.77&deg;"]), new Planet(...["Neptune", "30.0611 AU", "164.79 y", "367.5 d", "30.0611", "164.79 y", "0.010", "1.77&deg;"]), new Planet(...["Pluto", "39.5294 AU", "248.5 y", "366.7 d", "39.5294 AU", "248.5 d", "0.248", "17.15&deg;"])];

document.addEventListener("DOMContentLoaded", () => {
    let inputButtons = document.querySelectorAll("#buttons input");

    [].map.call(inputButtons, (val) => {
        val.addEventListener("click", selectButton);
        // console.log(val.nextElementSibling.innerText)
    })

    function displayInfo(index = -1) {
        if (index === -1) {
            document.getElementById("displayBox").innerText = "";
        } else {
            document.getElementById("displayBox").innerText = Planets[index].getPlanetInfo();
        }
    }

    function selectButton(event) {
        let allFalse = true;
        if (event.target.className === "false") {
            [].forEach.call(inputButtons, (val, index) => {
                if (event.target === val) {
                    displayInfo(index);
                    event.target.checked = true;
                    event.target.className = "true";
                    allFalse = false;
                } else {
                    val.checked = false;
                    val.className = "false";
                }
            });
        } else {
            event.target.checked = false;
            event.target.className = "false";
            if (allFalse) {
                displayInfo(-1);
            }
        }

    }
})
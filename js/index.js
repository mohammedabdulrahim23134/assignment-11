// All Variables
// Today
let todyaLink = document.getElementById('todayy')
let launchesLink = document.getElementById('launchess')
let planetsLink = document.getElementById('planetss')
let todayInSpace = document.getElementById('today-in-space')
let launches = document.getElementById('launches')
let planets = document.getElementById('planets')
let todayImage = document.getElementById('apod-image')
let todayTitle = document.getElementById('apod-title')
let todayDate = document.getElementById('apod-date-detail')
let todayInfoDate = document.getElementById('apod-date-info')
let todayExplanation = document.getElementById('apod-explanation')
let todayLoading = document.getElementById('apod-loading')
let todayBtn = document.getElementById('full-btn')
let todayInputDate = document.getElementById('date-input')
let todayTitleDate = document.getElementById('apod-date2')
let todayInput = document.getElementById('apod-date-input')

// Launches
let flightTitle = document.getElementById("flight-title")
let lunchStatus = document.getElementById("lunch-status")
let launchName = document.getElementById("launch-name")
let rocketCon = document.getElementById("rocket-con")
let launchDate = document.getElementById("launch-date")
let launchTime = document.getElementById("launch-time")
let LocationStat = document.getElementById("Location-stat")
let country = document.getElementById("country")
let missionDescription = document.getElementById("description-mission")
let launchesCards = document.getElementById('launches-grid')


// Planets
let planetGrid = document.querySelectorAll('.planet-card')
let planetDetailImage = document.getElementById('planet-detail-image')
let planetDetailName = document.getElementById('planet-detail-name')
let planetDetailDescription = document.getElementById('planet-detail-description')
let planetDistance = document.getElementById('planet-distance')
let planetRadius = document.getElementById('planet-radius')
let planetMass = document.getElementById('planet-mass')
let planetDensity = document.getElementById('planet-density')
let planetOrbitalPeriod = document.getElementById('planet-orbital-period')
let planetRotation = document.getElementById('planet-rotation')
let planetMoons = document.getElementById('planet-moons')
let planetGravity = document.getElementById('planet-gravity')
let planetDiscoverer = document.getElementById('planet-discoverer')
let planetDiscoveryDate = document.getElementById('planet-discovery-date')
let planetBodyType = document.getElementById('planet-body-type')
let planetVolume = document.getElementById('planet-volume')
let planetAxialTilt = document.getElementById('planet-axial-tilt')
let quick1 = document.getElementById('quick1')
let quick2 = document.getElementById('quick2')
let quick3 = document.getElementById('quick3')
let quick4 = document.getElementById('quick4')
let planetPerihelion = document.getElementById('planet-perihelion')
let planetAphelion = document.getElementById('planet-aphelion')
let planetEccentricity = document.getElementById('planet-eccentricity')
let planetInclination = document.getElementById('planet-inclination')
let planetTemp = document.getElementById('planet-temp')
let planetEscape = document.getElementById('planet-escape')
let planetComparisonTbody = document.getElementById('planet-comparison-tbody')


// Click Events
todyaLink.addEventListener("click", displaySectionToday)
launchesLink.addEventListener("click", displaySectionLaunches)
planetsLink.addEventListener("click", displaySectionPlanets)

// Display Sections
function displaySectionToday() {
  todayInSpace.classList.remove('hidden')
  launches.classList.add('hidden')
  planets.classList.add('hidden')

  todyaLink.classList.add('bg-blue-500/10', 'text-blue-400')
  launchesLink.classList.remove('bg-blue-500/10', 'text-blue-400')
  planetsLink.classList.remove('bg-blue-500/10', 'text-blue-400')
  launchesLink.classList.add('text-slate-300', 'hover:bg-slate-800')
  planetsLink.classList.add('text-slate-300', 'hover:bg-slate-800')

  todyaLink.classList.remove('text-slate-300', 'hover:bg-slate-800')
}

function displaySectionLaunches() {
  launches.classList.remove('hidden')
  todayInSpace.classList.add('hidden')
  planets.classList.add('hidden')

  launchesLink.classList.add('bg-blue-500/10', 'text-blue-400')
  todyaLink.classList.remove('bg-blue-500/10', 'text-blue-400')
  planetsLink.classList.remove('bg-blue-500/10', 'text-blue-400')
  todyaLink.classList.add('text-slate-300', 'hover:bg-slate-800')
  planetsLink.classList.add('text-slate-300', 'hover:bg-slate-800')

  launchesLink.classList.remove('text-slate-300', 'hover:bg-slate-800')
  planetsLink.classList.remove('text-slate-300', 'hover:bg-slate-800')
}

function displaySectionPlanets() {
  planets.classList.remove('hidden')
  launches.classList.add('hidden')
  todayInSpace.classList.add('hidden')

  planetsLink.classList.add('bg-blue-500/10', 'text-blue-400')
  todyaLink.classList.remove('bg-blue-500/10', 'text-blue-400')
  launchesLink.classList.remove('bg-blue-500/10', 'text-blue-400')
  todyaLink.classList.add('text-slate-300', 'hover:bg-slate-800')
  launchesLink.classList.add('text-slate-300', 'hover:bg-slate-800')

  todyaLink.classList.remove('text-slate-300', 'hover:bg-slate-800')
  planetsLink.classList.remove('text-slate-300', 'hover:bg-slate-800')
  tableRows()
}

// Today in Space
let todayApi = new XMLHttpRequest()
todayApi.open("GET", "https://api.nasa.gov/planetary/apod?api_key=euHgR3nWIAUzrfEvFU1lJlDKNQLUC0HyMuLvtj6i");
todayApi.send()

let todayContent = []

todayApi.addEventListener("load", function () {
  todayContent = JSON.parse(todayApi.response)
  displayToday()
})

function displayToday() {

  let formattedDate = new Date(todayContent.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  let shortMonthDate = new Date(todayContent.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  todayImage.src = todayContent.url || todayContent.hdurl;

  if (todayContent.url || todayContent.hdurl) {
    todayLoading.classList.add("hidden");
  }




  todayTitle.innerHTML = todayContent.title
  todayDate.innerHTML = `<i class="far fa-calendar me-2"></i> ${formattedDate}`
  todayInputDate.innerHTML = shortMonthDate;
  todayTitleDate.innerHTML = `Astronomy Picture of the Day - ${formattedDate}`
  todayInfoDate.innerHTML = formattedDate;
  todayExplanation.innerHTML = todayContent.explanation;
  todayInput.value = formattedDate;

}

todayBtn.addEventListener("click", () => {
  window.open(todayContent.url, "_blank");
})
// ----------------------------------------------------------------------------------
// Launches
let launchesApi = new XMLHttpRequest()
launchesApi.open("GET", "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10")
launchesApi.send()

let launchesContent = []

launchesApi.addEventListener("load", function () {
  launchesContent = JSON.parse(launchesApi.response)
  displayLaunches()

})

function displayLaunches() {

  flightTitle.innerHTML = launchesContent.results[0].name
  lunchStatus.innerHTML = launchesContent.results[0].status.abbrev
  launchName.innerHTML = launchesContent.results[0].launch_service_provider.name
  rocketCon.innerHTML = launchesContent.results[0].rocket.configuration.name

  let netDate = new Date(launchesContent.results[0].net);

  let formattedDate = netDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  let formattedTime = netDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC"
  }) + " UTC";

  launchDate.innerHTML = formattedDate;
  launchTime.innerHTML = formattedTime;
  LocationStat.innerHTML = launchesContent.results[0].pad.location.name
  country.innerHTML = launchesContent.results[0].pad.country.name
  missionDescription.innerHTML = launchesContent.results[0].mission.description



  temp = ""
  for (let i = 1; i < launchesContent.results.length; i++) {

    let netDate = new Date(launchesContent.results[i].net);

    let formattedDate = netDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });

    let formattedTime = netDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC"
    }) + " UTC";


    temp += `<div
            class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer">
            <div class="relative h-48 bg-slate-900/50 flex items-center justify-center">
            <i class="fas fa-space-shuttle text-5xl text-slate-700"></i>
            ${launchesContent.results[i].image?.image_url
        ? `<img
        src="${launchesContent.results[i].image.image_url}"
        alt="${launchesContent.results[i].name}"
        class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onerror="this.remove()"
      />`
        : ''}
              <div class="absolute top-3 right-3">
                <span class="px-3 py-1 bg-green-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold">
                  ${launchesContent.results[i].status.abbrev}
                </span>
              </div>
            </div>
            <div class="p-5">
              <div class="mb-3">
                <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  ${launchesContent.results[i].name}
                </h4>
                <p class="text-sm text-slate-400 flex items-center gap-2">
                  <i class="fas fa-building text-xs"></i>
                  ${launchesContent.results[i].launch_service_provider.name}
                </p>
              </div>
              <div class="space-y-2 mb-4">
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-calendar text-slate-500 w-4"></i>
                  <span class="text-slate-300">${formattedDate}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-clock text-slate-500 w-4"></i>
                  <span class="text-slate-300">${formattedTime}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-rocket text-slate-500 w-4"></i>
                  <span class="text-slate-300">${launchesContent.results[i].rocket.configuration.name}</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                  <span class="text-slate-300 line-clamp-1">${launchesContent.results[i].pad.location.name}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
                <button
                  class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">
                  Details
                </button>
                <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <i class="far fa-heart"></i>
                </button>
              </div>
            </div>
          </div>`
  }

  launchesCards.innerHTML = temp;
}
// ----------------------------------------------------------------------------------
// Planets
let planetsApi = new XMLHttpRequest()
planetsApi.open("GET", "https://solar-system-opendata-proxy.vercel.app/api/planets")
planetsApi.send()

let planetsContent = []

planetsApi.addEventListener("load", function () {
  planetsContent = JSON.parse(planetsApi.response).bodies
  displayPlanets()
  console.log(planetsContent);
})


function displayPlanets() {
  planetGrid.forEach(card => {
    card.addEventListener('click', function () {
      let planetId = this.dataset.planetId;
      console.log(planetId);

      let newPlanetsContent = planetsContent.find(planet => planet.id === planetId);
      console.log(newPlanetsContent);

      let imageName = planetId;

      if (imageName === "mercure") {
        imageName = "mercury"
      } if (imageName === "terre") {
        imageName = "earth"
      } if (imageName === "saturne") {
        imageName = "saturn"
      }

      planetDetailImage.src = `images/${imageName}.png`
      planetDetailImage.alt = `${imageName} planet detailed realistic render with clouds and continents`
      planetDetailName.innerHTML = newPlanetsContent.englishName
      planetDetailDescription.innerHTML = newPlanetsContent.description

      let distanceInKm = (newPlanetsContent.semimajorAxis / 1000000).toFixed(1);
      planetDistance.innerHTML = `${distanceInKm}M km`;

      let radiusInKm = newPlanetsContent.meanRadius;
      planetRadius.innerHTML = `${radiusInKm.toLocaleString()} km`;

      let massVal = newPlanetsContent.mass.massValue;
      let massExp = newPlanetsContent.mass.massExponent;

      planetMass.innerHTML = `${massVal} × 10^${massExp} kg`;

      let density = newPlanetsContent.density.toFixed(2)
      planetDensity.innerHTML = `${density} g/cm³`

      let orbitalPeriod = newPlanetsContent.sideralOrbit
      planetOrbitalPeriod.innerHTML = `${orbitalPeriod} days`

      let planetRot = newPlanetsContent.sideralRotation
      planetRotation.innerHTML = `${planetRot} hours`

      let moons = newPlanetsContent.moons?.length || 0
      planetMoons.innerHTML = moons

      let gravity = newPlanetsContent.gravity.toFixed(2)
      planetGravity.innerHTML = `${gravity} m/s²`

      planetDiscoverer.innerHTML = newPlanetsContent.discoveredBy || "Known since antiquity"
      planetDiscoveryDate.innerHTML = newPlanetsContent.discoveryDate || "Ancient times"
      planetBodyType.innerHTML = newPlanetsContent.bodyType

      let volVal = newPlanetsContent.vol.volValue
      let volExp = newPlanetsContent.vol.volExponent

      planetVolume.innerHTML = `${volVal} × 10^${volExp} km³`

      quick1.innerHTML = `Mass: ${massVal} × 10^${massExp} kg`
      quick2.innerHTML = `Surface gravity: ${newPlanetsContent.gravity} m/s²`
      quick3.innerHTML = `Density: ${newPlanetsContent.density} g/cm³`
      quick4.innerHTML = `Axial tilt: ${newPlanetsContent.axialTilt}°`

      planetPerihelion.innerHTML = `${(newPlanetsContent.perihelion / 1000000).toFixed(1)}M km`
      planetAphelion.innerHTML = `${(newPlanetsContent.aphelion / 1000000).toFixed(1)}M km`
      planetEccentricity.innerHTML = newPlanetsContent.eccentricity
      planetInclination.innerHTML = `${newPlanetsContent.inclination.toFixed(2)}°`
      planetAxialTilt.innerHTML = `${newPlanetsContent.axialTilt.toFixed(2)}°`
      planetTemp.innerHTML = newPlanetsContent.avgTemp === 0 ? "N/A" : `${newPlanetsContent.avgTemp}°C`
      planetEscape.innerHTML = `${(newPlanetsContent.escape / 1000).toFixed(2)} km/s`;

    });
  });


}

function tableRows() {
  temp = ""
  for (let i = 0; i < planetsContent.length; i++) {

    let planet = planetsContent[i];

    function formatOrbitalPeriod(days) {
      if (!days) return 'N/A';

      if (days >= 365.25) {
        let years = (days / 365.25).toFixed(1);
        return `${years} years`;
      }

      return `${Math.round(days)} days`;
    }

    let planetChangeColor = "#eab308";
    if ((planet.englishName) === "Uranus") {
      planetChangeColor = "#22D3EE";
    } if ((planet.englishName) === "Neptune") {
      planetChangeColor = "#2563EB";
    } if ((planet.englishName) === "Jupiter") {
      planetChangeColor = "#FDBA74";
    } if ((planet.englishName) === "Mars") {
      planetChangeColor = "#EF4444";
    } if ((planet.englishName) === "Mercury") {
      planetChangeColor = "#6B7280";
    } if ((planet.englishName) === "Saturn") {
      planetChangeColor = "#FDE047";
    } if ((planet.englishName) === "Earth") {
      planetChangeColor = "#3A82F6";
    } if ((planet.englishName) === "Venus") {
      planetChangeColor = "#FB923C";
    }

    let typeChangeColor = "#2B56A1";
    if ((planet.type) === "Gas Giant") {
      typeChangeColor = "#623FA5"
    } if ((planet.type) === "Terrestrial") {
      typeChangeColor = "#8C4F37"
    }

    let textChangeColor = "#60a5fa";
    if ((planet.type) === "Gas Giant") {
      textChangeColor = "#c084fc"
    } if ((planet.type) === "Terrestrial") {
      textChangeColor = "#fb923c"
    }

    temp += `<tr class="hover:bg-slate-800/30 transition-colors">
                    <td class="px-4 md:px-6 py-3 md:py-4 sticky left-0 bg-slate-800 z-10">
                      <div class="flex items-center space-x-2 md:space-x-3">
                        <div class="w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0" style="background-color: ${planetChangeColor}">
                        </div>
                        <span class="font-semibold text-sm md:text-base whitespace-nowrap">${planet.englishName}</span>
                      </div>
                    </td>
                    <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
                      ${(planet.semimajorAxis / 149597870.7).toFixed(2)}
                    </td>
                    <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
                      ${(planet.meanRadius * 2).toLocaleString()}
                    </td>
                    <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
                      ${(planet.mass.massValue * 10 ** planet.mass.massExponent / 5.972e24).toFixed(3)}
                    </td>
                    <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
                      ${formatOrbitalPeriod(planet.sideralOrbit)}
                    </td>
                    <td class="px-4 md:px-6 py-3 md:py-4 text-slate-300 text-sm md:text-base whitespace-nowrap">
                      ${planet.moons ? planet.moons.length : 0}
                    </td>
                    <td class="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded text-xs bg-orange-500/50 text-orange-200"
                      style="background-color: ${typeChangeColor}; color: ${textChangeColor}">
                      ${planet.type}
                      </span>
                    </td>
                  </tr>`
  }

  planetComparisonTbody.innerHTML = temp;
}
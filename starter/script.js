'use strict';

// // prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// let map, mapEvent;

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       console.log(position);

//       const { latitude } = position.coords;
//       const { longitude } = position.coords;

//       console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//       const coords = [latitude, longitude];

//       const map = L.map('map').setView(coords, 13);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.fr/modest/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // L.marker(coords)
//       //   .addTo(map)
//       //   .bindPopup('')
//       //   .openPopup();

//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert('Please Allow your Location');
//     }
//   );

// // const map = L.map('map').setView([51.505, -0.09], 13);

// // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // }).addTo(map);

// // L.marker([51.5, -0.09]).addTo(map)
// //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
// // .openPopup()
// // ,/////

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
//   const { lat, lng } = mapEvent.latlng;

//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 50,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       })
//     )
//     .setPopupContent('location')
//     .openPopup();
// });

// 'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const pop = document.querySelector('.pop');
const btn = document.querySelector('.btn');

let map, mapEvent;

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getposition();

    app._getposition();

form.addEventListener('submit', function (e) {


});

  _getposition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadmap.bind(this),
        function (position) {
          console.log(position);

          alert('could not get your position;');
        }
      );
  }
  _loadmap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', function (mapE) {
    this.#mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  }


  function() {
    // alert('Please Allow your Location');
    pop.classList.remove('hidden');
  }

  _showform() {}
  _toggleElevationFeild() {}
  _newWorkout() {
    e.preventDefault();

    const { lat, lng } = mapEvent.latlng;
  
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 50,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('location')
      .openPopup();
  
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  };
}
} 
  

 

const app = new App();

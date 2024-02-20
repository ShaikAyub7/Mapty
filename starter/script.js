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

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      // alert('Please Allow your Location');
      pop.classList.remove('hidden');
    }
  );
} else {
  alert('Geolocation is not supported by this browser.');
}

form.addEventListener('submit', function (e) {
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
});

function refreshPage() {
  location.reload();
}

// Call the function to refresh the page

inputType.addEventListener('change', function () {
  inputElevation.closest('form__row').classList.toggle('form__row--hidden');
});

btn.addEventListener('click', function () {
  pop.classList.add('hidden');
  // function refreshPage() {
  //   location.reload();
  // }
});

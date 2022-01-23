function attachEventsListeners() {
  //console.log('TODO:...');
  let inputDays = document.querySelector("#days");
  let inputHours = document.querySelector("#hours");
  let inputMinutes = document.querySelector("#minutes");
  let inputSeconds = document.querySelector("#seconds");

  const days = document.querySelector("#daysBtn");
  const hours = document.querySelector("#hoursBtn");
  const minutes = document.querySelector("#minutesBtn");
  const second = document.querySelector("#secondsBtn");

  days.addEventListener("click", (e) => {
    let d = (inputDays.value);
    inputHours.value = d * 24;
    inputMinutes.value = d * 24 * 60;
    inputSeconds.value = d * 24 * 60 * 60;
  });
  hours.addEventListener("click", (e) => {
    let h = (inputHours.value);
    inputDays.value = h / 24;
    inputMinutes.value = h * 60;
    inputSeconds.value = h * 60 * 60;
  });
  minutes.addEventListener("click", (e) => {
    let m = (inputMinutes.value);
    inputDays.value = m / 60 / 24;
    inputHours.value = m / 60;
    inputSeconds.value = m * 60;
  });
  second.addEventListener("click", (e) => {
    let s = (inputSeconds.value);
    inputHours.value = s / 60 / 60;
    inputMinutes.value = s /60;
    inputDays.value = s / 60 / 60 / 24;
  });
 
  inputHours.value = '';
  inputMinutes.value = '';
  inputDays.value = '';
  inputSeconds.value='';
}

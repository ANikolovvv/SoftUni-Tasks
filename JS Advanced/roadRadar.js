function solve(speed, area) {
  let limit = 0;

  switch (area) {
    case "motorway":
      limit = 130;
      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        if (speed - limit <= 20) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"speeding"}`
          );
        } else if (speed - limit > 20 && speed - limit <= 40) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"excessive speeding"}`
          );
        } else {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"reckless driving"}`
          );
        }
      }
      break;
    case "interstate":
      limit = 90;

      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        if (speed - limit <= 20) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"speeding"}`
          );
        } else if (speed - limit > 20 && speed - limit <= 40) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"excessive speeding"}`
          );
        } else {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"reckless driving"}`
          );
        }
      }
      break;
    case "city":
      limit = 50;
      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        if (speed - limit <= 20) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"speeding"}`
          );
        } else if (speed - limit > 20 && speed - limit <= 40) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"excessive speeding"}`
          );
        } else {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"reckless driving"}`
          );
        }
      }

      break;
    case "residential":
      limit = 20;
      if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
      } else {
        if (speed - limit <= 20) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"speeding"}`
          );
        } else if (speed - limit > 20 && speed - limit <= 40) {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"excessive speeding"}`
          );
        } else {
          console.log(
            `The speed is ${
              speed - limit
            } km/h faster than the allowed speed of ${limit} - ${"reckless driving"}`
          );
        }
      }
      break;
  }
}
solve(40, "city");

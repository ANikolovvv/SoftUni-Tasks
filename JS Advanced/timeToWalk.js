function solve(steps, seconsMeter, speed) {
  let dis = steps * seconsMeter;
  let m = dis / 1000 / speed;
  let rest = Math.floor(dis / 500);
  const date = new Date(0, 0);
  date.setSeconds(m * 60 * 60 +1);
  date.setMinutes(date.getMinutes()+rest);
  let result = date.toTimeString();
  console.log(result.slice(0, 8));
}
solve(4000, 0.6, 5);

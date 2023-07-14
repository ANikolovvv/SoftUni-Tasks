import { domManipulationHandler } from "./utils/helper.js";
import {
  fetchEuroDollarInfo,
  fetchBrentOilInfo,
  fetchFtseInfo,
  fetchSpInfo,
  fetchPoundDollarInfo,
} from "./utils/requests.js";

async function solve() {
  const ftse = document.getElementById("ftse");
  const sp = document.getElementById("sp");
  const euro = document.getElementById("euro");
  const pound = document.getElementById("pound");
  const brent = document.getElementById("brent");

  Promise.all([
    fetchBrentOilInfo(),
    fetchFtseInfo(),
    fetchEuroDollarInfo(),
    fetchSpInfo(),
    fetchPoundDollarInfo(),
  ])
    .then(async (results) => {
      const brentOilData = results[0];
      const ftseData = results[1];
      const euroDollarData = results[2];
      const spData = results[3];
      const poundDollarData = results[4];
      
      const obj = [
        [brent, brentOilData],
        [ftse, ftseData],
        [euro, euroDollarData],
        [sp, spData],
        [pound, poundDollarData],
      ];
      domManipulationHandler(obj);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
solve();

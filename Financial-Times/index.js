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

  try {
    const fetchFtse = await fetchFtseInfo();
    if (!fetchFtse.error) {
      domManipulationHandler(ftse, fetchFtse);
    } else {
      throw new Error(fetchFtse.error.message);
    }
  } catch (error) {
    ftse.classList.add("red");
    ftse.textContent = error.message;
  }

  try {
    const fetchSp = await fetchSpInfo();
    if (!fetchSp.error) {
      domManipulationHandler(sp, fetchSp);
    } else {
      throw new Error(fetchSp.error.message);
    }
  } catch (error) {
    sp.classList.add("red");
    sp.textContent = error.message;
  }

  try {
    const fetchEuroDollar = await fetchEuroDollarInfo();
    if (!fetchEuroDollar.error) {
      domManipulationHandler(euro, fetchEuroDollar);
    }
  } catch (error) {
    euro.classList.add("red");
    euro.textContent = error.message;
  }

  try {
    const fetchPoundDollar = await fetchPoundDollarInfo();
    if (!fetchPoundDollar.error) {
      domManipulationHandler(pound, fetchPoundDollar);
    }
  } catch (error) {
    pound.classList.add("red");
    pound.textContent = error.message;
  }

  try {
    const fetchOil = await fetchBrentOilInfo();
    if (!fetchOil.error) {
      domManipulationHandler(brent, fetchOil);
    }
  } catch (error) {
    brent.classList.add("red");
    brent.textContent = error.message;
  }
}
solve();

export function domManipulationHandler(element, info) {
  let sp500 = info.data.items[0].quote.change1DayPercent.toFixed(2);
  let className = sp500.includes("-") ? "red" : "green";
  element.classList.add(className);
  element.textContent = sp500 + "%";
}

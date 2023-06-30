export function domManipulationHandler(element, info) {
  let data = info.data.items[0].quote.change1DayPercent.toFixed(2);
  let className = data.includes("-") ? "red" : "green";
  element.classList.add(className);
  element.textContent = data + "%";
}

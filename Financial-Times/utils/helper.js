
export function domManipulationHandler(obj) {
  obj.map((el) => {
    let data = el[1].data.items[0].quote.change1DayPercent.toFixed(2);
    let className = data.includes("-") ? "red" : "green";
    el[0].classList.add(className);
    el[0].textContent = data + "%";
   
  });
}


window.addEventListener("load", solve);

function solve() {
  //TO DO
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let description = document.getElementById("description");
  let price = document.getElementById("price");

  let add = document.getElementById("add");
  add.addEventListener("click", addFunc);

  const info = document.getElementById("furniture-list");

  function addFunc(e) {
    e.preventDefault();
    if (
      price.value >= 0 &&
      model.value != "" &&
      year.value >= 0 &&
      description.value !== ""
    ) {
      let trInfo = document.createElement("tr");
      trInfo.className = "info";

      let tdOne = document.createElement("td");
      tdOne.textContent = model.value;
      //console.log(tdOne.textContent)
      let tdTwo = document.createElement("td");
      let result = Number(price.value).toFixed(2);
      tdTwo.textContent = result;

      let tdBtn = document.createElement("td");
      let btnMore = document.createElement("button");
      btnMore.className = "moreBtn";
      btnMore.textContent = "More Info";

      btnMore.addEventListener("click", more);

      let btnBuy = document.createElement("button");
      btnBuy.className = "buyBtn";
      btnBuy.textContent = "Buy it";

      btnBuy.addEventListener("click", buy);

      let trHide = document.createElement("tr");
      trHide.className = "hide";
      trHide.style.display = "none";
      let td = document.createElement("td");
      td.textContent = `Year: ${year.value}`;
      let tdDes = document.createElement("td");
      tdDes.setAttribute("colspan", "3");
      tdDes.textContent = `Description : ${description.value}`;

      tdBtn.appendChild(btnMore);
      tdBtn.appendChild(btnBuy);

      trInfo.appendChild(tdOne);
      trInfo.appendChild(tdTwo);
      trInfo.appendChild(tdBtn);

      trHide.appendChild(td);
      trHide.appendChild(tdDes);

      info.appendChild(trInfo);
      info.appendChild(trHide);

      model.value = "";
      year.value = "";
      price.value = "";
      description.value = "";
    }
  }
  function more(e) {
    let target = e.target;
    let hide = document.querySelector(".hide");
    if (target.textContent === "More Info") {
      target.textContent = "Less Info";
      hide.style.display = "contents";
    } else {
      target.textContent = "More Info";
      hide.style.display = "none";
    }
  }
  function buy(e) {
    let target = e.target.parentNode.parentNode;
    let price = Array.from(target.querySelectorAll("td"));
    //console.log(p)

    let total = document.querySelector(".total-price");
    // let result=Number(total.textContent) +price[1].textContent
    total.textContent = price[1].textContent;
    //console.log(Number(total.textContent))
    target.remove();
  }
}

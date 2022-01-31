function solve() {
  // TODO
  let [btnOnScreen, btnClear] =(document.querySelectorAll("button"));
  const ulMovies = document.querySelector("#movies ul");
  const ulArchive = document.querySelector("#archive ul");

  const name = document.querySelector('input[placeholder="Name"]');
  const hall = document.querySelector('input[placeholder="Hall"]');
  const ticketPrice = document.querySelector(
    'input[placeholder="Ticket Price"]'
  );

  btnOnScreen.addEventListener("click", screen);

  btnClear.addEventListener("click", (e) => {
    let parentList = document.querySelector("#archive > ul");

    while (parentList.firstChild) {
      parentList.removeChild(parentList.firstChild);
    }
  });

  function screen(e) {
    e.preventDefault();
    if (
      name.value.trim() !== "" &&
      hall.value.trim() !== "" &&
      Number(ticketPrice.value)
    ) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = name.value;
      const strongLi = document.createElement("strong");
      strongLi.textContent = `Hall: ${hall.value}`;

      const div = document.createElement("div");
      const strongDiv = document.createElement("strong");
      const ticket = Number(ticketPrice.value);

      strongDiv.textContent = ticket.toFixed(2);
      const input = document.createElement("input");
      input.placeholder = "Tickets Sold";
      const btnArch = document.createElement("button");
      btnArch.textContent = "Archive";

      btnArch.addEventListener("click", archive);

      div.appendChild(strongDiv);
      div.appendChild(input);
      div.appendChild(btnArch);

      ulMovies.appendChild(li);
      li.appendChild(span);
      li.appendChild(strongLi);
      li.appendChild(div);
      name.value = "";
      hall.value = "";
      ticketPrice.value = "";

      function archive(e) {
        let inputField = e.target.parentNode.children[1];
        let movieName = e.target.parentNode.parentNode.children[0];
        let moviePrice = e.target.parentNode.children[0];
        //console.log(moviePrice)

        if (!isNaN(Number(input.value))) {
          const liA = document.createElement("li");
          const spanA = document.createElement("span");
          spanA.textContent = movieName.textContent;
          const strongLiA = document.createElement("strong");
          const total =
            Number(moviePrice.textContent) * Number(inputField.value);
          strongLiA.textContent = `Total amount: ${total.toFixed(2)}`;
          const btnDelete = document.createElement("button");
          btnDelete.textContent = "Delete";
          let targetList = e.target.parentNode.parentNode;
          e.target.parentNode.parentNode.parentNode.removeChild(targetList);

          btnDelete.addEventListener("click", (e) => {
            let targetList = e.target.parentNode;
            e.target.parentNode.parentNode.removeChild(targetList);
          });

          liA.appendChild(spanA);
          liA.appendChild(strongLiA);
          liA.appendChild(btnDelete);
          ulArchive.appendChild(liA);
        }
      }
    }
  }
}

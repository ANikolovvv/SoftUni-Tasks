window.addEventListener("load", solution);

function solution() {
  //console.log("TODO: Write the missing functionality!");
  let fName = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let code = document.getElementById("code");

  let preview = document.getElementById("infoPreview");
  let submiBtn = document.getElementById("submitBTN");

  submiBtn.addEventListener("click", submit);

  let edit = document.getElementById("editBTN");
  let cont = document.getElementById("continueBTN");

  submiBtn.disabled = false;
  edit.disabled = true;
  cont.disabled = true;

  edit.addEventListener("click", btnEdit);

  function submit(e) {
    e.preventDefault();
    //console.log(e.target);
    if (fName.value !== "" && email.value !== "") {
      e.target.disabled = true;
      edit.disabled = false;
      cont.disabled = false;

      let nameLi = document.createElement("li");
      nameLi.textContent = `Full Name: ${fName.value}`;

      let emL = document.createElement("li");
      emL.textContent = `Email: ${email.value}`;

      let phoneLi = document.createElement("li");
      phoneLi.textContent = `Phone Number: ${phone.value}`;

      let adr = document.createElement("li");
      adr.textContent = `Address: ${address.value}`;

      let post = document.createElement("li");
      post.textContent = `Postal Code: ${code.value}`;

      preview.appendChild(nameLi);
      preview.appendChild(emL);
      preview.appendChild(phoneLi);
      preview.appendChild(adr);
      preview.appendChild(post);

      fName.value = "";
      email.value = "";
      phone.value = "";
      address.value = "";
      code.value = "";
    }
  }
  function btnEdit(e) {
    submiBtn.disabled = false;
    e.target.disabled = true;
    cont.disabled = true;
    const input = Array.from(document.querySelectorAll("#form input"));
    input.pop();
    let target = Array.from(document.querySelectorAll("ul li"));

    for (let index = 0; index < target.length; index++) {
      let text = target[index].textContent.split(": ");
      input[index].value = text[1].trim();
    }
    let listItems = e.target.parentElement.parentElement.querySelectorAll("li");
    for (li of listItems) {
      li.remove();
    }

    //console.log(target[0])
  }
  cont.addEventListener("click", (e) => {
    let blockElement = document.getElementById("block");
    while (blockElement.firstChild) {
      blockElement.removeChild(blockElement.lastChild);
    }
    let hElement = document.createElement("h3");
    hElement.textContent = "Thank you for your reservation!";
    blockElement.appendChild(hElement);
    //console.log(bl)
  });
}

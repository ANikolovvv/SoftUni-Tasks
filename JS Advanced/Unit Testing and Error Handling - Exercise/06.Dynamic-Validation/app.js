function validate() {
    // TODO
    let email = document.querySelector("#email");
    email.addEventListener("change", (e) => {
      let reg = /^[a-z]+@[a-z]+\.[a-z]+$/;
      if (reg.test(email.value) === false) {
        let m = e.target;
        m.className = "error";
      } else {
        let m = e.target;
        m.className = "";
        console.log(e.target)
      }
    });
  }
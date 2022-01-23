function lockedProfile() {
  let main = Array.from(document.querySelectorAll("#main .profile"));

  for (const p of main) {
    let arr = Array.from(p.children);
    for (const a of arr) {
      if (a.tagName === "BUTTON") {
        a.addEventListener("click", (e) => {
          let parent = e.target.parentNode;
          console.log(parent)
          const isUnlocked =
            parent.querySelector("input[type=radio]:checked").value ===
            "unlock";
          if (isUnlocked) {
            const infoDiv = parent.querySelector("div");
            if (e.target.innerHTML === "Show more") {
                e.target.innerHTML = "Hide it"
                infoDiv.style.display = "block"
            } else {
                e.target.innerHTML = "Show more"
                infoDiv.style.display = "none"
            }
          }
        });
      }
    }
  }
}

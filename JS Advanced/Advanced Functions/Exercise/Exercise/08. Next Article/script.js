function getArticleGenerator(articles) {
  let i = 0;
  let len = articles.length;

  return () => {
    if (i < len) {
      let a = document.querySelector("#content");
      let art = document.createElement("article");
      art.textContent = articles[i];
      a.appendChild(art);
      //a.textContent=articles[i]
      i++;
    }
  };
}

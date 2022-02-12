class ArtGallery {
  constructor(creator) {
    (this.creator = creator),
      (this.possibleArticles = { picture: 200, photo: 50, item: 250 }),
      (this.listOfArticles = []),
      (this.guests = []);
  }
  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error("This article model is not included in this gallery!");
    }

    let find = this.listOfArticles.find((x) => x.articleName === articleName);
    let some = this.listOfArticles.some((x) => x.articleName === articleName);
    let some2 = this.listOfArticles.some(
      (x) => x.articleModel === articleModel
    );
    //console.log(some)
    if (some === true && some2 === true) {
      find.quantity += quantity;
    } else {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }
  inviteGuest(guestName, personality) {
    //let find=this.guests.find(x=>x.guestName===guestName);
    let some = this.guests.some((x) => x.guestName === guestName);

    if (some === true) {
      throw new Error(`${guestName} has already been invited.`);
    }
    let point = 50;
    if (personality === "Vip") {
      point = 500;
    }
    if (personality === "Middle") {
      point = 250;
    }
    this.guests.push({ guestName, points: point, purchaseArticle: 0 });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    articleModel = articleModel.toLowerCase();
    let find = this.listOfArticles.find((x) => x.articleName === articleName);
    let findGuest = this.guests.some((x) => x.guestName === guestName);
    let some = this.listOfArticles.some((x) => x.articleName === articleName);
    let some2 = this.listOfArticles.some(
      (x) => x.articleModel === articleModel
    );

    let guest = this.guests.find((x) => x.guestName === guestName);

    if (some === false || (some == true && some2 == false)) {
      throw new Error("This article is not found.");
    }
    if (find.quantity === 0) {
      return `The ${articleName} is not available.`;
    }
    if (findGuest === false) {
      return "This guest is not invited.";
    }
    let ex = this.listOfArticles.find((x) => x.articleName === articleName);
    let possible = this.possibleArticles[articleModel];

    if (guest.points < possible) {
      return "You need to more points to purchase the article.";
    }

    //let i= this.listOfArticles.findIndex(x=>x.articleName===articleName);
    //this.listOfArticles.splice(i,1)
    guest.points -= this.possibleArticles[articleModel];
    find.quantity--;
    guest.purchaseArticle++;
    //this.listOfArticles.splice(index,1)
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }
  showGalleryInfo(criteria) {
    let result = [];
    if (criteria === "article") {
      result.push("Articles information:");
      this.listOfArticles.forEach((x) =>
        result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`)
      );
    } else if (criteria === "guest") {
      result.push("Guests information:");
      this.guests.forEach((x) =>
        result.push(`${x.guestName} - ${x.purchaseArticle}`)
      );
    }
    return result.join("\n");
  }
}

try {
  const artGallery = new ArtGallery("Curtis Mayfield");
  artGallery.addArticle("picture", "Mona Liza", 3);
  artGallery.addArticle("Item", "Ancient vase", 2);
  artGallery.addArticle("picture", "Mona Liza", 1);
  artGallery.inviteGuest("John", "Vip");
  artGallery.inviteGuest("Peter", "Middle");
  artGallery.buyArticle("picture", "Mona Liza", "John");
  artGallery.buyArticle("item", "Ancient vase", "Peter");
  console.log(artGallery.showGalleryInfo("article"));
  console.log(artGallery.showGalleryInfo("guest"));
} catch (error) {
  console.log(error);
}

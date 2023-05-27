const home = document.querySelector("#home");

const prodactsRow = document.createElement("div");

prodactsRow.className = "prodacts-row";

const prodactsContent = document.createElement("div");
prodactsContent.className = "prodacts-content";

const prodactsTitle = document.createElement("h1");

prodactsTitle.className = "prodacts-title";

const title = document.createTextNode("Все продукты");

prodactsTitle.appendChild(title);

prodactsContent.append(prodactsTitle);

home.firstElementChild.append(prodactsContent, prodactsRow);

const popularRow = document.querySelector(".popular-row");

function getCard(img, name, category, price, category2, description, rating) {
  const popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  const popularCardBody = document.createElement("div");

  const image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  const popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  const popularCardPrices = document.createElement("div");
  popularCardPrices.className = "popular-card-prices";

  const popularCardPricesLeft = document.createElement("div");
  popularCardPricesLeft.className = "popular-card-prices-left";

  const popularCardPricesRight = document.createElement("div");
  popularCardPricesRight.className = "popular-card-prices-right";

  const title = document.createElement("h3");
  title.textContent = name;

  const cate = document.createElement("p");
  cate.textContent = category;

  const cate2 = document.createElement("p");
  cate2.innerHTML = category2;

  const title2 = document.createElement("h5");
  title2.textContent = price;

  const popularCardFooterBott = document.createElement("div");
  popularCardFooterBott.className = "popular-card-footer-bott";

  const popularCarddeck = document.createElement("p");
  popularCarddeck.textContent = description;

  const starRating = document.createElement("p");
  starRating.className = "star-rating5";

  let stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  starRating.innerHTML = stars || "Bunaqa reyting yo'q!!!";

  const cardBtn = document.createElement("button");
  cardBtn.innerHTML = "В корзину";

  popularCardPrices.append(popularCardPricesLeft, popularCardPricesRight);

  popularCardFooter.append(popularCardPrices, popularCardFooterBott);
  popularCardPricesLeft.append(title, cate);
  popularCardPricesRight.append(title2, cate2);
  popularCardFooterBott.append(popularCarddeck, starRating, cardBtn);
  popularCard.append(popularCardBody, popularCardFooter);

  return popularCard;
}

prodacts
  .filter((el) => el.discount != 0)
  .slice(0, 4)
  .forEach((el) => {
    let card = getCard(
      el.image,
      el.name,
      el.category,
      el.price,
      el.category2,
      el.description,
      el.rating
    );
    popularRow.appendChild(card);
  });

// novinka card box

const bigHome = document.querySelector(".big-home");

const novinka = document.createElement("section");
novinka.id = "novinka";
novinka.style.paddingTop = "50px";

const container = document.createElement("div");
container.className = "container";

const container2 = document.createElement("div");
container2.className = "container";

const novinkaProdacts = document.createElement("section");
novinkaProdacts.id = "novinka-prodacts";

const novinkaRow = document.createElement("div");
novinkaRow.className = "novinka-row";

const allLink2 = document.createElement("div");
allLink2.className = "novinka-link";

const h1 = document.createElement("h1");
h1.innerHTML = "Новинки";

const Nlink = document.createElement("a");
Nlink.href = "#";
Nlink.innerHTML = "Все продукты >";

bigHome.append(novinka, novinkaProdacts);
novinka.append(container);
container.append(allLink2);
allLink2.append(h1, Nlink);
novinkaProdacts.append(container2);
container2.append(novinkaRow);

const novinkaRowFuct = document.querySelector(".novinka-row");

function getCardNovinka(img, name, description, rating) {
  const popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  const popularCardBody = document.createElement("div");

  const image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  const popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  const popularCardPrices = document.createElement("div");
  popularCardPrices.className = "popular-card-prices";

  const popularCardPricesLeft = document.createElement("div");
  popularCardPricesLeft.className = "popular-card-prices-left";

  const title = document.createElement("h3");
  title.textContent = name;

  const popularCardFooterBott = document.createElement("div");
  popularCardFooterBott.className = "popular-card-footer-bott";

  const popularCarddeck = document.createElement("p");
  popularCarddeck.textContent = description;

  const starRating = document.createElement("p");
  starRating.className = "star-rating5";

  let stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  starRating.innerHTML = stars || "Bunaqa reyting yo'q!!!";

  const cardBtn = document.createElement("button");
  cardBtn.innerHTML = "В корзину";

  popularCardPrices.appendChild(popularCardPricesLeft);
  popularCardFooter.append(popularCardPrices, popularCardFooterBott);
  popularCardPricesLeft.appendChild(title);
  popularCardFooterBott.append(popularCarddeck, starRating, cardBtn);
  popularCard.append(popularCardBody, popularCardFooter);

  return popularCard;
}

prodacts.slice(-4).forEach((el) => {
  let card2 = getCardNovinka(el.image, el.name, el.description, el.rating);
  novinkaRow.appendChild(card2);
});

// before - buy - box

const bigHome2 = document.querySelector(".big-home");

const beforeBuy = document.createElement("section");
beforeBuy.id = "before-buy";
beforeBuy.style.paddingTop = "50px";

const container3 = document.createElement("div");
container3.className = "container";

const container4 = document.createElement("div");
container4.className = "container";

const beforeBuyProdact = document.createElement("section");
beforeBuyProdact.id = "before-buy-prodacts";

const beforeBuyRow = document.createElement("div");
beforeBuyRow.className = "before-buy-row";

const allLink3 = document.createElement("div");
allLink3.className = "before-buy-link";

const h1Before = document.createElement("h1");
h1Before.innerHTML = "Покупали раньше";

const beforeLink = document.createElement("a");
beforeLink.href = "#";
beforeLink.innerHTML = "Все продукты >";

bigHome2.append(beforeBuy, beforeBuyProdact);
beforeBuy.appendChild(container3);
container3.append(allLink3);
allLink3.append(h1Before, beforeLink);
beforeBuyProdact.append(container4);
container4.append(beforeBuyRow);

function getCardBefore(img, name, description, rating) {
  const popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  const popularCardBody = document.createElement("div");

  const image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  const popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  const popularCardPrices = document.createElement("div");
  popularCardPrices.className = "popular-card-prices";

  const popularCardPricesLeft = document.createElement("div");
  popularCardPricesLeft.className = "popular-card-prices-left";

  const title = document.createElement("h3");
  title.textContent = name;

  const popularCardFooterBott = document.createElement("div");
  popularCardFooterBott.className = "popular-card-footer-bott";

  const popularCarddeck = document.createElement("p");
  popularCarddeck.textContent = description;

  const starRating = document.createElement("p");
  starRating.className = "star-rating5";

  let stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  starRating.innerHTML = stars || "Bunaqa reyting yo'q!!!";

  const cardBtn = document.createElement("button");
  cardBtn.innerHTML = "В корзину";

  popularCardPrices.appendChild(popularCardPricesLeft);
  popularCardFooter.append(popularCardPrices, popularCardFooterBott);
  popularCardPricesLeft.appendChild(title);
  popularCardFooterBott.append(popularCarddeck, starRating, cardBtn);
  popularCard.append(popularCardBody, popularCardFooter);

  return popularCard;
}

prodacts
  .filter((el) => el.rating > 5)
  .forEach((el) => {
    let card3 = getCardBefore(el.image, el.name, el.description, el.rating);
    beforeBuyRow.appendChild(card3);
  });

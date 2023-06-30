const { expect } = require("chai");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url =
  "https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=IB.1:IEU";

describe("Data Fetching", () => {
  it("should fetch data successfully", async () => {
    const fetchData = await fetch(url);
    const info = await fetchData.json();
    let oil = info.data.items[0].quote.change1DayPercent.toFixed(2);
    expect(Number(oil)).to.be.a("number");
  });
  it("shoud fetch error message", async () => {
    const fetchData = await fetch(url + "S");
    const info = await fetchData.json();
    expect(info).to.have.own.property("error");
  });
});

describe("HTML Tags Existence", () => {
  let dom;
  let vDom;
  before(() => {
    dom = new JSDOM(
      '<!DOCTYPE html><html><body><div class="container"><h1 id="title">Financial Times</h1></div></body></html>'
    );

    vDom = new JSDOM(
      '<!DOCTYPE html><html><body><div class="container"><ul><li><span>FTSE 100</span></li></ul></div></body></html>'
    );
  });

  it("should have the <div> tag with the class Container", () => {
    const document = dom.window.document;
    const divElement = document.querySelector(".container");
    expect(divElement).to.exist;
    expect(divElement.tagName).to.equal("DIV");
  });
  it("should have the <h1> tag with text financial fimes and id with name title", () => {
    const document = dom.window.document;
    const h1Element = document.querySelector("#title");
    expect(h1Element).to.exist;
    expect(h1Element.tagName).to.equal("H1");
    expect(h1Element.textContent).to.equal("Financial Times");
  });
  it("should have the <ul> tag", () => {
    const document = vDom.window.document;
    const ulElement = document.getElementsByTagName("ul");
    expect(ulElement).to.exist;
  });
  it("should have the <li> tag", () => {
    const document = vDom.window.document;
    const liElement = document.getElementsByTagName("li");
    expect(liElement).to.exist;
  });
  it("should have the <span> tag with text FTSE 100", () => {
    const document = vDom.window.document;
    const spanElement = document.getElementsByTagName("span")[0];
    expect(spanElement).to.exist;
    expect(spanElement.textContent).to.equal("FTSE 100");
  });
});

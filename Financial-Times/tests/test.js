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
    expect(info.error).to.have.own.property("message");
  });
});

describe("HTML Tags Existence", () => {
  let dom;

  before(() => {
    dom = new JSDOM(
      `<!DOCTYPE html><html><body>
      <div class="container">
      <h1 id="title">Financial Times</h1>
      <ul>
      <li><span>FTSE 100</span><p id="brent">Loading...</p></li>
      <li><span>S&P 500</span><p id="brent">Loading...</p></li>
      <li><span>Euro/Dollar</span><p id="brent">Loading...</p></li>
      <li><span>Pound/Dollar</span><p id="brent">Loading...</p></li>
      <li><span>Brent Crude Oil</span><p id="brent">Loading...</p></li>
      </ul>
      </div>
      </body></html>`
    );
  });

  it("should have the <div> tag with the class Container", () => {
    const document = dom.window.document;
    const divElement = document.querySelector(".container");
    expect(divElement).to.exist;
    expect(divElement.tagName).to.equal("DIV");
  });
  it("should have the <h1> tag with text financial fimes", () => {
    const document = dom.window.document;
    const h1Element = document.querySelector("#title");
    expect(h1Element).to.exist;
    expect(h1Element.tagName).to.equal("H1");
    expect(h1Element.textContent).to.equal("Financial Times");
  });
  it("should have the <ul> tag", () => {
    const document = dom.window.document;
    const ulElement = document.getElementsByTagName("ul");
    expect(ulElement).to.exist;
  });
  it("should have the <li> tag", () => {
    const document = dom.window.document;
    const liElement = document.getElementsByTagName("li");
    expect(liElement).to.exist;
  });
  it("should have the <span> tag with text FTSE 100", () => {
    const document = dom.window.document;
    const spanElement = document.getElementsByTagName("span")[0];
    expect(spanElement).to.exist;
    expect(spanElement.textContent).to.equal("FTSE 100");
  });
  it("should have the <span> tag with text S&P 500", () => {
    const document = dom.window.document;
    const spanElement = document.getElementsByTagName("span")[1];
    expect(spanElement).to.exist;
    expect(spanElement.textContent).to.equal("S&P 500");
  });
  it("should have the <span> tag with text Euro/Dollar", () => {
    const document = dom.window.document;
    const spanElement = document.getElementsByTagName("span")[2];
    expect(spanElement).to.exist;
    expect(spanElement.textContent).to.equal("Euro/Dollar");
  });
  it("should have the <span> tag with text Pound/Dollar", () => {
    const document = dom.window.document;
    const spanElement = document.getElementsByTagName("span")[3];
    expect(spanElement).to.exist;
    expect(spanElement.textContent).to.equal("Pound/Dollar");
  });
  it("should have the <span> tag with text Brent Crude Oil", () => {
    const document = dom.window.document;
    const spanElement = document.getElementsByTagName("span")[4];
    expect(spanElement).to.exist;
    expect(spanElement.textContent).to.equal("Brent Crude Oil");
  });
  it("should have the <p> tag with text Loading...", () => {
    const document = dom.window.document;
    const pElement = document.getElementsByTagName("p")[0];
    expect(pElement).to.exist;
    expect(pElement.textContent).to.equal("Loading...");
  });
});

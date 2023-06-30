const { expect } = require("chai");

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

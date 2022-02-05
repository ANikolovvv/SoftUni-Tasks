function tickets(arr, destina) {
  let array = [];
  class Ticet {
    constructor(destination, price, status) {
      (this.destination = destination),
        (this.price = price),
        (this.status = status);
    }
  }
  for (const trip of arr) {
    let [destination, price, status] = trip.split("|");
    price=Number(price)
    array.push(new Ticet(destination, price, status));
  }
  //console.log(array[0].destination);
  let sort = [];
  if (destina === "destination") {
    sort = array.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (destina === "status") {
    sort = array.sort((a, b) => a.status.localeCompare(b.status));
  } else if (destina === "price") {

    sort = array.sort((a, b) => a.price-b.price);
  }

  return sort;
}
console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);

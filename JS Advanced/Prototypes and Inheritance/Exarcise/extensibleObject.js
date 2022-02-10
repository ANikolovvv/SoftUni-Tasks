//Extensible Object
function extensibleObject() {
  //TODO:
  let proto = {};
  let extObj = Object.create(proto);
  extObj.extend = function (template) {
    for (const key in template) {
      if (typeof template[key] === "function") {
        let proto = Object.getPrototypeOf(this);
        console.log(proto[key]);
        proto[key] = template[key];
      } else {
        this[key] = template[key];
      }
    }
  };

  return extObj
}
//04. Balloons
const myObj = extensibleObject();
console.log(myObj)
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);


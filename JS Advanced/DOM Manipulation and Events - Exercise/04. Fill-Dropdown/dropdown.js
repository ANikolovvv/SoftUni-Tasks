function addItem() {
  const newText = document.getElementById("newItemText");
  const newValue = document.getElementById("newItemValue");

  const option = document.createElement("option");
  option.textContent = newText.value;
  option.value = newValue.value;

  document.getElementById("menu").appendChild(option);
  newValue.value = "";
  newText.value = "";
}

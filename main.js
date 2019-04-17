/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let listObject = {
  test: true
};
let listElem = document.getElementById("list");
let addButton = document.getElementById("addButton");
let textBox = document.getElementById("text");
textBox.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
    addItem(textBox.value);
  }
});
addButton.addEventListener(
  "click",
  function() {
    addItem(textBox.value);
  },
  false
);

function addItem(itemName) {
  if (itemName != "" && listObject[itemName] === undefined) {
    listObject[itemName] = false;
    console.log("added " + itemName);
    textBox.value = "";
    refreshList();
  }
}
function removeItem(itemName) {
  delete listObject[itemName];
  console.log("removed " + itemName);
  refreshList();
}
function createItemElement(itemName) {
  let mainElem = document.createElement("li");
  let textElem = document.createElement("p");
  let delButton = document.createElement("button");
  let checkbox = document.createElement("input");
  let cross = document.createElement("img");
  cross.src = "cross.ico";
  delButton.appendChild(cross);
  checkbox.type = "checkbox";
  checkbox.addEventListener(
    "click",
    function() {
      checkBoxClick(itemName);
    },
    false
  );
  if (listObject[itemName] == true) {
    checkbox.checked = true;
    mainElem.className = "checked";
  }
  delButton.addEventListener(
    "click",
    function() {
      removeItem(itemName);
    },
    false
  );
  //mainElem.id = itemName;
  textElem.innerHTML = itemName;
  mainElem.appendChild(textElem);
  mainElem.appendChild(checkbox);
  mainElem.appendChild(delButton);

  return mainElem;
}
function checkBoxClick(itemName) {
  listObject[itemName] ^= true;
  refreshList();
}
function refreshList() {
  /*
    This thing doesn't work for some reason

    let items = listElem.childNodes;
    items.forEach(element => {
        listElem.removeChild(element);
    });
    */
  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }
  for (let key in listObject) {
    console.log(key);
    listElem.appendChild(createItemElement(key));
  }
  console.log(listElem.childNodes);
}

refreshList();

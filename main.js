/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let listObject = {
    test:false,
}
let listElem = document.getElementById("list");
let addButton = document.getElementById("addButton");
let textBox = document.getElementById("text");
addButton.addEventListener("click", function(){addItem(textBox.value);}, false);

function addItem(itemName){
    if(itemName != "" && listObject[itemName] === undefined){
        listObject[itemName] = true;
        console.log("added " + itemName);
        textBox.value = "";
        refreshList();
    }
}
function removeItem(itemName){
    delete listObject[itemName];
    console.log("removed " + itemName);
    refreshList();
}
function createItemElement(itemName){
    let mainElem = document.createElement("li");
    let textElem = document.createElement("p");
    let delButton = document.createElement("button");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function(){removeItem(itemName);
    }, false);
    //mainElem.id = itemName;
    textElem.innerHTML = itemName;
    mainElem.appendChild(textElem);
    mainElem.appendChild(delButton);

    return mainElem;
}
function refreshList(){

    /*
    This thing doesn't work for some reason

    let items = listElem.childNodes;
    items.forEach(element => {
        listElem.removeChild(element);
    });
    */
    while (listElem.firstChild){
        listElem.removeChild(listElem.firstChild)
    }
    for(let key in listObject){
        console.log(key);
        listElem.appendChild(createItemElement(key));
    
    }
    console.log(listElem.childNodes);
}
refreshList();

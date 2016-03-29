ObjectComponent = function (object) {
  var objectElement = document.createElement("dl");
  objectElement.classList.add("object");
  Object.keys(object).forEach(function (key) {
    var keyElement = document.createElement("dt");
    keyElement.classList.add("key");
    keyElement.innerText = key;
    objectElement.appendChild(keyElement);

    var valueElement = document.createElement("dd");
    valueElement.classList.add("value");
    valueElement.innerText = object[key];
    objectElement.appendChild(valueElement);
  });
  return objectElement;
};

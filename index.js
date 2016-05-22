/*global define, document */
define([], function () {
  "use strict";
  return function (data) {
    var data = data || {};
    var object = data.object || {};
    var valueComponent = data.valueComponent || function (value) {
      var valueElement = document.createElement("span");
      valueElement.innerText = value;
      return valueElement;
    };

    var objectElement = document.createElement("dl");
    objectElement.classList.add("object");

    Object.keys(object).forEach(function (key) {
      var termElement = document.createElement("dt");
      termElement.classList.add("term");
      termElement.innerText = key;
      objectElement.appendChild(termElement);

      var descriptionElement = document.createElement("dd");
      descriptionElement.classList.add("description");
      descriptionElement.appendChild(valueComponent(object[key]));
      objectElement.appendChild(descriptionElement);
    });

    return objectElement;
  };
});

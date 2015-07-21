"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var opening = '<div class="row">';
  var ending = '</div>';
  var middle = '';
  for (var i=0; i < carsJSON.length; i++) {
    middle += '<div class="col-md-4 car"><h2>'+ carsJSON[i]['Make'] + '</h2><p><strong>Model:</strong> ' + carsJSON[i]['Model'] + '</p><p><strong>Year:</strong> ' + carsJSON[i]['Year'] + '</p></div>';
  }
  return opening + middle + ending;
}

function addCarsToDOM(carsJSON) {
  var newCars = formatCars(carsJSON);
  $("#cars").append(newCars)
}

function fetchJSON() {
  var rows = $(".row").length;

    $.ajax ({
      url: baseUrl + rows + '/3',
      contentType: 'application/json',
      dataType: 'jsonp',
    })
    .done(addCarsToDOM);
}
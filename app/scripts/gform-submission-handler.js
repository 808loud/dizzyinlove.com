var formID = 'rsvp_form';

// get all data in form and return object
function getFormData() {
  var elements = document.getElementById(formID).elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
  });
  // console.log(data);
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
  event.preventDefault();           // we are submitting via xhr below
  $('input[type="submit"]').val('Submitting...').addClass('disabled');
  var data = getFormData();         // get the values submitted in the form
  var url = event.target.action;  //
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    // console.log( xhr.status, xhr.statusText )
    // console.log(xhr.responseText);
    return;
  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
  xhr.send(encoded);
  // console.log('huzzah!')
  $('input[type="submit"]').val('Got it. Thanks!').toggleClass('btn-primary btn-success');

}
function loaded() {
  console.log('rsvp form submission handler loaded');
  // bind to the submit event of our form
  var form = document.getElementById(formID);
  form.addEventListener('submit', handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);

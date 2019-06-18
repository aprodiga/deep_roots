//"How well do you understand the Bible?" Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() 
{
  output.innerHTML = this.value;
}

//Location Autocomplete
var input = document.getElementById('autocomplete');
var autocomplete = new google.maps.places.Autocomplete(input);

//Availability
function content(elem)
{
	if (elem.style.backgroundColor != "") //unfill availability
	{
		elem.style.backgroundColor= ""; 
	}
	else //fill availability
	{
		elem.style.backgroundColor= "#ffbf00";

	}

	console.log("Day: " + elem.className);
	console.log("Time: " + elem.closest("tr").id);
}

//Phone Number Validation
var input = document.querySelector(".form-phone");
window.intlTelInput(input, ({
	// specify the path to the libphonenumber script to enable validation/formatting
	utilsScript: "C:/Users/ajpro/node_modules/intl-tel-input/build/js/utils.js"
}));
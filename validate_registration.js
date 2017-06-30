document.querySelector('#registration-form').onsubmit = function(event) {


    return validateLetters(
        event.target['first-name'].value,
        "The first name should be only letters."
    ) && validateLetters(
        event.target['last-name'].value,
        "The last name should be only letters."
    ) && validateLetters(
        event.target['City'].value,
        "The city name should be only letters."
    ) && validateNumbers(
        event.target['zip-code'].value,
        "The zip-code should be only numbers."
    ) && validateDate(
        event.target['birth-date'].value,
        "Write the date using the dd.mm.year format using dots."
    ) && validateSelection(
        event.target['Grade'].value,
        "Choose a Grade"
    ) && validateSelection(
        event.target['gender'].value,
        "Choose a binary gender"
    ) && validateLetters(
        event.target['parent-guardian'].value,
        "The parent/guardian's name should be only letters."
    ) && validateNumbers(
        event.target['contact-phone'].value,
        "The phone number should only contain digits."
    ) && validateEmail(
    	event.target['contact-email'].value,
    	"Enter a proper email account."
    	)
    	&& validateSelection(
    		event.target['first-school'].value,
    		"Choose the school closest to you.")
    	&& validateSelection(
    		event.target['second-school'].value,
    		"Choose the second school closest to you.")
    	&& validateMultipleChoiceP(
    		event.target.querySelectorAll('[name="field-position"].checked').value,
    			"Select at least one position in the field."
    		)
    ;


    // return (event.target['first-name'].value !== "")  &&
    // 	(event.target['last-name']. value !== "") &&
    // 	(event.target['street-address'].value !== "") &&
    // 	(event.target['City'].value !== "") &&
    // 	(event.target['zip-code'].value !== "") &&
    // 	(event.target['birth-date'].value !== "") &&
    // 	(event.target['gender'].value !== "") &&
    // 	(event.target['Grade'].value !== "") &&
    // 	(event.target['parent-guardian'] !== "") &&
    // 	(event.target['contact-phone'].value !== "") &&
    // 	(event.target['contact-email'].value !== "") &&
    // 	(event.target['first-school'].value !== "") &&
    // 	(event.target['second-school'].value !== "") &&
    // 	(event.target.querySelectorAll('[name="field-position"]:checked').length > 0 ) &&
    // 	(event.target['jersey-size'].value !== "") &&
    // 	(event.target['shorts-size'].value !== "") &&
    // 	(event.target['parent-guardian-signature'].value !== "") &&
    // 	(event.target['Date'].value !== "") ;
};

function validateMultipleChoiceP(value, msg) {

	if (value = length>0) {
		return true;
	} else {
		alert(msg);
		return false;
	}
}

function validateSelection(value, msg) {
    if (value !== "") {
        return true;
    } else {
        alert(msg);
        return false;
    }


}

function validateEmail(value,msg) {
	return validate(/\S+@\S+\.\S+/,value, msg)
}

function validateDate(value, msg) {
    return validate(/\d\d?\.\d\d?\.\d/, value, msg)
}

function validateNumbers(value, msg) {
    return validate(/^\s*\d+\s*$/, value, msg)
}

function validateLetters(value, msg) {
    return validate(/^\s*[A-Za-z]+\s?[A-Za-z]*\s*$/, value, msg)
}

function validate(pattern, value, message) {
    if (!pattern.test(value)) {
        alert(message);
        return false;
    }
    return true;

}

// var myfunc = function(param1){
// 	console.log(param1);
// }  

// myfunc("test");

function validate() {

    var emailID = document.myform.email.value; // Get the value of the email input field
    atpos = emailID.indexOf("@"); // Find the position of the "@" symbol in the email
    dotpos = emailID.lastIndexOf("."); // Find the position of the last dot (".") in the email

    // Can Also be done by CSS, but it will only check for the presence of "@" symbol, but here we are checking for both "@" and "."


    var x = document.forms.myform.name.value;
    var y = document.forms.myform.subject.value;

    if (x == "") {
        alert("Name must be filled out");
    }
    else if (atpos < 1 || ((dotpos - atpos) < 2)) {
        alert("Please enter correct email ID")
    }
    else if (y == "") {
        alert("Subject must be filled out");
    }
    else {
        alert("Thanks you contacting...😀 ")
    }

}
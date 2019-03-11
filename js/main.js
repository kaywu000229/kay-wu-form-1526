//declare vars --the inputs
let form = document.querySelector ("form");
let fn = document.getElementById("fullname");
let email = document.getElementById("email");
let msg = document.getElementById("message");


//to target the function of the submit button
let btn = document.getElementById("submit-button");

//to validate the form
function validateForm() {
	console.clear();

	let collectFormData = {};
    let errors = [];
    let regex = /[\w-]+@([\w-]+\.)+[\w-]+/;

		    // to validate the fullname--------------------------------------------
		    if (fn.value !== "") {
		    	collectFormData.fullname = fn.value;
		    } else {
		    	errors.push("Please enter your full name.");
		    }


		    //to validate the email------------------------------------------------
		    if (email.value !== "") { 
		    	 
			       if (regex.test(email.value)) {
			       	collectFormData.email = email.value;
			       }
			       	else{
			    	errors.push("Your email address is invalid!");
			       }
			     }
	    	else  {
	    		errors.push("Please enter your email!");
	    	    } 
		    

		   //to validate message----------------------------------------------------
		   if (msg.value !== "") {
		   	collectFormData.msg = msg.value;
		   } else {
		   		errors.push("Please leave a message!");
		   }

// to view the input date
    if (errors.length === 0) {
        console.log(collectFormData);
        form.reset();
    } else {
 // get an error?
        console.log(errors);
    }

}


btn.addEventListener("click", validateForm);
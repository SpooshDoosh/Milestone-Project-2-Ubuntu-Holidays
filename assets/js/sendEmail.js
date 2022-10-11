function sendMail(contactForm) {
    emailjs.send("service_6akey94", "template_b9vyydh", {
        "from_fname": contactForm.firstname.value, 
        "from_lname": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value,
        "from_contact": contactForm.contactnumber.value,
        "enquiry": contactForm.message.value
    })
    
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },

        function(error) {
            console.log("FAILED", error);
        });
}
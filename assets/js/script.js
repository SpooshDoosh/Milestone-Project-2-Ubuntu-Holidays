//Google maps API//

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.9249, lng: 18.4241 },
    zoom: 15,
  });
}

  
window.initMap = initMap;


//Pop up after contact form submission//

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup")
}


//Sends email using emailJS after contact form submission//

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
            console.log("SUCCESS!", response.status, response.text);
        },

        function(error) {
            console.log("FAILED...", error);
        });
}


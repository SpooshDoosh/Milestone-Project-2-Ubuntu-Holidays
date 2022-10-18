//Google maps API//

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.9249, lng: 18.4241 },
    zoom: 15,
  });

  const activities = [
    [
        "Iziko Bo-Kaap Museum",
        -33.92153422096886,
        18.41498655573794
    ],
    [
        "Two Oceans Aquarium"
        -33.90796262809507, 
        18.41761337016955

    ],
    [
        "V&A Waterfront"
        -33.90655943993641, 
        18.419320084144353
    ],
    [
        "Table Mountain National Park"
        -33.96040795755455, 
        18.401253107872943
    ],
    [
        "Scootours"
        -33.942850666607775, 
        18.395574727234926
    ],


  ];

  for(let i = 0; i < activities.length; i++) {
    const currentActivity= activities[i];

    const marker = new google.maps.Marker({
        position: {lat: parseFloat(currentActivity[1]), lng: parseFloat(currentActivity[2])},
        map,
        animation: google.maps.Animation.DROP
      });
  }
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


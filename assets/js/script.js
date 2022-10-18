//Google maps API//

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(-33.92444460953283, 18.418663466338568),
    mapTypeId: "roadmap",
  });

  const iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  const icons = {
    lodging: {
      name: "Accommodation",
      icon: iconBase + "lodging.png",
    },
    attraction: {
      name: "Attractions / Activities",
      icon: iconBase + "star.png",
    },
    restaurant: {
      name: "Restaurants / Bars",
      icon: iconBase + "snack_bar.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(-33.93457336048657, 18.44743738570852),
      type: "lodging",
      title: "Garden Court Nelson Mandela Boulevard"
    },
    {
      position: new google.maps.LatLng(-33.932077596395125, 18.427120298079892),
      type: "lodging",
      title: "Best Western Cape Suites Hotel"
    },
    {
      position: new google.maps.LatLng(-33.93946172596997, 18.405109752022675),
      type: "lodging",
      title: "Kensington Place"
    },
    {
      position: new google.maps.LatLng(-33.9290353767041, 18.37786465477859),
      type: "lodging",
      title: "Ellerman House"
    },
    {
      position: new google.maps.LatLng(-33.952573869260945, 18.378261047523747),
      type: "lodging",
      title: "The Bay Hotel"
    },
    {
      position: new google.maps.LatLng(-33.95307830542599, 18.377451958483473),
      type: "lodging",
      title: "The Marly Boutique Hotel and Spa"
    },
    {
      position: new google.maps.LatLng(-33.921534588835705, 18.414986393558436),
      type: "attraction",
      title: "Iziko Bo-Kaap Museam"
    },
    {
      position: new google.maps.LatLng(-33.90796315079628, 18.417612754114494),
      type: "attraction",
      title: "Two Oceans Aquarium"
    },
    {
      position: new google.maps.LatLng(-33.90655963477768, 18.41932070406976),
      type: "attraction",
      title: "V&A Waterfront"
    },
    {
      position: new google.maps.LatLng(-33.96041394155216, 18.401251959185316),
      type: "attraction",
      title: "Table Mountain National Park"
    },
    {
      position: new google.maps.LatLng(-33.942850502945646, 18.395574742422603),
      type: "attraction",
      title: "Scootours Cape Town"
    },
    {
      position: new google.maps.LatLng(-33.92849433315896, 18.414953038785907),
      type: "attraction",
      title: "The Planetarium"
    },
    {
      position: new google.maps.LatLng(-33.95079890743787, 18.37856462600259),
      type: "restaurant",
      title: "The 41"
    },
    {
      position: new google.maps.LatLng(-33.95420487864492, 18.377293247291995),
      type: "restaurant",
      title: "Dizzy's Restaurant & Pub"
    },
    {
      position: new google.maps.LatLng(-33.952941552485946, 18.377413193092444),
      type: "restaurant",
      title: "Zenzero"
    },
    {
      position: new google.maps.LatLng(-33.952880268214166, 18.377543748266113),
      type: "restaurant",
      title: "Surfshack"
    },
    {
      position: new google.maps.LatLng(-33.95331149967668, 18.37730078417984),
      type: "restaurant",
      title: "The Raj"
    },
    {
      position: new google.maps.LatLng(-33.95066990407833, 18.378643586376814),
      type: "restaurant",
      title: "Café Caprice"
    }
  ];

  features.forEach((feature) => {
    new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map,
    });
  });

  const legend = document.getElementById("legend");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");

    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
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


//Google maps//

let map;

const capeTown = {
  lat: -33.92444460953283,
  lng: 18.418663466338568
};
const durban = {
  lat: -29.85839784076911,
  lng: 30.972392157919394
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(-33.92444460953283, 18.418663466338568),
    mapTypeId: "roadmap",
  });

  //Icons for map and legend//

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

  //List of locations with type to be matched to respective icons//

  const locations = [{
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
    },
    {
      position: new google.maps.LatLng(-29.84018750698891, 31.03486056708485),
      type: "lodging",
      title: "Blue Waters Hotel"
    },
    {
      position: new google.maps.LatLng(-29.767888029678495, 31.040196127070068),
      type: "lodging",
      title: "Endless Horizons Boutique Hotel"
    },
    {
      position: new google.maps.LatLng(-29.871799905227, 31.051494610052373),
      type: "lodging",
      title: "Point Waterfront Apartments"
    },
    {
      position: new google.maps.LatLng(-29.72742600280119, 31.08776482719978),
      type: "lodging",
      title: "Beverly Hills Hotel"
    },
    {
      position: new google.maps.LatLng(-29.76211511736365, 31.06450694481901),
      type: "lodging",
      title: "Bentley On The Beach"
    },
    {
      position: new google.maps.LatLng(-29.722891290883865, 31.07321000005819),
      type: "lodging",
      title: "Premier Hotel Umhlanga"
    },
    {
      position: new google.maps.LatLng(-29.867256143393877, 31.045852022914712),
      type: "attraction",
      title: "uShaka Marine World"
    },
    {
      position: new google.maps.LatLng(-29.848254350424348, 31.008287327698643),
      type: "attraction",
      title: "Durban Botanic Gardens"
    },
    {
      position: new google.maps.LatLng(-29.868968500400943, 31.04714885733236),
      type: "attraction",
      title: "Zulumoon Gondolas Boat Rides"
    },
    {
      position: new google.maps.LatLng(-29.87536836115765, 30.989191249864753),
      type: "attraction",
      title: "Phansi Museum"
    },
    {
      position: new google.maps.LatLng(-29.835307625261567, 31.034989998793606),
      type: "attraction",
      title: "Suncoast Casino, Hotels And Entertainment"
    },
    {
      position: new google.maps.LatLng(-29.82812161837584, 31.030668991933982),
      type: "attraction",
      title: "I Heart Market"
    },
    {
      position: new google.maps.LatLng(-29.825881555509163, 31.02251484943805),
      type: "restaurant",
      title: "Mozambik Morningside"
    },
    {
      position: new google.maps.LatLng(-29.832025174406677, 31.022794139675547),
      type: "restaurant",
      title: "Durban Curry House"
    },
    {
      position: new google.maps.LatLng(-29.85953517053618, 30.998608554175686),
      type: "restaurant",
      title: "Amsterdam Bar & Grill"
    },
    {
      position: new google.maps.LatLng(-29.859477235223967, 30.998117485508292),
      type: "restaurant",
      title: "Olive & Oil Glenwood"
    },
    {
      position: new google.maps.LatLng(-29.858881456862335, 30.99713025152184),
      type: "restaurant",
      title: "Julio's Continental Restaurant"
    },
    {
      position: new google.maps.LatLng(-29.82746442181384, 31.010949407689445),
      type: "restaurant",
      title: "Spiga"
    }
  ];

  locations.forEach((location) => {
    new google.maps.Marker({
      position: location.position,
      icon: icons[location.type].icon,
      map: map,
    });
  });

  //Create divs for legend icons and populate with gathered info//

  const legend = document.getElementById("legend");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");

    if (window.innerWidth > 768) {
      div.innerHTML = '<img src="' + icon + '"> ' + name;
      legend.appendChild(div);
    }
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

}

window.initMap = initMap;

//Change map center//

function changeCenter(center) {
  map.setCenter(center);
}

//Sends email using emailJS and alerts using Sweet Alert after contact form submission//

function sendMail(contactForm) {
  emailjs.send("service_6akey94", "template_b9vyydh", {
      "from_fname": contactForm.firstname.value,
      "from_lname": contactForm.lastname.value,
      "from_email": contactForm.emailaddress.value,
      "from_contact": contactForm.contactnumber.value,
      "enquiry": contactForm.message.value
    })

    .then(function (response) {
      successMsg();
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      errorMsg();
      console.log('FAILED...', error);
    });

  return false;
}

// Success message modal //

function successMsg() {
  Swal.fire({
    type: "success",
    title: "Success...",
    text: "Message succesfully sent!"
  });
}

// Error message modal //

function errorMsg() {
  Swal.fire({
    type: "error",
    title: "Oops...",
    text: "It appears something has gone wrong, please try again."
  });
}

//Confirmation message after newsletter subscribe button is clicked//

function subscribeMsg() {
  document.getElementById("newsletter").innerHTML = "Thank you for subscribing to our newsletter!";
}
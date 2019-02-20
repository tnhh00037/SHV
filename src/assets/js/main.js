$(window).on("load", function() {
  //chose type
  var list = document.querySelectorAll(".filter>li>img");
  var oldSrc = list.src;
  //get oldUrl:
  function getOldUrl(obj) {
    var oldUrl = [];
    for (let i = 0; i < obj.length; i++) {
      oldUrl.push(obj[i].src);
    }
    return oldUrl;
  }

  var oldUrl = getOldUrl(list);
  // console.log(oldUrl);
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
      console.log("clicked");
      //remove effect
      for (let j = 0; j < list.length; j++) {
        list[j].src = oldUrl[j];
        list[j].classList.remove("chosen");
      }
      list[i].classList.add("chosen");
      let newUrl = "./src/assets/img/items/" + (i + 1) + "-active.png";
      list[i].src = newUrl;
    };
  }

  //display popup
  var baovat = $(".baovat");
  baovat.click(function(e) {
    e.preventDefault();
    var attr = this.getAttribute("data-name");
    for (let i = 0; i < $(".carousel-item").length; i++) {
      if ($(".carousel-item")[i].getAttribute("data-name") == attr) {
        $(".carousel-item")[i].classList.add("active");
      }
    }
    $(".black-div").addClass("show-popup");
    $(".slide-popup").addClass("show-popup");
  });

  //remove slide
  $(".black-div").click(function() {
    console.log("clicked on black");
    $(".black-div").removeClass("show-popup");
    $(".slide-popup").removeClass("show-popup");
    for (let i = 0; i < $(".carousel-item").length; i++) {
      $(".carousel-item")[i].classList.remove("active");
    }
  });

  //locations:
  var storeLocation = {
    locations: [
      {
        address: "281 Lý Thường Kiệt, quận 11",
        lat: 10.77464,
        lng: 106.656784
      },
      {
        address: "18 Hùng Vương",
        lat: 10.758096,
        lng: 106.670449
      }
    ]
  };
  //add g-maps
  function initMap() {
    var myLatLng = {
      lat: storeLocation["locations"][0]["lat"],
      lng: storeLocation["locations"][0]["lng"]
    };
    console.log(myLatLng);
    var map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 15
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: storeLocation["locations"][0]["address"]
    });
  }
  initMap();
  //filter
  $(".select-city").change(function() {
    switch (this.value) {
      case "all":
        $(".store-location").removeClass("store-hide");
        break;
      default:
        for (let i = 0; i < $(".store-location").length; i++) {
          $(".store-location")[i].classList.remove("store-hide");
          if ($(".store-location")[i].getAttribute("data-city") != this.value) {
            $(".store-location")[i].classList.add("store-hide");
            console.log($(".store-location")[i]);
          }
        }
        break;
    }
  });
});

function on(n) {
  carlisted(n);
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function carlisted(n) {
  var pth = "";
  var txt1 = "";
  txt1 = "testtttttttttttttttttttttt";
  if (n == 1) {

    pth = "assets/images/xm_cart_page/bentley-8-litre-1931.jpg";
    txt1 = "Just arrived with us...A beautiful immensely powerful 8 Litre Le Mans style tourer. This car was extensively built up by noted specialists & marque experts NDR Racing who sold the car previosly to the current owner. Absolutely everything has been done to this car with a full engine rebuild & chassis rebuild to like new spec. Since then The car has covered a scant 2000 miles in the sunny climes of Marbella Spain where the current owner has a hoilday home. The car started life as a Thrupp & Maberly landaulette ordered new by one Mrs Ossorio who took delivery in March of 1932. It suffered a fire in the 1950's after which it was rescued & rebuilt into the wonderful tourer we see today. The owner informs us that has been utterly reliable during his tenure & has matching components including chassis, engine axles & F type gear box. An immense long distance Le Mans style fuel tank is installed allowing for very long distance non stop trips. The green fabric body is like new as is the green leather interior with racing style bucket seats.To the rear is a comfortable bench seat.The cars' engine breathes though a triple carb set up giving it very spirited performance indeed with the ability to pass modern cars at motorway speeds with ease. The brakes are strong & progressive as might be expected form a car set up by NDR. The dash is equipped with a full quota of period instrumentaton including large rev counter & speedometer in addition to the various other guages.Twin fuel pumps are fitted activated by separate switches to the right of the steering wheel.The car rides on 21inch wire whels with knock off hubs, shod with brand new michelin tyres extending to the two side mounted spares.Wire covered headlamps give an imposing frontal appeaance of a full on Le Mans style car.A large Fish Tail exhaust completes the ensemble at the other end.The car has a full length new mohair hood under its custom hood bag but we did not put it up & neither do we expect you to.";


  }
  else if (n == 2) {

    pth = "assets/images/xm_cart_page/cadillac-fleetwood-eldorado.jpg";
    txt1 = "testtttttttttttttttttttttt";
  }
  else if (n == 3) {

    pth = "assets/images/xm_cart_page/cadillac1957.jpg";
  }
  else if (n == 4) {

    pth = "assets/images/xm_cart_page/chevrolet-3100.jpg";
    txt1 = "testtttttttttttttttttttttt";
  }
  else if (n == 5) {

    pth = "assets/images/xm_cart_page/chevrolet-gm-1963.jpg";
  }
  else if (n == 6) {

    pth = "assets/images/xm_cart_page/citroen-traction-avant-6-big.jpg";
  }
  else if (n == 7) {

    pth = "assets/images/xm_cart_page/Citroën-Traction-Avant-11-BL-1947.jpg";
  }
  else if (n == 8) {

    pth = "assets/images/xm_cart_page/dodge-charger.jpg";
  }
  else if (n == 9) {

    pth = "assets/images/xm_cart_page/fiat-500d-1968.jpg";
  }
  else if (n == 10) {

    pth = "assets/images/xm_cart_page/fiat-zastava-z-750.jpg";
  }
  else if (n == 11) {

    pth = "assets/images/xm_cart_page/ford_mustang_gt350.jpg";
  }
  else if (n == 12) {

    pth = "assets/images/xm_cart_page/ford-f1000.jpg";
  }
  else if (n == 13) {

    pth = "assets/images/xm_cart_page/jaguar-e-type-1961.jpg";
  }
  else if (n == 14) {

    pth = "assets/images/xm_cart_page/lincoln-cont-mark-III.jpg";
  }
  else if (n == 15) {

    pth = "assets/images/xm_cart_page/lincoln-continental-mark-IV.jpg";
  }
  else if (n == 16) {

    pth = "assets/images/xm_cart_page/mercedes-benz-w123.jpg";
  }
  else if (n == 17) {

    pth = "assets/images/xm_cart_page/moskvitch-408.jpg";
  }
  else if (n == 18) {

    pth = "assets/images/xm_cart_page/renault-r4-1981.jpg";
  }
  else if (n == 19) {

    pth = "assets/images/xm_cart_page/toyota-mr2.jpg";
  }
  else if (n == 20) {

    pth = "assets/images/xm_cart_page/vaz-2101.jpg";
  }
  else if (n == 21) {

    pth = "assets/images/xm_cart_page/volkswagen-ifa-f9.jpg";
  }
  else if (n == 22) {

    pth = "assets/images/xm_cart_page/volkswagen-karmann-ghia.jpg";
  }
  else {
    off();
    return;

  }

  document.getElementById("carimg").src = pth;
  document.getElementById("carspec").innerHTML = txt1;
  document.getElementById("carspec").innerHTML = txt1;

}


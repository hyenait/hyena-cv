// typed animation
var typed = new Typed('.typed', {
  strings: ['Web Developer', 'Web Designer', 'Freelancer'],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
});

var typed = new Typed('.typeded', {
  strings: ['Web Developer', 'Web Designer', 'Freelancer'],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
});

// Animation On Scroll

AOS.init();

// Contact Me area
// click contact me button
$("#con-btn").click(function () {
  var input1 = $("#con-name").val();
  var input2 = $("#con-mail").val();
  var input3 = $("#con-msg").val();

  if (input1 < 5) {
    alert("valid Name");

    return false;
  }

  if (input2 < 10) {
    alert("Enter Mail")
    return false;
  }

  if (input3 < 45) {
    alert("Enter your Message")
    return false;
  }

  return alert("Thanks")

});
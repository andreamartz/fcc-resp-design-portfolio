$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  let typed = new Typed(".typed", {
    strings: ["Web Development.", "Project Management.", "Process Improvement."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });


  $("#navigation li a").click(function(e) {
    e.preventDefault();

    const targetElement = $(this).attr("href");
    const targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });




  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    
    const body = $("body");

    if($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } 
    else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

  // Close mobile menu
  // SOLVED BELOW --> Adds a click handler to the element with the classname .collapse and hides the element
  // with the classname .collapse on click.

  $(document).on("click", function () {
    $(".collapse").collapse("hide");
  })

});

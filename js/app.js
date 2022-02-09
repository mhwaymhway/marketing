

    let screenHeight = $(window).height();
    console.log(screenHeight);
    
    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        if (currentPosition > screenHeight - 100) {
            $(".site-nav").addClass("site-nav-scroll");
        } else {
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
    });

    $(".navbar-toggler").click(function () {
        let result = $(".navbar-toggler").hasClass("collapsed");
        console.log(result);
        
        if (result) {
            $(".menu-icon").removeClass("feather-x");
            $(".menu-icon").addClass("feather-menu");
        } else {
            $(".menu-icon").removeClass("feather-menu");
            $(".menu-icon").addClass("feather-x");
        }
    })

    // let waypoint = $('#home').waypoint(function (direction) {
    //     console.log("I am home");
    //     $(".nav-link").removeClass("current-section");
    //     $(".nav-link[href='#home']").addClass("current-section");
    // }, {
    //     offset: "-1%"
    // });
    // let bb = $('#about').waypoint(function (direction) {
    //     console.log("I am about");
    //     $(".nav-link").removeClass("current-section");
    //      $(".nav-link[href='#about']").addClass("current-section");      
    // }, {
    //     offset: "20%"
    // });
    //  let cc = $('#service').waypoint(function (direction) {
    //      console.log("I am service");
    //      $(".nav-link").removeClass("current-section");
    //      $(".nav-link[href='#service']").addClass("current-section");
      
    // }, {
    //     offset: "20%"
    //  });
    //  let dd = $('#pricing').waypoint(function (direction) {
    //      console.log("I am pricing");
    //      $(".nav-link").removeClass("current-section");
    //      $(".nav-link[href='#pricing']").addClass("current-section");
      
    // }, {
    //     offset: "20%"
    //  });
    // let ee = $('#contact').waypoint(function (direction) {
    //     console.log("I am contact");
    //     $(".nav-link").removeClass("current-section");
    //      $(".nav-link[href='#contact']").addClass("current-section");
      
    // }, {
    //     offset: "20%"
    // });
    
function setActive(current)
{
    $(".nav-link").removeClass("current-section");
        $(`.nav-link[href="#${current}"]`).addClass("current-section");
};
    
function navScroll() {
    
    let currentSection = $('section[id]');

    currentSection.waypoint(function (direction) {
        
        if (direction == "down") {
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
    });
      currentSection.waypoint(function (direction) {
        
        if (direction == "up") {
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
    });
    
}
navScroll();
$(window).on("load", function () {
    $('.loader-container').fadeOut(500, function () {
        $(this).remove;
    });
});
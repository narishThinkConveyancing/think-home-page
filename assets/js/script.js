//aos init
AOS.init();
// Add smooth scrolling to all links
$("#navbarTSSIContent li a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            // window.location.hash = hash;
            $(".navbar .navbar-collapse").removeClass("show");
            if(hash != "#Home"){
              $("div").removeClass("maxMargin");
              $(hash).addClass("maxMargin");
            }
        });
    } // End if
});
//when user scroll
window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    setTimeout(function(){   $("div").removeClass("maxMargin"); console.log("test"); }, 300);
});
//when user scroll
//new WOW().init();

$(".home-accordion").find("[data-toggle='collapse']").click(function(event) {
    var element = $(event.target).closest('.home-card-accordion');
    // Check if body content is show
    window.setTimeout(function(){
        jQuery(".home-card-accordion").each(function() {
            // Change icon
            var eIsShow = jQuery(this).find(".collapse-body").hasClass("show");
            if ( !eIsShow ) {
                jQuery(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            }
        });

        var isShow = element.find(".collapse-body").hasClass("show");
        if ( isShow ) {
            // Change icon
            element.find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
        }
    },500);
});

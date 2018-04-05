var carousels = {

    carousel: function(){
        $(".banner-carousel").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoWidth: true,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            stagePadding: 30,
            smartSpeed: 1000,
        });
    },
    
    projectsCarousel: function(){
        $(".projects-carousel").owlCarousel({
            margin: 16,
            dots: false,
            nav: true,
            navText: ["<", ">"],
            items: 3,
            smartSpeed: 1000,        
        });
    },

    ready: function(){
        carousels.carousel();
        carousels.projectsCarousel();
    }
}

$(document).ready(carousels.ready);    
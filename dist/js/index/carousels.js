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
    
    vitrineCarousel: function(){
        $(".vitrine-carousel").owlCarousel({
            margin: 14,
            dots: false,
            nav: true,
            navText: ["<", ">"],
            items: 4,
            smartSpeed: 1000,        
        });
    },

    ready: function(){
        carousels.carousel();
        carousels.projectsCarousel();
        carousels.vitrineCarousel();
    }
}

$(document).ready(carousels.ready);    
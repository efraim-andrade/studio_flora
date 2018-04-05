var banner = {

    carousel: function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoWidth: true
        });
    },

    ready: function(){
        banner.carousel();
    }
}

$(document).ready(banner.ready);    
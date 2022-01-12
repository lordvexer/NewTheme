// Tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// OwelSlider

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            300: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            },
            1400: {
                items: 8
            }
        }
    })
})
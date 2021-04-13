$(document).ready(function () {
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + "%"
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //image filter

    var $wrapper = $('.portfolio_wrapper');

    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            style: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function (e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    style: 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            });

            e.target.classList.add('active');
        });

    });

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enable: true
        }
    });

    //slick slider

    $('.slider').slick({
        arrows:false,
        autoplay:true
    })
});
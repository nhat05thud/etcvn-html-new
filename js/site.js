(function ($) {
    $(function () {
        initOwlCarousel();
        nonBreakSpaceP();

        $(".top-head .top-head-right .search > img").click(function(){
            $(".top-head .top-head-right .search > form").toggleClass("active");
        });

        $(".search_box .default_option").click(function(){
            if ($(".search_box .dropdown ul").hasClass("active")) {
                $(".search_box .dropdown ul").removeClass("active");
            }
            else {
                $(".search_box .dropdown ul").addClass("active");
            }
        });

        $(".search_box .dropdown ul li").click(function(){
            var text = $(this).text();
            $(".search_box .default_option").text(text);
            $(".search_box .dropdown ul").removeClass("active");
        });
    });
})(jQuery);

function initOwlCarousel() {
    $(".home-news-carousel").owlCarousel({
        margin: 30,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: false,
        loop: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 4
            },
            992: {
                items: 2
            }
        }
    });
    $(".home-document-carousel").owlCarousel({
        margin: 30,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: false,
        loop: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 4
            },
            992: {
                items: 2
            }
        }
    });
    $(".more-news-carousel").owlCarousel({
        margin: 30,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: false,
        loop: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
}


function nonBreakSpaceP() {
    var item = $('.wrap-content').find('p');
    $(item).each(function () {
        if (!$(this).html()) {
            $(this).html("&nbsp;");
        }
    });
}
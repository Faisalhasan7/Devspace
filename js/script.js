$(function () {
  //1. Back to TOp
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  // 2.Back top button fadein fadeout / menu add class
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 200) {
      $(".back-to-top").fadeIn(500);
    } else {
      $(".back-to-top").fadeOut(500);
    }

    if (scrolling > 150) {
      $(".navbar").addClass("navbar-two");
    } else {
      $(".navbar").removeClass("navbar-two");
    }
  });

  //3. Animation scroll js
  var html_body = $("html, body");
  $(".navbar a").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - 50,
          },
          1500
        );
        return false;
      }
    }
  });

  // 4. Veno box
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // close current item clicking on .closeme
  $(document).on("click", ".closeme", function (e) {
    test.VBclose();
  });

  // 5. Initialize Swiper
  var swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    // Autoplay
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 6. Slick Initialize
  $(".responsive").slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  var tpj = jQuery;
  var revapi202;
  tpj(document).ready(function () {
    if (tpj("#rev_slider_202_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_202_1");
    } else {
      revapi202 = tpj("#rev_slider_202_1")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "js/",
          dottedOverlay: "none",
          delay: 5000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
              enable: true,
              style: "zeus",
              tmp:
                '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
              left: {
                container: "slider",
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 35,
              },

              right: {
                container: "slider",
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 35,
              },
            },
            touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 50,
              swipe_direction: "horizontal",
              drag_block_vertical: false,
            },
            bullets: {
              enable: true,
              style: "persephone",
              tmp: "",
              direction: "horizontal",
              rtl: false,

              container: "slider",
              h_align: "center",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 55,
              space: 7,

              hide_onleave: false,
              hide_onmobile: false,
              hide_under: 0,
              hide_over: 9999,
              hide_delay: 200,
              hide_delay_mobile: 1200,
            },
          },
          responsiveLevels: [1140, 1024, 778, 480],
          visibilityLevels: [1140, 1024, 778, 480],
          gridwidth: [1140, 1024, 778, 480],
          gridheight: [700, 700, 600, 600],
          lazyType: "none",
          parallax: {
            type: "scroll",
            origo: "slidercenter",
            speed: 1000,
            levels: [
              5,
              10,
              15,
              20,
              25,
              30,
              35,
              40,
              45,
              46,
              47,
              48,
              49,
              50,
              100,
              55,
            ],
            type: "scroll",
          },
          shadow: 0,
          spinner: "off",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          fullScreenAutoWidth: "off",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "0px",
          disableProgressBar: "on",
          hideThumbsOnMobile: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
          },
        });
    }
  }); /*ready*/
});

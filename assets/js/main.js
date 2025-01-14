var swiperProduct = new Swiper('.swiper-product', {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1500,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    grid: {
        fill: 'row',
        rows: 2,
    },

    navigation: {
        nextEl: '.product-navigation .next',
        prevEl: '.product-navigation .prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 100,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

    }
})

var swiperBlog = new Swiper('.swiper-blog', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.blog-navigation .next',
        prevEl: '.blog-navigation .prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },

    }
})

var swiperBanner = new Swiper('.swiper-banner-img', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find('.banner-img')
                    .attr({
                        'data-swiper-parallax': 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        }
    },


    navigation: {
        nextEl: '.nav-banner .btn-nav-next',
        prevEl: '.nav-banner .btn-nav-prev',
    },
})

var swiperChooseImg = new Swiper('.swiper-choose-img', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find('.img-box')
                    .attr({
                        'data-swiper-parallax': 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        }
    },


    navigation: {
        nextEl: '.nav-choose .btn-nav-next',
        prevEl: '.nav-choose .btn-nav-prev',
    },
    allowTouchMove: false,
    thumbs: {
        swiper: swiperChooseContent,
    },
})

var swiperChooseContent = new Swiper('.swiper-choose-content', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    navigation: {
        nextEl: '.nav-choose .btn-nav-next',
        prevEl: '.nav-choose .btn-nav-prev',
    },
    
})

var swiper2 = new Swiper(".swiper-activities", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    // effect: "fade",
    speed: 1500,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
});


var swiperTour = new Swiper('.swiper-img-tour', {
    slidesPerView: 1,
    speed: 2000,
    // effect: 'fade',
    loop: true,
    parallax: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i])
                    .find('.img')
                    .attr({
                        'data-swiper-parallax': 0.75 * swiper.width
                    });
            }
        },
        resize: function () {
            this.update();
        }
    },
    pagination: {
        el: ".number-slide .swiper-pagination",
        type: "fraction",
    },
})

function spaceTop() {
    var headerH = $('.site-header').height();
    $('.page-wrapper').css('margin-top', headerH)
}
$(document).ready(function(){
    spaceTop()
})

$(window).on('resize', function() {
    spaceTop()
})


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 60, // default
    mobile: true, // default
    live: true // default
})
wow.init();











// var lastScrollTop = 0;
// $(window).scroll(function(event){
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop){
//         $('.site-header').addClass('scroll-down')
//         $('.site-header').removeClass('scroll-up')
//         $('.site-header').addClass('has-scroll')
//         // $('.ticket-detail-menu').removeClass('scroll-up')
//         $('.ticket-content-action').removeClass('scroll-up')
//     } else {
//         $('.site-header').removeClass('scroll-down')
//         $('.site-header').addClass('scroll-up')
//         // $('.ticket-detail-menu').addClass('scroll-up')
//         $('.ticket-content-action').addClass('scroll-up')
//     }
//     if (st < 30) {
//         $('.site-header').removeClass('scroll-down')
//         $('.site-header').removeClass('scroll-up')
//         $('.site-header').removeClass('has-scroll')
//         // $('.ticket-detail-menu').removeClass('scroll-up')
//         $('.ticket-content-action').removeClass('scroll-up')
//     }
//     lastScrollTop = st;
// });


$(document).ready(function () {
	$('.site-header-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        // meanExpand: ['<i class="fal fa-plus"></i>'],
    });
});
$('.ham-btn').on('click', function() {
    $('.menu-mobile-container').addClass('open')
    $('.body-overlay').addClass('opened')
})

$(".mobile__close-btn").on('click', function() {
    $('.menu-mobile-container').removeClass('open')
    $('.body-overlay').removeClass('opened')
})

$(".body-overlay").on('click', function() {
    $('.menu-mobile-container').removeClass('open');
    $('.cart-container').removeClass('open');
    $(this).removeClass('opened');
})

$('.cart-btn').on('click', function() {
    $('.cart-container').addClass('open')
    $('.body-overlay').addClass('opened')
})

$(".cart-close").on('click', function() {
    $('.cart-container').removeClass('open')
    $('.body-overlay').removeClass('opened')
})

$("#search-icon").on('click', function() {
    $('.search-box-form').addClass('open')
})

$('.close-search').on('click', function() {
    $('.search-box-form').removeClass('open')
})

$(document).mouseup(function(e) 
{
    var container = $(".search-box-form");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.removeClass('open');
    }
});


let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
    endDelay: 500 });

  tl.add({
    targets: '.loading-container svg',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 500,
    },'0')
    .add({
        targets: '.loading-container svg *',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        delay: function(el, i) { return i * 50 },
        duration: 1500,
    },'-=1500')
    .add({
        targets: '.loading-container svg *',
        strokeOpacity: [1, 0],
        easing: 'easeInOutCubic',
        duration: 800
    },'-=300')
    .add({
        targets: '.loading-container svg *',
        fillOpacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 1000
    },'-=1650')

$(document).ready(function() {
	setTimeout(() => {
		$('.loading-container').fadeOut(1000)
	}, 4000);
})


$(".qtybutton").on("click", function() {
    var $qtyButton = $(this);
    var oldValue = $qtyButton.parent().find("input").val();
    if ($qtyButton.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $qtyButton.parent().find("input").val(newVal);
});


var swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 1,
    spaceBetween: 50,
    // loop: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    speed: 1500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-new .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
  });

  var $ttSpSliderThumbsSwiper = new Swiper($(".single-product-slider-thumbs").find(".swiper")[0], {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 15,
    preloadImages: false, // Needed for lazy loading
    watchSlidesProgress: true, // Needed for lazy loading (if slidesPerView is "auto" or more than 1)
    speed: 800,
    simulateTouch: true,
    preloadImages: false,

    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },

    navigation: {
        nextEl: ".sps-arrow-next",
        prevEl: ".sps-arrow-prev",
        disabledClass: "sps-arrow-disabled",
    },

    breakpoints: {
        // When window width is 768px or larger
        768: {
            slidesPerView: 5,
        }
    },
});


// Init Swiper (image slider)
// =============
var $ttSpSliderSwiper = new Swiper($(".single-product-slider").find(".swiper")[0], {
    slidesPerView: 1,
    // effect: "fade",
    spaceBetween: 15,

   // Needed for lazy loading
    speed: 800,
    loop: false, // Do not enable loop! "LightGallery" is not recocnize cloned images.

    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
    },

    navigation: {
        nextEl: ".sps-arrow-next",
        prevEl: ".sps-arrow-prev",
        disabledClass: "sps-arrow-disabled",
    },

    thumbs: {
        swiper: $ttSpSliderThumbsSwiper,
    },
});


$(".lightgallery").lightGallery({

    // Please read about gallery options here: http://sachinchoolur.github.io/lightGallery/docs/api.html

    // lightGallery core 
    selector: '.lg-trigger',
    mode: 'lg-fade', // Type of transition between images ('lg-fade' or 'lg-slide').
    height: '100%', // Height of the gallery (ex: '100%' or '300px').
    width: '100%', // Width of the gallery (ex: '100%' or '300px').
    iframeMaxWidth: '100%', // Set maximum width for iframe.
    loop: true, // If false, will disable the ability to loop back to the beginning of the gallery when on the last element.
    speed: 600, // Transition duration (in ms).
    closable: true, // Allows clicks on dimmer to close gallery.
    escKey: true, // Whether the LightGallery could be closed by pressing the "Esc" key.
    keyPress: true, // Enable keyboard navigation.
    hideBarsDelay: 3000, // Delay for hiding gallery controls (in ms).
    controls: true, // If false, prev/next buttons will not be displayed.
    mousewheel: true, // Chane slide on mousewheel.
    download: false, // Enable download button. By default download url will be taken from data-src/href attribute but it supports only for modern browsers. If you want you can provide another url for download via data-download-url.
    counter: true, // Whether to show total number of images and index number of currently displayed image.
    swipeThreshold: 50, // By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev image.
    enableDrag: true, // Enables desktop mouse drag support.
    enableTouch: true, // Enables touch support.
    getCaptionFromTitleOrAlt: false, // Option to get captions from alt or title tags.

    // Thumbnail plugin
    thumbnail: false, // Enable thumbnails for the gallery.
    showThumbByDefault: false, // Show/hide thumbnails by default.
    thumbMargin: 5, // Spacing between each thumbnails.
    toogleThumb: true, // Whether to display thumbnail toggle button.
    enableThumbSwipe: true, // Enables thumbnail touch/swipe support for touch devices.
    exThumbImage: 'data-exthumbnail', // If you want to use external image for thumbnail, add the path of that image inside "data-" attribute and set value of this option to the name of your custom attribute.

    // Autoplay plugin
    autoplay: false, // Enable gallery autoplay.
    autoplayControls: true, // Show/hide autoplay controls.
    pause: 6000, // The time (in ms) between each auto transition.
    progressBar: true, // Enable autoplay progress bar.
    fourceAutoplay: false, // If false autoplay will be stopped after first user action

    // Full Screen plugin
    fullScreen: true, // Enable/Disable fullscreen mode.

    // Zoom plugin
    zoom: false, // Enable/Disable zoom option.
    scale: 0.5, // Value of zoom should be incremented/decremented.
    enableZoomAfter: 50, // Some css styles will be added to the images if zoom is enabled. So it might conflict if you add some custom styles to the images such as the initial transition while opening the gallery. So you can delay adding zoom related styles to the images by changing the value of enableZoomAfter.

    // Video options
    videoMaxWidth: '1400px', // Set limit for video maximal width.

    // Youtube video options
    loadYoutubeThumbnail: true, // You can automatically load thumbnails for youtube videos from youtube by setting loadYoutubeThumbnail true.
    youtubeThumbSize: 'default', // You can specify the thumbnail size by setting respective number: 0, 1, 2, 3, 'hqdefault', 'mqdefault', 'default', 'sddefault', 'maxresdefault'.
    youtubePlayerParams: { // Change youtube player parameters: https://developers.google.com/youtube/player_parameters
        modestbranding: 0,
        showinfo: 1,
        controls: 1
    },

    // Vimeo video options
    loadVimeoThumbnail: true, // You can automatically load thumbnails for vimeo videos from vimeo by setting loadYoutubeThumbnail true.
    vimeoThumbSize: 'thumbnail_medium', // Thumbnail size for vimeo videos: 'thumbnail_large' or 'thumbnail_medium' or 'thumbnail_small'.
    vimeoPlayerParams: { // Change vimeo player parameters: https://developer.vimeo.com/player/embedding#universal-parameters 
        byline : 1,
        portrait : 1,
        title: 1,
        color : 'CCCCCC',
        autopause: 1
    },

    // Hash plugin (unique url for each slides)
    hash: false, // Enable/Disable hash plugin.
    hgalleryId: 1, // Unique id for each gallery. It is mandatory when you use hash plugin for multiple galleries on the same page.

    // Rotate plugin
    rotate: false,

    // Share plugin
    share: false, // Enable/Disable share plugin.
        facebook: true, // Enable Facebook share.
        facebookDropdownText: 'Facebook', // Facebok dropdown text.
        twitter: true, // Enable Twitter share.
        twitterDropdownText: 'Twitter', // Twitter dropdown text.
        googlePlus: true, // Enable Google Plus share.
        googlePlusDropdownText: 'Google+', // Google Plus dropdown text.
        pinterest: true, // Enable Pinterest share.
        pinterestDropdownText: 'Pinterest' // Pinterest dropdown text.

});


// =======================================================================================
	// tt-Tabs
	// =======================================================================================

	$(".tt-tabs").each(function() {
		$(this).find(".tt-tab-btn").on("click", function() {

			// Active/deactivate tab buttons
			var $ttTabButton = $(this);
			var $ttTabs = $ttTabButton.parents(".tt-tabs");

			$ttTabs.find(".tt-tab-btn").removeClass("active");
			$ttTabButton.addClass("active");

			// Show/hide tab content
			var $ttTabName = $ttTabButton.attr("data-content-id");

			$ttTabs.find(".tt-tab-content").removeClass("active");
			$ttTabs.find(".tt-tab-content-wrap #" + $ttTabName).addClass("active");
			
		});
	});


    // ================================================================
	// tt-Accordion
	// ================================================================

	$(".tt-accordion").each(function() {

		// If accordion content has class "is-open"
		$(this).find(".tt-accordion-item").each(function() {
			var $this = $(this);

			if ($this.find(".tt-accordion-content").hasClass("is-open")) {
				$this.addClass("active");
			}
		});

		// Accordion item on click
		$(this).find(".tt-accordion-heading").on("click", function() {
			var $this = $(this);

			if ($this.parents(".tt-accordion-item").hasClass("active")) {
				$this.parents(".tt-accordion-item").removeClass("active");
				$this.next(".tt-accordion-content").slideUp(350);
			} else {
				$this.parent().parent().find(".tt-accordion-item").removeClass("active");
				$this.parent().parent().find(".tt-accordion-content").slideUp(350);
				$this.parents(".tt-accordion-item").toggleClass("active");
				$this.next(".tt-accordion-content").slideToggle(350);
			}
			return false;
		});
	});

  // function myTimer() {
  //   var ending = jQuery("#timer").attr("data-endtime"),
  //       endTime = new Date(ending);
  //   endTime = Date.parse(endTime) / 1000;
  
  //   var now = new Date();
  //   now = Date.parse(now) / 1000;
  
  //   var timeLeft = endTime - now;
  
  //   var days = Math.floor(timeLeft / 86400);
  //   var hours = Math.floor((timeLeft - days * 86400) / 3600);
  //   var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  //   var seconds = Math.floor(
  //     timeLeft - days * 86400 - hours * 3600 - minutes * 60
  //   );
  
  //   // if (days < "10") {
  //   //   days = "0" + days;
  //   // }
  //   if (days < "1") {
  //     days = "0";
  //   }
  //   // if (hours < "10") {
  //   //   hours = "0" + hours;
  //   // }
  //   if (hours < "1") {
  //     hours = "0";
  //   }
  //   // if (minutes < "10") {
  //   //   minutes = "0" + minutes;
  //   // }
  //   if (minutes < "1") {
  //     minutes = "0";
  //   }
  //   // if (seconds < "10") {
  //   //   seconds = "0" + seconds;
  //   // }
  //   if (seconds < "1") {
  //     seconds = "0";
  //   }
  
  //   $("#timer").html(
  //     "<span id='days'>" +
  //     days +
  //     "<span>Days</span></span>" +
  //     "<span id='hours'>" +
  //     hours +
  //     "<span>Hours</span></span>" +
  //     "<span id='minutes'>" +
  //     minutes +
  //     "<span>Mins</span></span>" +
  //     "<span id='seconds'>" +
  //     seconds +
  //     "<span>Secs</span></span>"
  //   );
  // }
  
  // setInterval(function() {
  //   myTimer();
  // }, 1000);

    $('.single-product-color').each(function(){
        var $this = $(this);
        var title = $(".product__label span" ,this).text();
        
        $('.product__color-swatch--sibling-product',this).on('mouseover', function() {
            $(".product__label span" ,$this).html($(this).attr('data-sibling-cutline'));
        })

        $('.product__color-swatches--inner').on('mouseout', function() {
            $(".product__label span" ,$this).html(title);
        })
       
    })

    var direction = 'vertical';
    // var scrollbarClass = 'awd-scrollbar';
        const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('body'),
            smooth: false,
            getSpeed: false,
            getDirection: false,
            direction: direction,
            // smoothMobile: true,
            lerp: 0.1,
            // scrollbarClass: scrollbarClass,
            lenisOptions: {
                // smoothWheel: false,
                smoothTouch: true,
            },
        });
        $('.select-2').select2();

        $(".select-2-no-search").select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.select-2-container')
        });
        // $('.select-box').each(function() {
        //     var $this = $(this)
        //     $('.select-2').select2( {
        //         dropdownParent: $('.drop-box', $this)
        //     });
        // })
    // if ($('body').hasClass('subpage-body')) {
    //     locomotiveScroll.destroy();
    // }
    // const $oldContainer = document.querySelector('.drop-box');
    // locomotiveScroll.removeScrollElements($oldContainer);
        $(window).on('load', function() {
            if ($('body').hasClass('subpage-body')) {
                locomotiveScroll.destroy();
            }
        })
    // const $newContainer = $('.select-box .select-2');
    // var innerScroller = $('.select-2');
    // $('.select-box').on('mouseover', function() {
    //     // locomotiveScroll.addScrollElements($oldContainer);
    // })
    // locomotiveScroll.addScrollElements($newContainer);
    // $('.select-box').on('mouseout', function() {
    //     console.log('a')
    //     locomotiveScroll.start();
    // })
    window.farm = function () {
        "use strict";
      
        function checkRefCode() {
          var url_string = window.location.href;
          var url = new URL(url_string);
          var ref = url.searchParams.get("ref");
          if (ref) setCookie("IR_REF", ref, 30);
        }
        function copyToClipboard(text) {
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val(text).select();
          $temp.focus();
          document.execCommand("copy");
          $temp.remove();
        }
        function validInput() {
          var delay = 0;
          var offset = 150;
          document.addEventListener("invalid", function (e) {
            $(e.target).addClass("invalid");
            $("html, body").animate({
              scrollTop: $($(".invalid")[0]).offset().top - offset
            }, delay);
          }, true);
          document.addEventListener("change", function (e) {
            $(e.target).removeClass("invalid");
          }, true);
        }
        function formatPhone(phone) {
          phone = phone.replaceAll(/\s/g, "").replace(/[^0-9]/gi, "");
          if (phone.charAt(0) != "0") {
            phone = "0" + phone;
          }
          return phone;
        }
        function formatMoney(num) {
          if (num) num = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
          return num + "VND";
        }
        function formatNumber(num) {
          if (num) num = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
          return num;
        }
        function isEmail(email) {
          var re = /\S+@\S+\.\S+/;
          return re.test(email);
        }
        function reloadPage() {
          var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
          setTimeout(function () {
            if (url) return window.location.href = url;
            window.location.reload();
          }, timeout);
        }
        function initValueSelect() {
          $("select[data-value]").each(function () {
            var is_change = 0;
            var value = $(this).data("value");
            if (!value) return;
            if ($(this).attr("name") == "province") {
              value = $(this).find('option:contains("' + value + '")').attr("value");
              is_change = 1;
            }
            $(this).val(value);
            if (is_change) $(this).change();
          });
        }
        function initDatePicker() {
          if ($("#menu_datepicker").length) {
            var init_value = $("#menu_datepicker").data("value");
            $("#menu_datepicker").datepicker({
              regional: "vi",
              dateFormat: "dd-mm-yy",
              autoclose: true,
              minDate: new Date(),
              onSelect: function onSelect(dateText) {
                $("#menu_datepicker").closest("form").submit();
              }
            }).datepicker("setDate", init_value);
          }
        }
        function checkUserHotline() {
          if ($("#modal-change-hotline").length && $("input[name=is_empty_lines]").length) {
            $("#modal-change-hotline").modal("show");
          }
        }
        function userLogin(data, callback) {
          var url = APP_URL + "/api/auth/login";
          $.LoadingOverlay("show");
          $.post(url, data, function (res) {
            return callback(res);
          }).fail(function (xhr, status, error) {
            toastr.error(xhr.responseJSON.message);
          }).always(function () {
            $.LoadingOverlay("hide");
            if (typeof grecaptcha !== "undefined" && typeof grecaptcha_login !== "undefined") {
              grecaptcha.reset(grecaptcha_login);
            }
          });
        }
        function userRegister(data, callback) {
          var url = APP_URL + "/api/auth/register";
          $.LoadingOverlay("show");
          $.post(url, data, function (res) {
            return callback(res);
          }).fail(function (xhr, status, error) {
            toastr.error(xhr.responseJSON.message);
          }).always(function () {
            $.LoadingOverlay("hide");
            if (typeof grecaptcha !== "undefined" && typeof grecaptcha_register !== "undefined") {
              grecaptcha.reset(grecaptcha_register);
            }
          });
        }
        function isValidDate(year, month, day) {
          month = month - 1;
          var d = new Date(year, month, day);
          if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
            return true;
          }
          return false;
        }
        function isDate(str) {
          var timestamp = Date.parse(str);
          if (isNaN(timestamp)) return 0;
          return 1;
        }
        function getAge(date_str) {
          var special_date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var today = special_date && isDate(special_date) ? new Date(special_date) : new Date();
          var dob = new Date(date_str);
          var age = today.getFullYear() - dob.getFullYear();
          if (special_date == "techcombank") {
            return age;
          }
          var m = today.getMonth() - dob.getMonth();
          if (m < 0 || m === 0 && today.getDate() < dob.getDate()) {
            age--;
          }
          return age;
        }
        function setCookie(name, value, days) {
          var expires = "";
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
          }
          var domain = window.location.hostname;
          if (domain.includes("irace.vn")) domain = "irace.vn";
          document.cookie = name + "=" + (value || "") + expires + ";domain=." + domain + ";path=/";
        }
        function getCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(";");
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
        }
        function eraseCookie(name) {
          document.cookie = name + "=; Max-Age=-99999999;";
        }
        return {
          isEmail: isEmail,
          getAge: getAge,
          isDate: isDate,
          formatMoney: formatMoney,
          formatNumber: formatNumber,
          reloadPage: reloadPage,
          initValueSelect: initValueSelect,
          initDatePicker: initDatePicker,
          formatPhone: formatPhone,
          checkUserHotline: checkUserHotline,
          userLogin: userLogin,
          userRegister: userRegister,
          copyToClipboard: copyToClipboard,
          isValidDate: isValidDate,
          validInput: validInput,
          setCookie: setCookie,
          getCookie: getCookie,
          eraseCookie: eraseCookie,
          checkRefCode: checkRefCode
        };
      }();

    if ($(window).width() > 768 && $(".ticket-detail-menu").length) {
        var event_menu_to_top = 0;
        var event_menu_height = $(".ticket-detail-menu").outerHeight(true);
        var sidebar_with = $(".ticket-content-action").width();

        // $(".ticket-content-action").css("width", sidebar_with);
        $(window).scroll(function () {
          var scroll_top = $(window).scrollTop();
          if (!event_menu_to_top) event_menu_to_top = $(".ticket-detail-menu").offset().top;
          var distance = event_menu_to_top - scroll_top;
          if (distance <= 0) {
            // $(".ticket-detail-menu").addClass("fixed");
            // $(".ticket-content").css("margin-top", event_menu_height);
            // $(".ticket-content-action").addClass("fixed");
            // $(".ticket-content-action").css("top", event_menu_height);
          } else {
            // $(".ticket-detail-menu").removeClass("fixed");
            // $(".ticket-content").css("margin-top", 0);
            // $(".ticket-content-action").removeClass("fixed");
            // $(".ticket-content-action").css("top", 0);
          }
        });
        $(window).on('load', function() {
          var subMenu = $('.ticket-detail-menu').outerHeight(true);
        
          $(".ticket-detail-menu").stick_in_parent();
          $(".ticket-content-action").stick_in_parent({
            parent: $("#menu-action-container"),
            offset_top: subMenu,
            
          });
        })
    }
    else if (($(window).width() <= 768 && $(".ticket-detail-menu").length)) {
      $(window).on('load', function() {
   
       
        $(".ticket-detail-menu").stick_in_parent();
       
      })
      var event_menu_to_top = 0;
      $(window).scroll(function () {
        var scroll_top = $(window).scrollTop();
        if (!event_menu_to_top) {
          event_menu_to_top = $(".ticket-content-text").offset().top;
        }
        
        var distance = event_menu_to_top - scroll_top;
        if (distance <= 0) {
          // $(".ticket-detail-menu").addClass("fixed");
          // $(".ticket-content").css("margin-top", event_menu_height);
          $(".ticket-content-action._mobile").addClass("fixed");
          // $(".ticket-content-action").css("top", event_menu_height);
        } else {
          // $(".ticket-detail-menu").removeClass("fixed");
          // $(".ticket-content").css("margin-top", 0);
          // $(".ticket-content-action").removeClass("fixed");
          $(".ticket-content-action._mobile").removeClass("fixed");
          // $(".ticket-content-action").css("top", 0);
        }

        
      });
      
    }
    
    

    

    $(document).ready(function() {
        $('.ticket-detail-menu a').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top - 100
            }, 600, function() {
                    // location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
        });

        $('.ticket-content-price a').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top - 100
            }, 600, function() {
                    // location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
        });
    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Show/hide menu on scroll
        //if (scrollDistance >= 850) {
        //		$('nav').fadeIn("fast");
        //} else {
        //		$('nav').fadeOut("fast");
        //}
    
        // Assign active class to nav links while scolling
        $('.ticket-content-text').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.ticket-detail-menu a.active').removeClass('active');
                $('.ticket-detail-menu a').eq(i).addClass('active');
            }
          
        });
        

        $('.ticket-content').each(function() {
            var bottom = $(window).height() - $(this).height();
            bottom = $(this).offset().top - bottom;
           
            if (bottom <= scrollDistance) {
                $('.ticket-content-action._mobile.fixed').removeClass('fixed');
            }
          
        });



        
    }).scroll();
    

    // $(".item-catalog .select-quantity input[name=quantity]").change(calcGroupPrice);
    $(".item-catalog .add-button").click(function () {
        var item = $(this).closest(".select-quantity");
        var quantity = item.find('input[name="quantity"]').val();
        quantity = quantity * 1;
        quantity += 1;
        item.find('input[name="quantity"]').val(quantity);
        // calcGroupPrice();
    });
    $(".item-catalog .subtract-button").click(function () {
        var item = $(this).closest(".select-quantity");
        var quantity = item.find('input[name="quantity"]').val();
        quantity = quantity * 1;
        if (quantity == 0) return;
        quantity -= 1;
        item.find('input[name="quantity"]').val(quantity);
        // calcGroupPrice();
    });
    // function calcGroupPrice() {
    //     var total_quantity = 0;
    //     var total_price = 0;
    //     var discount_percent = 0;
    //     $("#group .item-catalog").each(function () {
    //       var quantity = $(this).find("input[name=quantity]").val();
    //       if (!quantity) return;
    //       quantity -= 0;
    //       total_quantity += quantity;
    //       var price = $(this).data("price");
    //       total_price += price * quantity;
    //     });
    //     $(".table-discount-group .item-discount-group").each(function () {
    //       var min = $(this).data("min") - 0;
    //       var max = $(this).data("max") - 0;
    //       var from_date = $(this).data("from_date");
    //       var to_date = $(this).data("to_date");
    //       var amount = $(this).data("amount") - 0;
    //       if (total_quantity >= min && total_quantity <= max) {
    //         if (from_date && to_date) {
    //           var current = new Date().getTime();
    //           from_date = new Date(from_date).getTime();
    //           to_date = new Date(to_date).getTime();
    //           if (current >= from_date && current <= to_date) {
    //             discount_percent = amount;
    //           }
    //         } else {
    //           discount_percent = amount;
    //         }
    //       }
    //     });
    //     total_price -= Math.round(total_price * discount_percent / 100);
    //     $(".sub-total-money-group").html(farm.formatMoney(total_price));
    //     if (total_quantity) {
    //       $(".btn-buy-now-group").removeClass("disabled");
    //     } else {
    //       $(".btn-buy-now-group").addClass("disabled");
    //     }
    // }

    // $(".item-catalog .inc").click(function () {
    //     // var item = $(this).closest(".select-quantity");
    //     // var quantity = item.find('input[name="quantity"]').val();
    //     // quantity = quantity * 1;
    //     // quantity += 1;
    //     // item.find('input[name="quantity"]').val(quantity);
    //     var p = $(this).closest(".shop-cart-table-item").data("price")
    //     var box = $(this)
       
    //     calcGroupPriceCheckout(p,box);
        
        
    // });
    // $(".item-catalog .dec").click(function () {
    //     // var item = $(this).closest(".select-quantity");
    //     // var quantity = item.find('input[name="quantity"]').val();
    //     // quantity = quantity * 1;
    //     // if (quantity == 0) return;
    //     // quantity -= 1;
    //     // item.find('input[name="quantity"]').val(quantity);
    //     var p = $(this).closest(".shop-cart-table-item").data("price")
    //     var box = $(this)
    //     calcGroupPriceCheckout(p,box);
        
    // });

    // $(".cart-plus-minus-box").change(function(){
    //     var p = $(this).closest(".shop-cart-table-item").data("price")
    //     var box = $(this)
    //     calcGroupPriceCheckout(p,box);
    // });

    // $(window).on('load', function() {
    //   $(".cart-plus-minus-box").each(function() {
    //     var p = $(this).closest(".shop-cart-table-item").data("price")
    //     var box = $(this)
    //     calcGroupPriceCheckout(p,box);
    //   })
    // })

    // function calcGroupPriceCheckout(p,box) {
    //   var total_quantity = box.parent().find('.cart-plus-minus-box').val();
    //   var total_price = 0;
    //   var discount_percent = 0;

     
      
 
    //   $(".table-discount-group .item-discount-group").each(function () {
    //     var min = $(this).data("min") - 0;
    //     var max = $(this).data("max") - 0;
    //     // var from_date = $(this).data("from_date");
    //     // var to_date = $(this).data("to_date");
    //     var amount = $(this).data("amount") - 0;
    //     if (total_quantity >= min && total_quantity <= max) {
    //       discount_percent = amount;
    //     }

    //     // console.log(total_quantity)
    //     // console.log(min)
    //   });

      
    //   box.closest(".shop-cart-table").prev('.checkout-ticket-info').addClass('a')
      
    //   // console.log(total_quantity)
     
    //   box.closest(".shop-cart-table-item").each(function () {
       
    //     box.closest(".shop-cart-table").prev(".checkout-ticket-info").find('.item-discount-group').each(function () {
    //       var min = $(this).data("min") - 0;
    //       var max = $(this).data("max") - 0;
    //       // var from_date = $(this).data("from_date");
    //       // var to_date = $(this).data("to_date");
    //       var amount = $(this).data("amount") - 0;
    //       if (total_quantity >= min && total_quantity <= max) {
    //         discount_percent = amount;
    //       }
  
          
          
    //     });
    //     var quantity = $(this).find(".cart-plus-minus-box").val();
    //     if (!quantity) return;
    //     quantity -= 0;
    //     total_quantity += quantity;
    //     var price = p;
    //     // console.log(total_quantity)
    //     total_price += price * quantity;
    //     total_price -= Math.round(total_price * discount_percent / 100);
    //     // console.log(total_price)
    
    //     $(".cti-subtotal bdi", this).html(farm.formatMoney(total_price));
    //     // q = total_price
        
    //   });

    //   var sum = 0;
    //   $(".cti-subtotal bdi").each(function(){
    //       sum += parseFloat($(this).text().replace(/[^\d.-]/g, ''));
    //   });

    //   $('.price-total').html(farm.formatMoney(sum));

    //   // console.log(q)

      
      
      
    //   // console.log(total_price)


    //   // if (total_quantity) {
    //   //   $(".btn-buy-now-group").removeClass("disabled");
    //   // } else {
    //   //   $(".btn-buy-now-group").addClass("disabled");
    //   // }
    // }
    // var data = [];
    // var dataInfo = [];
    // var myArray = [];
    // var i = 0;
    // $('.shop-cart-table-item').each(function() {
    //   var $this = $(this)
    //   var ticket = $(this).data('type');
    //   var price = $(this).data('price');
    //   var idT = $(this).attr('id');
  
      
    //   data.push($(this).attr('id'))
    //   // console.log(data)
      
    //   $('.cart-plus-minus-box',this).on('change',function(){
    //     var quantity = $(this).val();
        
    //     if (quantity > 0 && quantity <= 1 ) {
 
    //       $('.list-info-ticket ul').append('<li>' + ticket + '</li>')
    //     } else if (quantity > 1) {
          
    //     } else {

    //     }
    //   })
    //   $(".qtybutton",this).on("click",function() {
        
        
        
        
    //     var ticketInfo = $(".list-info-ticket ul li").attr('data-info')
    //     if($(".list-info-ticket ul li").attr('data-info') !== data) {
    //       // console.log('b')
    //     }

    //     $(".list-info-ticket ul li").each(function() {
    //       dataInfo.push($(".list-info-ticket ul li").attr('data-info'))
    //     })

    //     if( $.inArray(dataInfo, myArray) ==-1 ){
          
          
    //       myArray.push(dataInfo);
    //       console.log(myArray)
          
    //       // dataInfo.push(dataInfo);
    //     } else {
    //       myArray.push(dataInfo);
    //       console.log(myArray)
    //     }
        
     
        
    //     var quantity = $('.cart-plus-minus-box',$this).val()
        
    //     if (quantity > 0 && $.inArray(dataInfo, data) == -1 ) {
    //       // console.log('a')
    //       $('.list-info-ticket ul').append('<li data-info="' + idT + '"' + '>' + ticket + '</li>')
    //       // dataInfo.push($(".list-info-ticket ul li").attr('data-info'))
          
            
    //       // if( $.inArray(dataInfo, myArray) ==-1 ){
    //       //   myArray.push(dataInfo);
    //       //   //do something else
    //       // }
    //     } else if (quantity > 1) {
          
    //     } else {

    //     }
    //     // console.log(myArray)
    //   })
    // })
    
   
// // Steps Javascript

// // all nodes on the progressbar
// let nodes = document.querySelectorAll(".btn-group .btn-step");

// // change totalSteps to be based off of some data rather than DOM
// let totalNodes = nodes.length;

// for (let i = 0; i <= nodes.length; i++) {
  
//   let currNode = nodes[i];
//     if(currNode) {
//       currNode.setAttribute("data-node-index", i);

//       currNode.addEventListener("click", function (e) {
//         e.preventDefault();
//         updateBar(e.target.getAttribute("data-node-index"));
    
//         });
//     }
// }
// function updateBar(targetNodeIndex) {
//   let targetNode;
//   // clear current active and complete for refresh
//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].classList.remove("active");
//     nodes[i].classList.remove("complete");
//   }

//   for (let i = 0; i < nodes.length; i++) {
//     if (i == targetNodeIndex) {
//       targetNode = nodes[i];
//       targetNode.classList.add("active");
//     }
//   }

//   // update node styles
//   for (let i = 0; i < nodes.length; i++) {
//     let currNode = nodes[i];
//     // add complete to any node prior to active node
//     if (currNode.className.indexOf("active") > -1) {
//       for (let j = 0; j < i; j++) {
//         nodes[j].classList.add("complete");
//       }
//     }
//   }
// }


if ($(window).width() > 768 && $(".checkout-section").length) {
  $(window).on('load', function() {
    
  

    $(".checkout-content-action").stick_in_parent({
      parent: $("#menu-checkout-container"),
      offset_top: 15,
      
    });
  })
}

    
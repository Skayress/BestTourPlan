$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  var reviewSlider = new Swiper(".reviews-slider", {
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "*Please specify your name",
          minlength: "Please enter at least 2 characters.",
        },
        phone: {
          required: "*Please specify your phone",
          minlength: "*Please enter at least 10 characters.",
        },
        email: {
          required: "*We need your email address to contact with you",
          email: "*Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
  $(document).ready(function () {
    $(".phone-ru").mask("+7(000) 000-00-00");
  });
  let map = document.querySelector(".map-frame");
  map.addEventListener("mouseover", initMap);
  function initMap() {
    if (map.getAttribute("data-src")) {
      map.setAttribute("src", map.getAttribute("data-src"));
    }
    map.removeEventListener("mouseover", initMap);
  }
});

// Подключение параллакс-эффекта
$(document).ready(function () {
  $(".newsletter").parallax({
      imageSrc: "",
      speed: "0.2",
  });
  AOS.init();
});
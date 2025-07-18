$(document).ready(function () {
  AOS.init();

  const mySwiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 2.5,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // keep autoplay running after user interaction
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2.3,
      },
      992: {
        slidesPerView: 2.3,
      },
    },
  });

  $(".selectbox").on("click", function () {
    $(this).toggleClass("active");
    $("#optionsContainer").toggleClass("show");
  });

  // Set initial selected value on page load
  const selectedValue = $(
    '.optionsContainer input[type="radio"]:checked'
  ).val();
  $(".selected-value").text(selectedValue);

  // Update selected value when radio changes
  $('.optionsContainer input[type="radio"]').on("change", function () {
    const value = $(this).val();
    $(".selected-value").text(value);
    $("#optionsContainer").removeClass("show");
    $(".selectbox").removeClass("active");
  });

  $("#goToSection").on("click", function (e) {
    e.preventDefault(); // prevent default anchor behavior
    $("html, body").animate(
      {
        scrollTop: $("#download-app").offset().top - 100,
      },
      100
    ); 
  });

   $('#custom-amount').on('input', function () {
    // Remove all non-digit characters
    this.value = this.value.replace(/[^0-9]/g, '');
    
    const customValue = $(this).val().trim();

    if (customValue !== '') {
      $('#amount').removeClass('highlighted-input');
    } else {
      $('#amount').addClass('highlighted-input');
    }
  });
});

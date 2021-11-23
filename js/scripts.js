/*!
 * Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function scroll_to(id) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#" + id).offset().top,
  });
}

function readURL(element, target) {
  var file = element.prop("files")[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    target.css("background-image", "url(" + reader.result + ")");
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}

$(function () {
  $("#upload-icon-1").click(function () {
    $("#upload-1").click();
  });
  $("#upload-icon-2").click(function () {
    $("#upload-2").click();
  });
  $("#upload-icon-3").click(function () {
    $("#upload-3").click();
  });

  $("#upload-1").change(function () {
    readURL($(this), $("#img-up-1"));

    if ($(this).val() != "") {
      $("#upload-icon-1").hide();
    } else {
      $("#upload-icon-1").show();
    }
  });

  $("#upload-2").change(function () {
    readURL($(this), $("#img-up-2"));

    if ($(this).val() != "") {
      $("#upload-icon-2").hide();
    } else {
      $("#upload-icon-2").show();
    }
  });

  $("#upload-3").change(function () {
    readURL($(this), $("#img-up-3"));

    if ($(this).val() != "") {
      $("#upload-icon-3").hide();
    } else {
      $("#upload-icon-3").show();
    }
  });
});

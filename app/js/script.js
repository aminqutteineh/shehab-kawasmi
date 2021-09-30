console.log("Wadi al-Joz");

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$("#toggle").click(function () {
  var elem = document.getElementById("overlay"),
    display = window.getComputedStyle(elem, null).getPropertyValue("display");

  if (display == "none") {
    $("#overlay").fadeIn();
  }
  if (display == "block") {
    $("#overlay").fadeOut();
  }
});

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".gallery__grid").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  });
}

$.fn.shuffleChildren = function () {
  $.each(this.get(), function (index, el) {
    var $el = $(el);
    var $find = $el.children();

    $find.sort(function () {
      return 0.5 - Math.random();
    });

    $el.empty();
    $find.appendTo($el);
  });
};

//$(".shuffle").shuffleChildren();

$.featherlight($content, configuration);
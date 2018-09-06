/*$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
  });
});

var element = $(this).siblings(".project-details");
// .is(":visible") will return true if the element is currently invisible
if (element.is(":visible")) {
  element.slideUp();
} else {
  element.slideDown();
}
*/

$(document).ready(function() {
  $(".project-preview").on("mouseover", function() {
    $(this).siblings(".project-details").slideToggle();
  });
});

$(document).ready(function() {
  $(".project-preview").on("mouseout", function() {
    $(this).siblings(".project-details").slideToggle();
  });
});

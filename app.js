const firstDiv = document.querySelector(".content_box.first");

function onFirstDivClick(event) {
  console.log("click");
  if (firstDiv.classList.contains("red")) {
    firstDiv.classList.remove("red");
  } else {
    firstDiv.classList.add("red");
  }
}
firstDiv.addEventListener("click", onFirstDivClick);

// $(document).ready(function() {
//   $(".content_box.first").click(function () {
//     if ($(".content_box.first").hasClass("active")) {
//       $(".content_box.first").removeClass("active");
//     } else {
//       $(".content_box.first").addClass("active");
//     }
//   });
// });

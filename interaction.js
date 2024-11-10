//header
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//accordion
const accordionItems = document.querySelectorAll(".accordion-item");
const images = document.querySelectorAll(".preview-image");

accordionItems.forEach((item, index) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    // Close all accordion items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").style.maxHeight = null;
      }
    });

    // Toggle current accordion item
    const isActive = item.classList.contains("active");
    item.classList.toggle("active");

    if (!isActive) {
      content.style.maxHeight = content.scrollHeight + "px";

      // Hide all images
      images.forEach((img) => {
        img.classList.remove("active");
      });

      // Show corresponding image
      images[index].classList.add("active");
    } else {
      content.style.maxHeight = null;
    }
  });
});

// Open first accordion by default
const firstItem = accordionItems[0];
firstItem.classList.add("active");
firstItem.querySelector(".accordion-content").style.maxHeight =
  firstItem.querySelector(".accordion-content").scrollHeight + "px";
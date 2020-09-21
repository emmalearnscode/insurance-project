// The mobile open navigation icon and click listener
const mobileNavIconOpen = document.querySelector("#js-mobile-nav-icon");

mobileNavIconOpen.addEventListener("click", showHideMobileNav);

// Then mobile close navigation icon click listener
const mobileNavIconClose = document
  .querySelector("#js-mobile-close-icon")
  .addEventListener("click", showHideMobileNav);

// The container for the mobile navigation icon
const mobileNavContainer = document.querySelector(".mobile-menu-container");

// Navigation to show when icon is clicked
const mobileNav = document.querySelector("#js-mobile-nav");

// Scroll event to add the mobile navigation
window.addEventListener("scroll", addMobileMenu);

function addMobileMenu() {
  // If the user have scrolled over or equal to 399 the menu will appear
  if (window.scrollY >= 399) {
    mobileNavContainer.style.position = "fixed";
    mobileNavContainer.style.backgroundColor = "#c5c1c1";
  } else {
    mobileNavContainer.style.position = "absolute";
    mobileNavContainer.style.backgroundColor = "";
  }
}

// Function to show/hide navigation in mobile
function showHideMobileNav(e) {
  if (mobileNav.classList.contains("js-hide-mobile")) {
    // Removes the open menu icon
    e.target.classList.add("js-hide-mobile");

    // Removes the hide mobile class and adds the show class
    mobileNav.classList.remove("js-hide-mobile");
    mobileNav.classList.add("js-show-mobile");

    // Styling for the mobile navigation container
    mobileNavContainer.style.backgroundColor = "rgba(0, 0, 0, .3)";
    mobileNavContainer.style.height = "100vh";
    mobileNavContainer.addEventListener("click", onClickBackgroundClose);

    // Slide in animation for the nav
    mobileNav.style.animation = "nav-slide-in 500ms ease-in";

    // Adds the stop scrolling class to the body element
    document.body.classList.add("stop-scrolling");
  } else {
    // Runs the close menu function
    closeMenu();
  }
}

// ES6 arrow functions
const onClickBackgroundClose = (e) => {
  // Closing the menu if the mobile nav container is clicked
  if (e.target === mobileNavContainer) {
    // Runs the close menu function
    closeMenu();
  }
};

const closeMenu = () => {
  // Slide out animation for the nav
  mobileNav.style.animation = "nav-slide-out 500ms ease-out";

  // Timeout so the animation have time to finnish
  setTimeout(() => {
    // Removes the js-show-mobile class and adds the hide class
    mobileNav.classList.remove("js-show-mobile");
    mobileNav.classList.add("js-hide-mobile");

    // Styles for the mobile nav container
    // Check to see if the navigation is at top or scroll view
    if (window.scrollY >= 399) {
      // Sets background color if its in the scroll view
      mobileNavContainer.style.backgroundColor = "#c5c1c1";
    } else {
      mobileNavContainer.style.backgroundColor = "";
    }
    mobileNavContainer.style.height = "7vh";

    // Removes the stop scrolling class
    document.body.classList.remove("stop-scrolling");

    // Add the open menu icon
    mobileNavIconOpen.classList.remove("js-hide-mobile");
  }, 500);
};

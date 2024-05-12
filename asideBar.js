const customAside = document.querySelector(".customAside");

const allPartElement = document.querySelectorAll(
  ".mainElement,.settingsElement,.accountsElement,.audienceDropdown span,.accountDropdown span"
);
const toggleButton = document.querySelector(".toggleButton i");

const clickSound = document.querySelector(".clickSound");

const toggleSound = document.querySelector(".toggleSound");

Array.from(allPartElement).forEach((ele) => {
  ele.addEventListener("click", (event) => {
    clickSound.play();
    Array.from(allPartElement).forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

toggleButton.addEventListener("click", () => {
  toggleSound.play();

  customAside.classList.toggle("collapseAside");

  document.querySelector(".container").classList.toggle("collapseContainer");

  document
    .querySelector(".infoAboutUser")
    .classList.toggle("collapseInfoAboutUser");

  Array.from(
    document.querySelectorAll(
      ".mainElement span,.settingsElement span,.accountsElement span,.mainElementWithList .dropDownIcon,.userData"
    )
  ).forEach((ele) => {
    ele.classList.toggle("collapseHiddenElement");
  });
  Array.from(
    document.querySelectorAll(".mainPart,.settingPart,.accountPart")
  ).forEach((ele) => {
    ele.classList.toggle("collapsePart");
  });

  document
    .querySelector(".infoAboutUser .userImage img")
    .classList.toggle("collapseInfoImage");

  document
    .querySelector(".toggleButton")
    .classList.toggle("collapseToggleButton");
});

Array.from(document.querySelectorAll(".mainPart .mainElementWithList")).forEach(
  (ele) => {
    ele.addEventListener("click", () => {
      customAside.classList.contains("collapseAside")
        ? null
        : ele.nextElementSibling.classList.toggle("collapseHiddenElement");
      ele.lastElementChild.firstElementChild.classList.toggle("ph-caret-up");
    });
  }
);

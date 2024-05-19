const customAside = document.querySelector(".customAside");

const allPartElement = document.querySelectorAll(
  ".mainElement,.settingsElement,.accountsElement,.audienceDropdown > span,.incomDropdown > span"
);
const toggleButton = document.querySelector(".toggleButton i");

const clickSound = document.querySelector(".clickSound");

const toggleSound = document.querySelector(".toggleSound");

Array.from(allPartElement).forEach((ele) => {
  ele.addEventListener("click", () => {
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
  document
    .querySelector(".toggleButton")
    .classList.toggle("collapseToggleButton");
  document
    .querySelector(".infoAboutUser .userImage img")
    .classList.toggle("collapseInfoImage");
  document.querySelector(".container").classList.toggle("collapseContainer");

  document
    .querySelector(".infoAboutUser")
    .classList.toggle("collapseInfoAboutUser");
  document
    .querySelectorAll(".accountPart,.mainPart,.settingPart")
    .forEach((ele) => {
      ele.classList.toggle("collapsePart");
    });

  Array.from(
    document.querySelectorAll(
      ".mainElement span,.settingsElement span,.accountsElement span,.mainElementWithList .dropDownIcon,.userData"
    )
  ).forEach((ele) => {
    ele.classList.toggle("collapseHiddenElement");
  });
  Array.from(
    document
      .querySelectorAll(".audienceDropdown ,.incomDropdown")
      .forEach((ele) => {
        ele.classList.contains("collapseHiddenElement")
          ? null
          : ele.classList.add("collapseHiddenElement");
      })
  );

  Array.from(
    document.querySelectorAll(".mainPart,.settingPart,.accountPart")
  ).forEach((ele) => {
    ele.classList.toggle("collapsePart");
  });
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

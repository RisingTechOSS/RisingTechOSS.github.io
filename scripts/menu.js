document.addEventListener("DOMContentLoaded", function () {
    const dropdownElems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdownElems, {
      hover: false,
      coverTrigger: false,
      constrainWidth: false,
      alignment: 'left'
    });
    const mobileDropdown = document.querySelectorAll("#mobileDropdown");
    M.Dropdown.init(mobileDropdown, {
      hover: false,
      coverTrigger: false,
      constrainWidth: false,
      alignment: 'left'
    });
});

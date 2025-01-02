document.addEventListener("DOMContentLoaded", function () {
    const dropdownElems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdownElems, {
      hover: false,
      coverTrigger: false,
      constrainWidth: false,
      alignment: 'left'
    });
    const mobileMenuElems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(mobileMenuElems, {
      edge          : 'right',
      closeOnClick  : true,
      draggable     : true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = [
      { selector: 'ul#discover-dropdown li a[href="#discover1"]', src: 'features.html' },
      { selector: 'ul#mobile-dropdown li a[href="#discover1"]', src: 'features.html' },
      { selector: 'ul#discover-dropdown li a[href="#discover2"]', src: 'about.html' },
      { selector: 'ul#mobile-dropdown li a[href="#about1"]', src: 'about.html' },
      { selector: 'a.nav_menu_item[href="#devices"]', src: 'devices.html' },
      { selector: 'ul#mobile-dropdown li a[href="#devices"]', src: 'devices.html' },
      { selector: 'ul#discover-dropdown li a[href="#wiki"]', src: 'wiki.html' },
      { selector: 'ul#mobile-dropdown li a[href="#wiki"]', src: 'wiki.html' },
      { selector: 'a.source_code_btn[href="#download"]', src: 'download.html' }, 
      { selector: 'ul#mobile-dropdown li a[href="#download"]', src: 'download.html' }
    ];
  
    const mainIframe = document.querySelector('iframe:not(.footer)');
  
    links.forEach(link => {
      const element = document.querySelector(link.selector);
      if (element) {
        element.addEventListener('click', function (event) {
          event.preventDefault();
          mainIframe.src = link.src;
        });
      }
    });
  });
  
  function returnToHome() {
    const mainIframe = document.querySelector('iframe:not(.footer)');
    mainIframe.src = 'home.html';
  }
  
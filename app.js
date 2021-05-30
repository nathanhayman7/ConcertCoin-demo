const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const roadmapMenu = document.querySelector('#roadmap-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    // adds highlights class to my menu items//
    if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight')
      homeMenu.classList.remove('highlight')
      roadmapMenu.classList.remove('highlight')
      return
  } else if (window.innerWidth > 960 && scrollPos < 23445) {
    aboutMenu.classList.remove('highlight')
    roadmapMenu.classList.add('highlight')
    return
  }

  if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight')
  }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close Mobile Menu //
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    };
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

window.addEventListener('unlockProtocol.status', function(event) {
    var state = VRDisplayEvent
    // We hide all .unlock-content elements
    document.querySelector('.unlock-content').style.display = "none"
    // We show only the relevant element
    document.querySelectorAll(`.unlock-content.${event.detail.state}`).forEach((element) => {
        element.style.display = "block"
    })
  })
  
  window.addEventListener('unlockProtocol.authenticated', function(event) {
      // event.detail.addresss includes the address of the current user, when known
  })
  
  window.addEventListener('unlockProtocol.transactionSent', function(event) {
      // event.detail.hash includes the hash of the transaction sent
  })
var player = videojs('my-player');





  
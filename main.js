
// Navigation

const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");

const NavFunction = {
  showNavbar: function () {
    $(navbar).children().hide();
    $(navbar).show();
    $(navbar).children().show(300);
    toggle.style.padding = '0 10px';
  },
  hideNavbar: function () {
    $(navbar).children().hide(300);
    setTimeout(() => {
      $(navbar).hide();
    }, 300);
    toggle.style.padding = '0';
  }
};

function showMe() {
  if (navbar.style.display == '' || navbar.style.display == 'none') {
    NavFunction.showNavbar();
  } else {
    NavFunction.hideNavbar();
  }
}

const modal = document.getElementById('modal');

function pop() {
  if (modal.style.display == '' || modal.style.display == 'none') {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}



window.onscroll = function() {
  stickyNavbar();
  reveal();
};

var sticky = menu.offsetTop + 20;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    menu.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    menu.classList.remove("sticky");
  }
  NavFunction.hideNavbar();
}

$(document).mouseup(function (e) {
  if (!$(menu).is(e.target) && $(menu).has(e.target).length === 0 && !$(navbar).is(e.target) && $(navbar).has(e.target).length === 0) {
    NavFunction.hideNavbar();
  }
});









/* Filterable Gallery */

$("[data-fancybox]").fancybox({
  loop: true,
  hash: true,
  transitionEffect: "slide",
  clickContent: function(current, event) {
    return current.type === "image" ? "next" : false;
  }
});

let filters = $('button[class*="control"]')

filters.on("click", function() {
  const filterData = [$(this).data("filter")];
  let filterItem = filterData[0];
  //console.log(filterData);

  // Filter Button
  filters.not(this).removeClass("active");
  $(this).addClass("active");

  // Filter Items
  if(filterItem !== "all") {
    $('li[class*="mix"').filter(function() {
      if ($(this).data("control") !== filterItem) {
        return $(this).hide('slow');
      }else {
        return $(this).show('slow');
      }
    })
  } else {
    $('li[class*="mix"').show('slow');
  }
});






// Reveal on Scroll

const revealElements = document.querySelectorAll('.control, .portfolio-item, .section-content, .card, .contact form, .section');
const windowHeight = window.innerHeight;


function reveal() {
  revealElements.forEach(element => {
    const revealtop = element.getBoundingClientRect().top;
    const revealpoint = 150; // Changed reveal point to a more realistic value

    if (revealtop < windowHeight - revealpoint) {
      element.classList.add('revealed');
    } else {
      element.classList.remove('revealed');
    }
  });
}

function addReveal() {
  revealElements.forEach(element => {
    element.classList.add('reveal');
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");

  // Check for dark mode in localStorage and apply the theme
  if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
  }

  // Event listener to toggle dark mode
  themeToggleButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");

      // Save the user's preference in localStorage
      if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
      } else {
          localStorage.setItem("darkMode", "disabled");
      }
  });
});



/*


// Page Switcher - Dynamic Content

function prefetchPages(pages) {
  pages.forEach(page => {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        cache[page] = data;
      });
  });
}

window.onload = function() {
  addReveal();
  //const initialPage = location.hash ? location.hash.substring(1) + '.html' : 'home.html';
  //loadPage(initialPage, true);
  prefetchPages(['home.html', 'pricing.html', 'profile.html']);
};

window.onpopstate = function(event) {
  if (event.state && event.state.page) {
    const page = event.state.page.endsWith('.html') ? event.state.page : `${event.state.page}.html`;
    loadPage(page, false);
  }
  addReveal();
};

const cache = {};

function loadPage(page, pushState = true) {
  const contentDiv = document.getElementById('content');

  if (cache[page]) {
    contentDiv.innerHTML = cache[page];
    if (pushState) {
      const hash = page.endsWith('.html') ? `#${page.replace('.html', '')}` : `#${page}`;
      history.pushState({ page }, null, hash);
    }
    scrollToHash();
    addReveal();
    return;
  }

  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Unable to load page: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      cache[page] = data;
      contentDiv.innerHTML = data;
      if (pushState) {
        const hash = page.endsWith('.html') ? `#${page.replace('.html', '')}` : `#${page}`;
        history.pushState({ page }, null, hash);
      }
      scrollToHash();
    })
    .catch(error => {
      contentDiv.innerHTML = `<p>${error.message}</p>`;
    });
}

function scrollToHash() {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

*/
document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.getElementById("hero-image");
  const heroContent = document.querySelector(".web-hero-content");
  const heroSection = document.querySelector(".web-hero");

  const observerOptions = {
      root: null,
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              heroSection.style.opacity = 1;
              heroContent.style.animation = "slideInFromLeft 1s forwards";
              heroImage.style.animation = "fadeInImage 1s forwards";
          } else {
              heroSection.style.opacity = 0;
              heroContent.style.animation = "none";
              heroImage.style.animation = "none";
          }
      });
  }, observerOptions);

  observer.observe(heroSection);
});




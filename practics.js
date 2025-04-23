document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const navLinks = document.getElementById("nav-links");

    toggleButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('open');
}

function toggleDropdown(event) {
    event.preventDefault();
    document.getElementById('services-dropdown').classList.toggle('open');
}

function filterProjects(category) {
    let projects = document.querySelectorAll('.portfolio-item');
    let buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const rightSection = document.querySelector(".right-section");
    const portfolioContainer = document.querySelector(".portfolio-container");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    // If there are no items, do nothing
    if (portfolioItems.length === 0) return;

    const itemHeight = portfolioItems[0].offsetHeight + 20; // Item height + gap
    const visibleItems = 3; // Number of visible items at a time
    const totalItems = portfolioItems.length;
    
    // Enable scrollbar and auto-scrolling
    rightSection.style.overflowY = "auto";
    rightSection.style.maxHeight = `${visibleItems * itemHeight}px`;

    // Ensure it stops at the last item properly
    rightSection.addEventListener("scroll", () => {
        const maxScroll = portfolioContainer.scrollHeight - rightSection.clientHeight;

        // Prevent scrolling past the last item
        if (rightSection.scrollTop > maxScroll) {
            rightSection.scrollTop = maxScroll;
        }
    });
});
// Open Popup
// Open popup with selected plan
function openPopup(plan) {
    document.getElementById("service-popup").style.display = "flex";
    document.getElementById("popup-title").innerText = `Select a Service for ${plan}`;
}

// Close popup
function closePopup() {
    document.getElementById("service-popup").style.display = "none";
}
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".portfolio-item");

    items.forEach(item => {
        item.addEventListener("click", function () {
            items.forEach(p => p.classList.remove("active")); // Remove active class from all
            this.classList.add("active"); // Add active class to clicked item
        });
    });
});
function filterProjects(category) {
    const servicePoints = document.querySelectorAll('.service-point');
    const buttons = document.querySelectorAll('.filter-sidebar button');

    // Loop through each service point and hide or show based on the category
    servicePoints.forEach(function (point) {
        if (category === 'all') {
            point.classList.add('active');
        } else {
            if (point.classList.contains(category)) {
                point.classList.add('active');
            } else {
                point.classList.remove('active');
            }
        }
    });

    // Update active state on the filter buttons
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`#${category}`).classList.add('active');
}

function setActive(element) {
    // Remove 'active' class from the previously selected service point
    const activePoint = document.querySelector('.service-point.active');
    if (activePoint) {
        activePoint.classList.remove('active');
    }

    // Add 'active' class to the clicked service point
    element.classList.add('active');
}

// Initialize the page by showing all services and setting the "ALL" filter as active
window.onload = function () {
    filterProjects('all'); // Show all by default
};

// Function to filter projects by category
function filterProjects(category) {
    const allProjects = document.querySelectorAll('.project-item');
    
    // Hide all projects first
    allProjects.forEach(project => {
        project.classList.remove('active');
    });

    if (category === 'all') {
        // Show all projects
        allProjects.forEach(project => {
            project.classList.add('active');
        });
    } else {
        // Show projects that match the selected category
        const filteredProjects = document.querySelectorAll(`.project-item.${category}`);
        filteredProjects.forEach(project => {
            project.classList.add('active');
        });
    }
}


// Get references to the button and the icon
const themeToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

// Check if the user has a preferred theme saved in localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
} else {
    document.body.classList.add("light");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

// Event listener for the theme toggle button
themeToggle.addEventListener("click", () => {
    // Toggle between light and dark classes
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    // Toggle the icon between sun and moon
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark"); // Store the theme preference
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "light"); // Store the theme preference
    }
});


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


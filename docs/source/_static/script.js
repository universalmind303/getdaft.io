document.addEventListener('DOMContentLoaded', function() { 
    document.getElementById("MultimodalID").click();
});

/* Nav Bar */ 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/* End of Nav Bar */   

/* Github Stars */ 

fetch('https://api.github.com/repos/Eventual-Inc/Daft')
.then(response => response.json())
.then(data => {
    const stargazersCount = data.stargazers_count;
    document.getElementById('stargazers-count').innerHTML = `Stars&nbsp;&nbsp;&nbsp;${stargazersCount}`;
})
.catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('stargazers-count').innerHTML = 'Stars&nbsp;&nbsp;&nbsp;----';
});

/* End of Github Stars */ 


/* Use Case */
var tabs = document.querySelectorAll(".tab .title");
var tabContents = document.querySelectorAll(".wrapper-use-cases");
var tabContentsMobile = document.querySelectorAll(".wrapper-use-cases.mobile");

var currentActiveTabId = null; // Track the currently active tab

tabs.forEach(function(tab) {
    tab.addEventListener("click", function(event) {
        event.preventDefault();
        currentActiveTabId = tab.getAttribute("data-target"); // Update the currently active tab ID

        var target = document.getElementById(currentActiveTabId);
        var targetMobile = document.getElementById(currentActiveTabId + "-mobile");

        tabs.forEach(function(t) { t.classList.remove("active"); });
        tab.classList.add("active");

        if (window.innerWidth > 1100) {
            tabContents.forEach(function(tc) { tc.classList.remove("active"); });
            tabContentsMobile.forEach(function(tc) { tc.classList.remove("active"); }); // Deactivate mobile content
            target.classList.add("active");
        } else {
            tabContentsMobile.forEach(function(tc) { tc.classList.remove("active"); });
            tabContents.forEach(function(tc) { tc.classList.remove("active"); }); // Deactivate regular content
            targetMobile.classList.add("active");
        }
    });
});

var wasAbove1100 = window.innerWidth > 1100;

function removeActiveClass() {
    var isAbove1100 = window.innerWidth > 1100;

    if (wasAbove1100 !== isAbove1100 && currentActiveTabId) {
        var target = document.getElementById(currentActiveTabId);
        var targetMobile = document.getElementById(currentActiveTabId + "-mobile");

        if (isAbove1100) {
            tabContentsMobile.forEach(function(tc) { tc.classList.remove("active"); }); // Deactivate mobile content
            target.classList.add("active");
        } else {
            tabContents.forEach(function(tc) { tc.classList.remove("active"); }); // Deactivate regular content
            targetMobile.classList.add("active");
        }

        wasAbove1100 = isAbove1100;
    }
}

removeActiveClass();
window.addEventListener('resize', removeActiveClass);

/* End of Use Case */


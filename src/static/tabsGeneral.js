// Function to open a specific tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove the 'active' class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the selected tab content and mark the button as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    }

    // Automatically open the first tab on page load
    document.addEventListener("DOMContentLoaded", function () {
    // Simulate a click on the first tab button
    document.querySelector(".tablinks").click();
});
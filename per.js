// Function to show the clicked tab and hide other tabs
function openTab(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  let tabcontents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab and add the "active" class to the clicked link
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Set default tab to be opened (Bio)
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.tablinks').click(); // Click on the first tab by default
});

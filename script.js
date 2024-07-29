function openTab(tabId) {
    // Hide all tab contents
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected tab content
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Update tab button states
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.querySelector('.tab-button[onclick="openTab(\'' + tabId + '\')"]').classList.add('active');
}

// document.addEventListener('DOMContentLoaded', () => {
//     const videoContainer = document.querySelector('.video-container');
//     const video = document.getElementById('hover-video');

//     videoContainer.addEventListener('mouseover', () => {
//         video.play();
//     });

//     videoContainer.addEventListener('mouseout', () => {
//         video.pause();
//         video.currentTime = 0; // Reset video to start
//     });
// });
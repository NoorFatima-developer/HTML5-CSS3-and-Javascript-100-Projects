let indicator = document.querySelector(".scroll-indicator .progress");



function updateScrollProgress() {
    // Get the total scrollable height (scrollHeight - clientHeight)
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Calculate scroll percentage, ensuring the width stays between 0% and 100%
    let scrolled = (scrollTop / scrollHeight) * 100;
    scrolled = Math.min(Math.max(scrolled, 0), 100);  // Clamp between 0 and 100

    // Set the width of the progress indicator
    indicator.style.width = `${scrolled}%`;
}

// Attach the scroll and resize event listeners
window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);




document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior

            let link = this.closest("a"); // Find closest <a> tag
            if (!link) return; // Skip if button has no link

            let targetURL = link.getAttribute("href"); // Get href from <a>
            this.classList.add("clicked"); // Add animation class

            setTimeout(() => {
                window.location.href = targetURL; // Navigate after animation
            }, 900); // Delay should match animation duration
        });
    });
});
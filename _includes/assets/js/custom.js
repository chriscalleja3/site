document.addEventListener('DOMContentLoaded', function() {
    var seriesName = "Number of local breeds for which sufficient genetic resources are stored for reconstitution"; // Replace with your series name

    if (document.querySelector('#serieses').textContent === seriesName) {
        document.querySelector('#tab-chartview').style.display = 'none'; // Hide the chart tab
        document.querySelector('#tab-embeddedmapview').style.display = 'block'; // Show the embed tab
    }
});

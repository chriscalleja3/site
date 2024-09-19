$(document).ready(function() {
    // Define your target series
    var targetSeries = 'Number of transboundary breeds (including extinct ones)'; // Ensure this matches exactly

    // Function to check and update visibility
    function updateTabVisibility() {
        var selectedSeries = $('input[name="series"]:checked').val(); // Get the selected series

        console.log('Selected Series:', selectedSeries); // Debugging line
        console.log('Target Series:', targetSeries); // Debugging line

        if (selectedSeries === targetSeries) {
            // Show the map tab and hide the chart tab
            $('#tab-chartview').removeClass('active');
            $('#chartview').removeClass('show active');
            $('#tab-embeddedmapview').addClass('active');
            $('#embedmapview').addClass('show active');
        } else {
            // Show the chart tab and hide the map tab
            $('#tab-chartview').addClass('active');
            $('#chartview').addClass('show active');
            $('#tab-embeddedmapview').removeClass('active');
            $('#embedmapview').removeClass('show active');
        }
    }

    // Initial visibility update
    updateTabVisibility();

    // Update visibility when series selection changes
    $('input[name="series"]').on('change', function() {
        updateTabVisibility();
    });
});

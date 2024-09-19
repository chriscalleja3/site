<script>
$(document).ready(function() {
    // Define your target series and indicator
    var targetSeries = 'Number of local breeds for which sufficient genetic resources are stored for reconstitution'; // Replace with your specific series


    // Function to check and update visibility
    function updateTabVisibility() {
        var selectedSeries = $('input[name="series"]:checked').val(); // Get the selected series

        if (selectedSeries === targetSeries) {
            $('#tab-chartview').hide(); // Replace with your tab selector
            $('#chartview').hide(); // Replace with your view selector
            $('#tab-embeddedmapview').show(); // Replace with your tab selector
            $('#embedmapview').show(); // Replace with your view selector
        } else {
            $('#tab-chartview').show(); // Replace with your tab selector
            $('#chartview').show(); // Replace with your view selector
            $('#tab-embeddedmapview').hide(); // Replace with your tab selector
            $('#embedmapview').hide(); // Replace with your view selector
        }
    }

    // Initial visibility update
    updateTabVisibility();

    // Update visibility when series selection changes
    $('input[name="series"]').on('change', function() {
        updateTabVisibility();
    });
});
</script>

$(document).ready(function() {
    // Define the target series
    var targetSeriesName = "Number of local breeds for which sufficient genetic resources are stored for reconstitution"; // Adjust as needed

    // Function to update tab visibility based on series
    function updateTabVisibility() {
        var seriesSelected = $('input[name="series"]:checked').val(); // Get the selected series

        if (seriesSelected === targetSeriesName) {
            $('#tab-chartview').hide(); // Hide the chart tab
            $('#tab-embeddedmapview').show(); // Show the embed tab
            
        } else {
            $('#tab-chartview').show(); // Show the chart tab
            $('#tab-embeddedmapview').hide(); // Hide the embed tab
        }
    }

    // Initial call to update tab visibility
    updateTabVisibility();

    // Update tab visibility when the series is changed
    $('input[name="series"]').change(function() {
        updateTabVisibility();
    });

    // Allow clicking on the <li> to trigger tab click
    $('.nav-tabs').each(function() {
        var tabsList = $(this);

        tabsList.find('li').click(function(event) {
            if (event.target.tagName === 'LI') {
                $(event.target).find('> button').click();
            }
        });
    });
});

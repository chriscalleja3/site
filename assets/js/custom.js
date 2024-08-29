document.addEventListener('DOMContentLoaded', function() {
    // Function to handle tab visibility based on the selected series
    function handleTabVisibility() {
        var selectedSeriesInput = document.querySelector('input[name="series"]:checked');
        
        if (selectedSeriesInput) {
            var selectedSeries = selectedSeriesInput.value;
            var targetSeriesName = "Number of local breeds for which sufficient genetic resources are stored for reconstitution";

            // Tabs and panes
            var chartTab = document.querySelector('#tab-chartview');
            var mapTab = document.querySelector('#tab-mapview');
            var chartPane = document.querySelector('#chartview');
            var mapPane = document.querySelector('#mapview');

            // First, reset the visibility of all tabs and panes (make sure they are visible)
            if (chartTab) chartTab.style.display = 'block';
            if (mapTab) mapTab.style.display = 'block';
            if (chartPane) chartPane.style.display = 'block';
            if (mapPane) mapPane.style.display = 'block';

            // If the selected series matches the one you want to hide tabs and panes for
            if (selectedSeries === targetSeriesName) {
                if (chartTab) chartTab.style.display = 'none';
                if (mapTab) mapTab.style.display = 'none';
                if (chartPane) chartPane.style.display = 'none';
                if (mapPane) mapPane.style.display = 'none';
            }
        }
    }

    // Attach event listener to all series inputs to handle tab visibility when changed
    var seriesInputs = document.querySelectorAll('input[name="series"]');
    if (seriesInputs.length > 0) {
        seriesInputs.forEach(function(input) {
            input.addEventListener('change', handleTabVisibility);
        });
    }

    // Trigger the tab visibility function on page load to set the correct initial state
    handleTabVisibility();
});

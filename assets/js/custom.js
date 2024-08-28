document.addEventListener('DOMContentLoaded', function() {
    // Select all radio inputs that represent series options
    var seriesInputs = document.querySelectorAll('input[name="series"]');

    if (seriesInputs.length > 0) {
        seriesInputs.forEach(function(input) {
            input.addEventListener('change', function() {
                handleTabVisibility();
            });

            // Trigger the change event on page load for the initially checked series
            if (input.checked) {
                handleTabVisibility();
            }
        });
    }

    function handleTabVisibility() {
        var selectedSeriesInput = document.querySelector('input[name="series"]:checked');
        if (selectedSeriesInput) {
            var selectedSeries = selectedSeriesInput.value;
            var targetSeriesName = "Number of local breeds for which sufficient genetic resources are stored for reconstitution";

            var chartTab = document.querySelector('#tab-chartview');
            var mapTab = document.querySelector('#tab-mapview');
            var chartPane = document.querySelector('#chartview');
            var mapPane = document.querySelector('#mapview');

            // Hide the chart and map tabs and their panes if the selected series matches the target series
            if (selectedSeries === targetSeriesName) {
                if (chartTab) chartTab.style.display = 'none';
                if (mapTab) mapTab.style.display = 'none';
                if (chartPane) chartPane.style.display = 'none';
                if (mapPane) mapPane.style.display = 'none';
            } else {
                // Ensure tabs and panes are shown for other series
                if (chartTab) chartTab.style.display = 'block';
                if (mapTab) mapTab.style.display = 'block';
                if (chartPane) chartPane.style.display = 'block';
                if (mapPane) mapPane.style.display = 'block';
            }
        }
    }
});

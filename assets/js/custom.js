document.addEventListener('DOMContentLoaded', function() {
    // Select all radio inputs that represent series options
    var seriesInputs = document.querySelectorAll('input[name="series"]');

    if (seriesInputs.length > 0) {
        seriesInputs.forEach(function(input) {
            input.addEventListener('change', function() {
                var selectedSeries = input.value;
                var targetSeriesName = "Number of local breeds for which sufficient genetic resources are stored for reconstitution";

                // If the selected series matches the one you want to hide tabs for
                if (selectedSeries === targetSeriesName) {
                    // Hide specific tabs
                     var chartTab = document.querySelector('#tab-chartview');
                     var chartPane = document.querySelector('#chartview');
                     var mapTab = document.querySelector('#tab-mapview');
                     var mapPane = document.querySelector('#mapview');
                     
                     if (chartTab) chartTab.style.display = 'none';
                     if (chartPane) chartPane.style.display = 'none';
                     if (mapTab) mapTab.style.display = 'none';
                     if (mapPane) mapPane.style.display = 'none';
                } else {
                    // Ensure tabs are shown for other series
                     var chartTab = document.querySelector('#tab-chartview');
                     var chartPane = document.querySelector('#chartview');

                     var mapTab = document.querySelector('#tab-mapview');
                     var mapPane = document.querySelector('#mapview');

                     if (chartTab) chartTab.style.display = 'block';
                     if (chartPane) chartPane.style.display = 'block';

                     if (mapTab) mapTab.style.display = 'block';
                     if (mapPane) mapPane.style.display = 'block';
                }
            });

            // Trigger change event on page load to ensure correct tabs are shown
            if (input.checked) {
                input.dispatchEvent(new Event('change'));
            }
        });
    }
});

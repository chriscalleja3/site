document.addEventListener('DOMContentLoaded', function() {
        // Select the series input that is checked (selected by default or by the user)
        var selectedSeriesInput = document.querySelector('input[name="series"]');

        if (selectedSeriesInput) {
            var selectedSeries = selectedSeriesInput.value;
            var targetSeriesName = "Number of local breeds for which sufficient genetic resources are stored for reconstitution";

            // If the selected series matches the one you want to hide tabs and panes for
            if (selectedSeries === targetSeriesName) {
                // Hide specific tabs and their corresponding panes
                var chartTab = document.querySelector('#tab-chartview');
                var chartPane = document.querySelector('#chartview');
                var mapTab = document.querySelector('#tab-mapview');
                var mapPane = document.querySelector('#mapview');

                if (chartTab) chartTab.style.display = 'none';
                if (chartPane) chartPane.style.display = 'none';
                if (mapTab) mapTab.style.display = 'none';
                if (mapPane) mapPane.style.display = 'none';
            }
        }
});

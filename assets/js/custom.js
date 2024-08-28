function handleTabVisibility() {
    var selectedSeries = document.querySelector('input[value="Number of local breeds for which sufficient genetic resources are stored for reconstitution"]);
    if (selectedSeriesInput) {
        

        var targetSeriesName = "Number of local breeds for which sufficient genetic resources are stored for reconstitution";
        console.log('Target Series Name:', targetSeriesName);

        var chartTab = document.querySelector('#tab-chartview');
        var mapTab = document.querySelector('#tab-mapview');
        var chartPane = document.querySelector('#chartview');
        var mapPane = document.querySelector('#mapview');

        // Debug output
        console.log('Chart Tab:', chartTab);
        console.log('Map Tab:', mapTab);
        console.log('Chart Pane:', chartPane);
        console.log('Map Pane:', mapPane);

        if (selectedSeries === targetSeriesName) {
            if (chartTab) chartTab.style.display = 'none';
            if (mapTab) mapTab.style.display = 'none';
            if (chartPane) chartPane.style.display = 'none';
            if (mapPane) mapPane.style.display = 'none';
        } else {
            if (chartTab) chartTab.style.display = 'block';
            if (mapTab) mapTab.style.display = 'block';
            if (chartPane) chartPane.style.display = 'block';
            if (mapPane) mapPane.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Identify the series you want to target
    var seriesNameToHideTabs = "Number of local breeds for which sufficient genetic resources are stored for reconstitution";
    
    // Get the currently selected series from the dropdown
    var selectedSeries = document.querySelector('.indicator-series-selector').value;
    
    // If the selected series matches the one you want to hide tabs for, hide the tabs
    if (selectedSeries === seriesNameToHideTabs) {
        // Hide the Chart tab
        document.querySelector('#tab-chart').style.display = 'none';
        // Hide the Map tab
        document.querySelector('#tab-map').style.display = 'none';
    }
});

$(document).ready(function() {
    // Check if the series contains 'Lakes and rivers seasonal water area (% of total land area)'
    if ($('select.series-selector').val().includes('Lakes and rivers seasonal water area (% of total land area)')) {
        // Hide the Chart tab
        $('.nav-tabs li').each(function() {
            if ($(this).text().trim() === 'Chart') {
                $(this).hide();
            }
        });
        
        // Show only Embed and Table tabs
        $('.nav-tabs li').each(function() {
            if ($(this).text().trim() === 'Embed' || $(this).text().trim() === 'Table') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});

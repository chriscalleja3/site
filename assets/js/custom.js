// Add any custom javascript here.
opensdg.chartTypes.bar = function (info) {
    var config = opensdg.chartTypes.base(info);
    var overrides = {
        type: 'bar',
    };
    
    // Example series identifier; adjust according to actual data
    var targetSeries = 'Number of local breeds for which sufficient genetic resources are stored for reconstitution';

    // Check if the current chart is for the target series
    if (info.series === targetSeries) {
        // Apply specific configurations for the target series
        overrides.options = {
            scales: {
                x: { stacked: true },
                y: {
                    stacked: true,
                    min: -1,
                    max: 1,
                    ticks: {
                        stepSize: 0.5 // Adjust as needed
                    }
                }
            }
        };
    } else if (info.stackedDisaggregation) {
        overrides.options = {
            scales: {
                x: { stacked: true },
                y: { stacked: true },
            }
        };
        // If we have stackedDisaggregation, we need to group datasets into stacks.
        config.data.datasets.forEach(function (dataset) {
            var disaggregation = $.extend({}, dataset.disaggregation);
            // We're going to "stringify" each combination of disaggregations in order
            // to place them in their own "stacks". To place "stacked" disaggregations
            // into the same stack, we set them as "samestack" before stringifying.
            // Note that the string "samestack" is completely arbitrary.
            if (typeof disaggregation[info.stackedDisaggregation] !== 'undefined') {
                disaggregation[info.stackedDisaggregation] = 'samestack';
            }
            // Use the disaggregation as a unique id for each stack.
            dataset.stack = JSON.stringify(disaggregation);
        });
    }
    
    // Manually set the borderWidths to 0 to avoid a weird border effect on the bars.
    config.data.datasets.forEach(function(dataset) {
        dataset.borderWidth = 1;
    });

    // Add these overrides onto the normal config, and return it.
    _.merge(config, overrides);
    return config;
}

opensdg.convertBinaryValue = function (value) {
    if (typeof value === 'string') {
        value = parseInt(value, 10);
    }
    return value; // Return the original value
}
opensdg.chartTypes.binary = function (info) {
    var config = opensdg.chartTypes.base(info);
    var overrides = {
        type: 'bar',  // Force the bar type
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            var label = context.dataset.label || '';
                            // Display 0 instead of -1 for tooltips
                            var value = context.raw === -1 ? 0 : context.raw;
                            label += ': ' + value;
                            return label;
                        },
                    },
                },
            },
            scales: {
                y: {
                    min: -1,
                    max: 1,
                    ticks: {
                        stepSize: 1,  // Ensure only -1, 0, 1 are shown
                        callback: function(value) {
                            return value;
                        },
                    },
                },
            },
        }
    };

    // Tweak the data so that 0 is treated as -1 for rendering purposes
    config.data.datasets = config.data.datasets.map(function(dataset) {
        dataset.data = dataset.data.map(function(value) {
            if (value === 0) {
                return -1;  // Convert 0 to -1 for rendering
            }
            return value;
        });
        return dataset;
    });

    // Manually set the borderWidths to 0 to avoid a weird border effect on the bars.
    config.data.datasets.forEach(function(dataset) {
        dataset.borderWidth = 0;
    });

    // Add these overrides onto the normal config.
    _.merge(config, overrides);
    return config;
};


    // Ensure that the data remains as -1 and 1 without converting 0 to -1.
    config.data.datasets = config.data.datasets.map(function(dataset) {
        dataset.data = dataset.data.map(function(value) {
            return value; // Keep original value
        });
        return dataset;
    });

    // Manually set the borderWidths to 0 to avoid a weird border effect on the bars.
    config.data.datasets.forEach(function(dataset) {
        dataset.borderWidth = 0;
    });

    // Add these overrides onto the normal config.
    _.merge(config, overrides);
    return config;
};

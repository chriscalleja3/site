opensdg.convertBinaryValue = function (value) {
    if (typeof value === 'string') {
        value = parseInt(value, 10);
    }
    return value;
}

opensdg.chartTypes.binary = function (info) {
    var config = opensdg.chartTypes.base(info);
    var overrides = {
        // Force the "bar" type instead of the "binary" type which Chart.js
        // does not recognize.
        type: 'bar',
        // Assign some callbacks to convert 1/-1 to Yes/No.
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            var label = tooltipItem.dataset.label || '';
                            var formattedValue = opensdg.convertBinaryValue(tooltipItem.raw);
                            if (formattedValue === -1){
                                formattedValue = 0;
                            }
                            label += ': ' + formattedValue;
                            return label;
                        },
                    },
                },
            },
            scales: {
                y: {
                    // Set the min/max to -1/1 so that the bars will start from the
                    // middle and either go up (for 1) or down (for -1).
                    min: -1,
                    max: 1,
                    ticks: {
                        callback: opensdg.convertBinaryValue,
                    },
                },
            },
        }
    }

    // Tweak the data so that 0 is treated as -1. This is done so that the bar appears
    // to be pointed down.
    config.data.datasets = config.data.datasets.map(function(dataset) {
        dataset.data = dataset.data.map(function(value) {
            if (value === 0) {
                return -1;
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

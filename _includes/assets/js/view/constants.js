var HIDE_SINGLE_SERIES = {{ site.hide_single_series | default: false }};
var HIDE_SINGLE_UNIT = {{ site.hide_single_unit | default: false }};
var PROXY_PILL = '<span aria-describedby="proxy-description" class="proxy-pill">' + translations.t({{ site.proxy_indicators.label | default: "indicator.proxy" | jsonify }}) + '</span>';
var EUSDG_PILL = '<span aria-describedby="euSDG-description" class="euSDG-pill">' + translations.t({{ site.euSDG_indicators.label | default: "indicator.euSDG" | jsonify }}) + '</span>';

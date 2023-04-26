am4core.useTheme(am4themes_animated);

var config = {
    type: "PieChart",
    radius: "60%",
    hiddenState: {
        properties: {
            opacity: 0
        }
    },
    data: [
        {
            token: "Team",
            value: 500000000
        },
        {
            token: "Pre-Sale",
            value: 3000000000
        },
        {
            token: "LP & Launchpad IDO",
            value: 3000000000
        },
        {
            token: "Farming",
            value: 500000000
        },
        {
            token: "Ecosystem",
            value: 600000000
        },
        {
            token: "DAO & Liquidity",
            value: 1200000000
        },
        {
            token: "Airdrop & Marketing",
            value: 200000000
        }
    ],
    innerRadius: '30%',
    startAngle: 180,
    endAngle: 360,
    series: [
        {
            type: 'PieSeries',
            dataFields: {
                value: 'value',
                category: 'token',
            },
            alignLabels: false,
            slices: {
                cornerRadius: 10,
                innerCornerRadius: 20,
                inert: true,
                hiddenState: {
                    properties: {
                        startAngle: 90,
                        endAngle: 90
                    }
                }
            }
        }
    ],
    //legend: {}
};

var chart = am4core.createFromConfig(
    config,
    "chartdiv",
    am4charts[config.type]
);

chart.series.getIndex(0).labels.template.fill = am4core.color("#fff");

/*
chart.legend.labels.template.fill = am4core.color("#fff");
chart.legend.valueLabels.template.fill = am4core.color("#fff");

chart.legend.itemContainers.template.togglable = false;
chart.legend.itemContainers.template.events.on("hit", function (ev) {
    var slice = ev.target.dataItem.dataContext.slice;
    slice.isActive = !slice.isActive;
});

//chart.series.getIndex(0).labels.template.applyOnClones = true;
//chart.series.getIndex(0).labels.template.fill = am4core.color("#fff");
//chart.titles.template.applyOnClones = true;
//chart.titles.template.fill = am4core.color("#fff");

*/

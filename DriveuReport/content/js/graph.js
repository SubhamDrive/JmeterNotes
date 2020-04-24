/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1.0, "series": [{"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-20", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-21", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-22", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-23", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-24", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-25", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-26", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-27", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-17", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-18", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-19", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-30", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-31", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-32", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-33", "isController": false}, {"data": [[1900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-0", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-34", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-1", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-35", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-36", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-37", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-38", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-28", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-6", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-29", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-7", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-8", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-9", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-2", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-3", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-4", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-5", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-26", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-27", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-24", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-25", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-22", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-23", "isController": false}, {"data": [[1800.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-40", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-20", "isController": false}, {"data": [[2300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-41", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-21", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-28", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-29", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-39", "isController": false}, {"data": [[4500.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-15", "isController": false}, {"data": [[2900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-39", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-16", "isController": false}, {"data": [[2000.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-38", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-29", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-13", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-37", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-28", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-14", "isController": false}, {"data": [[13800.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-36", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-11", "isController": false}, {"data": [[2500.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-35", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-12", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-34", "isController": false}, {"data": [[2300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-33", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-10", "isController": false}, {"data": [[3600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-19", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-17", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-18", "isController": false}, {"data": [[4700.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-42", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-41", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-40", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-29", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-2", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-28", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-3", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-19", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-27", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-4", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-18", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-26", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-5", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-17", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-25", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-6", "isController": false}, {"data": [[1500.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-24", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-7", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-23", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-8", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-22", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-9", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-0", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-1", "isController": false}, {"data": [[28900.0, 1.0]], "isOverall": false, "label": "Test", "isController": true}, {"data": [[2600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-32", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-23", "isController": false}, {"data": [[2100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-31", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-22", "isController": false}, {"data": [[2200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-30", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-21", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-20", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-27", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-26", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-25", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-24", "isController": false}, {"data": [[700.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-18", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-17", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-16", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-15", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-14", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-13", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-12", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-11", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-19", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-21", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-12", "isController": false}, {"data": [[1900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-20", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-11", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-10", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-16", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-15", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-14", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-13", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-5", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-4", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-7", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-6", "isController": false}, {"data": [[5700.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-1", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-0", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-3", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-2", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-10", "isController": false}, {"data": [[1100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-9", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-8", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-2", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-3", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-4", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-5", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-6", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-7", "isController": false}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-8", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-9", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-10", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-11", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-12", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-13", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-14", "isController": false}, {"data": [[1300.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-0", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-15", "isController": false}, {"data": [[1000.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-1", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-16", "isController": false}, {"data": [[6900.0, 1.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 23.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 76.0, "series": [{"data": [[0.0, 76.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 50.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 23.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.58766348E12, "maxY": 1.0, "series": [{"data": [[1.58766354E12, 1.0], [1.58766348E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58766354E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 117.0, "minX": 1.0, "maxY": 28919.0, "series": [{"data": [[1.0, 680.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-20", "isController": false}, {"data": [[1.0, 680.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-20-Aggregated", "isController": false}, {"data": [[1.0, 159.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-21", "isController": false}, {"data": [[1.0, 159.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-21-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-22", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-22-Aggregated", "isController": false}, {"data": [[1.0, 528.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-23", "isController": false}, {"data": [[1.0, 528.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-23-Aggregated", "isController": false}, {"data": [[1.0, 558.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-24", "isController": false}, {"data": [[1.0, 558.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-24-Aggregated", "isController": false}, {"data": [[1.0, 917.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-25", "isController": false}, {"data": [[1.0, 917.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-25-Aggregated", "isController": false}, {"data": [[1.0, 497.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-26", "isController": false}, {"data": [[1.0, 497.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-26-Aggregated", "isController": false}, {"data": [[1.0, 469.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-27", "isController": false}, {"data": [[1.0, 469.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-27-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-17", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-17-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-18", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-18-Aggregated", "isController": false}, {"data": [[1.0, 1439.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-19", "isController": false}, {"data": [[1.0, 1439.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-19-Aggregated", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-30", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-30-Aggregated", "isController": false}, {"data": [[1.0, 640.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-31", "isController": false}, {"data": [[1.0, 640.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-31-Aggregated", "isController": false}, {"data": [[1.0, 168.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-32", "isController": false}, {"data": [[1.0, 168.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-32-Aggregated", "isController": false}, {"data": [[1.0, 329.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-33", "isController": false}, {"data": [[1.0, 329.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-33-Aggregated", "isController": false}, {"data": [[1.0, 1913.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-0", "isController": false}, {"data": [[1.0, 1913.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-0-Aggregated", "isController": false}, {"data": [[1.0, 1292.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-34", "isController": false}, {"data": [[1.0, 1292.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-34-Aggregated", "isController": false}, {"data": [[1.0, 1053.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-1", "isController": false}, {"data": [[1.0, 1053.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-1-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-35", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-35-Aggregated", "isController": false}, {"data": [[1.0, 340.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-36", "isController": false}, {"data": [[1.0, 340.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-36-Aggregated", "isController": false}, {"data": [[1.0, 160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-37", "isController": false}, {"data": [[1.0, 160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-37-Aggregated", "isController": false}, {"data": [[1.0, 326.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-38", "isController": false}, {"data": [[1.0, 326.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-38-Aggregated", "isController": false}, {"data": [[1.0, 2255.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-28", "isController": false}, {"data": [[1.0, 2255.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-28-Aggregated", "isController": false}, {"data": [[1.0, 1232.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-6", "isController": false}, {"data": [[1.0, 1232.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-6-Aggregated", "isController": false}, {"data": [[1.0, 380.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-29", "isController": false}, {"data": [[1.0, 380.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-29-Aggregated", "isController": false}, {"data": [[1.0, 632.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-7", "isController": false}, {"data": [[1.0, 632.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-7-Aggregated", "isController": false}, {"data": [[1.0, 1403.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-8", "isController": false}, {"data": [[1.0, 1403.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-8-Aggregated", "isController": false}, {"data": [[1.0, 614.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-9", "isController": false}, {"data": [[1.0, 614.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-9-Aggregated", "isController": false}, {"data": [[1.0, 1412.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-2", "isController": false}, {"data": [[1.0, 1412.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-2-Aggregated", "isController": false}, {"data": [[1.0, 337.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-3", "isController": false}, {"data": [[1.0, 337.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-3-Aggregated", "isController": false}, {"data": [[1.0, 623.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-4", "isController": false}, {"data": [[1.0, 623.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-4-Aggregated", "isController": false}, {"data": [[1.0, 125.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-5", "isController": false}, {"data": [[1.0, 125.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-5-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-26", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-26-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-27", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-27-Aggregated", "isController": false}, {"data": [[1.0, 327.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-24", "isController": false}, {"data": [[1.0, 327.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-24-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-25", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-25-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-22", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-22-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-23", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-23-Aggregated", "isController": false}, {"data": [[1.0, 1884.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-40", "isController": false}, {"data": [[1.0, 1884.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-40-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-20", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-20-Aggregated", "isController": false}, {"data": [[1.0, 2339.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-41", "isController": false}, {"data": [[1.0, 2339.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-41-Aggregated", "isController": false}, {"data": [[1.0, 164.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-21", "isController": false}, {"data": [[1.0, 164.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-21-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-28", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-28-Aggregated", "isController": false}, {"data": [[1.0, 336.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-29", "isController": false}, {"data": [[1.0, 336.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-29-Aggregated", "isController": false}, {"data": [[1.0, 163.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-39", "isController": false}, {"data": [[1.0, 163.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-39-Aggregated", "isController": false}, {"data": [[1.0, 4515.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/", "isController": false}, {"data": [[1.0, 4515.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-Aggregated", "isController": false}, {"data": [[1.0, 1366.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-15", "isController": false}, {"data": [[1.0, 1366.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-15-Aggregated", "isController": false}, {"data": [[1.0, 2912.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-39", "isController": false}, {"data": [[1.0, 2912.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-39-Aggregated", "isController": false}, {"data": [[1.0, 150.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-16", "isController": false}, {"data": [[1.0, 150.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-16-Aggregated", "isController": false}, {"data": [[1.0, 2021.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-38", "isController": false}, {"data": [[1.0, 2021.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-38-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-29", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-29-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-13", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-13-Aggregated", "isController": false}, {"data": [[1.0, 2296.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-37", "isController": false}, {"data": [[1.0, 2296.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-37-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-28", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-28-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-14", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-14-Aggregated", "isController": false}, {"data": [[1.0, 13802.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/", "isController": false}, {"data": [[1.0, 13802.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-Aggregated", "isController": false}, {"data": [[1.0, 2299.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-36", "isController": false}, {"data": [[1.0, 2299.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-36-Aggregated", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-11", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-11-Aggregated", "isController": false}, {"data": [[1.0, 2507.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-35", "isController": false}, {"data": [[1.0, 2507.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-35-Aggregated", "isController": false}, {"data": [[1.0, 1364.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-12", "isController": false}, {"data": [[1.0, 1364.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-12-Aggregated", "isController": false}, {"data": [[1.0, 971.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-34", "isController": false}, {"data": [[1.0, 971.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-34-Aggregated", "isController": false}, {"data": [[1.0, 2399.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-33", "isController": false}, {"data": [[1.0, 2399.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-33-Aggregated", "isController": false}, {"data": [[1.0, 150.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-10", "isController": false}, {"data": [[1.0, 150.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-10-Aggregated", "isController": false}, {"data": [[1.0, 3685.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/", "isController": false}, {"data": [[1.0, 3685.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-Aggregated", "isController": false}, {"data": [[1.0, 955.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-19", "isController": false}, {"data": [[1.0, 955.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-19-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-17", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-17-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-18", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-18-Aggregated", "isController": false}, {"data": [[1.0, 4771.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-42", "isController": false}, {"data": [[1.0, 4771.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-42-Aggregated", "isController": false}, {"data": [[1.0, 2248.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-41", "isController": false}, {"data": [[1.0, 2248.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-41-Aggregated", "isController": false}, {"data": [[1.0, 2266.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-40", "isController": false}, {"data": [[1.0, 2266.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-40-Aggregated", "isController": false}, {"data": [[1.0, 430.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-29", "isController": false}, {"data": [[1.0, 430.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-29-Aggregated", "isController": false}, {"data": [[1.0, 629.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-2", "isController": false}, {"data": [[1.0, 629.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-2-Aggregated", "isController": false}, {"data": [[1.0, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-28", "isController": false}, {"data": [[1.0, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-28-Aggregated", "isController": false}, {"data": [[1.0, 1331.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-3", "isController": false}, {"data": [[1.0, 1331.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-3-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-19", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-19-Aggregated", "isController": false}, {"data": [[1.0, 303.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-27", "isController": false}, {"data": [[1.0, 303.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-27-Aggregated", "isController": false}, {"data": [[1.0, 630.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-4", "isController": false}, {"data": [[1.0, 630.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-4-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-18", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-18-Aggregated", "isController": false}, {"data": [[1.0, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-26", "isController": false}, {"data": [[1.0, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-26-Aggregated", "isController": false}, {"data": [[1.0, 117.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-5", "isController": false}, {"data": [[1.0, 117.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-5-Aggregated", "isController": false}, {"data": [[1.0, 160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-17", "isController": false}, {"data": [[1.0, 160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-17-Aggregated", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-25", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-25-Aggregated", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-6", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-6-Aggregated", "isController": false}, {"data": [[1.0, 1508.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-24", "isController": false}, {"data": [[1.0, 1508.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-24-Aggregated", "isController": false}, {"data": [[1.0, 629.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-7", "isController": false}, {"data": [[1.0, 629.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-7-Aggregated", "isController": false}, {"data": [[1.0, 639.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-23", "isController": false}, {"data": [[1.0, 639.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-23-Aggregated", "isController": false}, {"data": [[1.0, 642.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-8", "isController": false}, {"data": [[1.0, 642.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-8-Aggregated", "isController": false}, {"data": [[1.0, 315.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-22", "isController": false}, {"data": [[1.0, 315.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-22-Aggregated", "isController": false}, {"data": [[1.0, 634.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-9", "isController": false}, {"data": [[1.0, 634.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-9-Aggregated", "isController": false}, {"data": [[1.0, 1175.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-0", "isController": false}, {"data": [[1.0, 1175.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-0-Aggregated", "isController": false}, {"data": [[1.0, 1035.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-1", "isController": false}, {"data": [[1.0, 1035.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-1-Aggregated", "isController": false}, {"data": [[1.0, 28919.0]], "isOverall": false, "label": "Test", "isController": true}, {"data": [[1.0, 28919.0]], "isOverall": false, "label": "Test-Aggregated", "isController": true}, {"data": [[1.0, 2605.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-32", "isController": false}, {"data": [[1.0, 2605.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-32-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-23", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-23-Aggregated", "isController": false}, {"data": [[1.0, 2184.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-31", "isController": false}, {"data": [[1.0, 2184.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-31-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-22", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-22-Aggregated", "isController": false}, {"data": [[1.0, 2211.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-30", "isController": false}, {"data": [[1.0, 2211.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-30-Aggregated", "isController": false}, {"data": [[1.0, 1168.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-21", "isController": false}, {"data": [[1.0, 1168.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-21-Aggregated", "isController": false}, {"data": [[1.0, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-20", "isController": false}, {"data": [[1.0, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-20-Aggregated", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-27", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-27-Aggregated", "isController": false}, {"data": [[1.0, 156.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-26", "isController": false}, {"data": [[1.0, 156.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-26-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-25", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-25-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-24", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-24-Aggregated", "isController": false}, {"data": [[1.0, 720.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-18", "isController": false}, {"data": [[1.0, 720.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-18-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-17", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-17-Aggregated", "isController": false}, {"data": [[1.0, 308.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-16", "isController": false}, {"data": [[1.0, 308.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-16-Aggregated", "isController": false}, {"data": [[1.0, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-15", "isController": false}, {"data": [[1.0, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-15-Aggregated", "isController": false}, {"data": [[1.0, 164.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-14", "isController": false}, {"data": [[1.0, 164.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-14-Aggregated", "isController": false}, {"data": [[1.0, 286.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-13", "isController": false}, {"data": [[1.0, 286.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-13-Aggregated", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-12", "isController": false}, {"data": [[1.0, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-12-Aggregated", "isController": false}, {"data": [[1.0, 1232.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-11", "isController": false}, {"data": [[1.0, 1232.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-11-Aggregated", "isController": false}, {"data": [[1.0, 538.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-19", "isController": false}, {"data": [[1.0, 538.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-19-Aggregated", "isController": false}, {"data": [[1.0, 335.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-21", "isController": false}, {"data": [[1.0, 335.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-21-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-12", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-12-Aggregated", "isController": false}, {"data": [[1.0, 1928.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-20", "isController": false}, {"data": [[1.0, 1928.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-20-Aggregated", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-11", "isController": false}, {"data": [[1.0, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-11-Aggregated", "isController": false}, {"data": [[1.0, 1260.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-10", "isController": false}, {"data": [[1.0, 1260.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-10-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-16", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-16-Aggregated", "isController": false}, {"data": [[1.0, 1236.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-15", "isController": false}, {"data": [[1.0, 1236.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-15-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-14", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-14-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-13", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-13-Aggregated", "isController": false}, {"data": [[1.0, 172.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-5", "isController": false}, {"data": [[1.0, 172.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-5-Aggregated", "isController": false}, {"data": [[1.0, 1433.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-4", "isController": false}, {"data": [[1.0, 1433.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-4-Aggregated", "isController": false}, {"data": [[1.0, 1270.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-7", "isController": false}, {"data": [[1.0, 1270.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-7-Aggregated", "isController": false}, {"data": [[1.0, 1413.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-6", "isController": false}, {"data": [[1.0, 1413.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-6-Aggregated", "isController": false}, {"data": [[1.0, 5780.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-1", "isController": false}, {"data": [[1.0, 5780.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-1-Aggregated", "isController": false}, {"data": [[1.0, 1140.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-0", "isController": false}, {"data": [[1.0, 1140.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-0-Aggregated", "isController": false}, {"data": [[1.0, 393.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-3", "isController": false}, {"data": [[1.0, 393.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-3-Aggregated", "isController": false}, {"data": [[1.0, 1183.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-2", "isController": false}, {"data": [[1.0, 1183.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-2-Aggregated", "isController": false}, {"data": [[1.0, 653.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-10", "isController": false}, {"data": [[1.0, 653.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-10-Aggregated", "isController": false}, {"data": [[1.0, 1160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-9", "isController": false}, {"data": [[1.0, 1160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-9-Aggregated", "isController": false}, {"data": [[1.0, 963.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-8", "isController": false}, {"data": [[1.0, 963.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-8-Aggregated", "isController": false}, {"data": [[1.0, 1267.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-2", "isController": false}, {"data": [[1.0, 1267.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-2-Aggregated", "isController": false}, {"data": [[1.0, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-3", "isController": false}, {"data": [[1.0, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-3-Aggregated", "isController": false}, {"data": [[1.0, 636.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-4", "isController": false}, {"data": [[1.0, 636.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-4-Aggregated", "isController": false}, {"data": [[1.0, 139.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-5", "isController": false}, {"data": [[1.0, 139.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-5-Aggregated", "isController": false}, {"data": [[1.0, 1345.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-6", "isController": false}, {"data": [[1.0, 1345.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-6-Aggregated", "isController": false}, {"data": [[1.0, 634.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-7", "isController": false}, {"data": [[1.0, 634.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-7-Aggregated", "isController": false}, {"data": [[1.0, 635.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-8", "isController": false}, {"data": [[1.0, 635.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-8-Aggregated", "isController": false}, {"data": [[1.0, 1223.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-9", "isController": false}, {"data": [[1.0, 1223.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-9-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-10", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-10-Aggregated", "isController": false}, {"data": [[1.0, 159.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-11", "isController": false}, {"data": [[1.0, 159.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-11-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-12", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-12-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-13", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-13-Aggregated", "isController": false}, {"data": [[1.0, 1482.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-14", "isController": false}, {"data": [[1.0, 1482.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-14-Aggregated", "isController": false}, {"data": [[1.0, 1337.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-0", "isController": false}, {"data": [[1.0, 1337.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-0-Aggregated", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-15", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-15-Aggregated", "isController": false}, {"data": [[1.0, 1020.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-1", "isController": false}, {"data": [[1.0, 1020.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-1-Aggregated", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-16", "isController": false}, {"data": [[1.0, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-16-Aggregated", "isController": false}, {"data": [[1.0, 6917.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/", "isController": false}, {"data": [[1.0, 6917.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 477.51666666666665, "minX": 1.58766348E12, "maxY": 90129.21666666666, "series": [{"data": [[1.58766354E12, 840.45], [1.58766348E12, 90129.21666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58766354E12, 477.51666666666665], [1.58766348E12, 1959.2166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58766354E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 117.0, "minX": 1.58766348E12, "maxY": 28919.0, "series": [{"data": [[1.58766348E12, 680.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-20", "isController": false}, {"data": [[1.58766348E12, 159.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-21", "isController": false}, {"data": [[1.58766348E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-22", "isController": false}, {"data": [[1.58766348E12, 528.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-23", "isController": false}, {"data": [[1.58766348E12, 558.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-24", "isController": false}, {"data": [[1.58766348E12, 917.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-25", "isController": false}, {"data": [[1.58766348E12, 497.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-26", "isController": false}, {"data": [[1.58766348E12, 469.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-27", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-17", "isController": false}, {"data": [[1.58766348E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-18", "isController": false}, {"data": [[1.58766348E12, 1439.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-19", "isController": false}, {"data": [[1.58766348E12, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-30", "isController": false}, {"data": [[1.58766348E12, 640.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-31", "isController": false}, {"data": [[1.58766348E12, 168.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-32", "isController": false}, {"data": [[1.58766348E12, 329.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-33", "isController": false}, {"data": [[1.58766348E12, 1913.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-0", "isController": false}, {"data": [[1.58766348E12, 1292.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-34", "isController": false}, {"data": [[1.58766354E12, 1053.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-1", "isController": false}, {"data": [[1.58766348E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-35", "isController": false}, {"data": [[1.58766348E12, 340.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-36", "isController": false}, {"data": [[1.58766348E12, 160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-37", "isController": false}, {"data": [[1.58766348E12, 326.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-38", "isController": false}, {"data": [[1.58766348E12, 2255.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-28", "isController": false}, {"data": [[1.58766354E12, 1232.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-6", "isController": false}, {"data": [[1.58766348E12, 380.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-29", "isController": false}, {"data": [[1.58766348E12, 632.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-7", "isController": false}, {"data": [[1.58766354E12, 1403.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-8", "isController": false}, {"data": [[1.58766354E12, 614.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-9", "isController": false}, {"data": [[1.58766354E12, 1412.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-2", "isController": false}, {"data": [[1.58766348E12, 337.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-3", "isController": false}, {"data": [[1.58766348E12, 623.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-4", "isController": false}, {"data": [[1.58766348E12, 125.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-5", "isController": false}, {"data": [[1.58766354E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-26", "isController": false}, {"data": [[1.58766354E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-27", "isController": false}, {"data": [[1.58766354E12, 327.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-24", "isController": false}, {"data": [[1.58766354E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-25", "isController": false}, {"data": [[1.58766354E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-22", "isController": false}, {"data": [[1.58766354E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-23", "isController": false}, {"data": [[1.58766348E12, 1884.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-40", "isController": false}, {"data": [[1.58766354E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-20", "isController": false}, {"data": [[1.58766348E12, 2339.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-41", "isController": false}, {"data": [[1.58766354E12, 164.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-21", "isController": false}, {"data": [[1.58766354E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-28", "isController": false}, {"data": [[1.58766354E12, 336.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-29", "isController": false}, {"data": [[1.58766348E12, 163.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-39", "isController": false}, {"data": [[1.58766354E12, 4515.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/", "isController": false}, {"data": [[1.58766354E12, 1366.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-15", "isController": false}, {"data": [[1.58766348E12, 2912.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-39", "isController": false}, {"data": [[1.58766354E12, 150.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-16", "isController": false}, {"data": [[1.58766348E12, 2021.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-38", "isController": false}, {"data": [[1.58766348E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-29", "isController": false}, {"data": [[1.58766354E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-13", "isController": false}, {"data": [[1.58766348E12, 2296.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-37", "isController": false}, {"data": [[1.58766348E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-28", "isController": false}, {"data": [[1.58766354E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-14", "isController": false}, {"data": [[1.58766348E12, 13802.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/", "isController": false}, {"data": [[1.58766348E12, 2299.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-36", "isController": false}, {"data": [[1.58766354E12, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-11", "isController": false}, {"data": [[1.58766348E12, 2507.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-35", "isController": false}, {"data": [[1.58766354E12, 1364.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-12", "isController": false}, {"data": [[1.58766348E12, 971.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-34", "isController": false}, {"data": [[1.58766348E12, 2399.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-33", "isController": false}, {"data": [[1.58766354E12, 150.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-10", "isController": false}, {"data": [[1.58766348E12, 3685.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/", "isController": false}, {"data": [[1.58766354E12, 955.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-19", "isController": false}, {"data": [[1.58766354E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-17", "isController": false}, {"data": [[1.58766354E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-18", "isController": false}, {"data": [[1.58766348E12, 4771.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-42", "isController": false}, {"data": [[1.58766348E12, 2248.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-41", "isController": false}, {"data": [[1.58766348E12, 2266.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-40", "isController": false}, {"data": [[1.58766348E12, 430.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-29", "isController": false}, {"data": [[1.58766348E12, 629.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-2", "isController": false}, {"data": [[1.58766348E12, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-28", "isController": false}, {"data": [[1.58766348E12, 1331.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-3", "isController": false}, {"data": [[1.58766348E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-19", "isController": false}, {"data": [[1.58766348E12, 303.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-27", "isController": false}, {"data": [[1.58766348E12, 630.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-4", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-18", "isController": false}, {"data": [[1.58766348E12, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-26", "isController": false}, {"data": [[1.58766348E12, 117.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-5", "isController": false}, {"data": [[1.58766348E12, 160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-17", "isController": false}, {"data": [[1.58766348E12, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-25", "isController": false}, {"data": [[1.58766348E12, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-6", "isController": false}, {"data": [[1.58766348E12, 1508.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-24", "isController": false}, {"data": [[1.58766348E12, 629.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-7", "isController": false}, {"data": [[1.58766348E12, 639.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-23", "isController": false}, {"data": [[1.58766348E12, 642.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-8", "isController": false}, {"data": [[1.58766348E12, 315.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-22", "isController": false}, {"data": [[1.58766348E12, 634.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-9", "isController": false}, {"data": [[1.58766348E12, 1175.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-0", "isController": false}, {"data": [[1.58766348E12, 1035.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-1", "isController": false}, {"data": [[1.58766348E12, 28919.0]], "isOverall": false, "label": "Test", "isController": true}, {"data": [[1.58766348E12, 2605.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-32", "isController": false}, {"data": [[1.58766348E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-23", "isController": false}, {"data": [[1.58766348E12, 2184.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-31", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-22", "isController": false}, {"data": [[1.58766348E12, 2211.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-30", "isController": false}, {"data": [[1.58766348E12, 1168.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-21", "isController": false}, {"data": [[1.58766348E12, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-20", "isController": false}, {"data": [[1.58766348E12, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-27", "isController": false}, {"data": [[1.58766348E12, 156.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-26", "isController": false}, {"data": [[1.58766348E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-25", "isController": false}, {"data": [[1.58766348E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-24", "isController": false}, {"data": [[1.58766348E12, 720.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-18", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-17", "isController": false}, {"data": [[1.58766348E12, 308.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-16", "isController": false}, {"data": [[1.58766348E12, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-15", "isController": false}, {"data": [[1.58766348E12, 164.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-14", "isController": false}, {"data": [[1.58766348E12, 286.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-13", "isController": false}, {"data": [[1.58766348E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-12", "isController": false}, {"data": [[1.58766348E12, 1232.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-11", "isController": false}, {"data": [[1.58766348E12, 538.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-19", "isController": false}, {"data": [[1.58766348E12, 335.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-21", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-12", "isController": false}, {"data": [[1.58766348E12, 1928.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-20", "isController": false}, {"data": [[1.58766348E12, 152.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-11", "isController": false}, {"data": [[1.58766348E12, 1260.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-10", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-16", "isController": false}, {"data": [[1.58766348E12, 1236.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-15", "isController": false}, {"data": [[1.58766348E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-14", "isController": false}, {"data": [[1.58766348E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-13", "isController": false}, {"data": [[1.58766348E12, 172.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-5", "isController": false}, {"data": [[1.58766348E12, 1433.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-4", "isController": false}, {"data": [[1.58766348E12, 1270.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-7", "isController": false}, {"data": [[1.58766348E12, 1413.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-6", "isController": false}, {"data": [[1.58766348E12, 5780.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-1", "isController": false}, {"data": [[1.58766348E12, 1140.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-0", "isController": false}, {"data": [[1.58766348E12, 393.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-3", "isController": false}, {"data": [[1.58766348E12, 1183.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-2", "isController": false}, {"data": [[1.58766348E12, 653.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-10", "isController": false}, {"data": [[1.58766348E12, 1160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-9", "isController": false}, {"data": [[1.58766348E12, 963.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-8", "isController": false}, {"data": [[1.58766348E12, 1267.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-2", "isController": false}, {"data": [[1.58766348E12, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-3", "isController": false}, {"data": [[1.58766348E12, 636.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-4", "isController": false}, {"data": [[1.58766348E12, 139.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-5", "isController": false}, {"data": [[1.58766348E12, 1345.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-6", "isController": false}, {"data": [[1.58766348E12, 634.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-7", "isController": false}, {"data": [[1.58766348E12, 635.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-8", "isController": false}, {"data": [[1.58766348E12, 1223.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-9", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-10", "isController": false}, {"data": [[1.58766348E12, 159.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-11", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-12", "isController": false}, {"data": [[1.58766348E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-13", "isController": false}, {"data": [[1.58766348E12, 1482.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-14", "isController": false}, {"data": [[1.58766348E12, 1337.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-0", "isController": false}, {"data": [[1.58766348E12, 155.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-15", "isController": false}, {"data": [[1.58766348E12, 1020.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-1", "isController": false}, {"data": [[1.58766348E12, 154.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-16", "isController": false}, {"data": [[1.58766348E12, 6917.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58766354E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.58766348E12, "maxY": 4771.0, "series": [{"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-20", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-21", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-22", "isController": false}, {"data": [[1.58766348E12, 348.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-23", "isController": false}, {"data": [[1.58766348E12, 340.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-24", "isController": false}, {"data": [[1.58766348E12, 643.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-25", "isController": false}, {"data": [[1.58766348E12, 323.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-26", "isController": false}, {"data": [[1.58766348E12, 469.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-27", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-17", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-18", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-19", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-30", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-31", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-32", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-33", "isController": false}, {"data": [[1.58766348E12, 1560.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-0", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-34", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-1", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-35", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-36", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-37", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-38", "isController": false}, {"data": [[1.58766348E12, 174.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-28", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-6", "isController": false}, {"data": [[1.58766348E12, 380.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-29", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-7", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-8", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-9", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-2", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-3", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-4", "isController": false}, {"data": [[1.58766348E12, 125.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-5", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-26", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-27", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-24", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-25", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-22", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-23", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-40", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-20", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-41", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-21", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-28", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-29", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-39", "isController": false}, {"data": [[1.58766354E12, 1560.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-15", "isController": false}, {"data": [[1.58766348E12, 2314.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-39", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-16", "isController": false}, {"data": [[1.58766348E12, 2021.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-38", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-29", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-13", "isController": false}, {"data": [[1.58766348E12, 2296.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-37", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-28", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-14", "isController": false}, {"data": [[1.58766348E12, 950.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/", "isController": false}, {"data": [[1.58766348E12, 2299.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-36", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-11", "isController": false}, {"data": [[1.58766348E12, 2507.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-35", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-12", "isController": false}, {"data": [[1.58766348E12, 971.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-34", "isController": false}, {"data": [[1.58766348E12, 2399.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-33", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-10", "isController": false}, {"data": [[1.58766348E12, 690.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-19", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-17", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-18", "isController": false}, {"data": [[1.58766348E12, 4771.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-42", "isController": false}, {"data": [[1.58766348E12, 2248.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-41", "isController": false}, {"data": [[1.58766348E12, 1510.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-40", "isController": false}, {"data": [[1.58766348E12, 185.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-29", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-2", "isController": false}, {"data": [[1.58766348E12, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-28", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-3", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-19", "isController": false}, {"data": [[1.58766348E12, 303.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-27", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-4", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-18", "isController": false}, {"data": [[1.58766348E12, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-26", "isController": false}, {"data": [[1.58766348E12, 115.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-5", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-17", "isController": false}, {"data": [[1.58766348E12, 161.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-25", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-6", "isController": false}, {"data": [[1.58766348E12, 1508.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-24", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-7", "isController": false}, {"data": [[1.58766348E12, 639.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-23", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-8", "isController": false}, {"data": [[1.58766348E12, 315.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-22", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-9", "isController": false}, {"data": [[1.58766348E12, 690.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-0", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-1", "isController": false}, {"data": [[1.58766348E12, 4205.0]], "isOverall": false, "label": "Test", "isController": true}, {"data": [[1.58766348E12, 2605.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-32", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-23", "isController": false}, {"data": [[1.58766348E12, 469.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-31", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-22", "isController": false}, {"data": [[1.58766348E12, 729.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-30", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-21", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-20", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-27", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-26", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-25", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-24", "isController": false}, {"data": [[1.58766348E12, 323.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-18", "isController": false}, {"data": [[1.58766348E12, 153.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-17", "isController": false}, {"data": [[1.58766348E12, 308.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-16", "isController": false}, {"data": [[1.58766348E12, 157.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-15", "isController": false}, {"data": [[1.58766348E12, 164.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-14", "isController": false}, {"data": [[1.58766348E12, 285.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-13", "isController": false}, {"data": [[1.58766348E12, 151.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-12", "isController": false}, {"data": [[1.58766348E12, 1232.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-11", "isController": false}, {"data": [[1.58766348E12, 165.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-19", "isController": false}, {"data": [[1.58766348E12, 335.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-21", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-12", "isController": false}, {"data": [[1.58766348E12, 663.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-20", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-11", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-10", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-16", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-15", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-14", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-13", "isController": false}, {"data": [[1.58766348E12, 170.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-5", "isController": false}, {"data": [[1.58766348E12, 1433.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-4", "isController": false}, {"data": [[1.58766348E12, 1270.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-7", "isController": false}, {"data": [[1.58766348E12, 1413.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-6", "isController": false}, {"data": [[1.58766348E12, 4505.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-1", "isController": false}, {"data": [[1.58766348E12, 950.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-0", "isController": false}, {"data": [[1.58766348E12, 197.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-3", "isController": false}, {"data": [[1.58766348E12, 1183.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-2", "isController": false}, {"data": [[1.58766348E12, 653.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-10", "isController": false}, {"data": [[1.58766348E12, 1160.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-9", "isController": false}, {"data": [[1.58766348E12, 786.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-8", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-2", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-3", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-4", "isController": false}, {"data": [[1.58766348E12, 137.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-5", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-6", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-7", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-8", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-9", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-10", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-11", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-12", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-13", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-14", "isController": false}, {"data": [[1.58766348E12, 1005.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-0", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-15", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-1", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-16", "isController": false}, {"data": [[1.58766348E12, 1005.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58766354E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.58766348E12, "maxY": 4169.0, "series": [{"data": [[1.58766348E12, 514.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-20", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-21", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-22", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-23", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-24", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-25", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-26", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-27", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-17", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-18", "isController": false}, {"data": [[1.58766348E12, 1079.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-19", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-30", "isController": false}, {"data": [[1.58766348E12, 489.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-31", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-32", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-33", "isController": false}, {"data": [[1.58766348E12, 1187.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-0", "isController": false}, {"data": [[1.58766348E12, 954.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-34", "isController": false}, {"data": [[1.58766354E12, 802.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-1", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-35", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-36", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-37", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-38", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-28", "isController": false}, {"data": [[1.58766354E12, 926.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-6", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-29", "isController": false}, {"data": [[1.58766348E12, 482.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-7", "isController": false}, {"data": [[1.58766354E12, 1067.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-8", "isController": false}, {"data": [[1.58766354E12, 464.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-9", "isController": false}, {"data": [[1.58766354E12, 1061.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-2", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-3", "isController": false}, {"data": [[1.58766348E12, 472.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-4", "isController": false}, {"data": [[1.58766348E12, 72.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-5", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-26", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-27", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-24", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-25", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-22", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-23", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-40", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-20", "isController": false}, {"data": [[1.58766348E12, 2001.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-41", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-21", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-28", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-29", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-39", "isController": false}, {"data": [[1.58766354E12, 1187.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/", "isController": false}, {"data": [[1.58766354E12, 1050.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-15", "isController": false}, {"data": [[1.58766348E12, 1479.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-39", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-16", "isController": false}, {"data": [[1.58766348E12, 1619.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-38", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-29", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-13", "isController": false}, {"data": [[1.58766348E12, 1903.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-37", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-28", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-14", "isController": false}, {"data": [[1.58766348E12, 735.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/", "isController": false}, {"data": [[1.58766348E12, 1908.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-36", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-11", "isController": false}, {"data": [[1.58766348E12, 1946.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-35", "isController": false}, {"data": [[1.58766354E12, 1031.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-12", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-34", "isController": false}, {"data": [[1.58766348E12, 2039.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-33", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-10", "isController": false}, {"data": [[1.58766348E12, 493.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/", "isController": false}, {"data": [[1.58766354E12, 684.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-19", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-17", "isController": false}, {"data": [[1.58766354E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-18", "isController": false}, {"data": [[1.58766348E12, 4169.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-42", "isController": false}, {"data": [[1.58766348E12, 1211.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-41", "isController": false}, {"data": [[1.58766348E12, 1083.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-40", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-29", "isController": false}, {"data": [[1.58766348E12, 478.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-2", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-28", "isController": false}, {"data": [[1.58766348E12, 992.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-3", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-19", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-27", "isController": false}, {"data": [[1.58766348E12, 478.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-4", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-18", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-26", "isController": false}, {"data": [[1.58766348E12, 69.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-5", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-17", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-25", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-6", "isController": false}, {"data": [[1.58766348E12, 1026.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-24", "isController": false}, {"data": [[1.58766348E12, 477.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-7", "isController": false}, {"data": [[1.58766348E12, 487.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-23", "isController": false}, {"data": [[1.58766348E12, 488.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-8", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-22", "isController": false}, {"data": [[1.58766348E12, 467.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-9", "isController": false}, {"data": [[1.58766348E12, 493.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-0", "isController": false}, {"data": [[1.58766348E12, 782.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-1", "isController": false}, {"data": [[1.58766348E12, 3056.0]], "isOverall": false, "label": "Test", "isController": true}, {"data": [[1.58766348E12, 2065.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-32", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-23", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-31", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-22", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-30", "isController": false}, {"data": [[1.58766348E12, 861.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-21", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-20", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-27", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-26", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-25", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-24", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-18", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-17", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-16", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-15", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-14", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-13", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-12", "isController": false}, {"data": [[1.58766348E12, 908.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-11", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-19", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-21", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-12", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-20", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-11", "isController": false}, {"data": [[1.58766348E12, 979.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-10", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-16", "isController": false}, {"data": [[1.58766348E12, 927.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-15", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-14", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-13", "isController": false}, {"data": [[1.58766348E12, 107.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-5", "isController": false}, {"data": [[1.58766348E12, 843.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-4", "isController": false}, {"data": [[1.58766348E12, 982.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-7", "isController": false}, {"data": [[1.58766348E12, 1090.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-6", "isController": false}, {"data": [[1.58766348E12, 3963.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-1", "isController": false}, {"data": [[1.58766348E12, 735.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-0", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-3", "isController": false}, {"data": [[1.58766348E12, 886.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-2", "isController": false}, {"data": [[1.58766348E12, 496.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-10", "isController": false}, {"data": [[1.58766348E12, 853.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-9", "isController": false}, {"data": [[1.58766348E12, 477.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-8", "isController": false}, {"data": [[1.58766348E12, 956.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-2", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-3", "isController": false}, {"data": [[1.58766348E12, 480.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-4", "isController": false}, {"data": [[1.58766348E12, 75.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-5", "isController": false}, {"data": [[1.58766348E12, 1014.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-6", "isController": false}, {"data": [[1.58766348E12, 481.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-7", "isController": false}, {"data": [[1.58766348E12, 481.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-8", "isController": false}, {"data": [[1.58766348E12, 898.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-9", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-10", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-11", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-12", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-13", "isController": false}, {"data": [[1.58766348E12, 1111.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-14", "isController": false}, {"data": [[1.58766348E12, 641.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-0", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-15", "isController": false}, {"data": [[1.58766348E12, 768.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-1", "isController": false}, {"data": [[1.58766348E12, 0.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-16", "isController": false}, {"data": [[1.58766348E12, 641.0]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58766354E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 117.0, "minX": 1.58766348E12, "maxY": 13802.0, "series": [{"data": [[1.58766354E12, 4515.0], [1.58766348E12, 13802.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58766354E12, 150.0], [1.58766348E12, 117.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58766354E12, 1405.7], [1.58766348E12, 2284.0000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58766354E12, 4515.0], [1.58766348E12, 12149.600000000035]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58766354E12, 3428.9499999999953], [1.58766348E12, 2850.599999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58766354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 153.5, "minX": 1.0, "maxY": 2297.5, "series": [{"data": [[2.0, 2260.5], [8.0, 327.5], [9.0, 436.5], [10.0, 469.5], [11.0, 558.0], [3.0, 2034.0], [12.0, 239.5], [13.0, 154.0], [14.0, 157.5], [1.0, 1609.5], [4.0, 2297.5], [16.0, 153.5], [5.0, 623.0], [6.0, 634.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2297.5, "series": [{"data": [[2.0, 1066.5], [8.0, 0.0], [9.0, 80.5], [10.0, 469.0], [11.0, 0.0], [3.0, 292.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [1.0, 1609.5], [4.0, 2297.5], [16.0, 0.0], [5.0, 0.0], [6.0, 175.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.58766348E12, "maxY": 2.1666666666666665, "series": [{"data": [[1.58766354E12, 0.31666666666666665], [1.58766348E12, 2.1666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58766354E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58766348E12, "maxY": 1.0666666666666667, "series": [{"data": [[1.58766354E12, 0.016666666666666666], [1.58766348E12, 0.9833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58766354E12, 0.4166666666666667], [1.58766348E12, 1.0666666666666667]], "isOverall": false, "label": "304", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58766354E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58766348E12, "maxY": 0.016666666666666666, "series": [{"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-18-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-15-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-7-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-33-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-23-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-30-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-5-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-1-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-2-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-11-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-28-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-20-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-28-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-7-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-14-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-6-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-15-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-17-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-24-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-0-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-21-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "Test-success", "isController": true}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-13-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-4-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-40-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-37-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-0-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-20-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-36-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-8-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-4-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-27-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-33-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-18-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-19-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-10-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-24-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-32-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-22-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-19-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-4-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-16-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-14-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-31-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-29-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-6-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-0-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-12-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-6-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-42-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-18-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-10-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-5-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-25-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-15-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-29-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-22-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-38-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-25-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-11-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-27-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-21-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-9-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-14-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-34-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-3-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-7-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-10-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-26-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-39-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-3-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-23-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-40-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-17-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-17-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-21-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-9-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-31-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-4-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-5-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-32-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-35-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-8-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-41-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-29-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-13-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-13-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-16-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-26-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-9-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-3-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-15-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-39-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-26-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-26-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-29-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-12-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-23-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-11-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-35-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-2-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-22-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-10-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-1-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-41-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-22-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-25-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-2-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-38-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-3-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-8-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-2-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-17-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-16-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-34-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-30-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-6-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-18-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-27-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-13-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-27-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-28-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-7-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-20-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-14-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-12-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-16-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-8-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-25-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-1-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-24-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-1-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-11-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-28-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-19-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-21-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-5-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/car-drivers-for-hire-ahmedabad\/-37-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-19-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-36-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-12-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-success", "isController": false}, {"data": [[1.58766354E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/privacy-policy\/-24-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-0-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-9-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/tnc\/-23-success", "isController": false}, {"data": [[1.58766348E12, 0.016666666666666666]], "isOverall": false, "label": "https:\/\/www.driveu.in\/-20-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58766354E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.58766348E12, "maxY": 2.066666666666667, "series": [{"data": [[1.58766354E12, 0.43333333333333335], [1.58766348E12, 2.066666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58766354E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

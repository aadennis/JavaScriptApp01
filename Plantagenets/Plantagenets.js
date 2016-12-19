function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Id');
    data.addColumn('string', 'AncestorId');
    data.addColumn('string', 'ToolTip');

    data.addRows([
        [{ v: 'S1', f: 'Henry II<div class="comments">R: 1154-1189</div>' },
            '', 'Commonly held to be the first of the Plantagenets'],
        [{ v: 'S1.1', f: 'Richard I<div class="comments">R: 1189-1199</div>' },
            'S1', 'so-called "the Lionheart"; spoke little English'],
        [{ v: 'S1.2', f: 'John<div class="comments">R: 1199-1216</div>' },
            'S1', 'obliged to sign the Magna Carta following the loss of Normandy'],
     [{ v: 'S1.2.1', f: 'Henry III<div class="comments">R: 1216-1272</div>' },
            'S1.2', 'Great Charter: further restrictions on royal power'],

        ['S1.2.1.1', 'S1.2.1', 'Simple placeholder 1'],
        ['S1.2.1.2', 'S1.2.1', 'Simple placeholder 2'],
        
    ]);

    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    chart.draw(data, { allowHtml: true });
}

google.charts.load('current', { packages: ["orgchart"] });
google.charts.setOnLoadCallback(drawChart);



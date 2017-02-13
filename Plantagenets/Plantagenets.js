function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Id');
    data.addColumn('string', 'ToolTip');

    data.addRows([
    // In the row immediately below,
    // within the first field (delimited by {}), v: is the unique id, but its text is not displayed in the box, 
    // f: denotes the displayed content only.
    // Second field is the foreign key to the parent row (this does not appear in the (child
    // ) box. If the current box is the top parent (as is the case here), then that is an empty string.
    // The third field displays any tooltip
        [{ v: 'S1', f: 'Henry II<div class="comments">R: 1154-1189</div>' },
            '', 'Commonly held to be the first of the Plantagenets'],
        [{ v: 'S1.1', f: 'Richard I<div class="comments">R: 1189-1199</div>' },
            'S1', 'so-called "the Lionheart"; spoke little English'],
        [{ v: 'S1.2', f: 'John<div class="comments">R: 1199-1216</div>' },
            'S1', 'obliged to sign the Magna Carta following the loss of Normandy'],
     [{ v: 'S1.2.1', f: 'Henry III<div class="comments">R: 1216-1272</div>' },
            'S1.2', 'Great Charter: further restrictions on royal power'],
    // In the row immediately below,
    // the first field is both the unique identifier and the text that appears in the box, 
    // the second field is the foreign key to the parent row (this does not appear in the (child
    // ) box, and
    // the third field displays any tooltip
        ['S1.2.1.1', 'S1.2.1', 'Simple placeholder 1'],
        ['S1.2.1.2', 'S1.2.1', 'Simple placeholder 2'],
        
    ]);

    // Further notes: if a foreign key does not point at a parent, then that child will create a dummy parent, 
    // and the "real" parent will float off elsewhere in the diagram. You can see that in action, by changing
    // the [v: 'S1'] value for Henry II to [v: 'S12'], for example.

    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    chart.draw(data, { allowHtml: true });
}

google.charts.load('current', { packages: ["orgchart"] });
google.charts.setOnLoadCallback(drawChart);



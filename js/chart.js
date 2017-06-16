google.charts.load('current', {'packages':['corechart']});

function drawChart(NameA, NameB, NameC, CountA, CountB, CountC, CountU) {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Tasks');
  data.addRows([
    [NameA, CountA],
    [NameB, CountB],
    [NameC, CountC],
    ['Unassigned', CountU]
  ]);

  // Set chart options
  var options = {'title':'Tasks divided up by name',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('mychart'));
  chart.draw(data, options);
}

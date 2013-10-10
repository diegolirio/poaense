
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
	    var data = new google.visualization.DataTable();
		data.addColumn('string', 'Rodadas');
		data.addColumn('number', 'Os Treze');
		data.addColumn('number', 'Tahiti');
        data.addColumn('number', 'Real Matismo');
		data.addColumn('number', 'Art Car');
        data.addRows(3);
        data.setValue(0, 0, '1ª Rodada');
        data.setValue(0, 1, 1); // Os Treze
        data.setValue(0, 2, 2); // Tahiti
		data.setValue(0, 3, 3); // Real Matismo
		data.setValue(0, 4, 4); // Art Car
		
        data.setValue(1, 0, '2ª Rodada');
        data.setValue(0, 1, 2); // Os Treze
        data.setValue(0, 2, 1); // Tahiti
		data.setValue(0, 3, 4); // Real Matismo
		data.setValue(0, 4, 3); // Art Car
		
        data.setValue(2, 0, '3ª Rodada');
        data.setValue(0, 1, 3); // Os Treze
        data.setValue(0, 2, 2); // Tahiti
		data.setValue(0, 3, 4); // Real Matismo
		data.setValue(0, 4, 1); // Art Car		

		/*
        var data = google.visualization.arrayToDataTable([
          ['Jogo', 'Colocação'],
		  ['1º jogo', 75],
          ['2º jogo', 15],
          ['3º jogo',  2],
          ['4º jogo',  1],
          ['5º jogo',  5],
		  ['6º jogo',  12],
		  ['7º jogo',  9]
        ]);
		*/
        var options = {
          title: 'Histótico de Colocação',
		  vAxis: {maxValue: 10, direction: -1} // Inverte a Coluna em ordem crescente...
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));		
        chart.draw(data, options);
      }

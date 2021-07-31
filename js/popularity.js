window.onload = function() {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "dark6",
    title: {
      text: "Company Product Popularity"
    },
    data: [
      {
        type: "line",
        dataPoints: [
          { y: 243 },
          { y: 210 },
          {
            y: 740,
            indexLabel: "Most Popularity",
            markerColor: "green",
            markerType: "square"
          },
          { y: 280 },
          { y: 460 },
          { y: 400 },
          { y: 520 },
          { y: 260 },
          {
            y: 200,
            indexLabel: "Least Popularity",
            markerColor: "blue",
            markerType: "square"
          },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }
    ]
  });
  setTimeout(function() {
    chart.render();
  }, 1000);
};

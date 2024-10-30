     // Initialize chart
     const ctx = document.getElementById('dataChart').getContext('2d');
     console.log(ctx);
     const chart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: [],
             datasets: [{
                 label: 'Value',
                 data: [],
                 backgroundColor: 'rgb(99, 102, 241)',
                 borderRadius: 4
             }]
         },
         options: {
             responsive: true,
             maintainAspectRatio: false,
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });

     // Handle form submission
     const form = document.getElementById('dataForm');
     const noDataMessage = document.getElementById('noData');

     form.addEventListener('submit', function(e) {
         e.preventDefault();
         
         const category = document.getElementById('category').value;
         const value = parseFloat(document.getElementById('value').value);

         // Update chart data
         chart.data.labels.push(category);
         chart.data.datasets[0].data.push(value);
         chart.update();

         // Hide no data message
         noDataMessage.style.display = 'none';

         // Reset form
         form.reset();
     });
    
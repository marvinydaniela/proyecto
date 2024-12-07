// Configuración del gráfico de producción de caña
const ctx = document.getElementById('productionChart').getContext('2d');
const productionChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ingenio Tres Valles', 'Ingenio Central De Motzorongo', 'Ingenio La Gloria', 'Ingenio El Potrero'],
        datasets: [{
            label: 'Toneladas de Caña de Azúcar (en miles)',
            data: [450, 380, 300, 520],
            backgroundColor: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFC107'],
            borderColor: ['#388E3C', '#7B9D2D', '#9E9D24', '#FF9800'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Producción de Caña de Azúcar en Veracruz'
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

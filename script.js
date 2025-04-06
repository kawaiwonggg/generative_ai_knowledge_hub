document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            links.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Dashboard Bar Chart
    const dataSourcesBarCtx = document.getElementById('dataSourcesBarChart').getContext('2d');
    new Chart(dataSourcesBarCtx, {
        type: 'bar',
        data: {
            labels: ['Cloud', 'Edge', 'Local'],
            datasets: [{
                label: 'Data Sources',
                data: [5, 3, 2],
                backgroundColor: ['#1abc9c', '#3498db', '#e74c3c']
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Analytics Charts
    const accuracyLineCtx = document.getElementById('accuracyLineChart').getContext('2d');
    new Chart(accuracyLineCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Generative AI Accuracy (%)',
                data: [85, 88, 90, 92, 93],
                borderColor: '#1abc9c',
                fill: false
            },
          ]
        }
    });

    const taskBarCtx = document.getElementById('taskBarChart').getContext('2d');
    new Chart(taskBarCtx, {
        type: 'bar',
        data: {
            labels: ['Code Generation', 'Data Analysis', 'Design', 'Customer Service'],
            datasets: [{
                label: 'Tasks Completed',
                data: [150, 120, 80, 50],
                backgroundColor: ['#1abc9c', '#3498db', '#e74c3c', '#f39c12']
            }]
        }
    });

    const dataUsagePieCtx = document.getElementById('dataUsagePieChart').getContext('2d');
    new Chart(dataUsagePieCtx, {
        type: 'pie',
        data: {
            labels: ['Internal', 'External', 'Archived'],
            datasets: [{
                data: [60, 25, 15],
                backgroundColor: ['#1abc9c', '#3498db', '#e74c3c']
            }]
        }
    });
});

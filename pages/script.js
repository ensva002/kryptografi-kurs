fetch('../pagelist.json')
    .then(response => response.json())
    .then(data => {
        const overview = document.createElement('div');
        overview.id = 'overview';
        const toggle = document.createElement('button');
        toggle.id = "toggle"
        toggle.textContent = "AAAAAAAAAA"
        document.body.prepend(overview);
        const currentPage = window.location.pathname.split('/').pop();
        data.files.forEach(file => {
            const fileName = file.replace('.html', '').replace(/_/g, ' ');
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `${file}`;
            link.textContent = fileName;
            listItem.appendChild(link);
            if (file === currentPage) {
                listItem.classList.add('current');
            }
            overview.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));

document.getElementById('toggle').addEventListener('click', function() {
    if (overview.style.display = "none") {
        overview.style.display = "block"
    } else {
        overview.style.display = "none"
    }
});
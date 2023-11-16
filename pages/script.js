fetch('../pagelist.json')
    .then(response => response.json())
    .then(data => {
        const overview = document.createElement('div');
        overview.id = 'overview';
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
        addLogo(overview)
        addButton()
    })
    .catch(error => console.error('Error:', error));

function addLogo(overview){
    let logo = document.createElement('img');
    logo.src = "../logo.svg"
    logo.style.width = "80%"
    logo.style.padding = "10pt"
    logo.addEventListener("click",function(){
        window.location.href = "../index.html"
    })
    overview.insertBefore(logo,overview.firstChild)
}

function addButton(){
    const content = document.getElementById("content")
    let menuButton = document.createElement('button')
    menuButton.id = "toggle"
    menuButton.textContent = "☰"
    let overview = document.getElementById("overview")
    menuButton.addEventListener("click",function(){
        let stylesheet = window.getComputedStyle(overview)
        if (stylesheet.left == "-180pt"){
            overview.style.left = "0pt"
        }
    })
    content.insertBefore(menuButton,content.firstChild)
}


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
    let toggle = true
    menuButton.addEventListener("click",function(){
        if (toggle){
            document.documentElement.style.setProperty('--drawer-margin', "0pt")
            document.documentElement.style.setProperty('--drawer-shadow', "10px 0px 30px 0px rgba(0,0,0,0.3)")
            document.documentElement.style.setProperty('--toggle-left', "180pt")
        }else{
            document.documentElement.style.setProperty('--drawer-margin', "-180pt")
            document.documentElement.style.setProperty('--drawer-shadow', "10px 0px 30px 0px rgba(0,0,0,0)")
            document.documentElement.style.setProperty('--toggle-left', "0pt")
            
        }
        toggle = !toggle
    })
    content.insertBefore(menuButton,content.firstChild)
    const overview = document.getElementById("overview")
    let modeButton = document.createElement('button')
    modeButton.id = "mode"
    modeButton.textContent = "C/O"
    let mode = true
    modeButton.addEventListener("click",function(){
        if (mode){
            document.documentElement.style.setProperty('--primary', "#111111")
            document.documentElement.style.setProperty('--secondary', "#1e1f20")
            document.documentElement.style.setProperty('--text', "#FFFFFF")
        }else{
            document.documentElement.style.setProperty('--primary', "#FFFFFF")
            document.documentElement.style.setProperty('--secondary', "#eef2f9")
            document.documentElement.style.setProperty('--text', "#000000")
        }
        mode = !mode
    })
    overview.insertBefore(modeButton,overview.firstChild)
}



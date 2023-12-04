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
            document.documentElement.style.setProperty('--toggle-left', "200pt")
        }else{
            document.documentElement.style.setProperty('--drawer-margin', "-200pt")
            document.documentElement.style.setProperty('--drawer-shadow', "10px 0px 30px 0px rgba(0,0,0,0)")
            document.documentElement.style.setProperty('--toggle-left', "0pt")
            
        }
        toggle = !toggle
    })
    content.insertBefore(menuButton,content.firstChild)
    // Dark mode
    let codeStyle = document.getElementById("codeStyle")
    let mode = JSON.parse(localStorage.getItem("mode"));
    if (mode === null) {
        mode = true;
        localStorage.setItem("mode", mode);
    }
    if (!mode){
        document.documentElement.style.setProperty('--primary', "#222222")
        document.documentElement.style.setProperty('--secondary', "#403340")
        document.documentElement.style.setProperty('--text', "#FFFFFF")
        codeStyle.href = "prismdark.css"
    }
    const overview = document.getElementById("overview")
    let modeButton = document.createElement('button')
    modeButton.id = "mode"
    modeButton.textContent = "🌓"
    modeButton.addEventListener("click",function(){
        if (mode){
            document.documentElement.style.setProperty('--primary', "#222222")
            document.documentElement.style.setProperty('--secondary', "#403340")
            document.documentElement.style.setProperty('--text', "#FFFFFF")
            codeStyle.href = "prismdark.css" 
        }else{
            document.documentElement.style.setProperty('--primary', "#FFFFFF")
            document.documentElement.style.setProperty('--secondary', "#eef2f9")
            document.documentElement.style.setProperty('--text', "#000000")
            codeStyle.href = "prism.css"
        }
        mode = !mode
        console.log(mode)
        localStorage.setItem("mode",mode)
        console.log(localStorage.getItem("mode"))
    })
    overview.insertBefore(modeButton,overview.firstChild)
}



document.body.style.backgroundImage = 'url(./tema/tema1/wallpaper.png)'

let tema1 = document.getElementById('bottom1')
tema1.addEventListener('click', click1)

let tema2 = document.getElementById('bottom2')
tema2.addEventListener('click', click2)

let tema3 = document.getElementById('bottom3')
tema3.addEventListener('click', click3)

let tema4 = document.getElementById('bottom4')
tema4.addEventListener('click', click4)




function click1(){
    document.body.style.backgroundImage = 'url(./tema/tema1/wallpaper.png)'
    document.body.style.setProperty('--bd', '#061A24')
    document.body.style.setProperty('--lt', '#061A24')
    document.body.style.setProperty('--slc', '#2C2221')
}

function click2(){
    document.body.style.backgroundImage = 'url(./tema/tema2/wallpaper.png)'
    document.body.style.setProperty('--bd', '#2E4930')
    document.body.style.setProperty('--lt', '#2E4930')
    document.body.style.setProperty('--slc', '#0B1316')
}
function click3(){
    document.body.style.backgroundImage = 'url(./tema/tema3/wallpaper.png)'
    document.body.style.setProperty('--bd', '#542241')
    document.body.style.setProperty('--lt', '#542241')
    document.body.style.setProperty('--slc', '#93344E')
}

function click4(){
    document.body.style.backgroundImage = 'url(./tema/tema4/wallpaper.png)'
    document.body.style.setProperty('--bd', '#0C2B42')
    document.body.style.setProperty('--lt', '#0C2B42')
    document.body.style.setProperty('--slc', '#1F4B76')
}
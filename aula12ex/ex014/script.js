function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = 'rgba(255, 234, 112, 0.9)'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE !
        img.src = 'tarde-1.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}

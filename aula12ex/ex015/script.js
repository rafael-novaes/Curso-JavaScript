function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtno')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src',"bebe-m.png")
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src',"jovem-m.png")
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src',"homem.png")
            } else {
                //IDOSO
                img.setAttribute('src',"idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src',"bebe-f.png")
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src',"jovem-f.png")
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src',"mulher.png")
            } else {
                //IDOSO
                img.setAttribute('src',"idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.style.margin = "auto"
        res.style.display = "inline"
        res.appendChild(img)
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
    }
}
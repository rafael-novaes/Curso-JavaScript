function calcular () {
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        var c = 1
        res.innerHTML = ""
        while (c <= 10) {
            let r = (n*c)
            res.innerHTML += `${n} X ${c} = ${r} <br>`
            c++
        }
    }
}
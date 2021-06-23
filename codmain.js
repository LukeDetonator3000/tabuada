function tabuada(){
    var n = window.document.getElementById('ntab').value
    var mul = window.document.getElementById('mul')
    mul.innerHTML = ``
    var arm
    for (let i = 0; i <= 10; i++) {
        arm = n*i
    mul.innerHTML += ` ${n} x ${i} = ${arm}</br>`
    }
}
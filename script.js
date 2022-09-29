function calcular () { 
    let n1 = Number(document.getElementById('nota1').value)   
    let n2 = Number(document.getElementById('nota2').value) 
    let n3 = Number(document.getElementById('nota3').value)
    let res = document.querySelector('div#resultado')
    let a = (document.getElementById('aluno').value)
    let b = (document.getElementById('matricula').value)
    let c = (document.getElementById('turma').value)

    let media = ((n1 + n2 + n3) / 3).toFixed(1)
    
    if (media >= 5 && media <= 6.9) {
        res.innerHTML = `<strong>REPROVADO!</strong> Porém possui direito a exames de recuperação escolar!`
        res.innerHTML += `<p>Aluno <strong>${a}(${b})</strong> matriculado na turma <strong>${c}</strong> obteve a média final <strong>${media}</strong></p>`
    } else { 
        if (media <= 4.9)
        res.innerHTML = `<strong>REPROVADO!</strong> O aluno não obteve a média mínima necessária para aprovação ou recuperação escolar.`
        res.innerHTML += `<p>Aluno <strong>${a}(${b})</strong> matriculado na turma <strong>${c}</strong> obteve a média final <strong>${media}</strong></p>`
    } if (media >= 7) {
        res.innerHTML = `<strong>APROVADO!</strong> O aluno atingiu a média mínima para aprovação.`
        res.innerHTML += `<p>Aluno <strong>${a}(${b})</strong> matriculado na turma <strong>${c}</strong> obteve a média final <strong>${media}</strong></p>`
    } 
         
}


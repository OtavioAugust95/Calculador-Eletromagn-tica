function calcularq(){
    var n1 = parseFloat(document.getElementById('n1').value);

    var resultado1 = n1 * 1.6 * (10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * (-1));

    document.getElementById('result1').innerText = resultado1.toExponential(2);

}

function calcularseno(){
    var CO = parseFloat(document.getElementById('CO').value);
}
function calcularF(){
    var q1 = parseFloat(document.getElementById('q').value);
    var Q2 = parseFloat(document.getElementById('v').value);
    var r = parseFloat(document.getElementById('B').value);
    var θ = parseFloat(document.getElementById('θ').value);

    var resultado3 = q * v * B * θ;

    document.getElementById('result3').innerText = resultado3.toExponential(2);

}
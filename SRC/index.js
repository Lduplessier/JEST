'use strict'

var a= 0;
var b = 0;
var n = 0;
var i = 0;

//function index(){
  function Sum(a,b){
    var resultAddition = a + b;
    return resultAddition;
    console.log(resultAddition);
  };

  function Sub(a,b){
    var resultSoustraction = a - b;
    return resultSoustraction;
    console.log(resultSoustraction);
  };

  function Mult(a,b){
    var resultMultiplication = a + b;
    return resultMultiplication;
    console.log(resultMultiplication);
  };

  function Div(a,b){
    var resultDivision = a / b;
    return resultDivision;
    console.log(resultDivision);
  };

  function Recur(i){
    if (i < 0 || !(i ==parseInt(i))){
      alert("somme indefinie");
    } else if (i === 0) {
      return 0;
    } else {
      return i + Recur(i - 1);
    }
  };

  function Fibo(n) {
    var n1 = 0;
    var n2 = 1;
    var resultFibo = 0;

    for (i = 2; i <= n; i++){
      resultFibo = n1 + n2;
      n1 = n2;
      n2 = resultFibo;
    }
    console.log(resultFibo);
    return n ? n2 : n1;
  }

//};

module.exports = {
  'Sum': Sum,
  'Sub': Sub,
  'Mult': Mult,
  'Div': Div,
  'Recur': Recur,
  'Fibo': Fibo,
}
    function sum() { 
    var x = parseFloat(document.getElementById('firstnumber').value); 
    var y = parseFloat(document.getElementById('result').innerHTML); 
    document.getElementById('result').innerHTML = (x + y).toFixed(2); 
    } 
    function difference() { 
    var x = parseFloat(document.getElementById('firstnumber').value); 
    var y = parseFloat(document.getElementById('result').innerHTML); 
    document.getElementById('result').innerHTML = (y - x).toFixed(2); 
    } 
    function product() { 
        var x = parseFloat(document.getElementById('firstnumber').value); 
        var y = parseFloat(document.getElementById('result').innerHTML); 
        document.getElementById('result').innerHTML = (x * y).toFixed(2); 
    } 
    function quotient() { 
        var x = parseFloat(document.getElementById('firstnumber').value); 
        var y = parseFloat(document.getElementById('result').innerHTML); 
        document.getElementById('result').innerHTML = (y / x).toFixed(2); 
    } 
    function clear() { 
        document.getElementById('firstnumber').value = "";
        document.getElementById('result').innerHTML = 0; 
    } 
    function equal() { 
    var x = parseFloat(document.getElementById('firstnumber').value); 
    if (isNaN(x)) 
    { 
      return; 
    } 
    var y = parseFloat(document.getElementById('result').innerHTML);

        document.getElementById('firstnumber').value = ""; 

        document.getElementById('result').innerHTML = (x + y).toFixed(2); 
    }
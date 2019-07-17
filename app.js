const express = require('express');

const app = express();


app.get('/', (req, res) => res.send('Hello World!'));



app.get('/:operand/:num1/:num2', function(req, res) {
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
     
    switch(req.params.operand) {
        case 'add':
        case '+':
            var result = num1 + num2;
            res.send(result.toString());
            break;
        case 'subtract':
        case '-':
            var result = num1 - num2;
            res.send(result.toString());
            break;
        case 'divide':
        case '/':
            var result = num1 / num2;
            res.send(result.toString());
            break; 
        case 'multiply':
        case '*':
            var result = num1 * num2;
            res.send(result.toString());
            break;
    }
});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Port' + port + ' is listening'));
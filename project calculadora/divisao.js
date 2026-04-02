import promptSync from 'prompt-sync';
const prompt = promptSync();


function Divisão() {
    let number03 = parseFloat(prompt(" Digite um numero "))
    let number04 = parseFloat(prompt(" Digite outro valor "))
    result = number03 / number04
    console.log(`${number03} / ${number04} = ${result}`);
    return number03 / number04
    }
    //Divisão()
    //console.log(result)
    export default Divisão
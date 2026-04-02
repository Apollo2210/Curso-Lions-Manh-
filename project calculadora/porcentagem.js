import promptSync from 'prompt-sync';
const prompt = promptSync();


function porcentagem() {
    let number09 = parseFloat(prompt(" Digite um valor "))
    let number10 = parseFloat(prompt(" Digite outro valor "))
    resultporc = (number09*number10) /100
    console.log(`${number09} % ${number10} = ${resultporc}`); 
    return (number09*number10) /100
}
export default porcentagem
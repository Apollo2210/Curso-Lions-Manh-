import promptSync from 'prompt-sync';
const prompt = promptSync();


function subtração(){
    let number07 = parseFloat(prompt(" Digite um valor "))
    let number08 = parseFloat(prompt(" Digite outro valor "))
    resultsubt = number07 - number08
    console.log(`${number07} - ${number08} = ${resultsubt}`); 
    return number07 - number08
}
    export default subtração
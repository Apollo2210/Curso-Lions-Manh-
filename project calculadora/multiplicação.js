import promptSync from 'prompt-sync';
const prompt = promptSync();


function multiplicação() {
    let number05 = parseFloat(prompt(" digite um valor "))
    let number06 = parseFloat(prompt(" digite outro valor "))
    let resultmult = number05 * number06
    console.log(`${number05} * ${number06} = ${resultmult}`);
    return number05 * number06
    
    }
    export default multiplicação
const names = ["Tiffany", "Darrin", "Shaggy"];
const event = ["Birthday"]

function writeCards(names,event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        messages.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
writeCards(names, event);


function countDown(){
    let number = 10;
    while (number >=0){
        console.log(number--);
        debugger;
    }
    return number
}
countDown(10);
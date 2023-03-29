function shout(string) {
   return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const spy = "hello"
    console.log(spy.toUpperCase());
}

function logWhisper(string) {
    const spy = "HELLO"
    console.log(spy.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello')
    return "I can\'t hear you!"
    else if (string === 'HELLO')
    return "YES INDEED!"
    else (string === 'Let\'s have dinner together!')
    return "I would love to!"
}
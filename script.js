const listen = document.getElementById('listen')
const talk = document.getElementById('talk')
const stop = document.getElementById('stop')
let name = ''


let recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true
recognizer.lang = 'ru-Ru'
recognizer.onresult = (event) => {
    let result = event.results[event.resultIndex]
    if (result.isFinal) {
        alert('Вы сказали:' + result[0].transcript)
        name = result[0].transcript
        window.location.href='http://'+name
    } else {
            console.log('Промежуточный результат:',
            result[0].transcript)

              
    }
}

listen.addEventListener('click', () => {
    recognizer.start()
})

// let name = 'Я учу жава скрипт'

// talk.addEventListener('click', () => {
//     let synth = window.speechSynthesis
//     let utterance = new SpeechSynthesisUtterance(name)
//     synth.speak(utterance)
        
// })

// stop.addEventListener('click', () => {
//     synth.pausa(utterance)
// })
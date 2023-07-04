// importing images for bot and user
import bot from './assets/bot.svg'
import user from './assets/user.svg'

const form = document.querySelector('form');
const chatcontainer = document.querySelector('#chat_container');

let loadinterval;

function loadmsgs(element){
    element.textcontent = '';
    // setInterval calls a function at specified intervals, here 300 ms
    loadinterval = setInterval(() =>{
        element.textcontent += '.';
        console.log(element.textcontent)
        if(element.textcontent === '....'){
            element.textcontent = '';
        }
    }, 300);
}

function typetext(element, text){
    let index = 0;
    let interval = setInterval(() => {
        if(index < text.length){
            element.innerHTML += text.charAt(index);
            index++;
        }else{
            // stops the execution of the interval
            clearInterval(interval);
        }
    }, 20);
}

// we need to create a unique id for every single message to map over them
function generateuniqueid(){
    const timestamp = Date.now();
    const randomnum = Math.random();
    const hexadecimalstring = randomnum.toString(16);

    return `id-${timestamp}-${hexadecimalstring}`;
}

function chatstripe (isAi, value, uniqueid){
    return (
        `
        <div class = "wrapper ${isAi && 'ai'}">
            <div class = "chat">
                <div class = "profile">
                    <img
                        src = ${isAi ? bot : user}
                        alt = "${isAi ? 'bot' : 'user'}"
                    />
                </div>
                <div class="message" id=${uniqueid} > ${value} </div>
            </div>
        </div>
    `
    )
}

const handlesubmit = async (e) =>{
    // the default is refreshing the form, but we don't want that, so we prevent it
    e.preventDefault();

    const data = new FormData(form)

    // user's chatstripe
    chatcontainer.innerHTML += chatstripe(false, data.get('prompt'))
    form.reset()

    // bot's chatstripe
    const uniqueid = generateuniqueid()
    chatcontainer.innerHTML += chatstripe(true, " ", uniqueid);

    chatcontainer.scrollTop = chatcontainer.scrollHeight;

    const messagediv = document.getElementById(uniqueid)
    console.log("Reached here")
    loadmsgs(messagediv)
    console.log("hello ")

    // fetch data from server
    const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: data.get('prompt')
        })
    })

    clearInterval(loadinterval);
    messagediv.innerHTML = '';

    if(response.ok){
        const data = await response.json();
        const parseddata = data.bot.trim();

        typetext(messagediv, parseddata);
    }else{
        const err = await response.text();

        messagediv.innerHTML = "Something went wrong.";

        alert(err);
    }

}

form.addEventListener('submit', handlesubmit);
form.addEventListener('keyup', (e) =>{
    if(e.keyCode === 13){
        handlesubmit(e);
    }
})




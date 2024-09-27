const q = [
    "Яка мова програмування є основною для розробки веб-сторінок на клієнтській стороні?",
    "Який тип пам'яті є тимчасовим і швидким, але втрачає дані після вимкнення комп'ютера?",
    "Який формат файлів часто використовують для зображень у Інтернеті через його стиснення без втрат якості?",
    "Яка структура даних використовується для організації даних у вигляді дерева з вузлами?",
    "Який протокол забезпечує захищене з'єднання між веб-браузером і сервером?",
    "Яка операційна система є найпоширенішою для серверів?",
    "Який термін описує процес перетворення виходу програми в формат, зрозумілий комп'ютеру?",
    "Яка концепція в об'єктно-орієнтованому програмуванні забезпечує спадкування властивостей і методів від одного класу до іншого?",
    "Яка технологія забезпечує автоматичну передачу даних між комп'ютерами в мережі на основі віртуальних приватних мереж?"
];

const a = [
    "JavaScript",
    "RAM",
    "PNG",
    "Tree",
    "HTTPS",
    "Linux",
    "Compilation",
    "Inheritance",
    "VPN"
];

const qq = document.querySelector(".q");
const aa = document.querySelector(".a");
const letters = document.querySelectorAll(".letter");

function round() {
    let random = Math.trunc(Math.random() * q.length);
    qq.textContent = q[random];
    aa.innerHTML = ''; 
    
    for (let i = 0; i < a[random].length; i++) {
        const el = document.createElement("p");
        aa.appendChild(el);
    }

    let kvadra = document.querySelectorAll("p");
    let answerText = a[random].toLowerCase();

    for (let letter = 0; letter < letters.length; letter++) {
        letters[letter].addEventListener("click", function() {
            const clickedLetter = this.textContent.toLowerCase();

            for (let k = 0; k < answerText.length; k++) {
                if (answerText[k] === clickedLetter) {
                    kvadra[k].style.backgroundColor = "lightgreen";
                    kvadra[k].textContent = this.textContent;
                    if (Array.from(kvadra).every(item => item.textContent != "")) {
                        kvadra.forEach(item => item.style.display = "none");
                        round(); 
                        kvadra = document.querySelectorAll("p");
                    }
                }
            }
        });
    }
}

round();

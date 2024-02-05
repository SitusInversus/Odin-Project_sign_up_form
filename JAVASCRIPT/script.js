

const forms = document.querySelectorAll(".validate")

for (let i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true)
}

const FORM = document.querySelector("button")
console.log(FORM)

FORM.addEventListener("click", (e) =>
    {
    checkValidity(document.querySelectorAll("label"));
    e.preventDefault();
    } 
)

function checkValidity(nodeList) {
    const NODE_LENGTH = nodeList.length

    for (let i = 0; i< NODE_LENGTH; i++) {
        const USER_INPUT = nodeList[i].children[0].value
        const ELEMENT_INPUT = nodeList[i].children[0]
        const ELEMENT_SPAN = nodeList[i].children[1]
        const ELEMENT_INPUT_PW1 = nodeList[4].children[0].value
        const ELEMENT_INPUT_PW2 = nodeList[5].children[0].value


        ELEMENT_INPUT.classList.add("error");
        ELEMENT_INPUT.classList.remove("valid");


        if (USER_INPUT.trim() === "") {
            ELEMENT_SPAN.textContent = "Please enter a value";
        }
        else if (ELEMENT_INPUT.validity.patternMismatch){
            if (i == 0 || i == 1 ) {
                ELEMENT_SPAN.textContent = "Letters only";
            }
            else if (i== 3){
            ELEMENT_SPAN.textContent = "numbers only";
            }
        }

        else if (ELEMENT_INPUT.validity.typeMismatch) {
            ELEMENT_SPAN.textContent = "Enter valid email address";
        }
        
        else if ( (i == 4 || i == 5) && ELEMENT_INPUT_PW1 !== ELEMENT_INPUT_PW2) {
            ELEMENT_SPAN.textContent,
            ELEMENT_SPAN.textContent = "Enter matching passwords";
        }

        else {
            ELEMENT_INPUT.setCustomValidity("");
            ELEMENT_SPAN.textContent = "";
            ELEMENT_INPUT.classList.remove("error");
            ELEMENT_INPUT.classList.add("valid")
        }
    }
    return
}

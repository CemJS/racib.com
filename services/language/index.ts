

export const loader = async function (Variable) {
    Variable.languages = {
        "en": {
            test: "test"
        },
        "ru": {
            test: "Тест"
        }
    }

    let language

    if (localStorage.getItem("lang")) {
        language = localStorage.getItem("lang")
    } else {
        language = window.navigator ? window.navigator.language : "en";
        language = language.substr(0, 2).toLowerCase();
    }


    if (!Variable.languages[language]) {
        language = "en";
    }
    localStorage.setItem('lang', language)
    Variable.lang = Variable.languages[language]
    Variable.lang._data = { code: language }
}

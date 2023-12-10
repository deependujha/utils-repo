import english from "./en.js"
import hindi from "./hindi.js"
import kannada from "./kannada.js"

const translate = (key, lang) => {
    switch (lang) {
        case 'en':
            return english[key];
        case 'hi':
            return hindi[key];
        case 'kn':
            return kannada[key];
        default:
            return english[key];
    }
}

export default translate;
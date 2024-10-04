import ferstUp from './ferst-up'

const pascalCase = (s: string) => {
    const arrWord = s.split('-')
    return arrWord.reduce((str, word, i) => {
        str += ferstUp(word)
        return str
    }, '')
}

export default pascalCase
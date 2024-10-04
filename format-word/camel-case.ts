import ferstUp from './ferst-up'

const camelCase = (s: string) => {
    const arrWord = s.split('-')
    return arrWord.reduce((str, word, i) => {
        if (i === 0) return str
        str += ferstUp(word)
        return str
    }, '')
}

export default camelCase
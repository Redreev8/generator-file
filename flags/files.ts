import { Arguments } from '../type'

const fileFalgs = (s: string): Arguments['file'] => {
    s = s.toLocaleLowerCase()
    if ([...new Set(s)].join('').length !== s.length) throw new Error('file элиас должен быть уникальным') 
    if (!s.includes('i')) s += 'i'
    return s.split('')
}

export default fileFalgs
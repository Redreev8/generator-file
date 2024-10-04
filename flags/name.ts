import { Arguments } from '../type'

const nameFalgs = (s: string): Arguments['name'] => {
    if (typeof s !== 'string') throw  new Error('name должен быть строкой')
    if (s.trim().length === 0) throw  new Error('name должен быть длиние 0') 
    return s
}

export default nameFalgs
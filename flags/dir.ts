import { Arguments } from '../type'

const folderFalgs = (s: string): Arguments['dir'] => {
    // @ts-ignore
    if (s !== 'ui' || s !== 'components' || s !== 'pages') throw new Error('file элиас должен быть уникальным') 
    return s
}

export default folderFalgs
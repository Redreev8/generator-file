import formatWord from '../format-word' 
import { Arguments } from '../type'

const content = ({ name, file }: Arguments) => {
    return `import ${formatWord(name, 'PascalCase')} from './${name}'
    
export default ${formatWord(name, 'PascalCase')}`
}

const name = ({ ts }: Arguments) => `index.${ts ? 'tsx' : 'jsx'}`

export default {
    content,
    name
}
import formatWord from '../format-word' 
import { Arguments } from '../type'

const content = ({ name, ts }: Arguments) => {    
    const Main = (() => {
        if (ts) {
            return `const use${formatWord(name, 'PascalCase')} = ({}: use${formatWord(name, 'PascalCase')}Props) => {
                return (
                    <div className={ classNames(style['${name}']) }>
                    </div>
                )
            }\n\n`
        }
    })()

    const Interface = `interface use${formatWord(name, 'PascalCase')}Props {
        name: string
        file: string
    }`
    const  Export = `export default use${formatWord(name, 'PascalCase')}`

    return Interface + Main + Export
}

const name = ({ name, ts }: Arguments) => `use${formatWord(name, 'PascalCase')}.${ts ? 'tsx' : 'jsx'}`

export default {
    content,
    name
}
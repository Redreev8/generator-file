import formatWord from '../format-word' 
import { Arguments } from '../type'

const content = ({ name, ts, props, file }: Arguments) => {
    const Import:  string = `${ts ? `import { FC } from 'react'\n` : ''}import style from './${name}.module.scss'
import classNames from 'classnames'
${file.includes('h') ? `import use${formatWord(name, 'PascalCase')} from use${formatWord(name, 'PascalCase')}` : ''}\n\n`
    
    const Main = (() => {
        if (ts) {
            return `const ${formatWord(name, 'PascalCase')}: FC${ props ? `<${formatWord(name, 'PascalCase')}Props>` : '' } = ({}) => {
    return (
        <div className={ classNames(style['${name}']) }>
        </div>
    )
}\n\n`
        }

        return `const ${formatWord(name, 'PascalCase')} = ({}) => {
    return (
        <div className={ classNames(style['${name}']) }>
        </div>
    )
}\n\n`
    })()

    const Interface = ts && props ? `interface ${formatWord(name, 'PascalCase')}Props {
        name: string
        file: string
    }` : ''
    const  Export = `export default ${formatWord(name, 'PascalCase')}`

    return Import + Interface + Main + Export
}

const name = ({ name, ts }: Arguments) => `${name}.${ts ? 'tsx' : 'jsx'}`

export default {
    content,
    name
}
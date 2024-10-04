import ferstUp from './ferst-up'
import camelCase from './camel-case'
import pascalCase from './pascal-case'
import JsxComponent from './jsx-component'

interface Format {
    Ferstup: (s: string) => string
    camelCase: (s: string) => string
    PascalCase: (s: string) => string
    JsxComponent: (s: string) => string
}

const FormatWord = (s: string, key: keyof Format ) => {
    const format: Format = {
        Ferstup: ferstUp,
        camelCase,
        PascalCase: pascalCase,
        JsxComponent: JsxComponent,
    }

    return format[key](s) ?? s
}

export default FormatWord
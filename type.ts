export interface Arguments {
    ts: boolean
    props: boolean
    dir: 'ui' | 'components' | 'pages'
    name: string
    file: string[]
}

export interface FileSetting {
    [key: string]: {
        content: (args: Arguments) => string,
        name: (args: Arguments) => string
    }
}
export interface Arguments {
    ts: boolean;
    props: boolean;
    ref: boolean;
    dir: 'ui' | 'components' | 'app';
    name: string;
    file: string[];
}

export interface FileSetting {
    [key: string]: {
        content: (args: Arguments) => string,
        name: (args: Arguments) => string
    }
}
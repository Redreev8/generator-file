import FormatWord from '../../format-word';
import {Arguments} from '../../type';

const Import = ({name, file, ts, ref}: Arguments) => {
    let react = '';
    if (ts && !ref) react = `import { FC } from 'react'\n`;
    if (ref) react = `import { forwardRef } from 'react'\n`;
    const style = `import style from './${name}.module.scss'\n`;
    const use = `${
        file.includes('h')
            ? `import use${FormatWord(name, 'PascalCase')} from use${FormatWord(name, 'PascalCase')}`
            : ''
    }\n`;
    return react + style + "import classNames from 'classnames'\n" + use;
};

export default Import;

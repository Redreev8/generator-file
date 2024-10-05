import FormatWord from '../../format-word';
import {Arguments} from '../../type';

const Content = ({name, ts, props, ref}: Arguments) => {
    const Interface =
        ts && props
            ? `interface ${FormatWord(name, 'PascalCase')}Props {
}\n\n`
            : '';

    const Func = `${ref ? `function ` + FormatWord(name, 'PascalCase') + 'Ref' : ''}({}, ref) ${ref ? '' : '=>'} {
    return (
        <div className={ classNames(style['${name}']) }>
        </div>
    )
}`;

    let content = '';

    if (ts && !ref) {
        content = `const ${FormatWord(name, 'PascalCase')}: FC${props ? `<${FormatWord(name, 'PascalCase')}Props>` : ''} = ${Func}\n\n`;
    }

    if (ts && ref) {
        content = `const ${FormatWord(name, 'PascalCase')} = forwardRef<HTMLDivElement, ${FormatWord(name, 'PascalCase')}Props>(${Func})\n\n`;
    }

    if (!ts && ref) {
        content = `const ${FormatWord(name, 'PascalCase')} = forwardRef(${Func})\n\n`;
    }

    return Interface + content;
};

export default Content;

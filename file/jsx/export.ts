import FormatWord from '../../format-word';
import {Arguments} from '../../type';

const Export = ({name}: Arguments) => {
    return `export default ${FormatWord(name, 'PascalCase')}`;
};

export default Export;

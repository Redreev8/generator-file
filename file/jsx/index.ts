import {Arguments} from '../../type';
import Content from './content';
import Export from './export';
import Import from './import';

const content = (args: Arguments) => {
    return Import(args) + Content(args) + Export(args);
};

const name = ({name, ts, dir}: Arguments) => {
    // @ts-ignore
    if (dir === 'app"') return `page.${ts ? 'tsx' : 'jsx'}`;

    return `${name}.${ts ? 'tsx' : 'jsx'}`;
};

export default {
    content,
    name,
};

import flags, { aliasFlags } from './flags'
import { Arguments } from './type'

const argvs: Arguments = process.argv.reduce((obj, el, i) => {
    if (i < 2) return obj
    const [flag, value] = el.split('=')
    const key = aliasFlags[flag]
    if (flags[flag]) obj[flag] = flags[flag](value, obj)
    if (key) obj[key] = flags[key](value, obj)

    return obj
}, 
    {
        ts: true,
        props: false,
        ref: false,
        dir: 'ui',
        name: '',
        file: []
    }
)


export default argvs
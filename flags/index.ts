import fileFalgs from './files'
import nameFalgs from './name'
import tsFalgs from './ts'
import propsFalg from './props'
import dirFalg from './dir'

const flags = {
    'name': nameFalgs,
    'file': fileFalgs,
    'ts': tsFalgs,
    'ref': tsFalgs,
    'props': propsFalg,
    'dir': dirFalg
}
export const aliasFlags = {
    'f': 'file',
    'r': 'ref',
    'd': 'dir',
    'n': 'name',
    'p': 'props',
}
export default flags
import { Arguments } from '../type'

const content = ({ name }: Arguments) => `@import '@/style/root';
@import '@/style/mixin/all';

.${name} {}
`
const name = ({ name }) => `${name}.module.scss`

export default {
    content,
    name
}
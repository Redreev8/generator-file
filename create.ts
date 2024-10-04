import path from 'path'
import fs from 'fs'
import file from './file'
import { Arguments } from './type'
import argvs from './get-args'

export interface CreateProps {
    pathFolder: (string | ((prop: Arguments) => string))[]
}

const create = ({ pathFolder }: CreateProps) => {
    let dir = path.join(...pathFolder.reduce((arr: string[], el) => {
        if (typeof el === 'string') arr.push(el)
        if (typeof el === 'function') arr.push(el(argvs))
        return arr
    }, []))
    dir = path.join(dir, argvs.dir, argvs.name)
    fs.mkdirSync(path.join(dir))
    argvs.file.forEach(f => {
        const settingFile = file[f]
        fs.writeFileSync(
            path.join(dir, settingFile.name(argvs)),
            settingFile.content(argvs),
            { encoding: 'utf8', flag: 'w' }
        )
    })
}

export default create
import fs from 'fs'
import path from 'path'

const dataFile = path.join(process.cwd(), 'data.json')

export function getData(): any {
    const data = fs.readFileSync(dataFile, 'utf8')
    return JSON.parse(data);
}
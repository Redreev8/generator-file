const ferstUp = (s: string) => {
    const arrLEtter = s.split('')
    arrLEtter[0] = arrLEtter[0].toLocaleUpperCase() 
    return arrLEtter.join('')
}

export default ferstUp
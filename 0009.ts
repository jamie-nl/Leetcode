function isPalindrome(x: number): boolean {
    const strX = String(x)
    let reversedStr = ''

    for (let i = strX.length -1; i >= 0; i--) {
        reversedStr += strX[i]
    }

    return strX === reversedStr
};

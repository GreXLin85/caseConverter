/**
 * 
 * @param {String} text 
 */
module.exports = (text) => {
    text = text.split(" ")
    let a = text[0]

    for (let i = 1; i < text.length; i++) {
        a += text[i][0].toUpperCase()+text[i].slice(1,text[i].length)
    }
    return a
}
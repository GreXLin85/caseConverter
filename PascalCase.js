/**
 * 
 * @param {String} text 
 */
module.exports = (text) => {
    text = text.split(" ")
    let a = ""

    for (let i = 0; i < text.length; i++) {
        a += text[i][0].toUpperCase()+text[i].slice(1,text[i].length)
    }
    return a
}
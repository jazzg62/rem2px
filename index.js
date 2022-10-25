/**
 * rem2px
 * @param {string} text
 * @param {{baseFontsize?:number, baseWidth?:number, targetWidth?:number}} textConfig
 * @returns
 */
function rem2px(text, textConfig) {
    textConfig = Object.assign(
        {
            baseFontsize: 23,
            baseWidth: 375,
            targetWidth: 750,
        },
        textConfig
    );
    let reg = /(\d*\.?\d*rem)/g;
    let res = replace(text, reg, function (val) {
        let t = Number(val.replace("rem", ""));
        let fontsize = (t / textConfig.baseWidth) * textConfig.baseFontsize * textConfig.targetWidth;
        fontsize = Number(fontsize.toFixed(4));
        return fontsize + "px";
    });
    return res;
}

/**
 * px2rem
 * @param {string} text
 * @param {{baseWidth?:number, targetWidth?:number, targetFontsize?:number}} textConfig
 * @returns
 */
function px2rem(text, textConfig) {
    textConfig = Object.assign(
        {
            baseWidth: 750,
            targetWidth: 375,
            targetFontsize: 23,
        },
        textConfig
    );
    let reg = /(\d*\.?\d*px)/g;
    let res = replace(text, reg, function (val) {
        let t = Number(val.replace("px", ""));
        let fontsize = ((t / textConfig.baseWidth) * textConfig.targetWidth) / textConfig.targetFontsize;
        fontsize = Number(fontsize.toFixed(4));
        return fontsize + "rem";
    });
    return res;
}

/**
 * replace a text with function
 * @param {string} text
 * @param {RegExp} reg
 * @param {function} fn
 * @returns
 */
function replace(text, reg, fn) {
    let cursor = 0;
    let match = null;
    let res = "";
    while ((match = reg.exec(text))) {
        res += text.substring(cursor, match.index);
        res += fn(match[1]);
        cursor = match.index + match[0].length;
    }
    return res + text.substring(cursor, text.length);
}

module.exports = {
    px2rem,
    rem2px,
    replace,
};

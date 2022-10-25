const fs = require("fs");
const { rem2px, px2rem } = require("..");
const { describe, expect, test } = require("@jest/globals");

describe('base.css', ()=>{
    test('rem2px', ()=>{
        let input = fs.readFileSync("./test/resource/base.css").toString();
        expect(rem2px(input, { baseFontsize: 23, baseWidth: 375, targetWidth: 750 })).toBe(fs.readFileSync('./test/resource/base.output.css').toString());
    })

    test('px2rem', ()=>{
        let input = fs.readFileSync("./test/resource/base.output.css").toString();
        let output = px2rem(input, { baseWidth: 750, targetWidth: 375, targetFontsize: 23 });
        expect(output).toBe(fs.readFileSync('./test/resource/base.output2input.css').toString());
    })
})

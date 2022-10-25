# rem2px

## how to use
```javascript
    // 1. install
    // npm install rem2px
    // 2. import and run rem2px
    import {rem2px} from rem2px;
    let text = `input[type="checkbox"] {
        position: relative;
        width: 0.75rem;
        height: 0.75rem;
        background-color: #f5f5f5;
        border: 0.05rem solid #ccc;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        vertical-align: middle;
    }`
    rem2px(text, { baseFontsize: 23, baseWidth: 375, targetWidth: 750 });
    // return the following text
    `input[type="checkbox"] {
        position: relative;
        width: 34.5px;
        height: 34.5px;
        background-color: #f5f5f5;
        border: 2.3px solid #ccc;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        vertical-align: middle;
    }`
```
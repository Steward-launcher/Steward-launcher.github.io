import AV from 'leancloud-storage'

function initAV() {
    const appId = 'yS0XPruW8AQdHJy2rSiy72AM-gzGzoHsz';
    const appKey = '8IQFlsOqtEGx8MUcHJkX4SL3';
    const serverURL = 'https://ys0xpruw.lc-cn-n1-shared.com';
    AV.init({ appId, appKey, serverURL });
}

initAV();
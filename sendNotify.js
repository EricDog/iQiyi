const axios = require('axios');

// =======================================微信 pushplus 通知设置区域===========================================
//此处填你申请的SCKEY.
//注：此处设置github action用户填写到Settings-Secrets里面(Name输入PUSH_KEY)
let SCKEY = '';
if (process.env.PUSH_KEY) {
    SCKEY = process.env.PUSH_KEY;
}

async function sendNotify(title, content) {
    if (SCKEY === '') {
        return
    }

    const data = {
        token: SCKEY,
        title,
        content,
        template: 'html'
    }

    return axios({
        method: 'post',
        url: `http://www.pushplus.plus/send`,
        data
    })
}

module.exports = {
    sendNotify,
}


# 使用方式
1. 爱奇艺官网登录账号，控制台输入`console.log(document.cookie)`获取cookies；
2. 点击Settings -> Secrets -> IQIYI_COOKIE -> Update；
5. 任意修改仓库内任意文件或点击右上角 Star 即可触发。如是Unstar状态需要点击两次即可。

**本项目需要设置的 Secrets:**

| 名称     | 内容           |   类型     |  说明|
| -------- | ------------- |  ------ | ----- |
| IQIYI_COOKIE  | 爱奇艺authcookie   | 必写参数 |
| PUSH_KEY | Server酱SCKEY值 | 可选参数 | cookie失效推送[server酱的微信通知](http://sc.ftqq.com/3.version) |
| BARK_PUSH | Bark推送值 | 可选参数 | 此内容支持自建Bark添加整个链接即可(自建链接切记删除最后一个/  比如你的是https://a.a.com/ 只需要填写https://a.a.com即可)|
|BARK_SOUND | BARK app推送铃声|可选参数|BARK app推送铃声,铃声列表去APP查看复制填写|

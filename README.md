## 数字滚动插件

## 实例代码
```
    import CountUp from 'ce-countup'
    import 'ce-countup/dist/main.css'

    const appId = document.querySelector('#app')
    const app = new CountUp(appId)

    app.render(20000) // 开始滚动到 20000
```
## 命令
```
    npm run dev  本地测试命令
    npm run bulid  生产目标代码
```

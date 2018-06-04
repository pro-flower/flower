class DateUtil {
    private date: Date

    constructor(date?: string) {
        this.date = date ? new Date(date) : new Date()
    }

    format(param: string = 'YYYY-MM-DD HH:mm:ss') {
        let arr = [{
            reg: '(Y+)',
            replace: this.date.getFullYear()
        }, {
            reg: '(M+)',
            replace: this.date.getMonth() + 1
        }, {
            reg: '(D+)',
            replace: this.date.getDate()
        }, {
            reg: '(H+)',
            replace: this.date.getHours()
        }, {
            reg: '(m+)',
            replace: this.date.getMinutes()
        }, {
            reg: '(s+)',
            replace: this.date.getSeconds()
        }, {
            reg: '(S+)',
            replace: this.date.getMilliseconds()
        }]
        const len = arr.length - 1
        //处理年份
        new RegExp(arr[0].reg).test(param) ?
            param = param.replace(RegExp.$1, String(arr[0].replace).substring(4 - RegExp.$1.length)) : null
        //处理月日时分秒
        for (let i = 1; i < len; i++) {
            new RegExp(arr[i].reg).test(param) ?
                RegExp.$1.length === 2 ?
                    param = param.replace(RegExp.$1, ('00' + arr[i].replace).substring(String(arr[i].replace).length))
                    : param = param.replace(RegExp.$1, String(arr[i].replace))
                : null
        }
        //处理毫秒
        new RegExp(arr[len].reg).test(param) ?
            param = param.replace(RegExp.$1, ('000' + arr[len].replace).substring(String(arr[len].replace).length).substring(3 - RegExp.$1.length))
            : null
        return param
    }
}

//当前时间格式化
console.log(new DateUtil().format('YYYY-MM-DD HH:mm:ss'))
//指定时间格式化
console.log(new DateUtil('2018-06-04 14:00:00').format('YYYY-MM-DD HH:mm:ss'))

export default DateUtil
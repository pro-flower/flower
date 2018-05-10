class Tool {
    constructor() {
    }

    //判断是否为undefined,空
    isTrue = (data: any): boolean => {
        if (data) {
            return true;
        } else {
            return false;
        }
    };
    //去掉前后空格
    trimLeftAndRight = (str: string): string => str.replace(/(^\s*)|(\s*$)/g, "");
    //去掉全部空格
    trimAll = (str: string): string => str.replace(/ /g, '');
    //去掉左边空格
    trimLeft = (str: string): string => str.replace(/^[\s]+/, '');
    //去掉右边的空格
    trimRight = (str: string): string => str.replace(/[\s]+$/, '');
    //去掉数组重复(number)
    // (诡异的ts，ts不支持ES6的Set()结构，需要在.d.ts声明才能使用,还是说我对ts理解不够深刻，😢)
    trimNumberArr = (arr: Array<number>): Array<number> => {
        let obj: object = {};
        let arrTemp: Array<number> = [];
        for (let item in arr) {
            obj[arr[item]] = '';
        }
        for (let item in obj) {
            arrTemp.push(parseInt(item));
        }
        return arrTemp;
    };
    //数组去掉重复(string)
    trimStringArr = (arr: Array<string>): Array<string> => {
        let obj: object = {};
        let arrTemp: Array<string> = [];
        for (let item in arr) {
            obj[arr[item]] = '';
        }
        for (let item in obj) {
            arrTemp.push(item);
        }
        return arrTemp;
    };
    //数组去掉重复(object)
    trimObjArr = (arr: Array<object>, unique: any): Array<object> => {
        let obj: object = {};
        let arrTemp: Array<object> = [];
        for (let item in arr) {
            obj[arr[item][unique]] = arr[item];
        }
        for (let item in obj) {
            arrTemp.push(obj[item])
        }
        return arrTemp;
    };
    //创建元素
    createElement = (str: string): HTMLElement => document.createElement(str);

    //寻找class元素
    getClass = (str: string): HTMLCollection => document.getElementsByClassName(str);

    //寻找id元素
    getId = (str: string): HTMLElement => document.getElementById(str);

    //寻找标签元素
    getTarget = (str: string): NodeList => document.getElementsByTagName(str);
}

export const tool = new Tool();
import Dep from './dep'

function defineReactive(target: object, key: string, value: any) {
    let dep = new Dep()
    new Observer(value)
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get (): any {
            if (Dep.target) dep.depend(dep)
            return value
        },
        set (v: any): void {
            if (v === value) return
            new Observer(v)
            value = v
            dep.notify()
        }
    })
}

function walk(data) {
    Object.getOwnPropertyNames(data).forEach(function (name: string) {
        defineReactive(data, name, data[name])
    })
}

class Observer {
    constructor (public data: object) {
        if (!data || typeof data !== 'object') return
        walk(data)
    }
}

export default Observer

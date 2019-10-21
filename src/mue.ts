import Observer from './observer'
import Watcher from './watcher'

function proxy(target: Mue, data: object):void {
    for (let name in data) {
        Object.defineProperty(target, name, {
            enumerable: true,
            configurable: false,
            get (): any {
                return target.data[name]
            },
            set (v: any): void {
                target.data[name] = v
            }
        })
    }
}

class Mue {
    readonly _ob_: Observer
    constructor (public data: object) {
        proxy(this, data)
        this._ob_ = new Observer(data)
    }

    $watch (key: string, cb: Function) {
        new Watcher(this, key, cb)
    }
}

export default Mue

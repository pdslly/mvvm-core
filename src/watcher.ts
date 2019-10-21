import Dep from './dep'
import Mue from './mue'

class Watcher {
    value: any
    constructor (public vm: Mue, public key: string, public cb: Function) {
        this.value = this.get()
    }

    get(): any {
        Dep.target = this
        let value = this.vm[this.key]
        Dep.target = null
        return value
    }
    update(): void {
        let nVal = this.get()
        let oVal = this.value
        if (nVal !== oVal) {
            this.cb.call(this, nVal, oVal)
            this.value = nVal
        }
    }
    addDeps(dep: Dep) {
        dep.addSub(this)
    }
}

export default Watcher

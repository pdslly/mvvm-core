import Watcher from './watcher'

class Dep {
    static target: Watcher = null
    subs: Array<Watcher> = []

    depend (dep) {
        Dep.target.addDeps(dep)
    }

    addSub (sub: Watcher) {
        this.subs.push(sub)
    }

    notify () {
        this.subs.forEach(function (sub: Watcher) {
            sub.update()
        })
    }
}

export default Dep

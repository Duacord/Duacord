class AdvancedEmitter {
    constructor() {
        this.Listeners = {}
    }

    On(Event, Handler) {
        if (!this.Listeners[Event]) {
            this.Listeners[Event] = []
        }

        this.Listeners[Event].push(Handler)
    }

    on = this.On

    Emit(Event, ...Arguments) {
        if (!this.Listeners[Event]) {
            return
        }

        for (const Handler of this.Listeners[Event]) {
            Handler(...Arguments)
        }
    }

    emit = this.Emit

    Off(Event, Handler) {
        if (!this.Listeners[Event]) {
            return
        }

        this.Listeners[Event] = this.Listeners[Event].filter((Listener) => Listener != Handler)
    }

    off = this.Off

    Once(Event, Handler) {
        const Wrapper = (...Arguments) => {
            Handler(...Arguments)
            this.Off(Event, Wrapper)
        }

        this.On(Event, Wrapper)
    }

    once = this.Once

    Clear(Event) {
        if (!this.Listeners[Event]) {
            return
        }

        this.Listeners[Event] = []
    }

    clear = this.Clear

    ClearAll() {
        this.Listeners = {}
    }

    clearAll = this.ClearAll

    GetListeners(Event) {
        return this.Listeners[Event] || []
    }

    getListeners = this.GetListeners

    WaitFor(Event, Filter, Timeout) {
        return new Promise(
            (Resolve, Reject) => {
                const TimeoutID = setTimeout(() => {
                    Reject(new Error("Timeout"))
                }, Timeout)

                const Handler = (...Arguments) => {
                    if (Filter(...Arguments)) {
                        clearTimeout(TimeoutID)
                        this.Off(Event, Handler)
                        Resolve(...Arguments)
                    }
                }

                this.On(Event, Handler)
            }
        )
    }
}

export default AdvancedEmitter
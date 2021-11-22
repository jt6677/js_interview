interface EventsType {
  events: Record<string, Array<() => void>>
  on: (eventName: string, callback: () => void) => void
  off: (eventName: string) => void
  trigger: (eventName: string) => void
}

class Events implements EventsType {
  constructor() {
    this.events = {}
  }

  events: Record<string, (() => void)[]>

  on(eventName: string, callback: () => void) {
    if (eventName in this.events) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }

  trigger(eventName: string) {
    if (eventName in this.events) {
      this.events[eventName].forEach((cb) => cb())
    } else {
      console.log('not event found')
    }
  }

  off(eventName: string) {
    if (eventName in this.events) delete this.events[eventName]
  }
}

export const evt = new Events()
evt.on('clg', () => console.log('hihui'))
evt.on('clg', () => console.log('hibai'))
evt.trigger('clg')
evt.off('clg')
evt.trigger('clg')
// console.log(evt.events)

export {}

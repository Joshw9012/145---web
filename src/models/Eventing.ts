type Callback = () => void; // this type annotation expects a function return nothing

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    //this.events[eventName]; //this should return two possible outcome. : 1. Callback[x];  2. undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers; //add key value pairs to the events array
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => callback());
  }
}

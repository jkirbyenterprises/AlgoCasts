// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push(callback); 
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if(!this.events[eventName]) {
      return;
    }

    for(let callback of this.events[eventName]) {
      callback();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

// Using object and array of callbacks
// class Events {
//   constructor() {
//     this.events = {};
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     if(!this.events[eventName]) {
//       this.events[eventName] = [];
//     }
    
//     this.events[eventName].push(callback);
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     if(!this.events[eventName]) {
//       return;
//     }

//     this.events[eventName].forEach((callback) => {
//       callback();
//     });
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     delete this.events[eventName];
//   }
// }

// My initial solution
// class Events {
//   // Register an event handler
//   on(eventName, callback) {
//     if(!this.events) {
//       this.events = [];
//     }

//     this.events.push({
//       eventName,
//       callback
//     });
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     this.events.map((event) => {
//       if(event.eventName === eventName) {
//         event.callback();
//       }
//     })
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     this.events = this.events.filter((event) => (
//       event.eventName !== eventName
//     ));
//   }
// }

module.exports = Events;

export interface XYCoordinates {
  x: number,
  y: number
}

// If input is null or undefined, return an empty array so that it stays "falsy", otherwise make a regular array
export const asArray = (input: any): Array<any> => input == null ? [] : (Array.isArray(input) ? input : [input]);

const unloadListener = (e: BeforeUnloadEvent) => {
  // Cancel the event
  e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
  // Chrome requires returnValue to be set
  e.returnValue = '';
};

export const confirmQuit = () => {
  window.addEventListener('beforeunload', unloadListener);
};

export const quitIsSafe = () => {
  window.removeEventListener('beforeunload', unloadListener);
};

export class Deferred {
  promise: Promise<any>;

  reject: Function;

  resolve: Function;

  constructor() {
    this.reject  = () => undefined;
    this.resolve = () => undefined;

    this.promise = new Promise((resolve, reject) => {
      this.reject  = reject;
      this.resolve = resolve;
    });
  }
}

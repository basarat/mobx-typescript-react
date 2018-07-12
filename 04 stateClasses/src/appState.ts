import { observable, action } from 'mobx';

class ApplicationState {
    @observable
    currentValue = '';
  
    @observable
    values = [];
  
    @action 
    addCurrentValue() {
      this.values.push(this.currentValue);
      this.currentValue = '';
    }
  
    @action 
    reset() {
      this.currentValue = '';
      this.values = [];
    }
  }
  
export const appState = new ApplicationState();
  
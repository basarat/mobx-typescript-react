import { observable, action } from 'mobx';

/** 
 * Features
 * - Store a list of items (strings) 
 * - Allow maintaining a *current* string as it gets typed
 * - Add new new string to this list 
 * - Add an option to reset the list
 */
class ApplicationState {
  @observable
  items: string[] = [];

  @observable
  currentItem = '';

  @action
  changeCurrentItem(newValue: string) {
    this.currentItem = newValue;
  }

  @action
  addCurrentItem() {
    this.items.push(this.currentItem);
    this.currentItem = '';
  }

  @action
  reset() {
    this.items = [];
    this.currentItem = '';
  }
}

export const appState = new ApplicationState();

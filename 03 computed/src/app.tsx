import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class HelloData {
  @observable
  clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }

  @computed
  get hasBeenClicked() {
    console.log('called');
    return this.clickedCount > 0;
  }
}

@observer
class Hello extends React.Component<{}> {
  data = new HelloData();
  render() {
    return (
      <>
        <button onClick={() => this.data.increment()}>
          Click count = {this.data.clickedCount}
        </button>
        {
          this.data.hasBeenClicked
          && <div>You have clicked the button!</div>
        }
        {
          this.data.hasBeenClicked
          && <div>You have clicked the button!</div>
        }
      </>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);

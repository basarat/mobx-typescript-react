import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action, configure } from 'mobx';
import { observer } from 'mobx-react';

configure({
  enforceActions: true
})

class HelloData {
  @observable clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }
}

@observer
class Hello extends React.Component<{}> {
  data = new HelloData();
  render() {
    return (
      <button onClick={() => this.data.increment()}>
        Click count = {this.data.clickedCount}
      </button>
    );
  }
}

import MobxReactDevtools from 'mobx-react-devtools';

ReactDOM.render(
  <>
  <Hello />
  <MobxReactDevtools />
  </>,
  document.getElementById('root')
);


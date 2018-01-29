import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class ApplicationState {

}
const state = new ApplicationState();

@observer
class Application extends React.Component {
  render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

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

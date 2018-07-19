import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { appState } from './appState';

@observer
class Application extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          appState.addCurrentItem();
        }}>
          <input
            value={appState.currentItem}
            onChange={e => appState.changeCurrentItem(e.target.value)} />
          <button type="submit">
            Add
          </button>
          <button type="button"
            onClick={() => appState.reset()}>
            Reset
          </button>
          <ul>
            {appState.items.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);

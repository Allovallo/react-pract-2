import './App.css';
import { Counter } from 'components/button';
import { Toggle } from 'components/toggle';

function App() {
  return (
    <div>
      <Counter initialValue={10} />
      <Toggle></Toggle>
    </div>
  );
}

export default App;

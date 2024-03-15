import './App.css';
import { Counter } from 'components/button';
import { Toggle } from 'components/toggle';
import { EvtButton } from 'components/evtButton';
import { LoginForm } from 'components/form';
import { SignUpForm } from 'components/signUpForm';

function App() {
  return (
    <div>
      <Counter initialValue={10} />
      <Toggle></Toggle>
      <EvtButton></EvtButton>
      <LoginForm></LoginForm>
      <SignUpForm></SignUpForm>
    </div>
  );
}

export default App;

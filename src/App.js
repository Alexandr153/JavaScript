import './App.css';
import Button from './Components/Button/Button';

function App() {
  return <>
  <Button title={'Upgrades'} disable={false} type={'upgrades'}/>
  <Button title={'Boosters'} disable={false} type={'boosters'}/>
  <Button title={'Claim'} disable={false} type={'claim'}/>
  </>
}

export default App;

import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';

const { getData } = require('./db/db')
const upgrades = getData();

function App() {
  return <>
  <Button title={'Upgrades'} disable={false} type={'upgrades'}/>
  <Button title={'Boosters'} disable={false} type={'boosters'}/>
  <Button title={'Claim'} disable={false} type={'claim'}/>
  {upgrades.map(upgrades =>{
    return <Card upgrades={upgrades} key={upgrades.id}/>
  })}
  </>
}

export default App;

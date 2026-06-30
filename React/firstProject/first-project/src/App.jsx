

import CartItem from '../components/cart/CartItem';
import Counter from '../components/Counter';
import NotificationManager from '../components/NotificationSystem/NotificationManager';
import PropsParent from '../components/Props Practice/PropsParent';
import UserDetails from '../components/UserDetails';

const App = () => {
  const name1 = "Donald"
  const name2 = "Joe Rogan"
  const name3 = "Conor McGregor"
  return (
    <div>

      <PropsParent />


      {/* <h1>Welcome to my first react project</h1>
      <p>This is a project i am building for the first time</p>
   
      <Counter />
      <UserDetails name ={name1}/>
      <UserDetails name={name2}/>
      <UserDetails  name={name3}/>


      <NotificationManager />

    <CartItem name="iPhone" quantity={1}/> */}

    </div>

  )
}

export default App
import VendingMachine from './components/VendingMachine';

function App() {
  return (
    <div>
      <div className='wrapper'>
        <div className='description'>
          <h1>Vending machine</h1>
          <div>
            <p>Your snack is just three steps away</p>
            <p>1. Choose a snack and note its ID number.</p>
            <p>2. Insert the coins.</p>
            <p>3. Click 'Order'.</p>
            <p>Enjoy your snack and don't forget collect your change!</p>
          </div>
        </div>

        <VendingMachine />
      </div>
    </div>
  );
}

export default App;

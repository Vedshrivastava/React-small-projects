import { useState } from 'react';
import './App.css';
import InputBox from './components/index.js';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => { setConvertedAmount(amount * currencyInfo[to]); };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div className='w-screen h-screen flex justify-center flex-wrap items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://img.freepik.com/premium-vector/money-currency-exchange-money-transfer-stock-exchange-currencies-dollar-euro-pound-yen_228260-472.jpg)` }}>
      <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop:blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault();
          //This method prevents the default action that belongs to the event. 
          //In this case, it prevents the form from being submitted in the traditional way (which would cause the page to reload).
          convert();
        }}>
          <div className='mb-4'>
            <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setFrom(currency);
              }}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              selectedCurrency={from}
            />
          </div>
          <button onClick={swap} className='w-full mb-4 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1'>
            Swap
          </button>
          <div className='mb-4'>
            <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              onAmountChange={(amount) => {
                setConvertedAmount(amount);
              }}
              selectedCurrency={to}
            />
          </div>
          <button type="submit" className='w-full border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1'>
            Convert {from.toUpperCase} to {to.toUpperCase}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

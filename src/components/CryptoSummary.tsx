import { useEffect, useState } from "react";
import { AppProps} from "../types/types";


export default function CryptoSummary({crypto, updateOwned} : AppProps): JSX.Element{
  const [amount, setAmount] = useState<number>(NaN);
  useEffect(()=>{
    console.log(crypto.name, amount, crypto.current_price *(amount));
  });
    return (
      <div>
        <span>{crypto.name + ' $' + crypto.current_price}</span>
        <input type="number" style={{margin: 10}} value={amount} 
        onChange={(e)=>{
          setAmount(parseFloat(e.target.value));
          updateOwned(crypto, parseFloat(e.target.value));
        }} />
        <p>{isNaN(amount) ? '$0.00' : '$' +(crypto.current_price * (amount)).toLocaleString(
          undefined,
          {minimumFractionDigits: 2, maximumFractionDigits: 2}
          )}</p>
      </div>  
      );
}
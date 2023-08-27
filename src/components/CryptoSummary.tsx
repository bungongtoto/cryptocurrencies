import { AppProps} from "../types/types";


export default function CryptoSummary({crypto} : AppProps): JSX.Element{
    return (
        <p>{crypto.name + ' $' + crypto.current_price}</p>
      );
}
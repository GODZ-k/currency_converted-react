import { useState } from "react";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";


function App() {

    const [amount, setAmount] = useState(0)
    const [from , setFrom] = useState("usd")
    const [to , setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)


    const currency = useCurrencyInfo(from)


const options = Object.keys(currency)

const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
}

function convert(){
    setConvertedAmount(amount * currency[to])
}
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-900">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form onSubmit={(e) => { e.preventDefault(); convert()}}>
                        <div className="w-full mb-1">
                            <InputBox
                            amount ={amount.toFixed(2)}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={from}
                            label="From"/>
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                onClick={swap}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                             amount={convertedAmount.toFixed(2)}
                             currencyOptions={options}
                             label="To"
                            onCurrencyChange={(currency)=> setTo(currency)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={to}
                            amountDisable


                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                             {"convert" + " " + from.toUpperCase() + " " +"to"+ " " + to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default App
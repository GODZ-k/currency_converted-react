import { useId } from "react";


function InputBox({
    label,
    currencyOptions = [],
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency="usd",
    amountDisable=false,
    currencydisable=false,


}) {

const inputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                id={inputId}
                disabled={amountDisable}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(parseInt(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencydisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                        {currencyOptions.map((options)=>(
                            <option key={options} value={options}>
                            {options}
                        </option>
                        ))}

                </select>
            </div>
        </div>
    );
}


export default InputBox;

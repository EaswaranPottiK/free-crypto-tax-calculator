import React, { useReducer, useState } from "react";

const CryptoPage = () => {
  // 0 for less than 12 month and 1 for more than 12 month
  const [investmentType, setInvestmentType] = useState(1);

  function reducer(state, action) {
    let itemToReturn = { ...state, ...action };

    if (investmentType) {
      if (
        Number(itemToReturn.salePrice) -
          Number(itemToReturn.purchasePrice) -
          Number(itemToReturn.expenses) >
        0
      ) {
        itemToReturn.greenbox =
          (Number(itemToReturn.salePrice) -
            Number(itemToReturn.purchasePrice) -
            Number(itemToReturn.expenses)) *
          0.5;
      } else {
        itemToReturn.greenbox =
          Number(itemToReturn.salePrice) -
          Number(itemToReturn.purchasePrice) -
          Number(itemToReturn.expenses);
      }
    } else {
      itemToReturn.greenbox =
        Number(itemToReturn.salePrice) -
        Number(itemToReturn.purchasePrice) -
        Number(itemToReturn.expenses);
    }

    if (itemToReturn.annualIncome <= 18200) {
      itemToReturn.taxRate = "0%";
      itemToReturn.bluebox = 0;
    } else if (itemToReturn.annualIncome <= 45200) {
      itemToReturn.taxRate = "Nill + 19% of excess over $18,200";
      itemToReturn.bluebox = (Number(itemToReturn.greenbox) * 0.19).toFixed(3);
    } else if (itemToReturn.annualIncome <= 120000) {
      itemToReturn.taxRate = "$5,092 + 32.5% of excess over $45,000";
      itemToReturn.bluebox = (Number(itemToReturn.greenbox) * 0.325).toFixed(3);
    } else if (itemToReturn.annualIncome <= 180000) {
      itemToReturn.taxRate = "$29,467 + 37% of excess over $120,000";
      itemToReturn.bluebox = (Number(itemToReturn.greenbox) * 0.37).toFixed(3);
    } else {
      itemToReturn.taxRate = "$51,667 + 45% of excess over $180,000";
      itemToReturn.bluebox = (Number(itemToReturn.greenbox) * 0.45).toFixed(3);
    }
    return itemToReturn;
  }

  const [state, dispatch] = useReducer(reducer, {
    greenbox: 0,
    bluebox: 0,
    taxRate: "0%",
    purchasePrice: 0,
    salePrice: 0,
    expenses: 0,
    annualIncome: 18200,
    capitalGainAmount: 0,
    discountForLongTermGains: 0,
  });

  return (
    <div className="mt-8 ">
      <p className="text-center text-2xl font-black">
        Free Crypto Tax Calculator Australia
      </p>

      {/* Financial year and country */}
      <div className="flex justify-between md:justify-around mt-8 px-2 md:px-0">
        <div className="flex flex-col md:ml-3  min-w-40">
          Financial Year
          <select className="md:min-w-52 min-h-12 bg-[#edeeef] rounded-lg">
            <option value="fixed">FY 2023-34</option>
          </select>
        </div>
        
        <div className="flex flex-col md:ml-3 min-w-40">
          Country
          {/* <Flag name='myanmar' /> */}
          <select className="md:min-w-52 min-h-12 bg-[#edeeef] rounded-lg">
            
            <option value="fixed" className="option">
              {" "}
              
              Australia
            </option>
          </select>
        </div>
      </div>

      <div className="bg-[#edeeef] h-[2px] my-4 w-[80%] m-auto"></div>

      <div>
        {/* one line of question ie 2 questions */}
        <br />
        <div className="flex justify-around md:flex-row flex-col ">
          <div className="flex flex-col text-sm">
            <>Enter purchase price of Crypto</>
            <div className="flex md:w-52 text-lg w-[100%]">
              <input
                type="text"
                value=" $"
                className="w-4 min-h-12  bg-[#edeeef] rounded-l-lg"
                readOnly
              />
              <input
                type="number"
                onChange={(e) => dispatch({ purchasePrice: e.target.value })}
                className="w-[100%] md:w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg"
              />
              {/* onChange={(e)=>{}} */}
            </div>
          </div>

          <div className="flex flex-col text-sm">
            <>Enter sale price of Crypto</>
            <div className="flex  md:w-52 text-lg w-[100%]">
              <input
                type="text"
                value=" $"
                className="w-4 min-h-12  bg-[#edeeef] rounded-l-lg"
                readOnly
              />
              <input
                type="number"
                onChange={(e) => dispatch({ salePrice: e.target.value })}
                className="w-[100%] md:w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg"
              />
            </div>
          </div>
        </div>

        <br />
        <div className="flex justify-around flex-col md:flex-row">
          <div className="flex flex-col text-sm">
            <>Enter your Expenses</>
            <div className="flex w-[100%] md:w-52 text-lg">
              <input
                type="text"
                value=" $"
                className="w-4 min-h-12  bg-[#edeeef] rounded-l-lg"
                readOnly
              />
              <input
                type="number"
                onChange={(e) => dispatch({ expenses: e.target.value })}
                className="w-[100%] md:w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg"
              />
            </div>
          </div>

          <br className="md:hidden"></br>

          <div className="flex flex-col text-sm">
            <>Investment Type</>
            <div>
              <div className="flex justify-around">
                <button
                  onClick={() => {
                    setInvestmentType(0);
                  }}
                  className={`rounded-xl pr-7 pl-3 py-3 border ${
                    investmentType == 0 ? "border-blue-600 text-blue-600" : ""
                  }`}
                >
                  Short Term
                </button>
                <button
                  onClick={() => {
                    setInvestmentType(1);
                  }}
                  className={`rounded-xl pr-7 pl-3 py-3 border ${
                    investmentType > 0 ? "border-blue-600 text-blue-600" : ""
                  }`}
                >
                  Long Term
                </button>
              </div>
              <div className="flex justify-around">
                <p>&lt; 12 months</p>
                <p>&gt; 12 months</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="flex justify-around flex-col md:flex-row">
          <div className="flex flex-col text-sm">
            <>Select your annual income </>
            <div>
              <select
                onChange={(e) => dispatch({ annualIncome: e.target.value })}
                className="flex w-[100%] md:w-52 text-lg bg-[#edeeef] h-12 rounded-md"
              >
                <option value={18200}>$0 - $18,200</option>
                <option value={45000}>$18,201 - $45,000</option>
                <option value={120000}>$45,001 - $120,000</option>
                <option value={180000}>$120,001 - $180,000</option>
                <option value={180001}>$180,001+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row md:flex-col text-sm w-52">
            <p>Tax Rate &nbsp;</p>
            <p>{state.taxRate}</p>
          </div>
        </div>

        <br />

        {investmentType == 1 && (
          <div className="flex md:flex-row flex-col justify-around">
            <div className="flex flex-col text-sm">
              <>Capital gain amount</>
              <div className="flex w-[100%] md:w-52 text-lg">
                <input
                  type="text"
                  value=" $"
                  className="w-4 min-h-12  bg-[#edeeef] rounded-l-lg"
                  readOnly
                />
                <input
                  type="number"
                  value={state.salePrice - state.purchasePrice - state.expenses}
                  className="w-[100%] md:w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg"
                />
              </div>
            </div>

            <br className="md:hidden" />

            <div className="flex flex-col text-sm">
              <>Discount for long term gains</>
              <div className="flex w-[100%] md:w-52 text-lg">
                <input
                  type="text"
                  value=" $"
                  className="w-4 min-h-12  bg-[#edeeef] rounded-l-lg"
                  readOnly
                />
                <input
                  type="number"
                  value={
                    state.salePrice - state.purchasePrice - state.expenses > 0
                      ? (state.salePrice -
                          state.purchasePrice -
                          state.expenses) *
                        0.5
                      : 0
                  }
                  className="w-[100%] md:w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-around">
          <div className="mt-10 rounded-md md:px-8 md:py-2 m-auto bg-[#EBF9F4] w-4/5 md:w-1/4">
            <p className="text-center ">Net capital gains tax amount</p>
            <p className="text-center text-[#1DBE8A] font-extrabold text-2xl ">
              {" "}
              $ {state.greenbox}{" "}
            </p>
          </div>
          <div className="mt-10 rounded-md md:px-8 md:py-2 m-auto bg-[#EBF2FF] w-4/5 md:w-1/4">
            <p className="text-center ">Tax you need to pay*</p>
            <p className="text-center text-[#0141CF] font-extrabold text-2xl ">
              {" "}
              $ {state.bluebox}
            </p>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
};

export default CryptoPage;

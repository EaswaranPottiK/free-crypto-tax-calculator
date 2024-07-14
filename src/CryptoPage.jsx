import React, { useReducer, useState } from 'react'

const CryptoPage = () => {
  // 0 for less than 12 month and 1 for more than 12 month
  const [investmentType, setInvestmentType] = useState(1)
  // const tickmark = `?&#10003;`
  function reducer(state, action){
    return {purchasePrice:action.value}
  }
  const [state,dispatch] = useReducer(reducer, {purchasePrice:0})


  return (
    <div className='mt-8 '>
      <p className='text-center text-2xl font-black'>Free Crypto Tax Calculator Australia</p>

      <div className='flex justify-around mt-8'>
        <div>
          Financial Year 
          <select className='min-w-52 min-h-12 ml-3  bg-[#edeeef] rounded-lg'>
            <option value="fixed">FY 2023-34</option>
          </select> 
        </div>
        <div>
          Country 
          {/* <Flag name='myanmar' /> */}
          <select className='min-w-52 min-h-12 ml-3  bg-[#edeeef] rounded-lg'>
          <option value="fixed">Australia</option>
          </select> 
        </div>
      </div>

      <div className='bg-[#edeeef] h-[2px] my-4 w-[80%] m-auto'></div>

      <div>
        {/* one line of question ie 2 questions */}
        <br/>
        <div className='flex justify-around'>

          <div className='flex flex-col text-sm'>
            <>Enter purchase price of Crypto</>
            <div className='flex w-52 text-lg'>
              <input type='text' value=' $' className='w-4 min-h-12  bg-[#edeeef] rounded-l-lg' readOnly/>
              <input type='number' onChange={(e)=>{dispatch(action:{purchasePrice:e.target.value})} className='w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg'/>
            </div>
          </div>

          <div className='flex flex-col text-sm'>
            <>Enter sale price of Crypto</>
            <div className='flex  w-52 text-lg'>
              <input type='text' value=' $' className='w-4 min-h-12  bg-[#edeeef] rounded-l-lg' readOnly/>
              <input type='number' className='w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg'/>
            </div>
          </div>

        </div>

        <br/>
        <div className='flex justify-around'>
          <div className='flex flex-col text-sm'>
            <>Enter your Expenses</>
            <div className='flex  w-52 text-lg'>
              <input type='text' value=' $' className='w-4 min-h-12  bg-[#edeeef] rounded-l-lg' readOnly/>
              <input type='number' className='w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg'/>
            </div>
          </div>

          <div className='flex flex-col text-sm'>
            <>Investment Type</>
            <div>
              <div className='flex gap-1'>
                <button onClick={()=>{setInvestmentType(0)}} className={`rounded-xl pr-7 pl-3 py-3 border ${investmentType ==0 ?"border-blue-600 text-blue-600":""}`}>Short Term</button>
                <button onClick={()=>{setInvestmentType(1)}} className={`rounded-xl pr-7 pl-3 py-3 border ${investmentType >0 ?"border-blue-600 text-blue-600":""}`}>Long Term</button>
              </div>
              <div className='flex justify-around'>
                <p>&lt; 12 months</p>
                <p>&gt; 12 months</p>
              </div>
            </div>

          </div>

        </div>

        <br />
        <div className='flex justify-around'>
          <div className='flex flex-col text-sm'>
            <>Select your annual income </>
            <div>
              <select className='flex  w-52 text-lg bg-[#edeeef] h-12 rounded-md'>
                <option value={18200}>$0 - $18,200</option>
                <option value={45000}>$18,201 - $45,000</option>
                <option value={120000}>$45,001 - $120,000</option>
                <option value={180000}>$120,001 - $180,000</option>
                <option value={180001}>$180,001+</option>
              </select>
            </div>
          </div>

          <div className='flex flex-col text-sm w-52'>
            <>Tax Rate</>
            <p>aslfduhl</p>
          </div>
        </div>

        <br />
        <div className='flex justify-around'>

          <div className='flex flex-col text-sm'>
            <>Capital gain amount</>
            <div className='flex  w-52 text-lg'>
              <input type='text' value=' $' className='w-4 min-h-12  bg-[#edeeef] rounded-l-lg' readOnly/>
              <input type='number' className='w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg'/>
            </div>
          </div>

          <div className='flex flex-col text-sm'>
            <>Discount for long term gains</>
            <div className='flex  w-52 text-lg'>
              <input type='text' value=' $' className='w-4 min-h-12  bg-[#edeeef] rounded-l-lg' readOnly/>
              <input type='number' className='w-48 min-h-12 outline-none bg-[#edeeef] rounded-r-lg'/>
            </div>
          </div>
        </div> 

        

          <div className='flex justify-around'>
            <div className='mt-10 rounded-md px-8 py-2 bg-[#EBF9F4] w-1/4'>
              <p className='text-center '>Net capital gains tax amount</p>
              <p className='text-center text-[#1DBE8A] font-extrabold text-2xl '> $ 123</p>
            </div>
            <div className='mt-10 rounded-md px-8 py-2 bg-[#EBF2FF] w-1/4'>
              <p className='text-center '>Tax you need to pay*</p>
              <p className='text-center text-[#0141CF] font-extrabold text-2xl '> $ 123</p>
            </div>
          </div>    

          <br/>
      </div>
    </div>
  )
}

export default CryptoPage
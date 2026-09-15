import React, { useEffect, useState } from 'react'
import './App.css'
import { tenureData } from './utils/constants';
import TextInput from './components/text-input.jsx';
import SliderInput from './components/slider-input.jsx';

const App = () => {

  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEmi = (downpayment) => {
    if (!cost) return;

    const loanAmt = cost - downpayment
    const rateOfInterest = interest / 100;
    const noOfYrs = tenure / 12;

    const EMI = (loanAmt * rateOfInterest * (1 + rateOfInterest) ** noOfYrs) / ((1 + rateOfInterest) ** noOfYrs - 1);

    return Number(EMI / 12).toFixed(0); //to remove decimals
  }

  const calculateDownPayment = (emi) => {
    if (!cost) return;

    const dpPercent = 100 - (emi / calculateEmi(0)) * 100
    return Number((dpPercent / 100) * cost).toFixed(0);
  }


  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEmi(downPayment)
    setEmi(emi)
  }, [tenure, cost])

  const updateEmi = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value)
    setDownPayment(dp)

    const emi = calculateEmi(dp)
    setEmi(emi)
  }

  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value)
    setEmi(emi)

    const dp = calculateDownPayment(emi)
    setDownPayment(dp)
  }

  function totalDownPayment() {
    return (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
  }

  return (
    <div className='App'>
      <span className='title' style={{ fontSize: 30 }}>EMI Calculator</span>

      <TextInput
        Title={"Total Cost of asset"}
        state={cost}
        setState={setCost}
      />

      <TextInput
        Title={"Interest Rate (in %)"}
        state={interest}
        setState={setInterest}
      />

      <TextInput
        Title={"Processing Fee (in %)"}
        state={fee}
        setState={setFee}
      />


      <SliderInput
         title={'Down Payment'}
         totalTitle={`Total Down Payment = ${totalDownPayment()}`}
         onChange={updateEmi}
         state={downPayment}
         min={0}
         max={cost}
         labelMin={'0%'}
         labelMax={'100%'}
      />

      <SliderInput
         title={'Loan per Month'}
         totalTitle={`Total EMI = ${Number((emi * tenure).toFixed(0))}`}
         onChange={updateDownPayment}
         state={emi}
         min={calculateEmi(cost)}
         max={calculateEmi(0)}
      />
      

      <span className="title">Tenure</span>
      <div className='tenureContainer'>
        {
          tenureData.map((t, id) => {
            return <button key={id} className={`tenure ${t === tenure ? "selected" : ""}`} onClick={() => setTenure(t)}>{t}</button>
          })
        }
      </div>
    </div>
  )
}

export default App

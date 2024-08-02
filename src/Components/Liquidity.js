
import React, {  useState } from 'react'
const Liquidity = () => {

    const [liq, setLiq] = useState({ lp: "", lev: "", q: "",});
    
    const onChange = (e) => {
        
    }


  return (
    <div className='container'>
      <h1>Liquidity Calculation</h1>
      <form>
  <div className="row mb-3">
    <label htmlFor="lp" className="col-sm-2 col-form-label">Last Price</label>
    <div className="col-sm-4">
      <input type="number" className="form-control" id="lp" onChange={onChange} value={liq.description}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="lev" className="col-sm-2 col-form-label">Leverage(in X)</label>
    <div className="col-sm-4">
      <input type="number" className="form-control" id="lev" onChange={onChange} value={liq.description}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="q" className="col-sm-2 col-form-label">Quantity</label>
    <div className="col-sm-4">
      <input type="number" className="form-control" id="q" onChange={onChange} value={liq.description}/>
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Direction</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="direction" checked onChange={onChange} value={liq.description}/>
        <label className="form-check-label" htmlFor="gridRadios1">
          Short
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="gridRadios2">
         Long
        </label>
      </div>
    </div>
  </fieldset>
  <button type="button" className="btn btn-primary">Add</button>
  <button type="button" className="btn btn-primary mx-3">Reset</button>
</form>
    </div>
  )
}

export default Liquidity


import { TextField, Box, Button, Stack,FormLabel,FormControl,FormControlLabel,RadioGroup ,Radio } from '@mui/material';
import LiquidityCal from '../Functions/LiquidityCal';
import React, { useState } from 'react'
const Liquidity = () => {

  const [liq, setLiq] = useState({ lp: "", lev: "", q: "",direction:"s" ,liq:0});
  const [value, setValue] = React.useState('s');

  const onChange = (e) => {
   setLiq({...liq,[e.target.name]:[e.target.value]});
  }
  const handleAddClick = (e) => {
    let res = LiquidityCal(liq.lp, liq.lev, liq.direction, liq.q);
    if(res>=0)
    setLiq({...liq,liq:res});
  }
  const handleResetClick = (e) => {
    setLiq({lp: "", lev: "", q: "",direction:"s" ,liq:0.0});
  }

  


  const handleChange = (event) => {
    setLiq({...liq,direction:event.target.value});
  };

  return (
    <div className='container my-3'>
      <h1>Liquidity Calculation</h1>
      <form>
        <div className="row mb-3">
          <label htmlFor="lp" className="col-sm-2 col-form-label">Last Price</label>
          <div className="col-sm-4">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth  label="Last price" name="lp" type='number' id="lp" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } onChange={onChange} value={liq.lp}/>
            </Box>
            
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="lev" className="col-sm-2 col-form-label">Leverage(in X)</label>
          <div className="col-sm-4">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Leverage" type='number' name="lev" id="lev" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } onChange={onChange} value={liq.lev} />
            </Box>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="q" className="col-sm-2 col-form-label">Quantity</label>
          <div className="col-sm-4">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Quantity" id="q" type='number' name="q" onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() } onChange={onChange} value={liq.q} />
            </Box>

          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Direction</legend>
          <div className="col-sm-10">
            <FormControl>
           
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={liq.direction}
                onChange={handleChange}
              >
                <FormControlLabel name='s' value="s" control={<Radio />} label="Short" />
                <FormControlLabel  name='l'  value="l" control={<Radio />} label="Long" />
              </RadioGroup>
            </FormControl>
          </div>
        </fieldset>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handleAddClick}>Add</Button>
          <Button variant="outlined" onClick={handleResetClick} >Reset</Button>
        </Stack>
        <div className="row mb-3 my-3">
          <label htmlFor="q" className="col-sm-2 col-form-label">You will be Liquidated at</label>
          <div className="col-sm-4">
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth  id="liq" type='number' disabled={true} name="liq" onChange={onChange} value={liq.liq} />
            </Box>

          </div>
        </div>
      </form>
    </div>
  )
}

export default Liquidity


const LiquidityCal= (lastPrice,leverage,direction,quantity)=> {
    let liquidity=0;
    let levWithFees=(lastPrice*quantity)/leverage;


    if(direction==="l"){
     liquidity=lastPrice -(lastPrice/levWithFees) ;
    }
    else if(direction==="s"){
        liquidity=lastPrice+ (lastPrice/levWithFees) ;
    }
    return liquidity;


}

export default LiquidityCal

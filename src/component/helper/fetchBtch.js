import btcJson from '../../static/coin_Bitcoin.json'

export function fetchBtc(){
    const btcPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(btcJson)
        }, 1000)
        
    })
   return btcPromise // promise
}

/**
 * this filter btc data in specified period
 * @param {*} dataArray data array
 * @param {*} lowerBound lower date like, 2021-01-01
 * @param {*} upperBound upper date like, 2021-01-30
 * @returns filterd data for specified period
 */
export function filterBtc(dataArray, lowerBound, upperBound){
   let boundbtc = []
   dataArray.forEach((item, index) => {
       let date = item.Date.split(" ")[0] 
       if ( lowerBound <= date && date <= upperBound){
        boundbtc.push(item)
       }
   })
   return boundbtc   
}

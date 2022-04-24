export function findBtcDateLabel(lowerDate, upperDate){
    let milliLowerDate = new Date(lowerDate).getTime() // unix time since 1 jan 1970
    let milliUpperDate = new Date(upperDate).getTime()
    let dayInMili = 86400000
    let days = []

    for (let i = milliLowerDate; i <= milliUpperDate; i=i+dayInMili){
        let isoDate = new Date(i).toISOString().split('T')[0]
        days.push(isoDate)
    }
    
    return days
}
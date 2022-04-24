export function calculatedDate(calDate) {
    let date = new Date()
    if (calDate > 0) {
      date.setDate(date.getDate() + calDate)
    } else if (calDate < 0) {
      date.setDate(date.getDate() - calDate)
    }
    return date
  }
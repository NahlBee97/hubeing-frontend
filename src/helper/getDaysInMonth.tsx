function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getDayArrayForMonth(year: number, month: number): number[] {
  // Get the total number of days
  const numDays = getDaysInMonth(year, month);
  
  // Create an array of that length and map the index to the day number
  return Array.from({ length: numDays }, (_, i) => i + 1);
}
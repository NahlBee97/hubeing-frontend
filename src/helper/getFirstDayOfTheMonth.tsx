// Let's find the first weekday for November 2025
export function getFirstDayOfMonthWeekIndex(year: number, month: number) {
    const firstDayOfMonth = new Date(year, month, 1); // 10 = November
    
    const weekdayIndex = firstDayOfMonth.getDay();
    
    return weekdayIndex;
    // Output: 6  (This means November 1, 2025, is a Saturday)
}

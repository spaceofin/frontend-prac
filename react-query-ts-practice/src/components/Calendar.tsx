import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import './calendar.css';

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  const generateCalendar = () => {
    const startOfMonth = currentMonth.startOf('month');
    const endOfMonth = currentMonth.endOf('month');

    const days: JSX.Element[] = [];
    for (let i = startOfMonth.day(); i > 0; i--) {
      days.push(<div className="day-empty" key={`empty-start-${i}`}></div>);
    }

    for (let day = 1; day <= endOfMonth.date(); day++) {
      days.push(
        <div className="day" key={day}>
          {day}
        </div>,
      );
    }

    const remainingDays = 42 - days.length;

    for (let i = 0; i < remainingDays; i++) {
      days.push(<div className="day-empty" key={`empty-end-${i}`}></div>);
    }

    return <div className="days">{days}</div>;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button className="button" onClick={handlePreviousMonth}>
          PREV
        </button>
        <h1 className="h1">{currentMonth.format('MMMM YYYY').toUpperCase()}</h1>
        <button className="button" onClick={handleNextMonth}>
          NEXT
        </button>
      </div>
      <div className="days-of-week">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
          <div className="day-of-week" key={day}>
            {day}
          </div>
        ))}
      </div>
      {generateCalendar()}
    </div>
  );
}

import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import './calendar.css';
import { getDatedTodos } from 'api/json-api';
import { useQuery } from '@tanstack/react-query';
import { DatedTodoType } from 'types';

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());

  const { data, isLoading, isError } = useQuery({
    queryKey: ['datedTodos', currentMonth.year(), currentMonth.month() + 1],
    queryFn: () => getDatedTodos({ year: currentMonth.year(), month: currentMonth.month() + 1 }),
  });

  const datedTodosMap = data?.datedTodos.reduce(
    (acc: Record<string, string>, todo: DatedTodoType) => {
      acc[todo.date] = todo.title;
      return acc;
    },
    {},
  );
  // console.log(datedTodosMap);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

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
      const dateKey = currentMonth.set('date', day).format('YYYY-MM-DD');
      const todo = datedTodosMap[dateKey];

      days.push(
        <div className="day" key={day}>
          {day}
          <div className="absolute w-full overflow-hidden flex justify-center items-center text-sm leading-4 p-4 box-border">
            {todo}
          </div>
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

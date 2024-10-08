// A mock function to mimic making an async request for data
export function fetchCount({ amount = 1, delay = 500 }) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), delay)
  );
}

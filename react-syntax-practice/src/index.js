import ReactDOM from 'react-dom/client';
import './index.css';


const books = [
    {
        id: 1,
        title: 'How to Cook Cheese Dish',
        pages: 128,
    },
    {
        id: 2,
        title: 'Finding the Lost Star',
        pages: 136,
    },
    {
        id: 3,
        title: 'The Big Whale of the Small Sea',
        pages: 204,
    }
];

const BookTable = ({ books }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>PAGES</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.pages}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BookTable books={books} />
    </div>,

);
import './App.css';
import BookDetails from './components/BookDetails';
import BookForm from './components/BookForm';
import Books from './components/Books';

function App() {
  return (
    <div>
      {/* form to create book */}
      <BookForm/>
      {/* get all books */}
      <Books/>
      {/* get book by id */}
      <BookDetails/>
    </div>
  );
}

export default App;

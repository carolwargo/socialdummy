import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
  return (
    <div expand="lg" className="search-bar">
      <style>
        {`
          .search-bar {
            width: 100%;
            border-radius: 5px;
            padding: 5px;
            background-color: #f8f9fa;
            border: 2px solid #b4b4b4;
          }
          .search-bar::placeholder {
            color: muted;
            opacity: 0.5; /* Firefox */
            font-size: 14px;
          }
          .search-bar:focus {
            box-shadow: none;
            border-color:rgb(214, 214, 215);
          }
        `}  
      </style>
 
 
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              style={{ color:'gray'  }} 
              aria-label="Search"
            />
            <div className=' d-flex'>
            <Button variant="outline-secondary"
            className='justify-content-end'><i className="bi bi-search"></i></Button>
         </div>
          </Form>
    

    </div>
  );
}

export default Search;
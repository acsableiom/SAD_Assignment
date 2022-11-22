import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><img src={logo} className="App-logo" alt="logo"/></li>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Help</li>
        </ul>
      </header>
      <section>
        <div id="container">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Student No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Present?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>data</td>
              <td>data</td>
              <td><button className="btn btn-info btn-lg"/></td>
            </tr>
          </tbody>

        </table>
        </div>
      </section>
    </div>
  );
}

export default App;

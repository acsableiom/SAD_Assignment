import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';


function ChanBtn() {
  const element = document.getElementById("ChanBtn");
  ReactDOM.findDOMNode(element).className = "btn-success"
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><img src={logo} className="App-logo" alt="logo" /></li>
          <li>
            <div class="dropdown">
              <span class="dropdown-trig">File</span>
              <div class="dropdown-content">
                <p>Save</p>
                <p>Print</p>
                <p>Close</p>
              </div>
            </div>
          </li>
          <li>
          <div class="dropdown">
              <span class="dropdown-trig">Edit</span>
              <div class="dropdown-content">
                <p>Undo</p>
                <p>Redo</p>
                <p>Cut</p>
                <p>Copy</p>
                <p>Paste</p>
                <p>Properties</p>
              </div>
            </div>
          </li>
          <li>
          <div class="dropdown">
              <span class="dropdown-trig">View</span>
              <div class="dropdown-content">
                <p>Views</p>
                <p>Zoom</p>
                <p>Window</p>
              </div>
            </div>
          </li>
          <li>
          <div class="dropdown">
              <span class="dropdown-trig">Help</span>
              <div class="dropdown-content">
                <p>Help</p>
                <p>Show Training</p>
                <p>Feedback</p>
                <p>Whats New?</p>
              </div>
            </div>
          </li>
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
                <td><button id="ChanBtn" className="btn btn-info btn-lg" onClick={ChanBtn} /></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>data</td>
                <td>data</td>
                <td><button id="ChanBtn" className="btn btn-info btn-lg" onClick={ChanBtn} /></td>
              </tr>
            </tbody>

          </table>
        </div>
      </section>
    </div>
  );
}

export default App;

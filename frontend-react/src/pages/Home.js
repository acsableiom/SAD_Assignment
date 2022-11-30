
import ReactDOM from 'react-dom/client';

export default function Home(){
    return <section>
    <div id="container">
      <h1>3rd Year - Software Engineering</h1>
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
}


function ChanBtn() {
    const element = document.getElementById("ChanBtn");
    ReactDOM.findDOMNode(element).className = "btn-success"
  }
  
  


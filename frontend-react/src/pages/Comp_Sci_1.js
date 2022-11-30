import ChanBtn from './ChanBtn.jsx'

export default function Comp_Sci_1() {
    return <section>
    <div id="container">
      <h1>1st Year - Computer Science</h1>
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
            <td><ChanBtn /></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>data</td>
            <td>data</td>
            <td><ChanBtn /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
}
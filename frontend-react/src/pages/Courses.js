export default function Courses() {
    return <div id="container">
        <h1>All Available Courses</h1>
        <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Course ID</th>
            <th scope="col">Course Name</th>
            <th scope="col">Course Capacity</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">001</th>
            <td>Software Engineering-3</td>
            <td>200</td>
            <td><a href="/SEModules"><button className="btn btn-primary" /></a></td>
          </tr>
          <tr>
            <th scope="row">002</th>
            <td>Computer Science-1</td>
            <td>300</td>
            <td><a href="/CEModules"><button className="btn btn-primary" /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
}
export default function SEModules() {
    return <div id="container">
    <h1>Software Engineering - 3: Modules</h1>
    <table className="table table-striped">
    <thead className="table-dark">
      <tr>
        <th scope="col">Module ID</th>
        <th scope="col">Module Name</th>
        <th scope="col">Module Capacity</th>
        <th scope="col">View</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">001</th>
        <td>Software Architecture and Design</td>
        <td>50</td>
        <td><a href="/Sad_3"><button className="btn btn-primary" /></a></td>
      </tr>
      <tr>
        <th scope="row">002</th>
        <td>Human Factors</td>
        <td>60</td>
        <td><a href="/He_3"><button className="btn btn-primary" /></a></td>
      </tr>
    </tbody>
  </table>
</div>
}
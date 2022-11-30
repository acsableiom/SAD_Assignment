export default function CEModules() {
    return  <div id="container">
    <h1>Computer Science - 1: Modules</h1>
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
        <td>Software Projects</td>
        <td>100</td>
        <td><a href="/Comp_Sci_1"><button className="btn btn-primary" /></a></td>
      </tr>
      <tr>
        <th scope="row">002</th>
        <td>Web Development</td>
        <td>60</td>
        <td><a href="/Comp_Sci_1"><button className="btn btn-primary" /></a></td>
      </tr>
    </tbody>
  </table>
</div>
}
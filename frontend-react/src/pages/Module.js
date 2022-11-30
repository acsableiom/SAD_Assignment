export default function Module() {
    return <div id="container">
        <h1>Add a new Module</h1>
        <form action="" className="newCourse">
            <table className="enterTbl">
                <tr>
                    <td className="formLbl"><label for="id">Module ID</label></td>
                    <td><input type="text" id="id" name="id" placeholder="Enter ID" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="coursename">Module Name</label></td>
                    <td><input type="text" id="coursename" name="coursename" placeholder="Enter Module Name" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="coursecapacity">Module Capacity</label></td>
                    <td><input type="text" id="coursecapacity" name="coursecapacity" placeholder="Enter Module Capacity" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="courseattendance">Module Attendance</label></td>
                    <td><input type="text" id="courseattendance" name="courseattendance" placeholder="Enter Module Attendance" /></td>
                </tr>
                </table>
                    <input type="submit" value="Submit" className="submitBtn"/>
        </form>
    </div>
}
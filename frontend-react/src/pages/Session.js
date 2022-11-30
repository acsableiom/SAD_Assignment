export default function Session() {
    return <div id="container">
        <h1>Add a new Session</h1>
        <form action="" className="newCourse">
            <table className="enterTbl">
                <tr>
                    <td className="formLbl"><label for="id">Session ID</label></td>
                    <td><input type="text" id="id" name="id" placeholder="Enter ID" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="coursename">Session Name</label></td>
                    <td><input type="text" id="coursename" name="coursename" placeholder="Enter Session Name" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="coursecapacity">Session Capacity</label></td>
                    <td><input type="text" id="coursecapacity" name="coursecapacity" placeholder="Enter Session Capacity" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="courseattendance">Session Attendance</label></td>
                    <td><input type="text" id="courseattendance" name="courseattendance" placeholder="Enter Session Attendance" /></td>
                </tr>
                </table>
                    <input type="submit" value="Submit" className="submitBtn"/>
        </form>
    </div>
}
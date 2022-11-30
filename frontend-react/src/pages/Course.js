export default function Course() {
    return <div id="container">
        <h1>Add a new Course</h1>
        <form action="/" method="POST" className="newCourse">
            <table className="enterTbl">
                <tr>
                    <td className="formLbl"><label for="id">Course ID</label></td>
                    <td><input type="text" id="id" name="id" placeholder="Enter ID" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="coursename">Course Name</label></td>
                    <td><input type="text" id="coursename" name="coursename" placeholder="Enter Course Name" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="coursecapacity">Course Capacity</label></td>
                    <td><input type="text" id="coursecapacity" name="coursecapacity" placeholder="Enter Course Capacity" /></td>
                </tr>
                <tr>
                    <td className="formLbl"><label for="courseattendance">Course Attendance</label></td>
                    <td><input type="text" id="courseattendance" name="courseattendance" placeholder="Enter Course Attendance" /></td>
                </tr>
                </table>
                    <input type="submit" value="Submit" className="submitBtn"/>
        </form>
    </div>
} 
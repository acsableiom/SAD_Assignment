import logo from './logo.svg';

export default function Navbar(){
    return <header className="App-header">
    <ul>
      <li><a href="/"> <img src={logo} className="App-logo" alt="logo" /></a></li>
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
            <p><a href="/Courses">Courses</a></p>
            <p>Zoom</p>
            <p>Window</p>
          </div>
        </div>
      </li>
      <li>
      <div class="dropdown">
          <span class="dropdown-trig">Add</span>
          <div class="dropdown-content">
            <p><a href="/Course">Course</a></p>
            <p><a href="/Module">Module</a></p>
            <p><a href='/Session'>Session</a></p>
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
}
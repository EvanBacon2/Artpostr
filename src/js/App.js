import '../css/App.css';
import "../css/Colors.css"

import SiteButton from './SiteButton.js'
import ApplyButton from './ApplyButton.js'
import BasicComponent from './BasicComponent.js'
import DeleteComponentButton from './DeleteComponentButton.js'

function App() {
  return (
      <div className="App">
          <BasicComponent type="description" />
      </div>
  );
}

export default App;

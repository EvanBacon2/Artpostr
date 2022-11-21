import '../css/App.css';
import "../css/Colors.css"

import SiteButton from './SiteButton.js'
import ApplyButton from './ApplyButton.js'

function App() {
  return (
      <div className="App">
          <ApplyButton site="twitter" />
          <ApplyButton site="pinterest" />
          <ApplyButton site="reddit" />
          <ApplyButton site="tumblr" />
      </div>
  );
}

export default App;

import TableWithElements from './components/TableWithElements';
import { projects } from './data/projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Aleh Kapusta</h1>
        <h3>Frontend Developer</h3>
      </header>
      <main>
        <h2>Projects</h2>

        <br />
        <div className="contener">
          <TableWithElements props={projects} />
        </div>
      </main>
      <footer>
        <span>© Aleh Kapusta, Poznan 2024</span>
      </footer>
    </div>
  );
}

export default App;

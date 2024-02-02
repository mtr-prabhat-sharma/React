import logo from './logo.svg';
import './App.css';
import EmptyDependencyArray from './components/emptyDependencyArray';
import NonEmptyDependencyArray from './components/nonEmptyDependencyArray';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <EmptyDependencyArray />
      <div className="vertical-line"></div>
      <NonEmptyDependencyArray />
    </div>  
  );
}

export default App;

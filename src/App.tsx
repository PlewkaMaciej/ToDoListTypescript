import "./styles/app.css";
import ToDoList from './components/ToDoList';
interface Props{
  
}
const App:React.FC<Props>= ()=> {
  return (
    <div className="main-app-container">
      <h1 className="app-heading">ToDoList</h1>
      <ToDoList/>
    </div>
  );
}

export default App;

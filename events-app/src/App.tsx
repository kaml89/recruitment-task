import AddEvent from "./pages/add-event/AddEvent"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <AddEvent />
      <ToastContainer
        autoClose={false}
        />
    </div>
  )
}

export default App

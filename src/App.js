import  Card from './Components/Card'
import  Navbar from './Components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <div className="App">
      
      <Navbar/>
     
      <div style={{display:'flex',justifyContent:'center',}}>
      <Card/>
<Card/>
<Card/>      </div>


    </div>
    </>
  );
}

export default App;

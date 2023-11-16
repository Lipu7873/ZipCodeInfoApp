import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';


function App() {
  const [location, setLocation] = useState(null);
  
  const handleLocationFetch = (data) => {
    setLocation(data);
  };

  return (
    <div className="w-full min-h-screen bg-red-500">
      <div className="app  flex flex-col pt-[80px] items-center">
        <h1 className="text-2xl font-bold text-white">
          Zip Code Information App
        </h1>
        <InputBox onLocationFetch={handleLocationFetch} />
      </div>
      <OutputBox location={location} />
    </div>
  );
}

export default App

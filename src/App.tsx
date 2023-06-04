
import './App.css'
import Header from './components/Header'
import StreamList from './components/StreamList'
import useStream from './hooks/useStreams'

function App() {
   console.log(import.meta.env.VITE_TEST_PLS);
   
  const streamsData = useStream()
  
  return (
    <>
      <Header/>
      <StreamList streams={streamsData}/>
    </>
    
  )
}

export default App

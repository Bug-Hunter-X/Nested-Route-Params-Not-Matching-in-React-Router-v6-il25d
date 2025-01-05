import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

function Home(){
    return(
        <div>Home</div>
    );
}

function About(){
    let {id} = useParams();
    return(
        <div>About {id}</div>
    );
}

function NotFound(){
    return(
        <div>404</div>
    );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/:id" element={<About/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
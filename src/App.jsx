
import './App.css'
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import SideBar from './components/sidebar';
import { Suspense, lazy } from 'react';

function App() {
  const CreateProject = lazy(() => import('./components/navbar'));

  return (
    <>
     <BrowserRouter>
      <SideBar>
      <Suspense>
      <Routes>
          <Route path="/" element={<CreateProject />} />
        </Routes>
      </Suspense>
       
      </SideBar>
    </BrowserRouter>
    </>
  )
}

export default App

import { Navbar } from './components/common';
import { Route, Routes } from 'react-router-dom';
import { HomePage, StudentPage, MentorPage, ProfilePage } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/student" element={<StudentPage />}/>
        <Route path="/mentor" element={<MentorPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </div>
  );
}

export default App;

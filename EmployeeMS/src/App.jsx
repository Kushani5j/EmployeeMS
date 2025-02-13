import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Category from './Components/Category'
import Employee from './Components/Employee'
import AddCategory from './Components/AddCategory'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} /> {/* Default Route */}
          <Route path='employee' element={<Employee />} /> {/* Nested Routes */}
          <Route path='category' element={<Category />} />
          <Route path='profile' element={<Profile />} />
          <Route path='add_category' element={<AddCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



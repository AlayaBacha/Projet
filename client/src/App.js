
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavUser from './Components/NavUser';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivetRoute from './Components/PrivetRoute';
import Errors from './Components/Errors';
import ListUsers from './Components/ListUsers';
import EditUser from './Components/EditUser';
import EditProfile from './Components/EditProfile';
import ListPosts from './Components/Posts.js/ListPosts';
import AddPost from './Components/Posts.js/AddPost';
import DescriptionPost from './Components/Posts.js/DescriptionPost';
import EditPost from './Components/Posts.js/EditPost';
import MyPosts from './Components/Posts.js/MyPosts';

function App() {
 
  return (
    <div>
      <NavUser/>
       <Errors/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Profile' element = {<PrivetRoute><Profile/></PrivetRoute>}/>
        <Route path = '/Register' element = {<Register/>}/>
        <Route path = '/Login' element = {<Login/>}/>
        <Route path = '/ListUsers' element = {<ListUsers/>}/>
        <Route path='/EditUser/:id' element = {<EditUser/>}/>
        <Route path = '/EditProfile' element = {<EditProfile/>}/>
        <Route path = '/AllPosts' element = {<ListPosts/>}/>
        <Route path = '/AddPost' element = {<AddPost/>}/>
        <Route path = '/DescriptionPost/:id' element = {<DescriptionPost/>}/>
        <Route path = '/EditPost' element = {<EditPost/>}/>
        <Route path = '/MyPosts' element = {<MyPosts/>}/>

      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

 import Home from './pages/Home';
 import Dashboard from './pages/Dashboard';
import Navbar from './Navbar';
import Footer from './Footer';



import NavbarD from './NavbarD';
import ClientList from './ClientList';
import ClientEdit from './ClientEdit';
import ClientAdd from './ClientAdd';
import ClientDetails from './ClientDetails';
import ClientDelete from './ClientDelete';
import Registration from './Registration';
import Login from './Login';
import SearchCourse from './SearchCourse';
import Protected from './Protected';


function App() {
  return (
      
        
      
        // <Admin dataProvider={restProvider('http://localhost:3000')}>
        // <Resource
        //   name='posts'
        //   list={PostList}
        //   create={PostCreate}
        //   edit={PostEdit}
        // />
        // <Resource
        //   name='users'
        //   list={UserList}
        //   create={UserCreate}
        //   edit={UserEdit}
        // />
        // </Admin>
        <Router>
          <Switch>


            <Route path='/client-list'>
              <Protected Component={ClientList}/>
              {/* <ClientList/> */}
            </Route>

            <Route path='/login'>
              <Login/>
            </Route>

            <Route path='/client-info/:id'>
              <ClientDetails/>
            </Route>

            <Route path='/client/update/:id'>
              <ClientEdit/>
            </Route>

            <Route path='/client/delete/:id'>
              <ClientDelete />
            </Route>

            <Route path='/client-add'>
              <ClientAdd />
            </Route>

            <Route path='/register'>
              <Registration/>
            </Route>

            <Route path='/search'>
              <SearchCourse />
            </Route>

            <Route exact path='/'>
              <Home/>
            </Route>

          </Switch>
          
        </Router>
      
   
    

     
  );
}

export default App;

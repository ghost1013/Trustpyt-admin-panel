import React, { useEffect, useState } from 'react'
import MiniSidebarLayout from './creativeCommons/sidebarLayout/mini-sidebar.layout'
import CategoryScreen from './features/categories/screens/category.screen'
import CompaniesScreen from './features/companies/screens/company.screen'
import SubCategoryScreen from './features/sub-categories/screens/sub-category.screen'
import CategoriesContextprovider from './services/categories/categories.context'
import CompaniesContextprovider from './services/companies/companies.context'
import SubCategoriesContextprovider from './services/sub-categories/sub-categories.context'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import ReviewsContextprovider from './services/reviews/reviews.context'
import ReviewsScreen from './features/reviews/screens/reviews.screen'
import Navbar from './creativeCommons/Navbar/Navbar'
import NavbarSmall from './creativeCommons/Navbar/NavbarSmall'
import SignInSide from './features/spa-auth/spa-auth.screen'
import AuthenticationScreen from './features/auth/screens/authentication-admin.screen'
import UserDetailsScreen from './features/users/screens/user-details.screen'
import UserAdminsScreen from './features/users/screens/user-admins.screen'

const App = () => {

  const [authId] = useState('db-review-csx920466-2022-daryl-snd2002')
  const [loggedIn, setLoggedIn] = useState(false)
  let authMeta = localStorage.getItem('@authuser')

  useEffect(() => {
      if(authMeta){
        setLoggedIn(true)
      }else {
        setLoggedIn(false)
      }
  }, [authMeta])

  return (
   <Router>
              <Switch>

   {loggedIn ?    
   
   <CategoriesContextprovider>
        <SubCategoriesContextprovider>
          <CompaniesContextprovider>
            <ReviewsContextprovider>
              <Navbar/>
              <NavbarSmall/>
              <div style={{padding: 40}}>
                   <Route exact path="/" component={CategoryScreen}/>
                <Route exact path="/sub-categories" component={SubCategoryScreen}/>
                <Route exact path="/companies" component={CompaniesScreen}/>
                <Route exact path="/reviews" component={ReviewsScreen}/>
                <Route exact path="/users" component={UserDetailsScreen}/>           
                <Route exact path="/admins" component={UserAdminsScreen}/>     
              </div>
                
            </ReviewsContextprovider>
          </CompaniesContextprovider>
        </SubCategoriesContextprovider>
      </CategoriesContextprovider>   : <><AuthenticationScreen authKey={authId} setLoggedIn={setLoggedIn} /></>}
   
  </Switch>
            </Router>
  )
}

export default App
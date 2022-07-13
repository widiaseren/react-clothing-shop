import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { checkUserSession, setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

// import { 
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser
// } from './utils/firebase/firebase.component';

const App = () => {
  const dispatch = useDispatch();

  //user context
  useEffect(() => {
    // const unsubscribe = onAuthStateChangedListener((user) => { 
    //   // console.log(user)
    //   if(user) createUserDocumentFromAuth();
      
    //   dispatch(setCurrentUser(user));
    // })
    // return unsubscribe;

    // //redux-saga
    // // getCurrentUser();
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route path='/' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
  
}

export default App;

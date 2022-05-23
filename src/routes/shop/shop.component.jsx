import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";


import { setCategoriesMap } from '../../store/category/category.action'; 
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.component';

const Shop = () => {
  const dispatch = useDispatch();
  
  //categories context
  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
      // console.log(categoryMap)
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop;
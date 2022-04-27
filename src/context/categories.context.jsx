import { createContext, useEffect, useState } from "react";
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.component';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.component';

// import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
      console.log(categoryMap)
    };

    getCategoriesMap();
  }, []);

  
  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}
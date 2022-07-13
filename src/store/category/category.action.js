import { createAction } from "../../utils/reducer/reducer.utils";

import CATEGORIES_ACTION_TYPES from "./category.types";

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.component'

// export const setCategories = (categories) => 
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categories
  );

export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);


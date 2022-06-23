import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, Title} from './category.styles.jsx';

import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/category/category.selector";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {
        isLoading ? <Spinner />
        :
        <CategoryContainer>
          {
            products && 
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) 
          }
        </CategoryContainer>
      }
    </Fragment>
  )
}

export default Category;
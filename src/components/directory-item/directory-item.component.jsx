import { useNavigate } from 'react-router-dom';
import { BackgroundImage, CategoryBodyContainer, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({category}) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;
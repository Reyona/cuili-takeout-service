import { FoodType } from '@/types/order';
import './MenuItem.css';

interface Props {
  food: FoodType;
}

const MenuItem = ({ food }: Props) => {

  return (
    <div className='menu-item' data-testid='menu-item'>
      <img src={food.banner} alt={food.name} className='food-banner' />
    </div>
  );
}

export default MenuItem;
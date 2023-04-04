import PropTypes from 'prop-types';

import { ingredientsPropType } from '../../utils/types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-item.module.css';

function IngredientItem({ item, onClick }) {

  const clickItem = () => {
    onClick(item);
  }

  return (
    <li className={style.item} onClick={clickItem}>
      <img
        className='ml-4 mr-4'
        src={item.image}
        alt={item.name}
      />
      <div className={`${style.item__price} mt-1 mb-1`}>
        <p className='text text_type_digits-default pr-2'>{item.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <h4 className={`${style.item__name} text text_type_main-default`}>{item.name}</h4>
    </li>
  )
}

IngredientItem.propTypes = {
  item: ingredientsPropType,
  onClick: PropTypes.func
}

export default IngredientItem;

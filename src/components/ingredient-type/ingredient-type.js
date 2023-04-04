import PropTypes from 'prop-types';

import IngredientItem from '../ingredient-item/ingredient-item';
import { ingredientsPropType } from '../../utils/types';

import styles from './ingredient-type.module.css'

function IngredientType({ id, title, items, onClick }) {
  return (
    <li id={id}>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className={`${styles.type} pt-6 pb-10 pl-4 pr-4`}>
        {items.map(item => {
          return (
            <IngredientItem key={item._id} item={item} onClick={onClick} />
          )
        })}
      </ul>
    </li>
  )
}

IngredientType.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(ingredientsPropType),
  onClick: PropTypes.func
}

export default IngredientType;

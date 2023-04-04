import { useState } from 'react';

import PropTypes from 'prop-types';

import IngredientType from '../ingredient-type/ingredient-type';
import { ingredientsType } from '../../utils/constants';
import { ingredientsPropType } from '../../utils/types';

import style from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients({ data, onClick }) {
  const [current, setCurrent] = useState(ingredientsType[0].type);
  const clickTab = (type) => {
    setCurrent(type);
    document.querySelector(`#${type}`).scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section className={style.ingredients}>
      <h2 className='text text_type_main-large mt-10 mb-5'>
        Соберите бургер
      </h2>
      <ul className={`${style.ingredients__nav}`}>
        {
          ingredientsType.map((item, i) => {
            return (
              <Tab
                key={i}
                value={item.type}
                active={current === item.type}
                onClick={clickTab}
              >
                {item.title}
              </Tab>
            )
          })
        }
      </ul>
      <ul className={`${style.ingredients__list} mt-10`}>
        {ingredientsType.map((item, i) => {
          const ingredientsDataApprove = data.filter(ingredient => ingredient.type === item.type)
          return (
            <IngredientType key={i} id={item.type} title={item.title} items={ingredientsDataApprove} onClick={onClick} />
          )
        })}
      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropType),
  onClick: PropTypes.func,
}

export default BurgerIngredients

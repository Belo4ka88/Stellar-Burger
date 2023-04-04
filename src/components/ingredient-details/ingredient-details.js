import { ingredientsPropType } from '../../utils/types';
import style from './ingredient-details.module.css';

function IngredientDetails({ item }) {

  const energy = [
    {
      title: 'Калории, ккал',
      value: item.calories
    },
    {
      title: 'Белки, г',
      value: item.proteins
    },
    {
      title: 'Жиры, г',
      value: item.fat
    },
    {
      title: 'Углеводы, г',
      value: item.carbohydrates
    },
  ];

  return (
    <div className={`${style.ingredients__} pt-10 pb-15`}>
      <h2 className={`${style.ingredients__title} text text_type_main-large`}>
        Детали ингредиента
      </h2>
      <img src={item.image_large} alt={item.name} />
      <p className={`${style.ingredients__name} mt-4 mb-8 text text_type_main-medium`}>
        {item.name}
      </p>
      <ul className={`${style.ingredients__list} mb-5`}>
        {
          energy.map((item, i) => {
            return (
              <li key={i} className={style.details__items}>
                <p className={`${style.details__item} mb-2 text text_type_main-default`}>{item.title}</p>
                <p className={`${style.details__item} mb-2 text text_type_main-default`}>{item.value}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
  item: ingredientsPropType,
}

export default IngredientDetails;

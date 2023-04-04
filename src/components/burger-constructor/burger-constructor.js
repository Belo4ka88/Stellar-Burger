import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { ingredientsType } from '../../utils/constants';
import { ingredientsPropType } from '../../utils/types';
import {
  Button,
  DragIcon,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import style from './burger-constructor.module.css';

function BurgerConstructor({ data, onClick }) {
  const [order, setOrder] = useState({
    bun: {},
    mid: []
  })

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const bunItems = data.filter(item => item.type === ingredientsType[0].type);
    const sauceItems = data.filter(item => item.type === ingredientsType[1].type);
    const mainItems = data.filter(item => item.type === ingredientsType[2].type);
    console.log(sauceItems);
    data.length && setOrder({
      bun: bunItems[1],
      mid: [sauceItems[2], mainItems[2], mainItems[3], mainItems[7]]
    })
  }, [data]);

  useEffect(
    () => {
    const bunPrice = order.bun.price ? order.bun.price : 0;
    const midPrice = order.mid.length ? order.mid.reduce((price, item) => price = price + item.price, 0) : 0;
    setTotal(bunPrice * 2 + midPrice);
  }, 
    [order]);

  return (
    <section className={`${style.constructor} pt-25`}>
      {order.bun.name && (
        <div className={`${style.constructor__item} mr-4 mb-4 pl-8`}>
          <ConstructorElement
            type='top'
            isLocked={true}
            text={`${order.bun.name} (вверх)`}
            price={order.bun.price}
            thumbnail={order.bun.image}
          />
        </div>
      )}
      <ul className={`${style.constructor__items}`}>
        {order.mid.map((item, i) => {
          return (
            <div key={i + item._id} className={`${style.constructor__item} mr-4 mb-4`}>
              <div className='mr-2'>
                <DragIcon type='primary' />
              </div>
              <ConstructorElement
                isLocked={false}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>)
        })
        }
      </ul>
      {order.bun.name && (
        <div className={`${style.constructor__item} mt-4 mr-4 pl-8`}>
          <ConstructorElement
            type='bottom'
            isLocked={true}
            text={`${order.bun.name} (вниз)`}
            price={order.bun.price}
            thumbnail={order.bun.image}
          />
        </div>
      )}
      <div className={`${style.constructor__price} mt-10 mr-2 mb-10`}>
        <p className='text text_type_digits-medium mr-2'>
          {total && total}
        </p>
        <div className={`${style.constructor__currency} mr-10`}>
          <CurrencyIcon type='primary' />
        </div>
        <Button htmlType='button' type='primary' size='large' onClick={onClick} disabled={!total}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropType),
  onClick: PropTypes.func,
};

export default BurgerConstructor

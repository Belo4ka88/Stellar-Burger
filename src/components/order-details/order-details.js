import PropTypes from 'prop-types';

import confirm from '../../images/confirm.png';
import style from './order-details.module.css';

function OrderDetails({ id }) {
  return (
    <div className={`${style.order__details} pt-30 pb-30`}>
      <h2 className='text text_type_digits-large'>{id}</h2>
      <p className='mt-8 mb-15 text text_type_main-medium'>Идентификатор заказа</p>
      <img
        className={style.order__image}
        src={confirm}
        alt="Изображение успеха"
      />
      <p className={`${style.order__message} mt-15 mb-2 text text_type_main-default`}>
        Ваш заказ начали готовить.
      </p>
      <p className={`${style.order__push} text text_type_main-default`}>
        Дождитесь готовности на орбитальной станции.
      </p>
    </div>
  )
}

OrderDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default OrderDetails;

import { useEffect, useState } from 'react';
import { getIngridients } from '../../utils/api';

import AppHeader from '../app-header/app-header';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

import Modal from '../modal/modal';
import style from './app.module.css';


const basicData = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  proteins: 0,
  image_large: '',
  name: ''
}

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIngredient, setModalIngredient] = useState(basicData);
  const [modalItemOrder, setModalItemOrder] = useState(null);

  const getBurgerData = () => {
    getIngridients()
      .then(res => setIngredients(res.data))
      .catch(err => console.log('Ошибка: ', err));
  }

  const closeModal = () => {
    setModalOpen(false);
    setModalItemOrder(null);
    setModalIngredient(basicData);
  }

  const clickOrder = (item) => {
    setModalIngredient(item);
    setModalOpen(true);
  }

  const clickItem = () => {
    setModalItemOrder('777');
    setModalOpen(true);
  }

  useEffect(
    () => getBurgerData(), []
    );

  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients data={ingredients} onClick={clickOrder} />
        <BurgerConstructor data={ingredients} onClick={clickItem}/>
      </main>
      {modalOpen && (
        <Modal onClose={closeModal}>
          {
            modalItemOrder ? (
              <OrderDetails id={modalItemOrder} />
            ) : modalIngredient?.name && (
              <IngredientDetails item={modalIngredient} />
            )
          }
        </Modal>
      )}
    </>
  );
}

export default App;

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import ModalOverlay from '../modal-overlay/modal-overlay';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css';

function Modal({ onClose, children }) {

  const modals = document.querySelector('#modals');

  useEffect(() => {
    const actionEscape = evt => evt.key === 'Escape' && onClose();
    document.addEventListener('keydown', actionEscape);
    return () => document.removeEventListener('keydown', actionEscape);
  });

  return createPortal(
    <div className={style.modal}>
      <ModalOverlay onClose={onClose} />
      <div className={`${style.modal__content} pr-10 pl-10`}>
        <div className={style.modal__close} aria-label='Закрыть'>
          <CloseIcon type='primary' onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
    , modals
  )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node
};

export default Modal;

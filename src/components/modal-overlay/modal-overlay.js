import style from './modal-overlay.module.css';

function ModalOverlay({ onClose }) {

  const click = e => {
    e.target.classList.contains(style.modal__overlay) && onClose();
  }

  return (
    <div
      className={style.modal__overlay}
      onClick={click}
    />
  )
}

export default ModalOverlay;

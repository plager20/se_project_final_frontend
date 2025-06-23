import './ModalWithForm.css';

import useEscape from '../../hooks/useEscape';

function ModalWithForm({ children, title, onClose, isOpen, onSubmit }) {
  useEscape(onClose);
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className='modal__content'>
        <h2 className='modal__title'>{title}</h2>
        <button onClick={onClose} type='button' className='modal__close' />
        <form onSubmit={onSubmit} action='' className='modal__form' noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

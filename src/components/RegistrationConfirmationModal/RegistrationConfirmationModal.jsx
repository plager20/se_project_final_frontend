import './RegistrationConfirmationModal.css';

function RegistrationConfirmationModal({
  closeActiveModal,
  activeModal,
  handleSignInModal,
}) {
  return (
    <div
      className={`RegistrationConfirmationModal ${
        activeModal === 'registrationconfirmation'
          ? 'RegistrationConfirmationModal_opened'
          : ''
      }`}
    >
      <div className='RegistrationConfirmationModal__content'>
        <button
          className='RegistrationConfirmationModal__close'
          onClick={closeActiveModal}
        ></button>
        <h2 className='RegistrationConfirmationModal__title'>
          Registration successfully completed!
        </h2>
        <button
          className='RegistrationConfirmationModal__signin-button'
          onClick={handleSignInModal}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegistrationConfirmationModal;

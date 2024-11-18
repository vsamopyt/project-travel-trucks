import Modal from 'react-modal';
import css from './BasicModalWindow.module.css';

Modal.setAppElement('#root');

const BasicModalWindow = ({ isOpen, onClose, children }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose = {onClose}
      closeTimeoutMS={300}
        overlayClassName={{
        base: css.ReactModalOverlay,
        afterOpen: css.ReactModalOverlayAfterOpen,
        beforeClose: css.ReactModalOverlayBeforeClose,
      }}
      className={{
        base: css.ReactModalContent,
        afterOpen: css.ReactModalContentAfterOpen,
        beforeClose: css.ReactModalContentBeforeClose,
      }}
    >
      <button className={css.modalCloseBtn} onClick={onClose}>
        x
      </button>
      {children}
    </Modal>
  );
  
};

export default BasicModalWindow;



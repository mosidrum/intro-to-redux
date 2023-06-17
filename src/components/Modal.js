import React from 'react'

const Modal = () => {
  return (
    <aside className='modal-container'>
      <div className="modal">
        <h4>Removel all item from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn">
            confirm
          </button>
          <button className="btn clear-btn">
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

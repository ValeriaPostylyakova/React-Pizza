import * as React from 'react';
import style from './Modal.module.scss';
import classNames from 'classnames';

type ModalProps = {
    showModal: boolean;
    modalText: string;
    setShowModal: (showModal: boolean) => void;
    onClickModal: () => void;
};

const Modal: React.FC<ModalProps> = ({
    showModal,
    onClickModal,
    modalText,
    setShowModal,
}) => {
    return (
        <div
            className={
                showModal ? classNames(style.modal, style.active) : style.modal
            }
        >
            <div className={style.modal__container}>
                <h1>Подтвердите действие</h1>
                <p>
                    {modalText} <span>😕</span>
                </p>
                <div className={style.modal__container_buttons}>
                    <button onClick={onClickModal} className={style}>
                        Да
                    </button>
                    <button onClick={() => setShowModal(false)}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

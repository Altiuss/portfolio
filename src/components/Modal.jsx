import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import { useModalContext } from '../context/modal-context'
import './modal.css'

const Modal = ({ clasName, children }) => {
    const { showModal, closeModalHandler } = useModalContext();

    return (
        <Fragment>
            {
                showModal && ReactDOM.createPortal(<>
                    <section id="backdrop" onClick={closeModalHandler}></section>
                    console.log(done)
                    <Card className={clasName}>{children}</Card>
                </>, document.querySelector('#overlays'))
            }
        </Fragment>
    )
}

export default Modal
import { createPortal } from 'react-dom';
import { FcSearch } from 'react-icons/fc';


const FloatingButtonOverlay = () => {
    return (
        <div className='floatingButton'>
            <div className='floatingButton__icon'>
                <FcSearch/>
            </div>
        </div>
    );
};

const FloatingButton = () => {
    // const targetNode: HTMLElement = document.getElementById('portals-node');

    return (
        <div>
            {createPortal(<FloatingButtonOverlay />, document.getElementById('portals-node') as HTMLElement)}
        </div>
    )
}

export default FloatingButton;
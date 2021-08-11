import React from 'react'



const modal_styles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '150px 350px',
    boxShadow: '0 0 15px 10px #141414',
    zIndex: 1000

}





export default function Modal({open, children, onClose}) {
    if(!open) return null
    return (
        <div style={modal_styles}>
            <button onClick={onClose}>Close modal</button>
            {children}
        </div>
    )
}

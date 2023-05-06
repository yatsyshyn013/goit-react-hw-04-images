// import * as basicLightbox from 'basiclightbox'
import React, { Component } from 'react'
import {createPortal} from "react-dom";
import { Overlay, Modal } from './Modal.styled'
import PropTypes from 'prop-types';

import {useEffect} from 'react'



const modalRoot = document.querySelector("#modal-root")

// export default function ModalWindow(toggle, url) {
//     useEffect(() => {
//         window.addEventListener('keydown', handleKeydown); 

//         return () => {
//             window.removeEventListener('keydown', handleKeydown);   
//         }
//     }, [])

//     const handleKeydown = e => {
//         if (e.code ==='Escape') {
//             toggle()  
//         }
       
//     }

//     const handleBackdrop = e => {

//         if (e.currentTarget === e.target) {
//             toggle()
//         }
//     //     if (e.target.nodeName !== 'IMG') {
//     //   toggle();
//     // }
//     }

//   return (
//             <Overlay className="overlay" onClick={handleBackdrop}> 
//              <Modal className="modal">
//                  <img src={url} alt="" width="800px"/>
//              </Modal>
//             </Overlay> 
//     );
// }


class ModalWindow extends Component { 
    
    componentDidMount() {
        // console.log("Mount");
        window.addEventListener('keydown', this.handleKeydown); 
    }

    componentWillUnmount() {
        // console.log("UnMount");
    window.removeEventListener('keydown', this.handleKeydown);    
  }
   
    handleKeydown = e => {
        if (e.code ==='Escape') {
            this.props.toggle()  
        }
       
    }

    handleBackdrop = e => {

        if (e.currentTarget === e.target) {
            this.props.toggle()
        }
    }


    render() { 
        const { url } = this.props;
        return (
            <Overlay className="overlay" onClick={this.handleBackdrop}> 
             <Modal className="modal">
                 <img src={url} alt="" width="800px"/>
             </Modal>
            </Overlay> 
    );
    }
}
 
export default ModalWindow;


ModalWindow.propTypes = {
    toggle: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}
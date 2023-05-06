import { useState } from 'react'
import React, { Component } from 'react'
import { ButtonLoadMore } from "./Button.styled"
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from "react-scroll";



// export default function Button(updatePage, numberPage) {

//     const [page, setPage] = useState(1)
//     console.log(numberPage);
//     const ChangePage = () => {
//         setPage( page + 1)
//         updatePage(page)
//     }

//   return (
//             <ButtonLoadMore onClick={ChangePage} type='button'>Load more</ButtonLoadMore>
//         );
// }
 

class Button extends Component {
    state = { 
        page: 1
    } 
    
    ChangePage = () => {
        this.setState( { page: this.props.numberPage + 1 }, () => {
            this.props.updatePage(this.state.page);         
             
        })
        
        
    }

    render() { 
        return (
            <ButtonLoadMore onClick={this.ChangePage} type='button'>Load more</ButtonLoadMore>
        );
    }
}
 
export default Button;


Button.propTypes = {
    updatePage: PropTypes.func.isRequired,
}
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <i className="fas fa-mobile-alt navbar-brand"><span> myShop</span></i>
                </Link>
                {/* <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            products
                        </Link>
                    </li>
                </ul> */}
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                        <i className='fas fa-cart-plus' />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    border-bottom: 2px solid var(--mainYellow);
    .nav-link{
        color: #fff !important;
        font-size: 1.2rem;
        text-transform: capitalize;
    }
    .navbar-brand{
        color: var(--mainYellow);
        font-size: 2rem;
    }
`
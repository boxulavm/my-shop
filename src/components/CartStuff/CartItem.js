import React from 'react'

export default function CartItem({item,value}) {
    const{id, title, img, price, total, count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className='row my-2 text-capitalize text-center'>

            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} style={{width:'5rem', height:'5rem'}} className='img-fluid' alt='product' />
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>Product : </span>
                {title}
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>Price : </span>
                {price}
            </div>

            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>

                    <div>
                        <button className='btn btn-warning mx-1 text-dark' onClick={() => decrement(id)}>-</button>
                    </div>

                    <div>
                        <button className='btn btn-warning mx-1 text-dark'>{count}</button>
                    </div>

                    <div>
                        <button className='btn btn-warning mx-1 text-dark' onClick={() => increment(id)}>+</button>
                    </div>

                </div>
            </div>

        {/*  */}
        <div className='col-10 mx-auto col-lg-2'>
            <div className='cart-icon' onClick={() => removeItem(id)}>
                <i className='fa fa-trash-alt'></i>
            </div>
        </div>

        <div className='col-10 mx-auto col-lg-2'>
            <strong>item total : € {total}</strong>
        </div>

        </div>
    )
}

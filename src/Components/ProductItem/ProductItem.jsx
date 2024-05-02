import React, { useContext } from 'react'
import item1 from '../../assets/product/product1.jpg'
import { Button } from '@mui/material'
import { AiOutlineFullscreen } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa6";
import { MyContext } from '../../App';

const ProductItem = (props) => {

    const context = useContext(MyContext);

    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);
    }

    

    return (
        <>
            <div className={`productItem ${props.itemView}`}>
                <div className="imageWrapper">
                    <img src={item1} alt="product-img" className="w-100" />
                    <span className="badge badge-primary">25%</span>

                    <div className="actions">
                        <Button onClick={()=>viewProductDetails(1)}><AiOutlineFullscreen/></Button>
                        <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                    </div>

                </div>
                <div className="info">
                    <h4>Fratini</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger ml-3">$14.00</span>
                    </div>
                    <div className='addToCart'>
                        <Button>Add to cart</Button>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default ProductItem
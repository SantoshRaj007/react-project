import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import React, { useContext, useEffect, useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const CountryDroupdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setSelectedtab] = useState(null);

    const [countryList, setcountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry=(index, country)=>{
        setSelectedtab(index);
        setisOpenModal(false);
        context.setselectedCountry(country)
    }
    
    useEffect(()=>{
        setcountryList(context.countryList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const filterList=(e)=>{
        const keyword = e.target.value.toLowerCase();

        if (keyword!=="") {
            const list = countryList.filter((item)=> {
                return item.country.toLowerCase().includes(keyword);
            });

            setcountryList(list);

        } else {
            setcountryList(context.countryList);
        }        
    }

    return (
        <>
            <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Location'}</span>                    
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>

            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>            
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for yorr area.</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)}><IoMdClose/></Button>
                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your area...' onChange={filterList}/>
                    <Button><IoIosSearch/></Button>
                </div>

                <ul className='countryList mt-3'>
                {
                    countryList?.length !==0 && countryList?.map((item,index)=>{
                        return(
                            <li key={index}><Button onClick={()=>selectCountry(index,item.country)} 
                            className={`${selectedTab===index ? 'active' : ''}`}>{item.country}</Button></li>
                        )
                    })
                }
                </ul>

            </Dialog>
        </>
    )
}

export default CountryDroupdown;
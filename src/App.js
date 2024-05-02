import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import ProductModal from "./Components/ProductModal/ProductModal";
import Listing from "./Pages/Listing/Listing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

const MyContext = createContext();

function App() {

    const [countryList, setCountryList] = useState([]);

    const [selectedCountry, setselectedCountry] = useState('');

    const [isOpenProductModal, setisOpenProductModal] = useState(false);

    useEffect(()=>{
        getCountry("https://countriesnow.space/api/v0.1/countries/");
    },[]);

    const getCountry = async (url)=>{
        // eslint-disable-next-line no-unused-vars
        const responsive = await axios.get(url).then((res)=>{
            setCountryList(res.data.data)           
        })
    }

    const values={
        countryList,
        setselectedCountry,
        selectedCountry,
        isOpenProductModal,
        setisOpenProductModal
    }

    return (
        <BrowserRouter>
        <MyContext.Provider value={values}>
        <Header/>
            <Routes>
                <Route path="/" exact={true} element={<Home/>} />
                <Route path="/cat/:id" exact={true} element={<Listing/>} />
                <Route exact={true} path="/product/:id" element={<ProductDetails />} />
            </Routes>
        <Footer/> 
        {
            isOpenProductModal===true && <ProductModal/>
        }   
        </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;

export {MyContext}

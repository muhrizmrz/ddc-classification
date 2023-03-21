import React,{useState} from 'react';
import { useNavigate, useLocation } from 'react-router';

const Header = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    function handleSearch(value){
        props.onSearch(value)
        props.handleSearch(value)
        const subdomain = location.pathname
        if(subdomain != '/results'){
            navigate('/results')
        }
    }

    function disableSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <div className="fixed right-0 left-0 top-0 z-20">
                <header className="w-100 p-4 px-10 bg-white h-auto shadow-lg">
                    <div className="grid grid-cols-4 justify-between place-content-center">
                        <div>
                            <h1 className="text-lg font-bold text-gray-600">DDC Classification</h1>
                        </div>
                        <form className="col-span-2 flex">
                            <input type='text' placeholder='Search' /*value={keywordForSearchClassification}*/ onChange={(e) => handleSearch(e.target.value)} className='py-1 px-3 bg-white rounded w-3/4 border border-transparent focus:outline-none ring-2 ring-blue-400 shadow-lg focus:ring-blue-500 text-gray-500' />
                            <input type="submit" className="ml-4 p-1 px-6 rounded-md text-white bg-blue-500" value="Search" />
                        </form>
                        <div className="text-right text-gray-400 flex justify-end">
                            <p className="cursor-pointer" onClick={() => navigate('/')}>Home</p>
                            <p className="cursor-pointer ml-4" onClick={() => window.open('https://www.libraryscience.in/2020/06/ddc-dewey-decimal-classification.html')}>
                                DDC Classification
                            </p>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
};

export default Header;
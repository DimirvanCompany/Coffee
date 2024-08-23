import { Col, Container, Row } from 'react-bootstrap';
import CoffeeMenuItem from '../../components/coffeeMenu/CoffeeMenuItem';
import './CoffeeMenu.css'
import { useEffect, useState } from 'react';
import menuItem from './db';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataMenu } from '../../Redux/slices/menu';
function CoffeeMenu(){
    const {data , total , productCount} = useSelector(store => store.menu)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDataMenu())
    } , [])

    const [coffeedb  , setCoffeedb] = useState(menuItem)
    return(
        <Container className='mt-5'>
            <h2 className='text-center my-5 fw-bold'>منو کافه </h2>
            <Row className='text-center gap-y-3 relative '>
                {data.map(item => (
                    <Col sm={12} md={8} className='' key={item.id}>
                        <CoffeeMenuItem {...item}/>  
                    </Col>
                ))}
                <Col md={4} className='absolute left-0'>
                    <div className="bg-gray-200 rounded-xl flex flex-col justify-center custom-shadow p-3">
                        <p className='fw-bold'><span>مجموع سفارشات</span> <span className='bg-green-800 text-white px-2 rounded-full'>{productCount}</span></p>
                        <p className='fw-bold'>{total.toLocaleString()} تومان</p>
                        <button className="btn my-2 border-0 orange-bg w-32 m-auto">
                            پرداخت    
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )   
}

export default CoffeeMenu;
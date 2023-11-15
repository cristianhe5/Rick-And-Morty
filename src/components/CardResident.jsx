import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/CardResident.css'

const CardResident = ({ url }) => {

    const [resident, getResident] = useFetch(url)
    useEffect(() => {
        getResident()
    }, [])

    console.log(resident);




    return (
        <article className='resident'>
            <header className='resident__header'>
                <img className='resident__img' src={resident?.image} alt="" />
                <div className='resident__status'>
                    <div className={`resident__status-circle ${resident?.status}`}></div>
                    <span className='resident__status-value'>{resident?.status}</span>
                </div>
            </header>
            <section className='resident__body'>
                <h3 className='resident__name'>{resident?.name}</h3>
                <hr className='resident__separator' />
                <ul className='resident__stats'>
                    <li className='resudent__stat__item'><span className='resident__stat__label'>Specie</span><span className='resident__stat__value'>{resident?.species}</span></li>
                    <li className='resudent__stat__item'><span className='resident__stat__label'>Oringin</span><span className='resident__stat__value'>{resident?.origin.name}</span></li>
                    <li className='resudent__stat__item'><span className='resident__stat__label'>Eppisodes where apperar</span><span className='resident__stat__value'>{resident?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default CardResident
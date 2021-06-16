import React from 'react'
import {} from 'react-bootstrap'
const Paginate = ({postPerpage,totalPosts,paginate}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalPosts/postPerpage);i++){
       pageNumbers.push(i) 
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                    <a onClick={(e)=> paginate(number,e)} href='!#' className='page-link'>
                        {number}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginate

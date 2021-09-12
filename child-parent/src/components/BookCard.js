import React, { Component } from 'react';
import book from './book.jpg';

function BookDetails() {
    return (
        <div>
            <h3 style={{color:"brown"}}>Book Name : Birds and Animals </h3>
        </div>
    )
}

function Image() {
    return (
        <div>
            <img src={book} width="300" height="300" alt="book " />
        </div>
    )
}

function Thumnail() {
    return (
        <div>
            <h1 style={{color:"blue"}}>Non social animals</h1>
        </div>
    )
}


class BookCard extends Component {
    render() {
       
        return (
            <div >
                <Image />
                <Thumnail />
                <BookDetails />
            </div>
        )
    }
}

export default BookCard

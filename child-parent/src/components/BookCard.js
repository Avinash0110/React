import React, { Component } from 'react'
import BookDetails from './BookDetails'
import Thumnail from './Thumnail'
import Image from './Image'

class BookCard extends Component {
    render() {
        // const mystyle={
        //      borderStyle: "solid",
        //     borderWidth: "10px",
        //     borderColor: "indigo",
        //     textAlign: "center"
            
            
            
        //     }
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

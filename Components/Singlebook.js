import Image from "next/image";

const Singlebook = ({ book }) => {
    return (
        <div className='col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 gap-4 mb-3'>
            <div className='box'>
                <div>
                    <Image src={book.image} alt='' width="170px" height="200px"></Image>
                    <h5> {book.name}</h5>
                    <h6>লেখক: {book.author}</h6>
                    <h6>রেটিং : {book.ratings}</h6>
                </div>
            </div>
        </div>
    );
};

export default Singlebook;
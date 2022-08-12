import Image from "next/image";
import Link from "next/link";

const Singlebook = ({ book }) => {
    return (

        <div className='col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 gap-4 mb-3'>
            <div className='box'>
                <div>
                    <Image src={book.image} alt='' width="170px" height="200px"></Image>
                    <h5> {book.name}</h5>
                    <h6>{book.author}</h6>
                    <h6>রেটিং : {book.ratings}</h6>
                    <Link href={`/${book._id}`} ><a className='text-primary me-5 text-decoration-none '>বিস্তারিত জানুন</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Singlebook;
import Image from "next/image";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
export const getStaticPaths = async () => {
    const res = await fetch(`https://secret-bastion-79495.herokuapp.com/banglabook`)
    const data = await res.json();
    const paths = data.map((book) => {
        return {
            params: {
                bookId: book._id.toString(),
            }
        }
    })
    return {
        paths,
        fallback: false,

    }
}

export const getStaticProps = async (context) => {
    const id = context.params.bookId;
    const res = await fetch(`https://secret-bastion-79495.herokuapp.com/banglabook/${id}`)
    const data = await res.json();
    return {
        props: {
            data: data,

        },
    }
}

const bookId = ({ data }) => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className="card mb-5 mt-5 container">
                    <div className="row g-0">
                        <div className="col-md-5 p-2">
                            <Image src={data.image} alt='' width="480px" height="550px"></Image>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">বইয়ের নাম :{data.name}</h4>
                                <h5>লেখক: {data.author}</h5>
                                <h5>পাঠকের রেটিং :{data.ratings}</h5>
                                <br />
                                <p>{data.description} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default bookId;
import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Singlebook from "../Components/Singlebook";
export const getStaticProps = async () => {
    const res = await fetch("https://secret-bastion-79495.herokuapp.com/banglabook")
    const data = await res.json();
    return {
        props: {
            data: data,

        },
    }
}
const allbooks = ({ data }) => {
    return (
        <div>
            <Head>
                <title>
                    All Books
                </title>
            </Head>
            <Header></Header>
            <div className="mt-5 mb-5 ms-5 row container">
                {
                    data.map(book => <Singlebook
                        key={book._id}
                        book={book}
                    ></Singlebook>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default allbooks;
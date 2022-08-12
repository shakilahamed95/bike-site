import Head from "next/head";
import Banner from "../Components/Banner/Banner";
import Email from "../Components/Email";
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


const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Book Self</title>
        <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
      </Head>
      <Header></Header>
      <Banner></Banner>
      <div className="row container ms-5 total-box mt-4">
        <h1 className="text-primary text-center mb-5">Our Book collection</h1>
        {
          data.map(book => <Singlebook
            key={book._id}
            book={book}
          ></Singlebook>)
        }
      </div>
      <Email></Email>
      <Footer></Footer>
    </>
  );
};

export default index;
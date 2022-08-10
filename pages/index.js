import Head from "next/head";
import Header from "../Components/Header";


const index = () => {
  return (
    <>
      <Head>
        <title>Best Bike</title>
        <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
      </Head>
      <Header></Header>
    </>
  );
};

export default index;
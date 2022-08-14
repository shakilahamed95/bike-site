import Head from "next/head";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const humaun = () => {
    return (
        <div>
            <Head>
                <title>
                    Humayun Ahmed
                </title>
            </Head>
            <Header></Header>
            <div className=" container">
                <iframe src="https://bn.wikipedia.org/wiki/%E0%A6%B9%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%82%E0%A6%A8_%E0%A6%86%E0%A6%B9%E0%A6%AE%E0%A7%87%E0%A6%A6" title="description" height="1200px" width="1430px"></iframe>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default humaun;
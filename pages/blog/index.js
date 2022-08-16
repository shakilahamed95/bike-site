import Header from "../../Components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../Components/Footer";
import Head from "next/head";
const handlenavigate = () => {

}
const index = () => {
    return (
        <div>
            <Head>
                <title>Bolg</title>
            </Head>
            <Header></Header>
            <h1 className="text-center mt-5 text-primary mb-5">লেখক পরিচিতি</h1>
            <div className="row container mt-3 ms-4 mb-5">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className=" d-flex justify-content-center ">
                        <Image src='https://cdn.britannica.com/48/134948-050-10E316E2/Rabindranath-Tagore.jpg' alt='' width="300px" height="300px"></Image>
                    </div>
                    <h3 className="text-center mt-2">রবীন্দ্রনাথ ঠাকুর</h3>
                    <p className="text-center">রবীন্দ্রনাথ ঠাকুর এফআরএএস (৭ মে ১৮৬১ – ৭ আগস্ট ১৯৪১; ২৫ বৈশাখ ১২৬৮ – ২২ শ্রাবণ ১৩৪৮ বঙ্গাব্দ) ছিলেন অগ্রণী বাঙালি কবি, ঔপন্যাসিক, সংগীতস্রষ্টা, নাট্যকার, চিত্রকর, ছোটগল্পকার, প্রাবন্ধিক অভিনেতা, কণ্ঠশিল্পী ও দার্শনিক। তাকে বাংলা ভাষার সর্বশ্রেষ্ঠ সাহিত্যিক মনে করা হয়। রবীন্দ্রনাথকে “গুরুদেব”, “কবিগুরু” ও “বিশ্বকবি” অভিধায় ... <Link href='/blog/rabindranath' ><a className='ms-3 text-decoration-none '>আরো পড়ুন</a></Link></p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className=" d-flex justify-content-center ">
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sarat_Chandra_Chattopadhyay.jpg/250px-Sarat_Chandra_Chattopadhyay.jpg' alt='' width="300px" height="300px"></Image>
                    </div>
                    <h3 className="text-center mt-2">শরৎচন্দ্র চট্টোপাধ্যায়</h3>
                    <p className="text-center">শরৎচন্দ্র চট্টোপাধ্যায় (১৫ সেপ্টেম্বর ১৮৭৬ – ১৬ জানুয়ারি ১৯৩৮) ছিলেন একজন বাঙালি লেখক, ঔপন্যাসিক, ও গল্পকার। তিনি দক্ষিণ এশিয়ার অন্যতম জনপ্রিয় এবং বাংলা ভাষার সবচেয়ে জনপ্রিয় কথাসাহিত্যিক। তার অনেক উপন্যাস ভারতবর্ষের প্রধান ভাষাগুলোতে অনূদিত হয়েছে। বড়দিদি (১৯১৩), পরিণীতা (১৯১৪), পল্লীসমাজ (১৯১৬), দেবদাস (১৯১৭)... <Link href='https://bn.wikipedia.org/wiki/%E0%A6%B6%E0%A6%B0%E0%A7%8E%E0%A6%9A%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0_%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A7%8B%E0%A6%AA%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AF%E0%A6%BC' target='_blank'><a className='ms-3 text-decoration-none '>আরো পড়ুন</a></Link></p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className=" d-flex justify-content-center ">
                        <Image src='https://ajagami24.com/wp-content/uploads/2021/11/images-1.jpeg' alt='' width="300px" height="300px"></Image>
                    </div>
                    <h3 className="text-center mt-2">হুমায়ূন আহমেদ</h3>
                    <p className="text-center">হুমায়ূন আহমেদ (১৩ নভেম্বর ১৯৪৮ - ১৯ জুলাই ২০১২) ছিলেন একজন বাংলাদেশি ঔপন্যাসিক, ছোটগল্পকার, নাট্যকার এবং গীতিকার, চিত্রনাট্যকার ও চলচ্চিত্র নির্মাতা। তিনি বিংশ শতাব্দীর জনপ্রিয় বাঙালি কথাসাহিত্যিকদের মধ্যে অন্যতম। তাকে বাংলাদেশের স্বাধীনতা পরবর্তী অন্যতম শ্রেষ্ঠ লেখক বলে গণ্য করা হয়। বাংলা কথাসাহিত্যে তিনি সংলাপপ্রধান নতুন শৈলীর জনক ...<Link href='/blog/humaun' ><a className='ms-3 text-decoration-none '>আরো পড়ুন</a></Link></p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className=" d-flex justify-content-center ">
                        <Image src='https://assets.telegraphindia.com/abp/2018/9/8/1606503765_5fc14d55494e3_bibhutibhushan-bandyopadhyay.jpg' alt='' width="300px" height="300px"></Image>
                    </div>
                    <h3 className="text-center mt-2">বিভূতিভূষণ বন্দ্যোপাধ্যায়</h3>
                    <p className="text-center">বিভূতিভূষণ বন্দ্যোপাধ্যায় (১২ই সেপ্টেম্বর, ১৮৯৪ - ১লা নভেম্বর, ১৯৫০) ছিলেন একজন জনপ্রিয় ভারতীয় বাঙালি কথাসাহিত্যিক। তিনি মূলত উপন্যাস ও ছোটগল্প লিখে খ্যাতি অর্জন করেন। পথের পাঁচালী ও অপরাজিত তাঁর সবচেয়ে বেশি পরিচিত উপন্যাস। অন্যান্য উপন্যাসের মধ্যে আরণ্যক, চাঁদের পাহাড়,আদর্শ হিন্দু হোটেল, ইছামতী ও অশনি সংকেত বিশেষভাবে ...<Link href='https://bn.wikipedia.org/wiki/%E0%A6%AC%E0%A6%BF%E0%A6%AD%E0%A7%82%E0%A6%A4%E0%A6%BF%E0%A6%AD%E0%A7%82%E0%A6%B7%E0%A6%A3_%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%AA%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AF%E0%A6%BC' ><a className='ms-3 text-decoration-none '>আরো পড়ুন</a></Link></p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className=" d-flex justify-content-center ">
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/2/22/Manik_Bandopadhyay.jpg' alt='' width="300px" height="300px"></Image>
                    </div>
                    <h3 className="text-center mt-2">মানিক বন্দ্যোপাধ্যায়</h3>
                    <p className="text-center">মানিক বন্দ্যোপাধ্যায় (১৯ মে, ১৯০৮ - ৩ ডিসেম্বর, ১৯৫৬) ছিলেন একজন ভারতীয় বাঙালি কথাসাহিত্যিক। তার প্রকৃত নাম প্রবোধকুমার বন্দ্যোপাধ্যায়। প্রথম বিশ্বযুদ্ধের পর পৃথিবী জুড়ে মানবিক মূল্যবোধের চরম সংকটময় মুহূর্তে বাংলা কথা-সাহিত্যে যে কয়েকজন লেখকের হাতে সাহিত্যজগৎে নতুন এক বৈপ্লবিক ধারা সূচিত হয় মানিক বন্দ্যোপাধ্যায় ছিলেন তাদের মধ্যে অন্যতম...<Link href='https://bn.wikipedia.org/wiki/%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%95_%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%AA%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AF%E0%A6%BC' ><a className='ms-3 text-decoration-none '>আরো পড়ুন</a></Link></p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className=" d-flex justify-content-center ">
                        <Image src='https://bucket.barta24.com/uploads/news/2021/Oct/10/1633832922741.jpg' alt='' width="300px" height="300px"></Image>
                    </div>
                    <h3 className="text-center mt-2">সৈয়দ ওয়ালীউল্লাহ</h3>
                    <p className="text-center">সৈয়দ ওয়ালীউল্লাহ্‌ (১৫ আগস্ট ১৯২২ - ১০ অক্টোবর ১৯৭১) ছিলেন আধুনিক বাংলা সাহিত্যের একজন কথাশিল্পী। কল্লোল যুগের ধারাবাহিকতায় তাঁর আবির্ভাব হলেও তিনি ইউরোপীয় আধুনিকতায় পরিশ্রুত নতুন কথাসাহিত্য বলয়ের শিলান্যাস করেন। জগদীশ গুপ্ত, মানিক বন্দ্যোপাধ্যায় প্রমুখের উত্তরসূরি এই কথাসাহিত্যিক অগ্রজদের কাছ থেকে পাঠ গ্রহণ করলেও বিষয়, কাঠামো ...<Link href='https://bn.wikipedia.org/wiki/%E0%A6%B8%E0%A7%88%E0%A6%AF%E0%A6%BC%E0%A6%A6_%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B2%E0%A7%80%E0%A6%89%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B9' ><a className='ms-3 text-decoration-none '>আরো পড়ুন</a></Link></p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;
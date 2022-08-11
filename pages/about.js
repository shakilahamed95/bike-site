import Header from '../Components/Header'
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return {
        props: {
            data,

        },
    }
}

const about = ({ data }) => {
    return (
        <div>
            <Header></Header>
            <h1>Hi from my about page</h1>
            {
                data.map((singleData) => {
                    return <div key={singleData.id}>
                        <h2>{singleData.id}</h2>
                        <h3>{singleData.title}</h3>

                    </div>
                })
            }
        </div>
    );
};

export default about;
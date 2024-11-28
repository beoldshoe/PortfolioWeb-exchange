import DetailProjectFrame from "../components/DetailProjectFrame";
import TopNavBar from "../components/TopNavBar"

const DetailProjectPage = () => {
    return (
        <div className="all"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                fontFamily: 'Chosun'
            }}>
            <div>
                <TopNavBar />
            </div>
            <DetailProjectFrame />
        </div>
    )
}

export default DetailProjectPage;
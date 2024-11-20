import LeftSideBar from "../components/common/leftsidebar";
import HomeScreen from "../components/Home/HomeScreen";

function Home () {
    return (
        <div className="flex">
            <LeftSideBar />
            <HomeScreen />
        </div>
    )
}

export default Home;
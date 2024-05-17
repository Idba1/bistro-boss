import Featured from "../Featured/Featured";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopulerMenu from "./PopularMenu/PopulerMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopulerMenu from "./PopularMenu/PopulerMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>BISTRO BOSS | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
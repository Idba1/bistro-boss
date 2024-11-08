import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/Menu/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

// pagination
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    // pagination
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | ORDER FOOD</title>
            </Helmet>

            <Cover img={orderCoverImg} title="Order Food"></Cover>



            <Tabs className="my-7 md:my-10 lg:my-16" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                         <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {
                                salad.map(item => <FoodCard
                                    key={item._id}
                                    item={item}>
                                </FoodCard>)
                            }
                        </div>
                    </SwiperSlide>
                    </Swiper>
                   
                </TabPanel>

                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {
                                pizza.map(item => <FoodCard
                                    key={item._id}
                                    item={item}>
                                </FoodCard>)
                            }
                        </div>
                    </SwiperSlide>
                    </Swiper>
                    
                </TabPanel>

                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                         <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {
                                soup.map(item => <FoodCard
                                    key={item._id}
                                    item={item}>
                                </FoodCard>)
                            }
                        </div>
                    </SwiperSlide>
                    </Swiper>
                   
                </TabPanel>

                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                         <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {
                                desserts.map(item => <FoodCard
                                    key={item._id}
                                    item={item}>
                                </FoodCard>)
                            }
                        </div>
                    </SwiperSlide>
                    </Swiper>
                   
                </TabPanel>

                <TabPanel>
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                         <SwiperSlide>
                        <div className='grid md:grid-cols-3 gap-10'>
                            {
                                drinks.map(item => <FoodCard
                                    key={item._id}
                                    item={item}>
                                </FoodCard>)
                            }
                        </div>
                    </SwiperSlide>
                    </Swiper>
                   
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg"

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | ORDER</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
        </div>
    );
};

export default Order;
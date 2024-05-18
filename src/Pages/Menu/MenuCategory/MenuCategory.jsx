import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            <div>
                {title && <Cover img={img} title={title}></Cover>}
                <div className="grid md:grid-cols-2 gap-10 my-16">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </div>
            <div className="border-6">
                <button className="btn flex mx-auto text-center my-8 btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>
    );
};

export default MenuCategory;
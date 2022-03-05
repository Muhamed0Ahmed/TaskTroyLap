import "./search.css";
function Item(props) {
    return (
        <div className="product d-flex justify-content-between p-2">
            <div className="img-name d-flex gap-2 ">
                <img src={require(`../../images/${props.item.image}`)} alt="" width="30px" />
                <span className="title">{props.item.name}</span>

            </div>
            <span className="count">
                {props.item.count}

            </span>
        </div>
    )
}
function CartProduct(props) {

    const cart = props.cart;

    const items = cart.map(item => <Item item={item} />);

    if (cart.length === 0) {
        return (
            <div className='d-flex justify-content-center align-items-center'>اختر بعض المنتجات</div>
        )
    } else {
        return (
            <div>
                {items}
            </div>


        )

    }
}

function CartProducts(props) {

    return (
        <div className="container-cart ">
            <CartProduct cart={props.cart} />

            <div className=" mt-5 ">

                <div className="notes d-flex justify-content-between">
                    <span><strong>عدد الطلبات</strong></span>
                    <span>
                        <strong>22</strong>
                        
                    </span>
                </div>
            
            <div className="notes d-flex justify-content-between">
                <span><strong>المجموع</strong></span>
                <span>
                    <strong>22.50</strong>
                    <span className="color-green">ريال</span>
                </span>
            </div>
            </div>
            <div className="d-flex justify-content-between p-2">
                <button className="btn btn-success py-2">قبول الطلبات</button>
                <button className="btn btn-danger py-2">رفض الطلبات</button>
                </div>
        </div>
        
      );
}

export default CartProducts;
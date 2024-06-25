import "./Home.css";
function Products(props) {
    const products = props.products;
    const items = products.map(item => {
        return (
            <div className="product-show col-12 col-md-6 col-lg-4 col-xl-3" key={item.id}>
                <div className="kal d-flex justify-content-between color-green">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="14.857" height="14.857" viewBox="0 0 14.857 14.857">
                        <path id="Path_161" data-name="Path 161" d="M8.686,5.714h1.486V7.2H8.686Zm0,2.971h1.486v4.457H8.686ZM9.429,2a7.429,7.429,0,1,0,7.429,7.429A7.431,7.431,0,0,0,9.429,2Zm0,13.372a5.943,5.943,0,1,1,5.943-5.943A5.951,5.951,0,0,1,9.429,15.372Z" transform="translate(-2 -2)" fill="rgba(15,165,154,0.41)" />
                    </svg>
                    </span>
                    <span>{item.kal} kal</span>
                </div>
                <div className="img">
                    <img width="120px" src={require(`../images/${item.image}`)} alt="images" />
                </div>
                <div className="name-store d-flex flex-column">
                    <span className="name">{item.name}</span>
                    <span className="store">الكميه المخزون : <span className='color-green'>{item.storeCount}</span></span>
                </div>
                <div className="price-btnBuy d-flex color-green">
                    <button className='btn btn-add' onClick={props.onclick} data-product-id={item.id}>+</button>
                    <span className="price m-2">{item.price}ريال </span>
                </div>

            </div>
        )
    })
    return (
        <div className="container">
            <div className="row products container-fluid  ">
                {items}
                {/* {items} */}
            </div>

        </div>
    );
}

export default Products;
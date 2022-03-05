import Products from '../Products';
import CartProducts from './CartProducts';
import './search.css';


function Search(props) {
    return (
        <div className="container-search">
            <div className="header-all-pre">
                <div className="header-order-prev">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="13.541" height="25.144" viewBox="0 0 13.541 25.144">
                        <g id="Back" transform="translate(-348.815 -34)">
                            <path id="chevron-left" d="M4.783,1.783a.967.967,0,0,0,0,1.369L15.7,14.071,4.783,24.991A.968.968,0,1,0,6.152,26.36l11.6-11.6a.967.967,0,0,0,0-1.369l-11.6-11.6a.967.967,0,0,0-1.369,0Z" transform="translate(344.316 32.501)" fill="#fff" fillRule="evenodd" />
                        </g>
                    </svg>
                    </button>
                    <h3 className="header-order-prev text-center">الطلبات المسبقة</h3>
                </div>

            </div>
            <div className="search-all-pre">
                <div className="d-flex justify-content-between">
                    <div className="input-group mb-3">
                        <span className="input-group-search" id="basic-addon1"><svg id="room_service_black_24dp" xmlns="http://www.w3.org/2000/svg" width="34.898" height="34.898" viewBox="0 0 34.898 34.898">
                            <path id="Path_282" data-name="Path 282" d="M0,0H34.9V34.9H0Z" fill="none" />
                            <path id="Path_283" data-name="Path 283" d="M2,22.449H31.082v2.908H2ZM19.217,9.057a3,3,0,0,0,.233-1.149,2.908,2.908,0,0,0-5.816,0,3,3,0,0,0,.233,1.149A13.1,13.1,0,0,0,3.454,21H29.628A13.1,13.1,0,0,0,19.217,9.057Z" transform="translate(0.908 2.271)" fill="#a2a2a2" />
                        </svg>
                        </span>
                        <input type="search" className="form-control" placeholder="بحث" />
                        <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="21.842" height="21.839" viewBox="0 0 21.842 21.839">
                            <path id="search" d="M16.029,14.12a8.873,8.873,0,1,0-1.907,1.908h0a1.6,1.6,0,0,0,.134.157l5.256,5.256a1.365,1.365,0,0,0,1.932-1.93l-5.256-5.256a1.375,1.375,0,0,0-.157-.137Zm.352-5.247A7.508,7.508,0,1,1,8.873,1.364a7.508,7.508,0,0,1,7.508,7.508Z" transform="translate(0.001 -0.002)" fill="#a2a2a2" />
                        </svg>
                        </button>
                    </div>
                    <div className=" color-green ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21.538" viewBox="0 0 20 21.538">
                            <path id="funnel" d="M1.5,1.769A.769.769,0,0,1,2.269,1H20.731a.769.769,0,0,1,.769.769V4.846a.769.769,0,0,1-.2.514l-6.726,7.474v7.4a.769.769,0,0,1-.526.729L9.435,22.5a.769.769,0,0,1-1.012-.729V12.834L1.7,5.36a.769.769,0,0,1-.2-.514Zm1.538.769V4.551l6.726,7.474a.769.769,0,0,1,.2.514V20.7l3.077-1.025V12.538a.769.769,0,0,1,.2-.514l6.726-7.474V2.538Z" transform="translate(-1.5 -1)" fill="#13a69a" />
                        </svg>
                    </div>
                </div>
                <div className="d-flex g-2">
                    
                    <div className="categ">
                        <span>شندوتشات</span>
                        <button className="x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.886" height="24.886" viewBox="0 0 24.886 24.886">
                                <path id="Icon_ionic-ios-close-circle" data-name="Icon ionic-ios-close-circle" d="M15.818,3.375A12.443,12.443,0,1,0,28.261,15.818,12.441,12.441,0,0,0,15.818,3.375Zm3.153,16.948L15.818,17.17l-3.153,3.153a.956.956,0,1,1-1.352-1.352l3.153-3.153-3.153-3.153a.956.956,0,0,1,1.352-1.352l3.153,3.153,3.153-3.153a.956.956,0,0,1,1.352,1.352L17.17,15.818l3.153,3.153a.96.96,0,0,1,0,1.352A.95.95,0,0,1,18.971,20.323Z" transform="translate(-3.375 -3.375)" fill="#b4b4b4" />
                            </svg>
                        </button>
                    </div>
                    <div className="categ">
                        <span>طبق متكامل</span>
                        <button className="x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24.886" height="24.886" viewBox="0 0 24.886 24.886">
                                <path id="Icon_ionic-ios-close-circle" data-name="Icon ionic-ios-close-circle" d="M15.818,3.375A12.443,12.443,0,1,0,28.261,15.818,12.441,12.441,0,0,0,15.818,3.375Zm3.153,16.948L15.818,17.17l-3.153,3.153a.956.956,0,1,1-1.352-1.352l3.153-3.153-3.153-3.153a.956.956,0,0,1,1.352-1.352l3.153,3.153,3.153-3.153a.956.956,0,0,1,1.352,1.352L17.17,15.818l3.153,3.153a.96.96,0,0,1,0,1.352A.95.95,0,0,1,18.971,20.323Z" transform="translate(-3.375 -3.375)" fill="#b4b4b4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="current-orders-name">
                <span className='btn text-center px-4'>الطلبات الحاليه</span>

            </div>
            <div className="main-all-pre">
                <Products products={props.products} onClick={(e) => props.onclick()} />
                
            </div>
            <div className="orders-detail">
                <div className="title d-flex justify-content-between">
                    <div className='title-name'>ملخص الطلبات الواردة</div>
                    <button className="save ">حفظ</button>

                </div>
                <CartProducts cart={props.cart}/>

                
                
            </div>


        </div>
    );
}

export default Search;
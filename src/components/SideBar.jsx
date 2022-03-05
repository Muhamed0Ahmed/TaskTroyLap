
import { faCircleXmark, faMagnifyingGlass,  faQuestionCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import lays from '../images/lays.jpg'
import './Home.css';
function Detail(props) {
    if (!props.isLogIn) {
        return (
            <div className="not-login d-flex justify-content-center align-items-center h-100">
                <div className="container-not-login d-flex flex-column gap-3 text-align-center">
                    <span className="nonw-empty text-center">
                        <svg id="noun_Empty_203873" xmlns="http://www.w3.org/2000/svg" width="96" height="82" viewBox="0 0 96 82">
                            <g id="Group_186" data-name="Group 186" transform="translate(0.662 29)">
                                <path id="Path_296" data-name="Path 296" d="M92.662,64.486,73.232,47H22.768L3.338,64.486.662,61.514,21.232,43H74.768l20.57,18.514Z" transform="translate(-0.662 -43)" fill="rgba(232,248,247,0.4)" />
                            </g>
                            <g id="Group_187" data-name="Group 187" transform="translate(0 47)">
                                <path id="Path_297" data-name="Path 297" d="M90,96H6a6.006,6.006,0,0,1-6-6V61H32v2a9.01,9.01,0,0,0,9,9H55a9.01,9.01,0,0,0,9-9V61H96V90A6.006,6.006,0,0,1,90,96ZM4,65V90a2,2,0,0,0,2,2H90a2,2,0,0,0,2-2V65H67.847A13.021,13.021,0,0,1,55,76H41A13.021,13.021,0,0,1,28.153,65Z" transform="translate(0 -61)" fill="rgba(232,248,247,0.4)" />
                            </g>
                            <g id="Group_188" data-name="Group 188" transform="translate(25.312 1.928)">
                                <rect id="Rectangle_110" data-name="Rectangle 110" width="13.038" height="4" transform="translate(3.375 0) rotate(57.529)" fill="rgba(232,248,247,0.4)" />
                            </g>
                            <g id="Group_189" data-name="Group 189" transform="translate(61.314 1.925)">
                                <rect id="Rectangle_111" data-name="Rectangle 111" width="4" height="13.038" transform="matrix(0.844, 0.537, -0.537, 0.844, 6.999, 0)" fill="rgba(232,248,247,0.4)" />
                            </g>
                            <g id="Group_190" data-name="Group 190" transform="translate(46)">
                                <rect id="Rectangle_112" data-name="Rectangle 112" width="4" height="13" transform="translate(0.416)" fill="rgba(232,248,247,0.4)" />
                            </g>
                        </svg>

                    </span>
                    <span className="should-to-choose">
                        يجب علي إختيار طالب أولا
                    </span>
                </div>

            </div>
        )
    } else {
        return (
        <div className="detail-and-cart-and-buy mt-3"> 
            <div className="detail-and-cart">
                <div className="detail d-flex justify-content-between align-items-center">
                    <span className="img-detail">
                        <FontAwesomeIcon icon={faUser}/>

                    </span>
                    <span className="detail d-flex flex-column">
                        <span className="number"><span className="light-green-color">الرقم المقصفي</span>  {props.student.number} </span>
                        <span className="name">{props.student.name}</span>
                    </span>
                    <span className="exit">
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </span>

                </div> 
            </div>
            <div className="products-and-orders d-flex flex-column justify-content-between">
                <div className="detail-show-product">
                    <div className="show-product-count">
                        {props.student.cart.length}منتجات
                    </div>
                    <div className="products">
                        <div className="product-group d-flex justify-content-between">
                            <div className="d-flex ">
                                <img src={lays} alt="product img" width="50px" className="p-2"/>
                                <div className="detail-product">
                                    <div className="name-product">
                                        شيبسى لايز 150 جم
                                    </div>
                                    <div className="price-and-count color-green">
                                        <strong>7.50 </strong>ريال  × 2
                                    </div>
                                </div>
                            </div>
                            <div className="price-product-count d-flex flex-column align-items-end">
                                <button><FontAwesomeIcon icon={faCircleXmark}/></button>
                                <span className="price"><strong>15.00</strong> ريال</span>


                            </div>

                        </div>

                        <div className="product-group d-flex justify-content-between">
                            <div className="d-flex ">
                                <img src={lays} alt="product img" width="50px" className="p-2"/>
                                <div className="detail-product">
                                    <div className="name-product">
                                        شيبسى لايز 150 جم
                                    </div>
                                    <div className="price-and-count color-green">
                                        <strong>7.50 </strong>ريال  × 2
                                    </div>
                                </div>
                            </div>
                            <div className="price-product-count d-flex flex-column align-items-end">
                                <button><FontAwesomeIcon icon={faCircleXmark}/></button>
                                <span className="price"><strong>15.00</strong> ريال</span>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="order-details ">
                    <div className="notes d-flex justify-content-between" >
                        <span className="color-green">الملاحظات</span>
                        <span>يفضل تاريخ صلاخية حديث</span>

                    </div>
                    <div className="notes d-flex justify-content-between" >
                        <span className="color-green">عمولة التطبيق</span>
                        <span><strong>2.50 </strong>ريال</span>

                    </div>
                    <div className="notes d-flex justify-content-between">
                        <span><strong>المجموع</strong></span>
                        <span>
                            <strong>22.50</strong>
                            <span className="color-green">ريال</span>
                        </span>
                    </div>
                    <div className=" notes">
                        <button className="btn w-100 p-3 text-align-center">شراء</button>
                    </div>

                </div>
            </div>
            


        </div>
        )
    }
}

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            isLogIn: true,
            studentName: {
                name: "محمد بن بندر الوشيقيري",
                number: " 135",
                status: "",
                cart: [
                    {},{},{}
                ],
            }
        }
    }
    render() {
        return (
            <div className="side-bar d-flex flex-column">
                <div className="sidebar-search">
                    <div className="content-search d-flex gap-2">
                        <span className="search-input">
                            <input type="search"
                                className="form-control"
                                value={this.state.searchInput}
                                onChange={(e) => this.setState({
                                    searchInput: e.target.value,
                                })}
                                placeholder="اسم الطالب" />
                        </span>

                        <span className="search-by-number ">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className="not-registed">
                            <FontAwesomeIcon icon={faUser} />
                            <FontAwesomeIcon icon={faQuestionCircle} />

                        </span>
                    </div>

                </div>
                <Detail isLogIn={this.state.isLogIn} student={this.state.studentName}/>
                


            </div>
        );
    }
}

export default SideBar;
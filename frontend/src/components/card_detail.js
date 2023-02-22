import React from "react"
import { IoMdPricetags } from 'react-icons/io'
import { BsCalculator } from 'react-icons/bs'
import { AiTwotoneStar } from 'react-icons/ai'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { MdCategory } from 'react-icons/md'
 
class CardDetail extends React.Component{
    render(){
        return (
            <div className="col-lg-12 p-2">
                <div className="card shadow mb-4">
                <h3 className="fw-semibold pt-lg-5 text-2xl mx-4 mb-lg-2" align="center">Detail Product</h3>
                    <div className="card-body row mb-lg-8">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-12" align="center">
                            <img src={this.props.cover} className="img rounded shadow"
                            style={{height: "300px", width: "350px"}}/>
                            <h1 className="text-info text-2xl fw-bold mt-4" align="center">
                                { this.props.title }
                            </h1>
                            <h6 className="text-dark mt-2 text-md" align="center">
                                { this.props.description}
                            </h6>
                            <div style={{display: "flex", justifyContent: "center", marginTop: '20px'}}>
                            <div className="mx-2 text-xl"><MdOutlineAttachMoney /></div>
                            <span className="origin-left text-black">
                                Price : {this.props.price}
                            </span>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", marginTop: '10px'}}>
                            <div className="mx-2 text-xl"><BsCalculator /></div>
                            <span className="origin-left text-black">
                                Stock : {this.props.stock}
                            </span>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", marginTop: '10px'}}>
                            <div className="mx-2 text-xl"><AiTwotoneStar /></div>
                            <span className="origin-left text-black">
                                Rating : {this.props.rating}
                            </span>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", marginTop: '10px'}}>
                            <div className="mx-2 text-xl"><IoMdPricetags /></div>
                            <span className="origin-left text-black">
                                Brand : {this.props.brand}
                            </span>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", marginTop: '10px'}}>
                            <div className="mx-2 text-xl"><MdCategory /></div>
                            <span className="origin-left text-black">
                                Category : {this.props.category}
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardDetail;
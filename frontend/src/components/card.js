import React from "react"
import { IoIosArrowForward } from 'react-icons/io'
 
class Card extends React.Component{
    render(){
        return (
            <div className="col-lg-2 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row" style={{height: '300px'}}>
                        {/* menampilkan Gambar / cover */}
                        <div className="col-12" align="center">
                            <img src={this.props.cover} className="img rounded"
                            style={{height: "100px", width: "125px"}}/>
                        </div>
 
                        {/* menampilkan deskripsi */}
                        <br/>
                        <div className="col-12" align="center">
                            <h5 className="text-info" align="center">
                                { this.props.title }
                            </h5>
                            <h6 className="text-dark mt-2" align="center">
                                Price: { this.props.price}
                            </h6>
 
                            {/* button untuk detail */}
                            <button className="btn btn-md btn-primary mt-4"
                                onClick={this.props.onDetail}>
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
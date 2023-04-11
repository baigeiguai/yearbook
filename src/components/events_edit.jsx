import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class EventsEdit extends Component {
    state = {
        
    } 
    handleClickButton = ()=>{
        
    }
    FormatDetailInfo = (detail)=>{
        return detail
        // let res = []
        // if ("PERSON" in detail && detail["PERSON"].length > 0){
        //     res.push("人："+detail["PERSON"].toString())
        // }
        // if ("TIME" in detail && detail["TIME"].length > 0){
        //     res.push("时间："+detail["TIME"].toString())
        // }
        // if ("DATE" in detail && detail["DATE"].length > 0){
        //     res.push("日期："+detail["DATE"].toString())
        // }
        // if ("CITY" in detail && detail["CITY"].length > 0){
        //     res.push("城市："+detail["CITY"].toString())
        // }
        // if ("LOCATION" in detail && detail["LOCATION"].length > 0 ){
        //     res.push("位置："+detail["LOCATION"].toString())
        // }
        // if ("FACILITY" in detail && detail["FACILITY"].length > 0 ){
        //     res.push("场所："+detail["FACILITY"].toString())
        // }
        // return res.join("\n")
    }
    render() { 
        console.log("events_edit",this.props.details)
        if (this.props.process_done){
            return (
        <React.Fragment>
            <Link to="/app/editor">
                <button onClick={this.handleClickButton} type="button" className="btn btn-light pull-right">提交</button>
            </Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>标题</th>
                        <th>链接</th>
                        <th>内容</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.details.map(e => (
                            <tr key={e.uri}>
                                <td>{e.title}</td>
                                <td>{e.uri}</td>
                                <td><textarea className="form-control" aria-label="With textarea" defaultValue={this.FormatDetailInfo(e.detail)}></textarea></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>     
        </React.Fragment>)
        }
        return( <React.Fragment>
            <h1>{this.props.process_detail_time}</h1>
        </React.Fragment>)
    }
}
 
export default EventsEdit;
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Raw from "../../components/Raw"
import {messageAction} from '../Actions/messageAction'

const mapStoreToProps = (store)=>{
    return {message: store.first.message}
}

const mapActionToProps = (dispatch) =>{
    return bindActionCreators({changeMessage:messageAction},dispatch)
}

export const RawHoc=connect(mapStoreToProps,mapActionToProps)(Raw)
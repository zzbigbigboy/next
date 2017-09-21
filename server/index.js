import { getFetch } from './cFetch'
import urlPath from './api'

//  散标列表
const consumeList = async (index)=> {
    const res = await getFetch(urlPath.consumeList, {
        keyType: 3,
        keyValue: '',
        status: '["BIDDING","REPAYING","SATISFIED_BID","REPAY_OVER"]',
        productCategory: 'P001',
        pageSize: 10,
        currentPage: index
    })
    if(res.code == '200000'){
        return res.data
    }
}

//  散标详情
const consumeInfo = async (code)=> {
    const res = await getFetch(urlPath.consumeInfo + code, {})
    if(res.code == '200000'){
        return res.data
    }
}

//  cnode首页
const cnodeList = async (index, type)=> {
    const res = await getFetch(urlPath.cnodeList, {
        page: index,
        tab: type,
        limit: 20,
        mdrender: 'false'
    })
    if(res.success){
        return res.data
    }
}

export default { consumeList, consumeInfo, cnodeList }
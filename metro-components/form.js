import React from 'react';
import axios from 'axios';
import {getAjaxHeader} from "./getAjaxHeader";

export const MetroForm = (props) => {

    const metroFormSubmit = (e) => {
        e.preventDefault();
        if(props.method !== null && props.action !== null){
            if(props.method === 'GET') {
                axios.get(props.action, {
                    headers: getAjaxHeader
                }).then(res=>{
                    props.afterSubmit(res,null)
                }).catch(err=>{
                    props.afterSubmit(null,err)
                })
            } else if(props.method === 'POST') {
                axios.post(props.action, props.data, {
                    headers: getAjaxHeader
                }).then(res=>{
                    props.afterSubmit(res,null)
                }).catch(err=>{
                    props.afterSubmit(null,err)
                })
            } else if(props.method === 'PUT') {
                axios.put(props.action, props.data, {
                    headers: getAjaxHeader
                }).then(res=>{
                    props.afterSubmit(res,null)
                }).catch(err=>{
                    props.afterSubmit(null,err)
                })
            } else if (props.method === 'DELETE') {
                axios.delete(props.action, {
                    headers: getAjaxHeader
                }).then(res=>{
                    props.afterSubmit(res,null)
                }).catch(err=>{
                    props.afterSubmit(null,err)
                })
            } else {
                props.afterSubmit(null,"Invalid Method")
            }
        }
    }

    return (
        <div>
            <form onSubmit={metroFormSubmit}>
                {props.children}
            </form>
        </div>
    )
}
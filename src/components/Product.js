import React from 'react'
import { useDispatch } from 'react-redux'
import {  useParams } from 'react-router-dom'
export default function Product() {
    const categories = useParams()
    const dispatch = useDispatch()
    return (
        <div>Product</div>
    )
}

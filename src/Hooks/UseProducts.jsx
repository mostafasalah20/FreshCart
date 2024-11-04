
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function UseProducts() {
    let  response  = useQuery({
        queryKey: ['resentProducts'],
        queryFn: getProducts
      })
    
      function getProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      }
    
  return response
}

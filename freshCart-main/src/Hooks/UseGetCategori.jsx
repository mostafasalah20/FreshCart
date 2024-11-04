import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function UseGetCategori() {
  let response =useQuery({
    queryKey: ['getCategories'],
    queryFn: () => fetch('https://ecommerce.routemisr.com/api/v1/categories')
     .then(response => response.json())
  })

  return response
}

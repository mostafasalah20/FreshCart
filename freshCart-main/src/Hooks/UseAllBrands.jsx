


import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function UseAllBrands() {
    let response = useQuery({
        queryKey: ['allBrands'],
        queryFn: () => {
            return fetch(`https://ecommerce.routemisr.com/api/v1/brands`).then(response => response.json());
            //   return response
        }
    })

    return response
}

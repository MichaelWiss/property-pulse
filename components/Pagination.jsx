
import React from 'react'

export default function Pagination( { page, pageSize, totalItems }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <section className="container mx-auto flex justify-center items-center my-8">
    <a href="#" className="mr-2 px-2 py-1 border border-gray-300 rounded">Previous</a>
    <span className="mx-2"> Page { page } of { totalPages }</span>

    <a href="#" className="mL-2 px-2 py-1 border border-gray-300 rounded">Next</a>
   

    </section>
  )
}



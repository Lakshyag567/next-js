import { notFound } from 'next/navigation'
import React from 'react'

export const generateMetadata = ({params}) => {
  return {
    title: `${params.id} | Contact`,
  }
}

//works at server level
// export const generateMetadata = async (props) => {
//   let title = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Fetch with axios');
//     }, 2000);
//   })
//   return {
//     title: title,
//   }
// }

const ContactDetail = ({ params: { id } }) => {

  if (id > 1000) {
    // notFound();
    //contact/not-found.jsx
  }

  return (
    <>
      <div>Contact Detail Page</div>
      <div>Id: {id}</div>
    </>
  )
}

export default ContactDetail
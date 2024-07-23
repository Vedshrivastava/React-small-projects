import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  //Extracts userid from user data which is received through useParams.
  return (
    <div className='bg-orange-500 text-black text-3xl text-center py-5'>User: {userid}</div>
  )
}

export default User
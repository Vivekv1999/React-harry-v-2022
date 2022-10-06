import React, { Component } from 'react'
import load from './loading.gif'


export default function Spinner (){
 
    return (
      <div className="text-center">
        <img src={load} alt="loading" />
      </div>
    )
  
}



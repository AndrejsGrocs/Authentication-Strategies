import React from 'react'
import { useContext, useState } from 'react'
import {AppContext} from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from "../../util/axiosinstance"; 



export default function Login(){
    const {handleLogin} = useContext(AppContext)

    return(
      <div>
          <h2>Authenticate with:</h2>
         <button>Facebook</button>
         <button>Startegy 2</button>
         <button>Startegy 3</button>



      </div>

    )
}
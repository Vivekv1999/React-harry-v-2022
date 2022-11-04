import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actioncretors } from './State/index'

export default function Shop() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)

  // const action=bindActionCreators(actioncretors,dispatch)

  // ====== destruchingvali rite =======
  const { withdrawmoney, depositemoney } = bindActionCreators(actioncretors, dispatch)


  return (
    <div>
      <h3 className='my-3'>Doposite/Withdra Money</h3>
      {/* <button className='btn btn-primary mx-2' onClick={()=>dispatch(actioncretors.withdrawmoney(100))}>-</button>
      Update balance
      <button className='btn btn-primary mx-2' onClick={()=>dispatch(actioncretors.depositemoney(100))}>+</button> */}

      {/* <button className='btn btn-primary mx-2' onClick={()=>action.withdrawmoney(100)}>-</button>
      Update balance
      <button className='btn btn-primary mx-2' onClick={()=>action.depositemoney(100)}>+</button> */}

      {/*=========== destrucihing valirite ======== */}
      <button className='btn btn-primary mx-2' onClick={() => withdrawmoney(100)}>-</button>
      Update balance - {balance}
      <button className='btn btn-primary mx-2' onClick={() => depositemoney(100)}>+</button>

    </div>
  )
}

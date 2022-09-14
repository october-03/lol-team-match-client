import React from 'react'
import { enterTeam } from '../../pages/api/teamApi'

const positionData = [
  'top',
  'jg',
  'mid',
  'adc',
  'sup'
]

export default function EnterModal({onClose}: propsType) {
  const useState = React.useState
  const [userName, setUserName] = useState('')
  const [teamCode, setTeamCode] = useState('')
  const [choosePosition, setChoosePosition] = useState('top')
  const [userPassWord, setUserPassWord] = useState('')
  return (
    <div>
      <div className='cursor-pointer' onClick={()=>{onClose(); console.log('adwdawdaw')}}>닫기</div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {positionData.map((item, index)=>{
          return (
            <div key={index} className='cursor-pointer' style={{color: `${choosePosition === item ? 'red' : '#000'}`, fontWeight: `${choosePosition === item ? 'bold' : '500'}`}} onClick={()=>{setChoosePosition(item), console.log(item)}}>{item}</div>
          )
        })}
      </div>
      <div>
        <input onChange={(e)=>{setUserName(e.target.value)}}></input>
        <input onChange={(e)=>{setTeamCode(e.target.value)}}></input>
        <input onChange={(e)=>{setUserPassWord(e.target.value)}}></input>
      </div>
      <div 
      onClick={
        ()=>{
          enterTeam(teamCode, userName, choosePosition, userPassWord)
          .then((res)=>{
            if(res.message){
              alert(res.message)
            } else {
              onClose();
            }
          }).catch((err)=>{console.log(err)})
        }}
      >
        입장
      </div>
    </div>
  )
}

type propsType = {
  onClose: () => void
}

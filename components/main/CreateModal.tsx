import React from 'react'
const positionData = [
  'top',
  'jg',
  'mid',
  'adc',
  'sup'
]

const gameData = [
  'solo',
  '5x5'
]

export default function CreateModal({onClose}: propsType) {
  const useState = React.useState
  const [choosePosition, setChoosePosition] = useState('top')
  const [chooseGame, setChooseGame] = useState('solo')
  const [teamName, setTeamName] = useState('')
  const [teamCode, setTeamCode] = useState('')
  const [uniqueCode, setUniqueCode] = useState('')
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {uniqueCode ?
      <div>{`${teamName} 팀의 입장코드는 ${uniqueCode} 입니다`}</div> 
      : 
      <div>
        <div className='cursor-pointer' onClick={()=>{onClose(); console.log('adwdawdaw')}}>닫기</div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {positionData.map((item, index)=>{
            return (
              <div key={index} className='cursor-pointer' style={{color: `${choosePosition === item ? 'red' : '#000'}`, fontWeight: `${choosePosition === item ? 'bold' : '500'}`}} onClick={()=>{setChoosePosition(item), console.log(item)}}>{item}</div>
            )
          })}
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {gameData.map((item, index)=>{
            return (
              <div key={index} className='cursor-pointer' style={{color: `${chooseGame === item ? 'red' : '#000'}`, fontWeight: `${chooseGame === item ? 'bold' : '500'}`}} onClick={()=>{setChooseGame(item), console.log(item)}}>{item}</div>
            )
          })}
        </div>
        <div>
          <input onChange={(e)=>{setTeamName(e.target.value)}}></input>
          <input onChange={(e)=>{setTeamCode(e.target.value)}}></input>
        </div>
      </div>
      }
      <div>생성</div>
    </div>
  )
}

type propsType = {
  onClose: () => void
}

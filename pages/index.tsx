import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Slider from "react-slick";
import styles from '../styles/Home.module.css'
import { teamType } from './types/team';

const Home: NextPage = () => {
  const [searchName, setSearchName] = useState('')
  const [teamList, setTeamList] = useState<teamType[]>([])
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
  }
  return (
    <div>
      <div>LOL.GG</div>
      <input onChange={(e)=>{setSearchName(e.target.value)}}></input>
      <div style={{display: 'flex'}}>
        <div className='cursor-pointer'>팀 참가</div>
        <div className='cursor-pointer'>팀 생성</div>
      </div>
      <div>
        {teamList.length !== 0 ?
          <Slider {...sliderSettings}>
            {teamList.map((item, index) => {
              return (
                <div key={index}>{item.name}</div>
              )
            })}
          </Slider>
          : <div>현재 모집중인 팀이 없습니다.</div>
        }
      </div>
    </div>
  )
}

export default Home

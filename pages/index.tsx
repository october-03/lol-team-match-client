import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import styles from '../styles/Home.module.css'
import { getTeamList } from './api/teamApi';
import { teamType } from './types/team';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import CreateModal from '../components/main/createModal';

const Home: NextPage = () => {
  const [searchName, setSearchName] = useState('')
  const [teamList, setTeamList] = useState<teamType[]>([])
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false)

  const _setTeamList = () => {
    getTeamList()
    .then((res)=>{
      setTeamList(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    _setTeamList()
  }, [])

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
        <div className='cursor-pointer' onClick={()=>{setCreateModalIsOpen(true)}}>팀 생성</div>
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
      <Modal isOpen={createModalIsOpen}>
        <CreateModal onClose={()=>{setCreateModalIsOpen(false)}}/>
      </Modal>
    </div>
  )
}

export default Home

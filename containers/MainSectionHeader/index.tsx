import React from 'react'
import { Container, Title, PhtoCards } from './MainSectionHeader.style'

const MainSectionHeader = () => (
  <Container>
    <Title>
      <h1>Phovis</h1>
      <h2>오늘 멋진 사진은 내일보면 또 다르다</h2>
      <p>
        나만의 출사장소(<span>P</span>hot<span>O VI</span>sit <span>S</span>
        ite)를 추천해주세요
      </p>
    </Title>
    <PhtoCards>
      <div className='polaroid-wraper'>
        <div className='polaroid'>
          <img src='https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081256_960_720.jpg' />
          <div className='caption'>
            <span className='user-info'>@ jeonghun-project</span>
          </div>
        </div>
      </div>
      <div className='polaroid-wraper'>
        <div className='polaroid'>
          <img src='https://cdn.pixabay.com/photo/2021/01/08/17/56/river-5900547__340.jpg' />
          <div className='caption'>
            <span className='user-info'>@ Reone1</span>
          </div>
        </div>
      </div>
      <div className='polaroid-wraper'>
        <div className='polaroid'>
          <img src='https://cdn.pixabay.com/photo/2020/11/07/23/22/beach-5722568__340.jpg' />
          <div className='caption'>
            <span className='user-info'>@ sim0417</span>
          </div>
        </div>
      </div>
      <div className='polaroid-wraper'>
        <div className='polaroid'>
          <img src='https://cdn.pixabay.com/photo/2020/10/27/20/17/lake-5691800_960_720.jpg' />
          <div className='caption'>
            <span className='user-info'>@ seungsang00</span>
          </div>
        </div>
      </div>
    </PhtoCards>
  </Container>
)

export default MainSectionHeader

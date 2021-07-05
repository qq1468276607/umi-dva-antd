import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import styles from './index.less';
import successIcon from '@/assets/exportSuccess.png';
import errorIcon from '@/assets/exportError.png'

const Index = () => {
 const [ choseOne, setchoseOne ] = useState('');

 const getTime = () => {
   const date = new Date();
   return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
 }

 const getDay = () => {
  const array = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
  return array[new Date().getDay()]
}

const jumpPath = (item) => {
  alert(`跳转${item.path}`)
}

const data = [
  { name:'页面1', path:'1'},
  { name:'页面2', path:'2'},
  { name:'页面3', path:'3'},
  { name:'页面4', path:'4'},
  { name:'页面5', path:'5'},
]

const btmData = [
  {type: '0', cont: '您导出的XXX任务已完成', time: '2020-07-10 10:06:32'},
  {type: '1', cont: '您导出的XXX任务失败', time: '2020-07-10 10:06:32'}
]
  return (
    <div className={styles.main}>
      <div className={styles.userDet}>
        <span>欢迎，XXX，祝你开心每一天！</span>&nbsp;&nbsp;{getTime()}&nbsp;&nbsp;{getDay()}
      </div>
      <div className={styles.mianHome} style={{ height: window.innerHeight - 118 }}>
        <div className={styles.left}>
          这里不知道放什么
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <h4>我的常用</h4>
            <div className={styles.rightTopCont}>
              {
                data.map(item => (
                  <div className={styles.rightTopContOne} onClick={()=> jumpPath(item)}>{item.name}</div>
                ))
              }
            </div>
          </div>
          <div className={styles.rightBtm}>
            <h4>通知</h4>
            <div className={styles.rightBtmCont}>    
                 {
                   btmData.map((item, index) =>(
                    <div className={styles.rightBtmContOne} style={choseOne == index ? { backgroundColor: '#e0eef9' }: {}} onClick={() => setchoseOne(index)}>
                       <div><img src={item.type === '0' ? successIcon : errorIcon } /></div>
                       <div style={{ marginLeft: '10px' }}>
                         <div className={styles.rightBtmContTitle}>{item.cont}</div>
                         <div className={styles.rightBtmContTip}>{item.time}</div>
                       </div>
                     </div>
                   ))
                 }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
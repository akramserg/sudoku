import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'

import styles from './Splash.module.scss';
import Button from '../../components/button/Button';

const Splash = () => {

  const router = useRouter()
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div role="splash" className={styles.splash_container}>
      <div >
        <Image src={"/logo.png"} height="250px" width="250px"
          objectFit="contain" alt="logo" className={styles.logo}
        />
      </div>
      <div className={styles.button_section}>
        <Button type="secondary" text={'Start'} onClick={() => router.push('/game/Game')} />
        <Button text={!showInfo ? "Show info" : "Hide info"} onClick={() => setShowInfo(!showInfo)} />
      </div>
      {showInfo && <h4 className={styles.bottom_section}>
        This is only for testing.{'\n'}
        The random game function randomly fills the blocks.{'\n'}
        You can use brute force of greedy search to find the solution.{'\n'}
        You can edit the board manually by clicking on the blocks or by importing a text in the format 1,2,3{'\n'}
      </h4>}

    </div>

  );
}

export default Splash 
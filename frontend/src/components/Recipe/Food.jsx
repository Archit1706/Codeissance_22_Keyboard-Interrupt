import React from 'react'
const Food = ({ Img,text }) => {

    const styles = {
        container:`w-80 h-34 mx-4 mt-4 px-6 py-2.5 border-4 border-solid shadow-lg shadow-cyan-300/50	 rounded-3xl hover:scale-105`
    }

  return (
      <div className={styles.container}>
         <img src={Img}  />
          <p>{ text}</p>
    </div>
    )
    
}

export default Food

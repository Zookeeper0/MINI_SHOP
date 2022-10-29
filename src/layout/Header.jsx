import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='heder__container'>
        <div className="title">Mini Shop</div>
        <div className="subtitle">
        Put your stuff up and sell it easily anytime, anywhere I need to save time.
        </div>
        <div className="header__btn">
          <a href="https://eastzoo.co.kr/">
            <button>who made it</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
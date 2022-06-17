import React from 'react'
import Link from 'next/link'

const PageIndex = () => {
  return (
    <div>
      <nav>
        <a href="">tokoku</a>
      <ul>
        <li>
          <Link href='/home'>
          {/* <a>home</a> */}
          home
          </Link>
          </li>
        <li>
          <Link href="/product">
            <a>product</a>
          </Link>
          </li>
        {/* <li></li>
        <li></li> */}
      </ul>
      </nav>
      <button type="button" className='btn btn-primary'>Primary</button>
    </div>
  )
}

export default PageIndex
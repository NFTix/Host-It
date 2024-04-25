import React from 'react'
import { Link } from 'react-router-dom'

const SideBarItem = ({ menu }) => {
  return (
    <Link to={menu.url}>
    <div className="p-2 mt-4 flex items-center hover:bg-lightBlack rounded-lg">
      <div>{menu.icon}</div>
      <div className="ml-4 pt-3 text-white text-xl	font-normal">{menu.title}</div>
    </div>
  </Link>
  )
}

export default SideBarItem
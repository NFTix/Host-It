import React from 'react'
import { eventMainSidebarData } from '../../CONSTANT'
import { Link } from 'react-router-dom'
import { TriangleLogo } from 'iconsax-react'
import SideBarItem from './SideBarItem'

const SideBar = () => {
    return (
        <div className="hidden h-screen w-64 mdl:block fixed border-r border-solid border-lightWhite">
            {/* Navigation */}
            <div className="border-b border-solid border-lightWhite">
                <div className="my-2 mx-6 flex items-center">
                    <Link to="/" className="flex items-center">
                        <TriangleLogo size="48" className='text-white' />
                        <h3 className="text-white text-2xl font-normal whyte leading-loose ml-2.5">
                            Host-It
                        </h3>
                    </Link>
                </div>
            </div>
            {/* as */}
            <div className="m-6">
                {eventMainSidebarData.map((menu, index) => (
                    <SideBarItem key={index} menu={menu} />
                ))}
            </div>
        </div>
    )
}

export default SideBar
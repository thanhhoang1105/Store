import React, { useState } from 'react'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilBars } from '@iconscout/react-unicons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilStar
} from '@iconscout/react-unicons'

import Logo from '../../../Assets/Images/logo.png'
import { SidebarData } from '../Data/Data'
import './style.css'

const SidebarAdminLeft = () => {
    const [selected, setSelected] = useState(0)
    const [url, setUrl] = useState('')

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    console.log(window.innerWidth)

    return (
        <>
            <div
                className="bars"
                style={expanded ? { left: '60%' } : { left: '5%' }}
                onClick={() => setExpaned(!expanded)}
            >
                <UilBars />
            </div>
            <motion.div
                className="sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <span>
                        Sh<span>o</span>ps
                    </span>
                </div>

                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <Link
                                to={item.url}
                                key={index}
                                className={
                                    selected === index
                                        ? 'menuItem active'
                                        : 'menuItem'
                                }
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </Link>
                        )
                    })}
                    {/* signoutIcon */}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default SidebarAdminLeft

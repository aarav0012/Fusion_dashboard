import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Announcements from './components/Announcements';

function App() {

  return (
    <>
    <div className='flex flex-row h-screen'>

      <Sidebar className='h-screen fixed' width='16.66%'>
        <h1>Fusion</h1>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <div className='flex flex-col h-screen w-5/6'>
        <Navbar />
        <div className='flex flex-row w-full h-[calc(100%-64px)]'>
          <div className='flex w-3/4 overflow-y-scroll'>
          {/* Main Pages Here */}
              <Dashboard />
          </div>
          <div className='flex flex-col w-1/4 bg-slate-400 h-full justify-around items-center'>
            {/* Profile section right side bar here */}
            <Profile />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

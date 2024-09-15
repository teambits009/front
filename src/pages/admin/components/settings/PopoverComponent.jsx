import { Button, Input, Popover } from 'antd'
import React from 'react'

const PopoverComponent = () => {
    const content = (
        <div className="grid grid-cols-2">
            <div className='bg-[#1B454B]'>
                <p>Contact an enkaare recruiter</p>
            </div>
            <div>
                <div className="grid">
                    <label>Full name</label>
                    <Input placeholder='Enter full name'/>
                </div>
                <div className="grid">
                    <label>Enmail</label>
                    <Input placeholder='Enter email address'/>
                </div>
                <div className="grid">
                    <label>Message</label>
                    <Input placeholder='Enter message'/>
                </div>
            </div>
        </div>
    )
  return (
    <div>
      <Popover placement='center' content={content} title="title">
        <Button className='outline' type='primary'>Hover</Button>
      </Popover>
    </div>
  )
}

export default PopoverComponent

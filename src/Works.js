    import { FaTimes } from 'react-icons/fa'
    import React from 'react'
    
    function Works() {

        const works = ([{
            name: 'Teaching',
            user: 'Students',
            place: 'School'
        },
        {
            name:'cultivate',
            user:'villagers',
            place: 'farm'
        },
        {
            name:'driving',
            user:'passengers',
            place:'road'
        }
    
    ])

    //Delete work

        return (
            <>
              {works.map((work)=>(
                  <div>
                      <div> <h2 style={{textAlign:'center', color:'pink'}}>These are the WORKS done daily</h2></div>
                      <div className='task'>
                      <h3  key={work.name} >Name of work: {work.name} <FaTimes style={{float:'right', color:'red'}}/> </h3>
                      <h3  key={work.name} >User of work: {work.user}</h3>
                      <h3  key={work.name} >Place of work: {work.place}</h3>
                  </div>
                  </div>
                 
              ))}<br></br>
            </>
        )
    }
    
    export default Works
    
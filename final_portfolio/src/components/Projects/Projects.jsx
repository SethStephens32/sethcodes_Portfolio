import React from 'react'
import './Projects.scss'
import { AnimatePresence, motion } from 'framer-motion'
import {useState } from 'react'
import CrwnClothing from '../../assets/crwn-clothing.png'


const projects = [
    {
        id: 1,
        title: 'Crown Clothing',
        description: 'Crown Clothing is a full-stack e-commerce application built with React, Redux, Firebase, and Stripe. It features a fully functional shopping cart, user authentication, and a payment system.',
        Image: CrwnClothing
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    }
]

const Projects = () => {

    const [selectedId, setSelectedId] = useState(null)

  return (
    <>
    <div className='projects__header'>
    <h1 className='skills__header'>I strive for excellence in my work.</h1>
    </div>
    <motion.div className='projects__container'>
        {projects.map((project) => (
            <motion.div
            key={project.id}
            className='projects__card'
            layoutId={project.id}
            onClick={() => setSelectedId(project.id)}
            style={{ backgroundImage: `url(${project.Image})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                    width: '100%',
                    }}
            >
                <motion.h2 layoutId={`title ${project.id}`} className="project__title">{project.title}</motion.h2>
            </motion.div>
        ))
            }
        <AnimatePresence>
            {selectedId && (
                <motion.div layoutId={selectedId} className='projects__card projects__card--selected'>
                    <motion.h2 layoutId={`title ${selectedId}`}>{projects.find((project) => project.id === selectedId).title}</motion.h2>
                    <motion.p>{projects.find((project) => project.id === selectedId).description}</motion.p>
                    <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                </motion.div>
            )}
        </AnimatePresence>
                
    </motion.div>
    </>
  )
}

export default Projects

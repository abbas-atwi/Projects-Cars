import React, { ReactNode } from 'react'
import Header from './header/Header'

interface ProjectCarsProps {
    children: ReactNode
}

/**
 *  Isso é um componente, mas um forma de hook, usando uma função
 * 
 */
const ProjectCarsHome = (props: ProjectCarsProps) => {
    return (
        <div className='main'>
            <Header />
            { props.children }
        </div>
    )
}


export default ProjectCarsHome
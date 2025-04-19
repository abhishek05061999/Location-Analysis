import React, { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
  className?: string
  action?: ReactNode
  headerClassName?: string
  contentClassName?: string
  icon?: ReactNode
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  className = '', 
  action,
  headerClassName = '',
  contentClassName = '',
  icon
}) => {
  return (
    <div className={`card animate-fade-in ${className}`}>
      <div className={`flex justify-between items-center mb-5 ${headerClassName}`}>
        <div className="flex items-center">
          {icon && <div className="mr-3">{icon}</div>}
          <h3 className="card-title">{title}</h3>
        </div>
        {action && <div className="card-action">{action}</div>}
      </div>
      <div className={`${contentClassName}`}>{children}</div>
    </div>
  )
}

export default Card 
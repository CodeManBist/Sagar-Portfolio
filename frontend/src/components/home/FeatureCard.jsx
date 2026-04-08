import React from 'react'
import { Card } from '../ui'

const FeatureCard = ({ icon, title, description, bgColor = "white" }) => {
  const colors = ["purple", "teal", "amber", "navy"]
  const colorMap = { "purple": 0, "teal": 1, "amber": 2, "navy": 3 }
  const bgColors = ["bg-white", "bg-white", "bg-white", "bg-white"]
  
  return (
    <Card
      variant="floating"
      icon={icon}
      title={title}
      description={description}
      bgColor={bgColor}
      className="h-full"
      hoverEffect={true}
    />
  )
}

export default FeatureCard

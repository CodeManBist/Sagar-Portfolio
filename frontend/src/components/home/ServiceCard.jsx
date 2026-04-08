import { Card } from '../ui'

const ServiceCard = ({ icon, title, description }) => {
  const colors = ["purple", "teal", "amber", "navy"]
  
  return (
    <Card
      variant="floating"
      icon={icon}
      title={title}
      description={description}
      className="h-full relative group"
      hoverEffect={true}
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-primary-purple group-hover:w-full transition-all duration-300 rounded-t-xl" />
    </Card>
  );
};

export default ServiceCard;

interface HeaderSectionProps {
  label: string;
}

const HeaderSection = ({label}:HeaderSectionProps) => {
  return (    
    <h1 className="text-primaryBcg text-2xl md:text-3xl font-bold text-start md:text-center mb-3">
      {label}
    </h1>
  )
}

export default HeaderSection

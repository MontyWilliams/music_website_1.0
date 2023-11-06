const SectionHeader = ({ pretitle, title }) => {
  return (
    <header>
        {/* Header helps with seo */}
      <h3>{pretitle}</h3>
      <h2>{title}</h2>
    </header>
  )
}

export default SectionHeader

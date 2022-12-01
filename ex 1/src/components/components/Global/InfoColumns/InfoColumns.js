export default function InfoColumns({icon, title, content, classStyle}) {
  return (
    <div className={`info-column ${classStyle}`}>
      <div className="image-wrapper">
        <img src={icon} alt=""/>
      </div> 
      <h4 className="col-title">{title}</h4>
      <p className="col-content">{content}</p>
    </div>
  )
}
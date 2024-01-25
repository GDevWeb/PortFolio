function ExperienceItem({
  title,
  content,
  link,
  fileName,
  linkText,
  icon,
  iconAlt,
}) {
  return (
    <>
      <div className="cardItem">
        <h3 className="cardItemTitle">{title}</h3>
        {icon && <img src={icon} alt={iconAlt} />}
        <div className="cardItemContent">
          <p>{content}</p>
        </div>
        <p>
          {link && (
            <a href={link} download={fileName} className="download">
              {linkText}
            </a>
          )}
        </p>
      </div>
    </>
  );
}

export default ExperienceItem;

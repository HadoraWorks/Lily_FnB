function MenuItem({ name, price, description, image, imageAlt }) {
  return (
    <article className="menu-item" data-stagger-item>
      {image ? (
        <div className="menu-item__media">
          <img src={image} alt={imageAlt ?? name} loading="lazy" decoding="async" />
        </div>
      ) : null}

      <div className="menu-item__content">
        <div className="menu-item__header">
          <h3>{name}</h3>
          <span className="menu-item__price">{price}</span>
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default MenuItem

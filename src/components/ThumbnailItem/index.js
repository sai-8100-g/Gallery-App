import './index.css'

const ThumbnailItem = props => {
  const {imageList, fullImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageList
  const changeImage = () => {
    fullImage(id)
  }

  const imgClassName = isActive ? '' : 'small-img'
  return (
    <li>
      <button onClick={changeImage} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imgClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  return (
    <Link to={`/blogs/${blogData.id}`}>
      <div className="item-container">
        <div>
          <img src={blogData.imageUrl} alt="eachImg" className="image-size" />
        </div>
        <div className="item-info">
          <p className="item-topic">{blogData.topic}</p>
          <h1 className="item-title">{blogData.title}</h1>
          <div className="profile-name">
            <img src={blogData.avatarUrl} className="avatar-url" alt="xxx" />
            <p className="author-name">{blogData.author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

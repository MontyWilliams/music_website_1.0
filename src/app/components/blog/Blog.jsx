import SectionHeader from "../SectionHeader"
import PostList from "./PostList"
import Posts from '../../../../_data/db.json'


function Blog() {
  const posts = Posts.posts

  return (
    <section className='section' id='blog'>
      <div className="container mx-auto">
        <SectionHeader pretitle='Our Blog' title='Latest News' />
        {/* post list */}
        <PostList  posts={posts} />
      </div>
    </section>
  )
}

export default Blog

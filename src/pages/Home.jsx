import "./Home.css"
import { useState } from "react"
import { FaUserCircle, FaHeart, FaEllipsisV } from "react-icons/fa"
import { FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa"
export default function Home() {

  const [category, setCategory] = useState("all")
  const [search, setSearch] = useState("")
  const [likes, setLikes] = useState({})
  const [expanded, setExpanded] = useState({})
  const [openMenu, setOpenMenu] = useState(null)

  const data = [
    {
      id: 1,
      title: "The no carb challenge: results after one week",
      desc: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With the Wix, building your online community has never been easier. ",
      category: "diet",
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      date: "Mar 22, 2023",
      read: "2 min read",
      views: 0,
      comments: 0
    },
    {
      id: 2,
      title: "Make a change today",
      desc: "You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away. ",
      category: "change",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      date: "Mar 20, 2023",
      read: "1 min read",
      views: 3,
      comments: 1
    },
    {
      id: 3,
      title: "Daily fitness tips",
      desc: "Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. ",
      category: "tips",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      date: "Mar 18, 2023",
      read: "3 min read",
      views: 5,
      comments: 2
    },
    {
      id: 4,
      title: "Healthy diet plan",
      desc: "Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content. ",
      category: "diet",
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      date: "Mar 15, 2023",
      read: "2 min read",
      views: 8,
      comments: 3
    }
  ]

  const filteredData = data.filter(item =>
    (category === "all" || item.category === category) &&
    (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
    )
  )

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  const toggleReadMore = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="home">

      {/* TOP BAR */}
      <div className="home-top">

        <div className="filters">
          <span className={category==="all" ? "active" : ""} onClick={() => setCategory("all")}>All Posts</span>
          <span className={category==="change" ? "active" : ""} onClick={() => setCategory("change")}>Make a Change</span>
          <span className={category==="tips" ? "active" : ""} onClick={() => setCategory("tips")}>Tips</span>
          <span className={category==="diet" ? "active" : ""} onClick={() => setCategory("diet")}>Diet Plan</span>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CARDS */}
      {filteredData.length === 0 ? (
        <p className="no-data">No posts found 😢</p>
      ) : (
        filteredData.map(item => (
          <div key={item.id} className="card">

            <img src={item.img} alt="" />

            <div className="card-content">

              {/* TOP */}
              <div className="card-top">
                <div className="user">
                  <FaUserCircle />
                  <span>Admin</span>
                  <span className="date">{item.date} • {item.read}</span>
                </div>

                <div className="dots-wrapper">
  <FaEllipsisV 
    className="dots"
    onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
  />

  {openMenu === item.id && (
    <div className="dropdown">

      <div className="share-item" onClick={() => window.open(`https://wa.me/?text=${window.location.href}`)}>
        <FaWhatsapp/> WhatsApp
      </div>

      <div className="share-item" onClick={() => window.open(`mailto:?subject=Check this&body=${window.location.href}`)}>
        <FaEnvelope /> Gmail
      </div>

      <div className="share-item" onClick={() => {
        navigator.clipboard.writeText(window.location.href)
        alert("Link copied!")
      }}>
        < FaLink /> Copy Link
      </div>

    </div>
  )}
</div>
              </div>

              {/* TITLE */}
              <h2>{item.title}</h2>

              {/* DESC */}
              <p className={expanded[item.id] ? "full-text" : "clamp-text"}>
  {item.desc}
</p>

<span 
  className="read-more"
  onClick={() => toggleReadMore(item.id)}
>
  {expanded[item.id] ? "Read Less" : "Read More"}
</span>

              {/* BOTTOM */}
              <div className="card-bottom">
                <span>{item.views} views</span>
                <span>{item.comments} comments</span>

                <span 
                  className={likes[item.id] ? "liked" : ""}
                  onClick={() => handleLike(item.id)}
                >
                  <FaHeart /> {likes[item.id] ? 1 : 0}
                </span>
              </div>

            </div>
          </div>
        ))
      )}

    </div>
  )
}
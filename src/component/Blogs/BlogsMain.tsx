import { useState } from "react";
import BlogHero from "./BlogHero"
import BlogGrid from "./BlogGrid"

const BlogsMain = () => {
  const [, setActiveCategory] = useState("All");


  return (
    <>
      <BlogHero />
      <BlogGrid posts={[]} setActiveCategory={setActiveCategory} />
    </>
  )
}

export default BlogsMain

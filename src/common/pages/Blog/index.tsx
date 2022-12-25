import BlogPosts from "./BlogPosts";
import styles from "./Blog.module.sass";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <a>Artigos</a>
        <a>Poemas</a>
        <a>Arte</a>
      </div>
      <BlogPosts />
    </div>
  );
};
export default Blog;

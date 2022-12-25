import Link from "components/Next/Link";

import styles from "./BlogPost.module.sass";

export interface BlogPostProps {
  post: {
    date: string;
    excerpt: string;
    href: string;
  };
}

const BlogPosts = ({ post }: BlogPostProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.credit}>
        <span>{post.date}</span>
        <span>por Nícolas Arths.</span>
      </p>
      <h1>
        <Link href={post.href}>{post.title}</Link>
      </h1>

      <div className={styles.snippetContainer}>
        <p>{post.excerpt}</p>
        <p className={styles.readMore}>
          <Link href={post.href}>Read more...</Link>
        </p>
      </div>
    </div>
  );
};
export default BlogPosts;

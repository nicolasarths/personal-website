import BlogPost from "./BlogPost";

import styles from "./BlogPosts.module.sass";

const excerpt = `
Esta parte do website ainda está em construção.
Enquanto o blog não sai do forno, visite o blog
que tenho na plataforma Wordpress, clicando no
botão "Read more..." a seguir.
`;

const post = {
  title: "Em Construção",
  date: "Dec 25 2022",
  excerpt,
  href: "https://nicolasarths.wordpress.com",
};

const BlogPosts = () => {
  return (
    <div className={styles.container}>
      <BlogPost post={post} />
    </div>
  );
};
export default BlogPosts;

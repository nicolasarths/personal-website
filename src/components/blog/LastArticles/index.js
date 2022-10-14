import Image from "next/image";

const ArticleSnippet = ({ article }) => {
  const { title, snippet, image, date } = article;
  return (
    <div className="snippet-container">
      <Image src={image.src} alt={image.alt} />
      <h4>{title}</h4>
      <p>{date}</p>
      <p>&quot;{snippet}&quot;</p>
    </div>
  );
};

const LastArticles = ({ articles }) => {
  return (
    <div className="last-articles">
      <h3>Postagens recentes</h3>
      <div className="articles">
        {articles.map((article) => (
          <ArticleSnippet key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default LastArticles;

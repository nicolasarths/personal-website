import MenuOfButtons from "../components/MenuOfButtons";
import MainHeader from "../components/Main/MainHeader";
import Description from "../components/Main/Description";
import Cover from "../components/Cover";

export default function Home() {
  const options = [
    {
      href: "/projetos",
      text: "Desenvolvimento Web",
    },
    {
      href: "https://nicolasarths.wordpress.com/",
      text: "Blog de poesias",
    },
    {
      href: "https://www.chess.com/member/nicolasarths",
      text: "Jogue comigo",
    },
  ];

  //<Spacer height="200px" />
  return (
    <div className="main">
      <div className="main-left-side">
        <MainHeader />
        <Description />
        <MenuOfButtons options={options} />
      </div>
      <Cover
        src="/profile-picture.jpg"
        fit="cover"
        position="50%"
      />
    </div>
  );
}

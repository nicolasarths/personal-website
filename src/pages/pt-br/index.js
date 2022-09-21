import MenuOfButtons from "../../components/MenuOfButtons";
import MainHeader from "../../components/Main/MainHeader";
import Description from "../../components/Main/Description";
import Spacer from "../../components/Spacer";
import Cover from "../../components/Cover";

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
    <div className="main fade-in">
      <div className="main-right-side">
        <MainHeader />
        <Description />
        <MenuOfButtons options={options} />
      </div>
      <Cover
        className="fade-in antman delay-200"
        src="/profile-picture.jpg"
        fit="cover"
        position="50%"
      />
    </div>
  );
}

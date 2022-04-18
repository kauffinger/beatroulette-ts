import Footer from "./Footer";
import NavBar from "./NavBar";
import Section from "./Section";

interface Props {
  children: React.ReactNode;
}

function Page(props: Props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <NavBar></NavBar>
      {props.children}
      <Section>
        <Footer></Footer>
      </Section>
    </div>
  );
}

export default Page;

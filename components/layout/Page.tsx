//import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

function Page(props: Props) {
  return (
    <div className="bg-gray-900 h-screen w-screen flex flex-col justify-start items-center">
      {/*<Navbar></Navbar>*/}
      {props.children}
    </div>
  );
}

export default Page;

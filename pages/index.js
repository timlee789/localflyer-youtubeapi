import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Feed from '../components/Feed';




export default function Home() {
  //console.log(posts)
  return (
    <div>
      <Head>
        <title>My Blog | Explore the new horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
      <Header />
      <div>
        <Feed />
      </div>
        <Footer />
      
      </main>
    </div>
  );
}


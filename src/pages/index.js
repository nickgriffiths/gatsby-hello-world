import React from "react"
import Header from "../components/header";
import {Link} from "gatsby"

export default function Home() {
  return (
    <div>
      <Link to={"/contact/"}>Contact</Link>
      <Header headerText={"Hello"}/>
      <p>Some body text</p>
    </div>
  )
}

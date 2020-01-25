import Header from "../header/header";
import PageTitle from "./page-title";
import Footer from "./footer";
import React from "react";

type RightPanelProps = {
  title: string,
  children: React.ReactNode;
}

export default function RightPanel({ title, children }: RightPanelProps) {
  return (
    <div id="right-panel" className="right-panel">
      <Header/>

      <PageTitle title={title}/>

      <div className="content">
        <div className="animated fadeIn">
          {children}
        </div>
      </div>

      <div className="clearfix"/>

      <Footer/>
    </div>
  )
}

import React from "react";
import LeftPanel from "./panel/left-panel";
import RightPanel from "./panel/right-panel";
import LayoutScripts from "./layout-scripts";
import LayoutHead from "./layout-head";

type LayoutProps = {
  title: string,
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <LayoutHead/>

      <LeftPanel/>

      <RightPanel title={title}>
        {children}
      </RightPanel>

      <LayoutScripts/>
    </>
  )
}

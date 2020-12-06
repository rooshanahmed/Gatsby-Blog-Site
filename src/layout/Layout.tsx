import React, { ReactNode } from "react"
import { CssBaseline } from "@material-ui/core"
import Header from "../components/Header"

export interface layoutProps {
  children: ReactNode
  title: string
}

const Layout: React.SFC<layoutProps> = ({ children, title }) => {
  return (
    <div>
      <CssBaseline />
      <title>Blogs Hub</title>
      <Header title={title} />
      {children}
    </div>
  )
}
export default Layout

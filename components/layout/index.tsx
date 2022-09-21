import Footer from './footer'

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen grid grid-rows-[1fr,auto] [&>*>div]:max-w-7xl [&>*>div]:mx-auto [&>*>div>*]:px-2 [&>*>div>*]:lg:px-0 gap-20">
      <head>
        <title>Art Gallery Website Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      
      <main>
        {children}
      </main>
      
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

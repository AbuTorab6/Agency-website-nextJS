import React from "react";

export async function generateMetadata() {
  let res = await fetch(process.env.BASE_URL + "api/SiteMeta/team");
  let data = await res.json();
  return {
    title: data[0].title,
    description: data[0].description,
    keywords: data[0].keywords,
    openGraph: {
      images: data[0].image,
    },
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;

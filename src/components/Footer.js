import React from "react";

const Footer = ({year, company, twitterLink, instaLink}) =>{

    return(
        <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy;{year} {company} Princess Page. All rights reserved.</p>
        <p>
          Follow {company} on{" "}
          <a 
          href= {twitterLink}
          className="text-blue-400"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href= {instaLink}
            className="text-pink-400"
          >
            Instagram
          </a>
        </p>
      </footer>
    )
}
export default Footer;
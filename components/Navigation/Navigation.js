import React from "react";
import Link from 'next/link';
import NavLogo from "../NavLogo/NavLogo";




// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Navigation
() {
  return (
      <div>
        <div className='nav' style={{display: 'flex', justifyContent:'flex-end', margin: '2em', backgroundColor:'black', opacity:'.5'}}>
        <p style={{margin:'2em', textDecoration:'none'}}>
            <Link style={{textDecoration:'none', color:'black', fontSize:'2em', textShadow:'1px 2px 2px rgba(193,219,212,0.88)'}}
              className='link1' href="/"><NavLogo /></Link>
          </p>
          <p style={{margin:'2em', textDecoration:'none'}}>
            <Link
              className='link' href="/">Home</Link>
          </p>
          <p style={{margin:'2em', textDecoration:'none'}}>
            <Link
            className='link' href="/About/About">About</Link>
          </p>
          <p style={{margin:'2em', textDecoration:'none'}}>
            <Link 
            className='link' href="/Dashboard/Dashboard">Dashboard</Link>
          </p>
        </div>
      </div>
    
  );
}
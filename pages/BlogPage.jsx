import React from 'react'
import BodyContent from '../Components/BodyContent/BodyContent'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import '../App.css'
function BlogPage() {
  return (
    <>
    <div id="wrapper">
        <HeaderContent />
        <BodyContent>
            <h3>Blog page</h3>
        </BodyContent>
    </div>
    </>
    
  )
}

export default BlogPage
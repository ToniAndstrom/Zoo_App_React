import React from 'react'
import "./AboutPage.css"

const AboutPage = () => {
  return (
      <>
      <div className='about_box'>
      <div className='about'>
        <p className='about_text'>This Zoo-app is a practice task I made while studying at Helsinki Business College using React. The landing page has 4 separate links that all link to a category page that displays specific animals each in their own card with the animals name, a delete button, image, likes and dislikes that will change the heart icon between them if gone over 5 or under -5. There is also a see more link that will display said animal in its own page with links to wikipedia and youtube. You can also find a back button that will redirect you to the previous page. The category page is also included with a search bar where you can search a specific animal you are looking for within that category. Besides this About page, the header has links to each category page and the logo(ZOO) and Home will both link back to the landing page. There is also an error page incase the page is not found. </p>
     </div>
     </div>
     </>
  )
}

export default AboutPage
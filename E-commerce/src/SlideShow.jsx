import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
  }
  const slideImages = [
    {
      url: 'https://th.bing.com/th/id/R.01979a9f79d26c9a071689cab3f742b7?rik=hP91VZTtgtswRg&riu=http%3a%2f%2fwww.v3wall.com%2fwallpaper%2f1600_1200%2f1010%2f1600_1200_20101027083158534365.jpg&ehk=3bluvxJEHySYjrNaEIra2OcHGSAeu4PS5NgWixPtFYA%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      url: 'https://th.bing.com/th/id/R.197fb3ab039cd76859c3bc081c85717c?rik=MimKNOvpcW%2bGlA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1556457%2fimages%2fo-SHOPPING-BAGS-facebook.jpg&ehk=0gJr1ovRRbvqY3wNYGR7%2bLhT6c4raagOZ5w%2b456FSL8%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      url: 'https://www.wallpaperflare.com/static/528/623/761/child-shopping-bags-happiness-wallpaper.jpg',
    },
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }

  export default Slideshow
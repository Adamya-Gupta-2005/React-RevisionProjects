import React, { useState } from 'react'
import './App.css'
import { HeartIcon, SpinnerIcon } from './icons.jsx'

const App = () => {
  const [liked, setLiked] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  // https://www.greatfrontend.com/api/questions/like-button (api not working now the real ques was for error handeling)

  const handleLikeUnlike = async () => {
    setIsFetching(true)
    setError(null)

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        },
      )

      if(response.status >= 200 && response.status < 300){
        setLiked(!liked)
      } else {
        const res = await response.json();
        setError(res.message)
        return;
      }

      console.log(await response.json())

    } catch {
      setError("Error")
    } finally {
      setIsFetching(false)
    }
  } 

  return (
    <div>
      <button className={`likeBtn ${liked? "liked":""}`} onClick={handleLikeUnlike}>
        {isFetching ? <SpinnerIcon /> :<HeartIcon />} {liked? "Liked":"Like"}
      </button>
      {error && <div>{error}</div>}
    </div>
  )
}

export default App

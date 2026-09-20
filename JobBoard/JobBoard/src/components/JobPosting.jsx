import React from 'react'

const JobPosting = ({ url, title, by, time }) => {
    const formattedTime = new Date(time*1000).toLocaleString()
  return (
    <div className='post' role='listItem'>
      <h2 className='post__title'>
        <a className={url ? "" : "inactive"} href={url} target='_blank' rel='noopener'>{title}</a>
      </h2>

      <span className='post__metadata'>By: {by} {formattedTime}</span>
    </div>
  )
}

export default JobPosting

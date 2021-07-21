import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <section className="section">
      <div className="error-container">
        <h2 className="section-title">Page not found</h2>
        <Link to="/" className="btn btn-primary">back home</Link>
      </div>
    </section>
  )
}

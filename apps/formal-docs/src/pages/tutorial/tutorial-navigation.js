import React from 'react'
import { Link } from 'docz'

export default function TutorialNavigation({ prev, next }) {
  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        borderRadius: 16,
        display: 'flex',
        fontSize: '1.5em',
        justifyContent: 'space-between',
        marginTop: 80,
        padding: '1em',
      }}
    >
      {prev && (
        <Link
          to={prev.route}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <span role="img" aria-label="Back">
            👈🏻
          </span>{' '}
          {prev.title}
        </Link>
      )}
      <div />
      {next && (
        <Link
          to={next.route}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {next.title}{' '}
          <span role="img" aria-label="Next">
            👉🏻
          </span>
        </Link>
      )}
    </div>
  )
}

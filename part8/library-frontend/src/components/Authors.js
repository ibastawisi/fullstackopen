import React from 'react'
import { useQuery } from '@apollo/client'

import { ALL_AUTHORS } from '../queries'
import EditAuthor from './EditAuthor'

const Authors = ({ Notify }) => {
  const result = useQuery(ALL_AUTHORS)
  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {result.data.allAuthors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <EditAuthor Notify={Notify} authors={result.data.allAuthors} />
    </div>
  )
}

export default Authors

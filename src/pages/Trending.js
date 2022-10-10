import React from 'react'
import { useFetchTrending } from '../hooks/useFetchTrending'
export const Trending = () => {
  const { movies} = useFetchTrending();
  console.log('movies', movies)
  return (
    <></>
  )
}

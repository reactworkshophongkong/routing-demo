import React from "react";
import { useLocation } from 'react-router'

export const Home = () => {
  const query = useLocation().search
  console.log('queryParamsString: ', query)

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const params = new URLSearchParams(query)
  console.log('date', params.get('date'))
  console.log('count', params.get('count'))
  return <h1>Home page</h1>;
};

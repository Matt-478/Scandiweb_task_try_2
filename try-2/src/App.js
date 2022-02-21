import React, { Component } from "react";
import { Query } from '@apollo/client/react/components'
import { gql } from 'graphql-tag';


import Try from './Try'

const POSTS_QUERY = gql`
  query {
    categories {
      name
    }
  }`

export default class App extends Component {

  getAllName = () => {
    this.props.client.query({
      query: gql
      `query {
        categories {
          name
        }`
    }).then(res => {console.log(res)})
  }
  render() {
    return (
      <>
        React app
        <p>This will stay workable and what not</p>

        <Query
         query={POSTS_QUERY}
         >
          {({loading, error, data}) => {
            if(loading) return "Loading..."
            if(data) {
              return (
                data.map((dat) => console.log(dat))
                )
            }
            {<Try/>
             return (console.log(data))
            //  return data.map(({name}) => <h1>{name}</h1>)
          }} }
        </Query>
        <button onClick={this.getAllName}>Names</button>
      </>
    )
  }
}





  // componentDidMount() {
  //   return fetch('http//localhost:4000', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       query: `{
  //           categories {
  //             name
  //           }
  //         }`
  //     })
  //   })
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         console.log(responseJson)
  //       })
  //       .catch((error) => {
  //           // TODO FIXME replace the red screen with something informative.
  //           console.error(error);
  //       });
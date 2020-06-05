import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  render(){
    return(
      <div className='App'>
          <Header name = {'ilman'}>
            <p>hallo ini websitenya ilman loh</p>
          </Header>
          <Content/>
      </div>
    )
  }
}
export default App
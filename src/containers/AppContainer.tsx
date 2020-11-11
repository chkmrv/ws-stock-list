import React from 'react'
import {Provider} from 'react-redux'
import { SnackbarProvider } from 'notistack'
import IndexRoute from '../routes/index'
import reduxStore from '../store/index'

class AppContainer extends React.Component {
    shouldComponentUpdate () {
        return false
    }

    render () {
        return (
              <Provider store={reduxStore}>
                  <SnackbarProvider maxSnack={3}>
                      <IndexRoute />
                  </SnackbarProvider>
              </Provider>
        )
    }
}

export default AppContainer

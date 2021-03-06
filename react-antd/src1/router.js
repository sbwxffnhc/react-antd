import React from 'react'
import {HashRouter , Route , Switch , BrowserRouter} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import SortTable from './pages/table/sortTable'
import MockTable from './pages/table/mockTable'
import HighTable from './pages/table/highTable'
import RowSelection from './pages/table/rowSelection'
import LoadingTable from './pages/table/loadingTable'
import City from './pages/city/index'
import Order from './pages/order/index'
import NoMatch from './pages/noMatch'

export default class IRouter extends React.Component {
    render() {
      return (
        <div>
          <BrowserRouter>
              {/*App组件的主要作用是将所有的子组件都放在一个根组件下，可以处理同级的路由 */}
            <App>
                <Route path="/login" component={Login} />
                {/*<Route path="/admin" component={Admin} />*/}
                <Route path="/" render={()=>
                    <Admin>
                        <Switch>
                            <Route path="/ui/buttons" component={Buttons} />
                            <Route path="/ui/modals" component={Modals} />
                            <Route path="/ui/loadings" component={Loadings} />
                            <Route path="/ui/notification" component={Notice} />
                            <Route path="/ui/messages" component={Messages} />
                            <Route path="/ui/tabs" component={Tabs} />
                            <Route path="/ui/gallery" component={Gallery} />
                            <Route path="/ui/carousel" component={Carousel} />
                            <Route path="/form/login" component={FormLogin} />
                            <Route path="/form/reg" component={FormRegister} />
                            <Route path="/table/basic" component={BasicTable} />
                            <Route path="/table/sort" component={SortTable} />
                            <Route path="/table/mock" component={MockTable} />
                            <Route path="/table/high" component={HighTable} />
                            <Route path="/table/row" component={RowSelection} />
                            <Route path="/table/loading" component={LoadingTable} />
                            <Route path="/city" component={City} />
                            <Route path="/order" component={Order} />
                            <Route component={NoMatch} />

                        </Switch>
                    </Admin>
                }/>
                <Route path="/order/detail" component={Login} />

            </App>
          </BrowserRouter>
        </div>
      );
    }
  }


  
import * as React from 'react';
import { Data } from '../../types'
import moment from 'moment'
import Header from 'components/Header'
import ListStocks from 'components/ListStocks'
import Search from 'components/Search'
import { withSnackbar } from 'notistack';
import './AppView.scss';

let ws = new WebSocket('ws://159.89.15.214:8080/')
const WS_CONNECTION_INTERVAL = 3000

const logPrefix = () => `push-client >> ${moment().format()}`

interface Props {
    mergeMessage: any,
    deleteCode: any,
    closeSnackbar: any,
    enqueueSnackbar: any,
    data: Data,
}

export type State = {
    loading: boolean,
    connected: boolean,
}

class AppView extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            connected: false,
        };
    }

    componentDidMount() {
        this.openWS()
    }

    // TODO move it to utils
    openWS = () => {
        ws.onmessage = (e: MessageEvent) => {
            const data: Data = JSON.parse(e.data);
            this.props.mergeMessage(data)
        }
        ws.onclose = (e) => {
            console.warn('onclose')
            console.debug(`${logPrefix()} >> WS closed >> `, e)
            this.props.enqueueSnackbar('WebSocket connection closed', {
                variant: 'error',
            });
            this.setState({connected: false})
            setTimeout(() => { ws = new WebSocket('ws://159.89.15.214:8080/') }, WS_CONNECTION_INTERVAL)
        }
        ws.onopen = () => {
            console.warn('connected')
            this.setState({connected: true})
        }
        ws.onerror = (e: any) => {
            console.warn('onerror')
            console.error(`${logPrefix()} >> WS error >> `, e)
            this.props.enqueueSnackbar('WebSocket connection error.', {
                variant: 'error',
            });
        }
    }

    validate = (value: string) =>  !this.props.data[value]

    setValue = (value: string) => {
        const data = {"subscribe": value}
        if (value !== null && this.validate(value)) {
            ws.send(JSON.stringify(data))
        } else {
            this.props.enqueueSnackbar('Already subscribed to this stock', {
                variant: 'error',
            });
        }
    }

    removeValue = (value: string) => {
        const data = {"unsubscribe": value}
        if (value !== '') {
            ws.send(JSON.stringify(data))
            setTimeout(() => {this.props.deleteCode(value)}, 100)
        }
    }

    render() {
        return (
            <div className="App">
                <Header connected={this.state.connected}/>
                <div className='viewport'>
                    <div className='layout'>
                        {!this.state.loading &&
                            <main>
                                <div className='row'>
                                    <div className='col-12 col-md-12'>
                                        <Search setValue={this.setValue}/>
                                        <ListStocks removeValue={this.removeValue} />
                                    </div>
                                </div>
                            </main>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withSnackbar(AppView);

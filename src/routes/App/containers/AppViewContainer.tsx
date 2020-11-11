import {connect} from 'react-redux'
import {mergeMessage, deleteCode} from '../../../store/global-reducers/data-reducer'
import AppView from '../AppView'

const mapDispatchToProps = {
    deleteCode,
    mergeMessage
}

const mapStateToProps = (state: any) => ({
    data: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(AppView)

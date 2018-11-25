import { connect } from 'react-redux'
import { testAction, changeFilterAction } from '../actions'
import OrderBook from '../components/OrderBook'

const mapStateToProps = state => {
  return {
    filterId: state.filterId
  }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilterAction(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderBook)
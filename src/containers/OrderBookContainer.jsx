import { connect } from 'react-redux'
import { testAction, changeFilterAction } from '../actions'
import OrderBook from '../components/OrderBook'

const mapStateToProps = state => {
  return {
    tests: state.tests,
    filterId: state.filterId
  }
}

const mapDispatchToProps = dispatch => ({
  test: id => dispatch(testAction(id)),
  changeFilter: filter => dispatch(changeFilterAction(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderBook)
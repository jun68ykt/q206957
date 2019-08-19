import Counter from '../components/Counter'
import { onIncrement, onDecrement } from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  count: state.counterReducer.count
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(onIncrement()),
  decrement: () => dispatch(onDecrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

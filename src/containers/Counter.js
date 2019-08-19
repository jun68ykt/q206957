import Counter from '../components/Counter'
import { onIncrement, onDecrement } from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  count: state.counterReducer[ownProps.name]
})

const mapDispatchToProps = (dispatch) => ({
  increment: name => dispatch(onIncrement(name)),
  decrement: name => dispatch(onDecrement(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

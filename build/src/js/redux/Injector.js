'use strict';
import { connect } from 'react-redux';
import Home from '../components/Home';

//takes states in the store and sets them as props
//add more props once we add more states
function mapStateToProps(state){
  return {
  }
}

//takes actions in the store and sets them as props
// function mapDispatchToProps(dispatch){
//   return bindActionCreators(actionCreators, dispatch);
// }

//injector takes app's place in the html, applies its features
//to App, and when rendered, displays App in the DOM
//now all states and actions can be accessed as props from app and all of app's children
const Injector = connect(mapStateToProps)(Home);

export default Injector;

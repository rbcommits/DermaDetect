'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import styles from '../../scss/styles.scss';
import Request from 'superagent';

var question_collection = [
    {'id':'0', 'question':'When do I take the red pill?', 'expand': [{'id':'0', 'answer':'Once when you wake up and once when you go to sleep.', 'answeredBy':'(123)456-7891','askCount':'3', 'expiration':'9/29/2017'}]},
    {'id':'1', 'question':'What color is my back medicine?', 'expand': [{'id':'1', 'answer':'Not answered', 'answeredBy':'(123)456-7891','askCount':'12', 'expiration':'9/20/2017'}]},
    {'id':'2', 'question':'How old is my dog?', 'expand': [{'id':'2', 'answer':'Toto is 3 years old.', 'answeredBy':'(123)456-7891','askCount':'5', 'expiration':'10/05/2017'}]}
];


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
      selected: [],
      toggle_bool: true,
      Users: ["Carl Fredricksen", "Ellie Fredricksen"],
      currentUser: "Carl Fredricksen"
    }
  }

  rerender = (rowID) =>
  {
      console.log("The parent renderer was summoned")
      question_collection[rowID].expand[0].answeredBy = this.state.currentUser;
      this.setState({toggle_bool: !this.state.toggle_bool})
  }

  componentWillMount() {
      /*
      // https://mcoeutils-stage.optum.com/mcoeutils/testcollections/v1.0?collection_name=EinsteinCollection
      fetch("localhost:3000" ,{
          method:'GET',
          headers:{
              'Content-Type' : 'application/json',
          },
      }).then((response) => response.json())
          .then((responseJson) =>
              console.log(responseJson.users[0])
          )
          .catch((error) => {
              console.error(error);
          });
    this.props.dispatch({type: 'HELLO'});
    */
  }

    isExpandableRow(row) {
        // if (row.id < 2) return true;
        // else return false;
        return true;
    }

    expandComponent = (row) => {
        return (
            <BSTable data={ row.expand } render_handle={ (rowID) => this.rerender(rowID)} />
        );
    }

    changeUser = (eventKey, event) =>
    {
        console.log("Changing User: ", eventKey)
        this.setState({currentUser: this.state.Users[eventKey]})
    }
    render() {

        const options = {
            expandRowBgColor: "rgb(150, 150, 170)",
            afterInsertRow: this.onAfterInsertRow
        };
        var selectRowProp = {
        mode: "checkbox",
        clickToSelect: true,
        clickToExpand: true,

        //bgColor: "rgb(220, 220, 220)"
        };
        var userButtons = []
        for(var i = 0; i < this.state.Users.length; i++)
            {
                userButtons.push(<MenuItem eventKey={i}>{this.state.Users[i]}</MenuItem>);
            }
        return (
            <div className="tableStyle">
                <div className="menuDrop">
                    <ButtonToolbar>
                        <DropdownButton bsSize="large" title={this.state.currentUser} id="dropdown-size-large" onSelect={this.changeUser}>
                            {userButtons}
                        </DropdownButton>
                    </ButtonToolbar>
                </div>
                <div className="tabe">
                    <BootstrapTable data={ question_collection }
                            options={ options }
                            striped
                            expandableRow={ this.isExpandableRow }
                            expandComponent={ this.expandComponent }
                            selectRow={selectRowProp}
                            search
                            hover={true}
                            insertRow
                            deleteRow
                            className="react-bs-table"
                            trClassName={this.rowClassFormat}
                            >
                        <TableHeaderColumn dataField='question' isKey>Questions</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        );
    }
    rowClassFormat(row, rowIndex) {
        if(row.expand)
            {
                var answer  = row.expand[0].answer.toLowerCase();
                if(answer == 'not answered' || answer == ' ' || answer == '')
                    {
                        return "table_row_background_not_answered";
                    }
                else
                    {   
                        return "table_row_background_answered";
                    }
            }
        else
            {
                return "table_row_background_not_answered";
            }
        //console.log(answer == 'no answer')
        //return answer == 'no answer' ? "table_row_background_answered" : "table_row_background_not_answered";
        //console.log("testing result: " + res.toString() );
        
        //return res == false ? "table_row_background_answered" : "table_row_background_not_answered";
    }

    onAfterInsertRow = (row) =>
    {
        question_collection.push({'id':question_collection.length, 'question':row.question, 'expand': [{'id':question_collection.length, 'answer':'not answered', 'answeredBy':' ','askCount':' ', 'expiration':' '}]})
        console.log(question_collection)
        this.setState({toggle_bool: !this.state.toggle_bool})
    }
}

const cellEditProp = {
    mode: 'click',
};

class BSTable extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      //renderParent: this.props.render_handle,
      toggle_bool: true
    }
  }
    render_parent = (row) => {
        //this.props.render_handle;
        this.props.render_handle(row.id)
    }
    render() {
        const cellEditProp = {
            mode: 'click',
            afterSaveCell: this.render_parent //this.onAfterSaveCell
        };
        if(this.props.data)
            {
                return (                 
                    <BootstrapTable data={ this.props.data } cellEdit={ cellEditProp }>
                        <TableHeaderColumn dataField='answer' editable={ { type: 'textarea'} } >Answer</TableHeaderColumn>
                        <TableHeaderColumn dataField='answeredBy' editable={ { type: 'textarea'} }>Answered by</TableHeaderColumn>
                        <TableHeaderColumn dataField='askCount' isKey={ true }>Ask Count</TableHeaderColumn>
                        <TableHeaderColumn dataField='expiration' editable={ { type: 'textarea'} }>Expiration</TableHeaderColumn>
                    </BootstrapTable>);
            }
        else
            {
                return (<p>?</p>);
            }
            
    }
}


function mapStateToProps(state) {
  return {
    t: state.test
  }
}

export default withRouter(connect(mapStateToProps)(Home));


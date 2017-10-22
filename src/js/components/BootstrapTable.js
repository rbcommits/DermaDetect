import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Button, Grid, Icon, Form} from 'semantic-ui-react';
import styles from '../../../scss/_imageComponent.scss';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class ColumnAlignTable extends React.Component {
    render() {
      return (
        <BootstrapTable data={ products }>
            <TableHeaderColumn dataField='id' isKey={ true } dataAlign='center'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' headerAlign='right'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price' headerAlign='center' dataAlign='right'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

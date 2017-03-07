import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Li from 'components/Li';
import Input from './Input';
import Button from './Button';
import {
  cancelEdit,
  deleteAccount,
  editAccount,
  handleAccountChange,
  saveAccount,
} from './ducks/actions';
import { makeGetEditedAccount } from './ducks/selectors';


export const DomainSpan = styled.span`
  margin-right: 10px;
`;
export const UserNameSpan = styled.span``;

export class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  editItem = () => {
    this.props.editAccount(this.props.fakeID, this.props.account);
  }

  cancelEdit = () => {
    this.props.cancelEdit(this.props.fakeID);
  }

  deleteItem = () => {
    this.props.deleteAccount(this.props.fakeID);
  }

  saveItem = () => {
    this.props.saveAccount(this.props.EditedAccount);
  }

  handleChange = (e) => {
    this.props.handleAccountChange(this.props.fakeID, e.target);
  }

  render() {
    let account = this.props.account;

    if(account.edit) {
      account = this.props.EditedAccount ? this.props.EditedAccount : account;
    }

    return (
      <Li>
        <Input type="checkbox" name="checkbox" />
        {
          account.edit
            ? (
              <span>
                <Input
                  type="text"
                  name="domain"
                  value={account.domain}
                  onChange={this.handleChange}
                />
                <Input
                  type="text"
                  name="username"
                  value={account.username}
                  onChange={this.handleChange}
                />
                <Button onClick={this.saveItem}>Save</Button>
                <Button warning onClick={this.cancelEdit}>Cancel</Button>
              </span>
            ) : (
              <span>
                <DomainSpan>{account.domain}</DomainSpan>
                <UserNameSpan>{account.username}</UserNameSpan>
                <Button onClick={this.editItem}>Edit</Button>
                <Button warning onClick={this.deleteItem}>Delete</Button>
              </span>
            )
        }
      </Li>
    );
  }
}

ListItem.propTypes = {
  EditedAccount: PropTypes.object,
  account: PropTypes.object,
  cancelEdit: PropTypes.func,
  deleteAccount: PropTypes.func,
  editAccount: PropTypes.func,
  fakeID: PropTypes.string,
  handleAccountChange: PropTypes.func,
  saveAccount: PropTypes.func,
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state, ownProps) => {
    const getEditedAccount = makeGetEditedAccount();
    return {
      EditedAccount: getEditedAccount(state, ownProps),
    };
  };

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    cancelEdit,
    deleteAccount,
    editAccount,
    handleAccountChange,
    saveAccount,
  }, dispatch);
};

export default connect(makeMapStateToProps, mapDispatchToProps)(ListItem);

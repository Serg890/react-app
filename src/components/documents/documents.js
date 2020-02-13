import React, { Component } from "react";
import "./documents.css";
import { withRouter } from "react-router-dom";
import { ReactComponent as Thash } from "../../assets/image/Group 6.svg";

import { connect } from "react-redux";
import {
  successData,
  errorData,
  editData,
  removeItem,
  removeCheked
} from "../../redux/actions";
import ModalCreate from "../Create-modal/create-modal";
import ModalEdit from "../Edit-modal/edit-modal";
import TableRow from "../Table-row/table-row";

const urlRequst = "https://api.npoint.io/e250d570f35973b9e6a1";

class Documents extends Component {
  state = {
    index: null,
    isOpen: false,
    isOpenEdit: false,
    item: null,
    ind: null,
    checkArr: []
  };

  componentDidMount() {
    const { successData, errorData } = this.props;

    this.getData("GET", urlRequst)
      .then(data => {
        data && successData([...data.folders, ...data.files]);
      })
      .catch(error => {
        errorData(error);
      });
  }

  getData(method, url) {
    return fetch(url).then(response => {
      return response.json();
    });
  }

  onInputEdit = target => {
    const { item } = this.state;
    const newState = { ...item };
    newState.name = target.value;
    this.setState({ item: newState });
  };

  handleShow = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleShowEdit = () => {
    const { isOpenEdit } = this.state;
    this.setState({ isOpenEdit: !isOpenEdit });
  };

  handleModalWindow = boolean => {
    this.setState({ isOpen: boolean });
  };

  handleModalWindowEdit = (obj, index) => {
    this.setState({ item: obj, ind: index, isOpenEdit: true });
  };

  handleSaveEdit = () => {
    const { editData } = this.props;
    const { item, ind } = this.state;

    this.handleShowEdit();
    const newItem = { ...item };
    newItem[ind] = item;
    this.setState({ item: newItem });
    editData(item);
  };

  deleteItem = item => {
    const { removeItem } = this.props;
    removeItem(item);
  };

  checkElements = index => {
    const { checkArr } = this.state;

    if (checkArr.indexOf(index) >= 0) {
      const newArray = checkArr.filter(el => el !== index);
      this.setState({ checkArr: newArray });
    } else {
      this.setState({ checkArr: [...checkArr, index] });
    }
  };

  deleteCheked = () => {
    const { removeCheked } = this.props;
    const { checkArr } = this.state;

    if (removeCheked(checkArr)) {
      this.setState({ checkArr: [] });
    }
  };

  render() {
    const { rData } = this.props;
    const { isOpen, isOpenEdit, item, checkArr } = this.state;

    return (
      <>
        <ModalEdit
          isOpenEdit={isOpenEdit}
          handleCloseEdit={this.handleCloseEdit}
          handleModalWindowEdit={this.handleModalWindowEdit}
          handleShowEdit={this.handleShowEdit}
          onInputEdit={this.onInputEdit}
          handleSaveEdit={this.handleSaveEdit}
          item={item}
        ></ModalEdit>
        <ModalCreate
          isOpen={isOpen}
          handleModalWindow={this.handleModalWindow}
        ></ModalCreate>
        <div className="documentsBox">
          <h4 className="titleDoc">My Documents</h4>
          <div className="boxTable">
            <div className="tableBlockLeft">
              <table className="table1">
                <thead>
                  <tr className="thead">
                    <th>
                    </th>
                    <th className="colDoc">Document</th>
                    <th>Last Edited</th>
                    <th>Signed</th>
                    <th>Permission</th>
                    <th>Size</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rData &&
                    rData.map((item, index) => (
                      <TableRow
                        index={index}
                        key={item._id}
                        item={item}
                        isOpenEdit={isOpenEdit}
                        handleModalWindowEdit={this.handleModalWindowEdit}
                        showModal={this.showModal}
                        deleteItem={this.deleteItem}
                        checkElements={this.checkElements}
                      />
                    ))}
                </tbody>
              </table>
            </div>
            <div className="tableBlockRigth">
              <div className="chooseFile">
                <input type="file" className="inputFile" />
                <span className="spText">Select a File to Pre</span>
              </div>
              <button
                className="btn btnCreate"
                onClick={() => this.handleShow()}
              >
                Create
              </button>
           <div className="deleteBoox">   <button
                className={`${
                  checkArr.length >= 2 ? "onDel" : "offDel"
                } delete`}
                onClick={() => this.deleteCheked()}
              >
                <Thash />
                <span className="spDelete">Delete all items</span>
              </button></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  const { rData, error, rItem } = state;

  return {
    rData,
    error,
    rItem
  };
};

const mapDispatchToProps = {
  successData,
  errorData,
  editData,
  removeItem,
  removeCheked
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Documents));

import React, { Component } from "react";
import "./table-row.css";
import { ReactComponent as FilesTypes } from "../../assets/image/Group 22.svg";
import { ReactComponent as FolderTypes } from "../../assets/image/Group 100.svg";
import { ReactComponent as Options } from "../../assets/image/Group 44.svg";
import { ReactComponent as Dots } from "../../assets/image/Group 97.svg";
import { ReactComponent as Busket } from "../../assets/image/Group 33.svg";
import { ReactComponent as Edit } from "../../assets/image/Group 98.svg";
import * as moment from "moment";

class TableRow extends Component {
  state = {
    item: null,
    isOpenSmall: false,
    check: false
  };

  showModal = item => {
    const { isOpenSmall } = this.state;
    this.setState({ item: item, isOpenSmall: !isOpenSmall });
  };

  render() {
    const { isOpenSmall, check } = this.state;
    const {
      item,
      index,
      handleModalWindowEdit,
      deleteItem,
      checkElements
    } = this.props;

    return (
      <tr className="tbody" key={index}>
        <td>
          <label className="container">
            <input
              id={item._id}
              type="checkbox"
              checked={check}
              onChange={event =>
                this.setState({ check: event.target.checked }, () =>
                  checkElements(index, check)
                )
              }
            />
            <span className="checkmark"></span>
          </label>
        </td>
        <td className="document">
          {item.type === "file" ? <FilesTypes /> : <FolderTypes />}
          {item.name}
        </td>
        <td className="lastEdited">
          {moment(item.createdAt).format("DD/MM/YYYY")}
        </td>
        <td className="signed">-</td>
        <td className="permission">Only you</td>
        <td className="size">{item.size ? item.size : "250"}KB</td>
        <td>
          <div className="options">
            <button
              className={`${isOpenSmall ? "optionActive" : ""} optionButton `}
              type="button"
              onClick={() => this.showModal(item)}
            >
              {isOpenSmall ? <Dots /> : <Options />}
            </button>

            {isOpenSmall && (
              <div className="modalka">
                <div className="modalkaBack"></div>
                <div className="modalContent">
                  <button
                    className="modalDelete"
                    onClick={() =>
                      this.setState(
                        {
                          isOpenSmall: false
                        },
                        () => deleteItem(item)
                      )
                    }
                  >
                    <Busket className="iconModal" />
                    Delete
                  </button>
                  <button
                    className="modalEdit"
                    onClick={() =>
                      this.setState(
                        {
                          isOpenSmall: false
                        },
                        () => handleModalWindowEdit(item, index)
                      )
                    }
                  >
                    <Edit className="iconModal" />
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        </td>
      </tr>
    );
  }
}

export default TableRow;

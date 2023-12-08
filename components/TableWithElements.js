const TableWithElements = (props) => {
  return props.map((element) => {
    <div className="TableElement">
      <div className="fonForElement"></div>
      <div className="elementWithLinkForPorfolio">
        <div className="imageFromElement">
          <img src={element.image} alt="elementTitle" />
        </div>
        <div className="textWithTitle">
          <span>{element.title}</span>
        </div>
      </div>
    </div>
  })
}

export default TableWithElements

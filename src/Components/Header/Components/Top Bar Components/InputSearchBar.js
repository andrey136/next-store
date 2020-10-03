import React from "react";


class InputSearchBar extends React.Component {


  render() {

    return (
        <div className="input-search-bar">
          <input type="text" name="w" id="sli_search_1" className="SearchBox"
                 placeholder="Search product or brand" required="required" spellCheck="false"
                 autoComplete="off"/>
          <input type="text" className='InputButton' readOnly='readonly'/>
        </div>
    );
  }
}

export default InputSearchBar;
import React from "react";


class InputSearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      inputText: '',
    }
  }

  changeInput(val){
    this.setState({inputText: val})
  }


  render() {

    return (
        <div className="input-search-bar">
          <input type="text" name="w" id="sli_search_1" className="SearchBox"
                 placeholder="Search product or brand" required="required" spellCheck="false"
                 value={this.state.value}
                 autoComplete="off" onChange={(e) => this.changeInput(e.target.value)}/>
          <input type="text" className='InputButton' readOnly='readonly'/>
        </div>
    );
  }
}

export default InputSearchBar;
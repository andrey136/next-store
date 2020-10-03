import React from "react";


class HeaderTopBar extends React.Component {

  quick_links = ['My Account', 'Quick', 'Shop', 'Help', '8 800 2009824'];

  render() {

    return (
      <section className="HeaderTopBar">
        <a href="" className="HeaderLogo">next</a>
        <div className="HeaderTopBarInput">
          <input type="text" name="w" id="sli_search_1" className="SearchBox"
                 placeholder="Search product or brand" required="required" spellCheck="false"
                 autoComplete="off"/>
          <input type="text" className='InputButton' readOnly='readonly'/>
          <div className="QuickLinks">
            <ul>
              {this.quick_links.map((el,ind) => ind == this.quick_links.length ? <li><a href="">{el}</a></li> : <li id="top-header-phone-number"><a href="">{el}</a></li>)}
            </ul>
          </div>
          <div className="BagSummary MiniBagNonSecure">
            <a data-link-id="01-07" data-link-name="Shopping Bag"
               rel="nofollow">
              <div className="Icon" onClick={() => this.props.change_shopping_bag_number()}>
                <span>{this.props.state.shopping_bag_number}</span>
              </div>
              <div className="BagTextClipping  nextDisplayNone">
                <div id="bagtext" className="BagSummaryText">0.00 руб</div>
              </div>
            </a>
          </div>
          <div className="Checkout">
            <a className="nxbtn primary disabled" data-link-id="01-08" data-link-name="Checkout"
               rel="nofollow">Checkout</a>
          </div>
          <div className={this.props.state.flag_active ? "flagContainer active" : "flagContainer"}
               onClick={() => this.props.change_flag_active_status()}>
            <div className="HeaderFlag flag-Russia"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeaderTopBar;
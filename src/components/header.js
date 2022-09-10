import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeIsShowingHelp } from "../redux/markdownSlice";

function Header() {
    const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp);

    const dispatch = useDispatch();
    return (
        <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div
                onClick={() => dispatch(changeIsShowingHelp(!isShowingHelp))}
                className={`help-button ${isShowingHelp && 'active'}`}>
                <i className="fa fa-question" aria-hidden="true"></i>
            </div>
        </header>
    );
}

export default React.memo(Header);

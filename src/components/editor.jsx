import React, { Component } from 'react';
import { marked } from 'marked';
class Editor extends Component {
    constructor(props){
        super(props)
        this.state = { markdown: this.props.finalText };
    }
    handleInputChange = (event) =>{
        this.setState({ markdown: event.target.value });
    }
    renderMarkdown = ()=> {
        const html = marked(this.state.markdown);
        return { __html: html };
    }
    
    render() { 
        return <React.Fragment>
            <div className="markdown-editor">
        <div className="row">
          <div className="col-md-6">
            <textarea
              className="form-control"
              rows="15"
              value={this.state.markdown}
              onChange={this.handleInputChange}
              placeholder="在这里输入Markdown文本"
            />
          </div>
          <div className="col-md-6">
            <div className="markdown-output" dangerouslySetInnerHTML={this.renderMarkdown()} />
          </div>
        </div>
      </div>
        </React.Fragment>;
    }
}
 
export default Editor;
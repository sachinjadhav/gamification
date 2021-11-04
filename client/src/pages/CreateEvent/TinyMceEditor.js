import React, { Component } from "react";
import CKEditor from "react-ckeditor-component";

class TinyMceEditor extends Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);

    this.state = {
      content: "",
    };
  }

  updateContent = (newContent) => {
    this.setState({
      content: newContent,
    });
  };

  onChange = (evt) => {
    var newContent = evt.editor.getData();
    this.setState({
      content: evt.editor.getData(),
    });
    console.log(this.state.content);
  };

  onBlur = (evt) => {
    // console.log("onBlur event called with event info: ", evt);
  };

  afterPaste = (evt) => {
    // console.log("afterPaste event called with event info: ", evt);
  };

  render() {
    let config = {
      toolbarGroups: [
        { name: "document", groups: ["mode", "document", "doctools"] },
        {
          name: "editing",
          groups: ["find", "selection", "spellchecker", "editing"],
        },
        { name: "forms", groups: ["forms"] },
        { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
        {
          name: "paragraph",
          groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
        },

        { name: "links", groups: ["links"] },
        { name: "insert", groups: ["insert"] },
        { name: "styles", groups: ["styles"] },
        { name: "colors", groups: ["colors"] },
        { name: "tools", groups: ["tools"] },
        "/",
        { name: "clipboard", groups: ["clipboard", "undo"] },
        { name: "others", groups: ["others"] },
        { name: "about", groups: ["about"] },
      ],
      removeButtons:
        "Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,SelectAll,Scayt,Replace,Form,Checkbox,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,BidiLtr,BidiRtl,Language,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,ShowBlocks,About,CopyFormatting,Undo,Redo",
      fontSize_sizes: "16/16px;24/24px;48/48px;",
      font_names:
        "Arial/Arial, Helvetica, sans-serif;" +
        "Times New Roman/Times New Roman, Times, serif;" +
        "Verdana",
      allowedContent: true,
      // disableNativeSpellChecker: false
      // skin: "moono",
      // plugins:
      //   "dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,popup,filetools,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc"
    };
    return (
      <CKEditor
        data="<p><p>Type description here !</p></p>"
        config={config}
        content={this.state.content}
        events={{
          blur: this.onBlur,
          afterPaste: this.afterPaste,
          change: this.onChange,
        }}
      />
    );
  }
}
export default TinyMceEditor;

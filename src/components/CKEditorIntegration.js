import React from "react";
import Editor  from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function CKEditorIntegration ({
  name,
  intialData,
  onChange,
  onFocus,
  style
}) {
    let decoupledEditor = null;
    return (
      <div style={{...style, border: '1px solid black'}}>
        <CKEditor
          editor={Editor}
          name={name}
          data={intialData}
          onReady={(editor) => {
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );
              decoupledEditor = editor;
          }}
          onError={(error, { willEditorRestart }) => {
           
            if (willEditorRestart) {
              decoupledEditor.ui.view.toolbar.element.remove();
            }
          }}
          onChange={(event, editor) => onChange(editor.getData())}
          onFocus={onFocus}
        />
      </div>
    );
  }
  export default CKEditorIntegration
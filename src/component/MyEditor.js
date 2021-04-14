import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';
const handleModelChange = (model)=>{
  console.log(model);
}

function MyEditor() {
  return(
      <FroalaEditorComponent tag='textarea' onModelChange={handleModelChange}/>
  )
}

export default MyEditor;

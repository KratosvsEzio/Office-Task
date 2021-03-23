import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '../../../assets/ckeditor5//build/ckeditor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  constructor() { }
  public Editor = ClassicEditor;
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontfamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'highlight',
        '|',
        'bold',
        'italic',
        'underline',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'indent',
        'alinment',
        'outdent',
        '|',
        'imageUpload',
        'imageInsert',
        'blockQuote',
        'insertTable',
        'mathType',
        'chemType',
        'specialCharacters',
        'undo',
        'redo',
      ]
    },
    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    simpleUpload: {
      uploadUrl: 'http://localhost:4000/api/profileImage/hello',
      // withCredentials: true,
      // headers: {
      //   // 'X-CSRF-TOKEN': 'CSFR-Token',
      //   //  Authorization: 'Bearer <JSON Web Token>',
      // }
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
  };

  ngOnInit(): void {
  }

}

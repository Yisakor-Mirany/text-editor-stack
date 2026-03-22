const TextEditor = require('./textEditor');

const editor = new TextEditor();

editor.add('H');
console.log(editor.getText());

editor.add('e');
console.log(editor.getText());

editor.add('l');
console.log(editor.getText());

editor.delete();
console.log(editor.getText());

editor.undo();
console.log(editor.getText());

editor.undo();
console.log(editor.getText());
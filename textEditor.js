class TextEditor {
    constructor() {
        this.text = "";
        this.stack = [];
    }

    add(char) {
        this.text += char;
        this.stack.push({type: "add", char});
    }

    delete() {
  if (this.text.length === 0) return;

  const removed = this.text[this.text.length - 1];
  this.text = this.text.slice(0, -1);
  this.stack.push({ type: "delete", char: removed });
}

    undo() {
        if(this.stack.length === 0) return;

        const lastOp = this.stack.pop();

        if (lastOp.type === "add") {
            this.text = this.text.slice(0, -1);
        }else if (lastOp.type === "delete") {
            this.text += lastOp.char;
        }
    }
    getText() {
        return this.text;
    }
}

module.exports = TextEditor;
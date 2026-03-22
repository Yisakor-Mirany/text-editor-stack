const TextEditor = require('./textEditor');

describe('Text Editor Stack Tests', () => {

    test('add characters and undo', () => {
        const editor = new TextEditor();
        editor.add('H');
        editor.add('e');
        editor.add('l');
        expect(editor.getText()).toBe('Hel');

        editor.undo();
        expect(editor.getText()).toBe('He');

        editor.undo();
        expect(editor.getText()).toBe('H');

        editor.undo();
        expect(editor.getText()).toBe('');
    });

    test('delete characters and undo', () => {
        const editor = new TextEditor();
        editor.add('H');
        editor.add('e');
        editor.add('l');
        editor.delete();
        expect(editor.getText()).toBe('He');

        editor.undo();
        expect(editor.getText()).toBe('Hel');
    });

    test('undo with no operations', () => {
        const editor = new TextEditor();
        expect(() => editor.undo()).not.toThrow();
    });
}); 
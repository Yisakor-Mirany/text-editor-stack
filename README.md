# Text Editor with Stack

## Objective
Implement a simple text editor with undo functionality using a stack.

## Approach
- Use a stack to track operations
- Add: push operation onto stack
- Delete: remove last character and store operation
- Undo: reverse last operation

## Features
- Add characters
- Delete last character
- Undo previous operations

## Time Complexity
O(1) for add, delete, and undo

## Space Complexity
O(n)

## Test Cases

### Normal Cases
- Adding characters
- Deleting characters
- Undo operations

### Edge Cases
- Undo with no operations
- Delete on empty text
- Multiple consecutive undo operations

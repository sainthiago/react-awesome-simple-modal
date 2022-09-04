![Licence](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/npm/v/react-awesome-simple-modal.svg?style=flat)](https://www.npmjs.com/package/react-awesome-simple-modal)
[![Downloads](https://img.shields.io/npm/dt/react-awesome-simple-modal.svg)](https://www.npmjs.com/package/react-awesome-simple-modal)

## React Awesome Simple Modal

Simple library with Modal component for React.

## Installation

`npm i react-awesome-simple-modal`

## Live Demo

https://codesandbox.io/s/react-awseome-simple-modal-demo-ozq4hp

## Example

```javascript
import { useState } from "react";
import { ReactSimpleModal } from "react-awesome-simple-modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{ border: "1px solid black", padding: "4px" }}
        onClick={() => setIsOpen(true)}
      >
        Click Me!
      </button>
      <ReactSimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
          }}
        >
          <h1>Hello!</h1>
        </div>
      </ReactSimpleModal>
    </>
  );
}

```

## API

| Property  | Type        | Description                          |
| :-------- | :---------- | :----------------------------------- |
| open      | boolean     | Trigger to open/close modal.         |
| onClose   | () => void  | Handle modal closing action.         |
| closeIcon | JSX.Element | Close icon for the modal (optional). |

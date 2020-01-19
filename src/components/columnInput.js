import React, { useState } from "react";

const columnInput = ({ submit, blur, value, change }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          autoFocus
          onBlur={blur}
          onChange={change}
          value={value}
        />
      </form>
    </div>
  );
};

export default columnInput;

import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const change = (argum) => {
  document.getElementById("preview").style.backgroundColor =
    argum.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 p-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10 ">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex  justify-center items-center flex-wrap gap-20">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={change}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              inline
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

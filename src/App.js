import './App.css'
import { useState } from "react";
import CKEditorIntegration from "./components/CKEditorIntegration";
function App () {
const [data, setData] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
  return (
    <div
    >
      <CKEditorIntegration
        name='CKEditor Integration'
        intialData='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        onChange={(data) => setData(data)}
        onFocus={(editor) => {}}
        style={{borderRadius: '10px', margin: '100px'}}
      />
	  <div style={{borderRadius: '10px', margin: '0 100px'}}>
		{data}
	  </div>
    </div>
  );
}

export default App
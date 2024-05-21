
const ReactDoc = () => {
return (
    <div className="row mb-2">
    <h5 className="themeFontColor text-center">
      React Document<br/>
      <span className="subNote">(Includes Documentation on APIs and Database)</span>
    </h5>
    <h6 className="themeFontColor text-center">
      Click <a href="/">here</a> to return back to the home page.<br/>
    </h6>
    <iframe className="frameClass" id="pdf-js-viewer" src="https://www.codefest.com/cfpdfviewer/web/viewer.html?file=../pdf/ReactDoc.pdf" title="webviewer"></iframe>

  </div>
);
};


export default ReactDoc;
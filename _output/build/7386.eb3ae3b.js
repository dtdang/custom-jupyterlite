"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7386,4811],{37386:(e,t,l)=>{l.r(t),l.d(t,{CellBarExtension:()=>h,CellToolbarTracker:()=>d});var o=l(13271),n=l(50218),i=l(81734),a=l(58646);const s="jp-cell-toolbar",r="jp-toolbar-overlap";class d{constructor(e,t){this._isDisposed=!1,this._panel=e,this._previousActiveCell=this._panel.content.activeCell,this._toolbar=t,this._onToolbarChanged(),this._toolbar.changed.connect(this._onToolbarChanged,this),e.revealed.then((()=>this._onActiveCellChanged(e.content))),e.content.activeCellChanged.connect(this._onActiveCellChanged,this)}_onActiveCellChanged(e){this._previousActiveCell&&this._removeToolbar(this._previousActiveCell.model);const t=e.activeCell;t&&(this._addToolbar(t.model),this._previousActiveCell=t,this._updateCellForToolbarOverlap(t))}get isDisposed(){return this._isDisposed}dispose(){var e;if(this.isDisposed)return;this._isDisposed=!0,this._toolbar.changed.disconnect(this._onToolbarChanged,this);const t=null===(e=this._panel)||void 0===e?void 0:e.context.model.cells;t&&(0,i.each)(t.iter(),(e=>this._removeToolbar(e))),this._panel=null,a.Signal.clearData(this)}_addToolbar(e){const t=this._getCell(e);if(t){const e=new o.Toolbar;e.addClass("jp-cell-menu"),(0,i.toArray)(this._toolbar).forEach((({name:t,widget:l})=>{e.addItem(t,l)})),e.addClass(s),t.layout.insertWidget(0,e),t.displayChanged.connect(this._resizeEventCallback,this),t.model.contentChanged.connect(this._changedEventCallback,this)}}_getCell(e){var t;return null===(t=this._panel)||void 0===t?void 0:t.content.widgets.find((t=>t.model===e))}_findToolbarWidgets(e){return e.layout.widgets.filter((e=>e.hasClass(s)))||[]}_removeToolbar(e){const t=this._getCell(e);t&&(this._findToolbarWidgets(t).forEach((e=>e.dispose())),t.displayChanged.disconnect(this._resizeEventCallback,this),t.model.contentChanged.disconnect(this._changedEventCallback,this))}_onToolbarChanged(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;t&&(this._removeToolbar(t.model),this._addToolbar(t.model))}_changedEventCallback(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;null!=t&&this._updateCellForToolbarOverlap(t)}_resizeEventCallback(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;null!=t&&this._updateCellForToolbarOverlap(t)}_updateCellForToolbarOverlap(e){const t=e.node;t.classList.remove(r),this._cellToolbarOverlapsContents(e)&&t.classList.add(r)}_cellToolbarOverlapsContents(e){const t=e.model.type,l=this._cellEditorWidgetLeft(e),o=this._cellEditorWidgetRight(e),n=this._cellToolbarLeft(e);return null!==n&&((l+o)/2>n||("markdown"===t&&e.rendered?this._markdownOverlapsToolbar(e):this._codeOverlapsToolbar(e)))}_markdownOverlapsToolbar(e){const t=e.inputArea.renderedInput.node.firstElementChild;if(null===t)return!1;const l=t.style.maxWidth;t.style.maxWidth="max-content";const o=t.getBoundingClientRect().right;t.style.maxWidth=l;const n=this._cellToolbarLeft(e);return null!==n&&o>n}_codeOverlapsToolbar(e){const t=e.editorWidget;if(e.editor.lineCount<1)return!1;const l=t.node.getElementsByClassName("CodeMirror-line");if(l.length<1)return!1;const o=l[0].children[0].getBoundingClientRect().right,n=this._cellToolbarLeft(e);return null!==n&&o>n}_cellEditorWidgetLeft(e){return e.editorWidget.node.getBoundingClientRect().left}_cellEditorWidgetRight(e){return e.editorWidget.node.getBoundingClientRect().right}_cellToolbarLeft(e){const t=this._findToolbarWidgets(e);return t.length<1?null:t[0].node.getBoundingClientRect().left}}const c=[{command:"notebook:duplicate-below",name:"duplicate-cell"},{command:"notebook:move-cell-up",name:"move-cell-up"},{command:"notebook:move-cell-down",name:"move-cell-down"},{command:"notebook:insert-cell-above",name:"insert-cell-above"},{command:"notebook:insert-cell-below",name:"insert-cell-below"},{command:"notebook:delete-cell",name:"delete-cell"}];class h{constructor(e,t){this._commands=e,this._toolbarFactory=null!=t?t:this.defaultToolbarFactory}get defaultToolbarFactory(){const e=(0,o.createDefaultFactory)(this._commands);return t=>new n.ObservableList({values:c.map((l=>({name:l.name,widget:e(h.FACTORY_NAME,t,l)})))})}createNew(e){return new d(e,this._toolbarFactory(e))}}h.FACTORY_NAME="Cell"}}]);
//# sourceMappingURL=7386.eb3ae3b.js.map
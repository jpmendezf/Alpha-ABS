/////////////////////////////////////////////////////////////////////////////
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Manager_N.js
//╒═════════════════════════════════════════════════════════════════════════╛
/////////////////////////////////////////////////////////////////////////////
(function(){
    //?[NEW]
    SceneManager.isCurrentSceneIsMap = function () {
        return (this._scene != null && this._scene instanceof Scene_Map);
    };
})();
// ■ END Scene_Manager_N.js
//---------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////

function getMessageHtml(message){
    //var f = '宋体 12px arial';
    //var o = $('<div>' + message + '</div>')
    //    .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
    //    .appendTo($('body'));
    //var w = o.width();
    //var h = o.height();
    //o.remove();
    
    return message;
    
}
function atomAlert(message,onClose){
    mini.showMessageBox({
        showHeader: false,
        buttons: ["ok"],
        iconCls: "mini-messagebox-warning",
        message: getMessageHtml(message),
        showModal: true,
        callback: onClose
    });
}
function atomSuccAlert(message,onClose){
    //A0F497
    mini.showMessageBox({
        showHeader: false,
        buttons: ["ok"],
        iconCls: "mini-messagebox-info",
        message: getMessageHtml(message),
        showModal: true,
        callback: onClose
    });
}
function atomErrorAlert(message,onClose){
    //#F47D7D
    mini.showMessageBox({
        showHeader: false,
        buttons: ["ok"],
        iconCls: "mini-messagebox-error",
        message: getMessageHtml(message),
        showModal: true,
        callback: onClose
    });
}

function atomConfirm(message,onClose){
    mini.showMessageBox({
        showHeader: false,
        buttons: ["ok", "cancel"],
        iconCls: "mini-messagebox-question",
        message: getMessageHtml(message),
        showModal: true,
        callback: onClose
    });
}

function atomConfirmYesNoCancle(message,onClose){
    mini.showMessageBox({
        showHeader: false,
        buttons: ["yes", "no", "cancel"],
        iconCls: "mini-messagebox-question",
        message: getMessageHtml(message),
        showModal: true,
        callback: onClose
    });
}

function closePopWindow(action) {
    if (window.CloseOwnerWindow)
        return window.CloseOwnerWindow(action);
    else
        window.close();
}

function closeOk() {
    closePopWindow("ok");
}

function closeCancel() {
    closePopWindow("cancel");
}

//新增tab页面
function openTab(menuId, menuName, url){
    if(window.openUrl){
        window.openUrl(menuId,menuName,url);
    }else if(window.parent && window.parent.openUrl) {
        window.parent.openUrl(menuId, menuName, url);
    }else if(window.parent.parent &&window.parent.parent.openUrl) {
        window.parent.openUrl(menuId, menuName, url);
    }
}
//新增tab页面,传入关闭事件
function openTabWithEvent(menuId, menuName, url,closeEvent){
    if(window.openUrl){
        window.openUrlWithEvent(menuId,menuName,url,closeEvent);
    }else if(window.parent && window.parent.openUrl) {
        window.parent.openUrlWithEvent(menuId, menuName, url,closeEvent);
    }else if(window.parent.parent &&window.parent.parent.openUrl) {
        window.parent.openUrlWithEvent(menuId, menuName, url,closeEvent);
    }
}

//关闭当前tab页面
function closeCurrentTab(){
    if(window.closeTab){
        window.closeCurTab();
    }else if(window.parent && window.parent.closeCurTab) {
        window.parent.closeCurTab();
    }else if(window.parent.parent &&window.parent.parent.closeCurTab) {
        window.parent.closeCurTab();
    }
}

//根据控件级联查询
function comboboxCascade(sCmb,cCmb){
    if(sCmb!=null && cCmb!=null){
        sCmb.on("valuechanged",function(e){
            eval(cCmb.id+"Reload('"+ e.sender.getValue()+"')");
        });
        eval(cCmb.id+"Reload('"+ sCmb.getValue()+"')");
    }
}

//根据id级联查询
function comboboxCascadeById(sCmbId,cCmbId){
    if(sCmbId!=null && cCmbId!=null){
        var cmb=mini.get(sCmbId);
        if(cmb){
            cmb.on("valuechanged",function(e){
                eval("if("+cCmbId+"Reload){"+cCmbId+"Reload('"+ e.sender.getValue()+"');}");
            });
            eval("if("+cCmbId+"Reload){"+cCmbId+"Reload('"+ cmb.getValue()+"');}");
        }

    }
}

function urlencode (str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
        replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}



function setLabelModel(form) {
    var fields = form.getFields();
    for (var i = 0, l = fields.length; i < l; i++) {
        var c = fields[i];
        if (c.setReadOnly) c.setReadOnly(true);     //只读
        if (c.setIsValid) c.setIsValid(true);      //去除错误提示
        if (c.addCls) c.addCls("asLabel");          //增加asLabel外观
    }
}
function setInputModel(form) {
    var fields = form.getFields();
    for (var i = 0, l = fields.length; i < l; i++) {
        var c = fields[i];
        if (c.setReadOnly) c.setReadOnly(false);
        if (c.removeCls) c.removeCls("asLabel");
    }
    mini.repaint(document.body);
}


function openWindowWithPost(url,name,key,value)
{
    var newWindow = window.open(url, name);
    if (!newWindow)
        return false;

    var html = "";
    html += "<html><head></head><body><form id='formid' method='post' action='" + url + "' accept-charset='UTF-8'>";
    if (key && value)
    {
        html += "<input type='hidden' name='" + key + "' value='" + value + "'/>";
    }

    html += "</form><script type='text/javascript'>document.getElementById('formid').submit();";
    html += "<\/script></body></html>".toString().replace(/^.+?\*|\\(?=\/)|\*.+?$/gi, "");
    newWindow.document.write(html);

    return newWindow;
}
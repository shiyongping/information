/**
 * blue样式引用js
 * @author liypu
 * @date 2018/8/3
 */

var Menu_Id = 1;

var Menu = function (element, options) {
    this.element = $(element);
    this.options = $.extend(true, {}, this.options, options);
    this.init();
}

Menu.prototype = {

    options: {
        data: null,    
        itemclick: null
    },

    loadData: function (data) {
        this.options.data = data || [];
        this.refresh();
    },

    refresh: function () {
        this._render();
    },

    init: function () {
        var me = this,
            opt = me.options,
            el = me.element;

        //el.addClass('menu');

        me.loadData(opt.data);

        el.on('click', '.menu-title', function (event) {
            var el = $(event.currentTarget);

            var li = el.parent();

            var item = me.getItemByEvent(event);

            //alert(item);
            //            me.toggleItem(item);

            li.toggleClass('open');

            if (opt.itemclick) opt.itemclick.call(me, item);

        });

    },

    _render: function () {
        var data = this.options.data || [];
        var html = this._renderItems(data, null);
        this.element.html(html);        
    },

    _renderItems: function (items, parent) {
        var s = '<ul class="' + (parent ? "menu-submenu" : "menu") + '">';
        for (var i = 0, l = items.length; i < l; i++) {
            var item = items[i];
            s += this._renderItem(item);
        }
        s += '</ul>';
        return s;
    },
    //左侧菜单栏
    _renderItem: function (item) {

        var me = this,
            hasChildren = item.subMenuList && item.subMenuList.length > 0;
        //左侧菜单栏是否自动展开
        var s = '<li class="menu-item ' + (hasChildren ? 'has-children' : '') + '">';
        //var s = '<li class="open ' + (hasChildren ? 'has-children' : '') + '">';        //class="menu-item" open, expanded?

        s += '<a class="menu-title" data-id="' + item.menuId + '" ';
        //        if (item.href) {
        //            s += 'href="' + item.href + '" target="' + (item.hrefTarget || '') + '"';
        //        }
        s += '>';

        s += '<i class="menu-icon fa ' + item.icon + '"></i>';
        s += '<span class="menu-text">' + item.menuTitle + '</span>';

        if (hasChildren) {
            s += '<span class="menu-arrow fa"></span>';
        }

        s += '</a>';

        if (hasChildren) {
            s += me._renderItems(item.subMenuList, item);
        }

        s += '</li>';
        return s;
    },

    getItemByEvent: function (event) {
        var el = $(event.target).closest('.menu-title');
        var id = el.attr("data-id");
        return this.getItemById(id);
    },

    getItemById: function (id) {
        var me = this,
            idHash = me._idHash;

        if (!idHash) {
            idHash = me._idHash = {};
            function each(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    var item = items[i];
                    if (item.subMenuList) each(item.subMenuList);
                    idHash[item.menuId] = item;
                }
            }
            each(me.options.data);
        }

        return me._idHash[id];
    }

};





var MenuTip = function (menu) {
    var template = '<div class="tooltip right menutip in"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
    var tip = $(template).appendTo(document.body);
    tip.hide();

    menu.element.on("mouseenter", ".menu-title", function (event) {
        if (!$("body").hasClass("compact")) return;

        var jq = $(event.currentTarget);
        var offset = jq.offset(),
            width = jq.outerWidth(),
            height = jq.outerHeight(),
            text = jq.text();

        tip.find(".tooltip-inner").html(text);
        tip.show();

        var tipWidth = tip.outerWidth(),
            tipHeight = tip.outerHeight();

        tip.css({ top: offset.top + height / 2 - tipHeight / 2, left: offset.left + width });

    });
    menu.element.on("mouseleave", ".menu-title", function (event) {
        tip.hide();
    });

}



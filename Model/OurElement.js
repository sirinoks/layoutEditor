var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OurElement = /** @class */ (function () {
    function OurElement(id, row, column, position) {
        this.elementStyle = null;
        this.data = new ElementData(id, row, column, position);
    }
    return OurElement;
}());
var ElementType;
(function (ElementType) {
    ElementType[ElementType["Logo"] = 0] = "Logo";
    ElementType[ElementType["Background"] = 1] = "Background";
    ElementType[ElementType["TextLayout"] = 2] = "TextLayout";
    ElementType[ElementType["DesignSurface"] = 3] = "DesignSurface";
    ElementType[ElementType["AllText"] = 4] = "AllText";
    ElementType[ElementType["Preview"] = 5] = "Preview";
    ElementType[ElementType["TexEdit"] = 6] = "TexEdit";
})(ElementType || (ElementType = {}));
var ElementData = /** @class */ (function () {
    function ElementData(id, row, column, position) {
        if (row === void 0) { row = 1; }
        if (column === void 0) { column = 1; }
        if (position === void 0) { position = 0; }
        this.id = id;
        this.row = row;
        this.column = column;
        this.position = position;
        this.name = ElementType[id - 1];
        this.html = "<div class='el' data-id='" + id + "'>" + ElementType[id - 1] + "</div>";
    }
    ElementData.prototype.GetPositionDataToSend = function () {
        delete this.html;
        delete this.name;
        return this;
    };
    return ElementData;
}());
var Style = /** @class */ (function () {
    function Style(collapsed, backgroundColor, fontColor, borderColor, itemCount, itemSize, columnWidth) {
        if (collapsed === void 0) { collapsed = false; }
        if (backgroundColor === void 0) { backgroundColor = "white"; }
        if (fontColor === void 0) { fontColor = "black"; }
        if (borderColor === void 0) { borderColor = "red"; }
        if (itemCount === void 0) { itemCount = 3; }
        if (itemSize === void 0) { itemSize = 100; }
        if (columnWidth === void 0) { columnWidth = 300; }
        this.collapsed = collapsed;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
        this.borderColor = borderColor;
        this.itemCount = itemCount;
        this.itemSize = itemSize;
        this.columnWidth = columnWidth;
    }
    return Style;
}());
var ElementTheme = /** @class */ (function (_super) {
    __extends(ElementTheme, _super);
    function ElementTheme(collapsed, backgroundColor, fontColor, borderColor, itemCount, itemSize, columnWidth, name) {
        if (collapsed === void 0) { collapsed = false; }
        if (backgroundColor === void 0) { backgroundColor = "white"; }
        if (fontColor === void 0) { fontColor = "black"; }
        if (borderColor === void 0) { borderColor = "red"; }
        if (itemCount === void 0) { itemCount = 3; }
        if (itemSize === void 0) { itemSize = 100; }
        if (columnWidth === void 0) { columnWidth = 300; }
        if (name === void 0) { name = "default"; }
        var _this = _super.call(this, collapsed, backgroundColor, fontColor, borderColor, itemCount, itemSize, columnWidth) || this;
        _this.name = name;
        return _this;
    }
    return ElementTheme;
}(Style));

class OurElement {
    elementStyle: Style = null;
    data: ElementData;
    constructor (id, row, column, position) {
        this.data = new ElementData(id, row, column, position);
    }
}

enum ElementType {
    Logo,
    Background,
    TextLayout,
    DesignSurface,
    AllText,
    Preview,
    TexEdit
}

class ElementData {
    id: ElementType;
    row: number;
    column: number;
    position: number;
  
    name: string;
    protected html: string; 

    constructor(id: ElementType, row=1, column=1, position=0) {
        this.id = id;
        this.row = row;
        this.column = column;
        this.position = position;
        this.name = ElementType[id-1];
        this.html = "<div class='el' data-id='" +id +"'>" +ElementType[id-1] +"</div>";
    }

    GetPositionDataToSend(){
        delete  this.html;
        delete this.name;
        return this;
    }
}

class Style {
    collapsed: boolean;
    backgroundColor: string;
    fontColor: string;
    borderColor: string;
    itemCount: number;
    itemSize: number;
    columnWidth: number;


    constructor(collapsed: boolean = false, backgroundColor: string = "white", fontColor: string = "black", borderColor: string = "red", itemCount: number = 3, itemSize: number = 100, columnWidth: number = 300) {
        this.collapsed = collapsed;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
        this.borderColor = borderColor;
        this.itemCount = itemCount;
        this.itemSize = itemSize;
        this.columnWidth = columnWidth;
    }
}

class ElementTheme extends Style{
    name: string ;
    constructor(collapsed: boolean = false, backgroundColor: string = "white", fontColor: string = "black", borderColor: string = "red", itemCount: number = 3, itemSize: number = 100, columnWidth: number = 300, name = "default") {
        super(collapsed, backgroundColor, fontColor, borderColor, itemCount, itemSize, columnWidth);
        this.name = name;
    }
}
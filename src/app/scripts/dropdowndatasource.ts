import { ItemModel } from '@syncfusion/ej2-splitbuttons';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

export class DropDownDataSources {

    public fileMenuItems: ItemModel[] = this.getFileMenuItems();
    public editMenuItems: ItemModel[] = this.getEditMenuItems();
    public viewMenuItems: ItemModel[] = this.getViewMenuItems();
    public arrangeMenuItems: MenuItemModel[] = this.getArrangeMenuItems();
    public windowMenuItems: ItemModel[] = this.getWindowMenuItems();
    public helpMenuItems: ItemModel[] = this.getHelpMenuItems();

    public getFileMenuItems(): ItemModel[] {
        let menuItems: ItemModel[] = [
            { text: 'New' }, { text: 'Open' }, { separator: true },
            { text: 'Save', iconCss: 'sf-icon-Save' }, { text: 'Save As' },
            // { text: 'Rename' }, { separator: true },
            { text: 'Export', iconCss: 'sf-icon-Export' }, { separator: true },
            { text: 'Print', iconCss: 'sf-icon-Print' }
        ];
        return menuItems;
    }

    public getEditMenuItems(): ItemModel[] {
        let menuItems: ItemModel[] = [
            { text: 'Undo', iconCss: 'sf-icon-Undo' }, { text: 'Redo', iconCss: 'sf-icon-Redo' }, { separator: true },
            { text: 'Cut', iconCss: 'sf-icon-Cut' }, { text: 'Copy', iconCss: 'sf-icon-Copy' },
            { text: 'Paste', iconCss: 'sf-icon-Paste' }, { text: 'Delete', iconCss: 'sf-icon-Delete' }, { separator: true },
            { text: 'Duplicate' }, { separator: true },
            // { text: 'Edit Data' }, 
            { text: 'Edit Tooltip' }, { separator: true },
            { text: 'Select All' },
        ];
        return menuItems;
    }

    public getViewMenuItems(): ItemModel[] {
        let menuItems: ItemModel[] = [
            { text: 'Zoom In', iconCss: 'sf-icon-ZoomIn' }, { text: 'Zoom Out', iconCss: 'sf-icon-ZoomOut' }, { separator: true },
            { text: 'Fit To Screen' }, { separator: true },
            { text: 'Show Rulers' }, { text: 'Show Guides', iconCss: 'sf-icon-Selection' },
            { text: 'Show Grid', iconCss: 'sf-icon-Selection' }, { separator: true },
            { text: 'Snap To Grid' }
        ];
        return menuItems;
    }

    public getArrangeMenuItems(): MenuItemModel[] {
        let menuItems1: MenuItemModel[] = [
            { text: 'Send To Back', iconCss: 'sf-icon-Sendback' }, { text: 'Bring To Front', iconCss: 'sf-icon-BringFront' },
            { text: 'Send Backward', iconCss: 'sf-icon-SendBackward' }, { text: 'Bring Forward', iconCss: 'sf-icon-BringForward' },
            { separator: true },
            {
                text: 'Align Objects', items: [
                    { text: 'Left', iconCss: 'sf-icon-AlignLeft' }, { text: 'Right', iconCss: 'sf-icon-AlignRight' },
                    { text: 'Center', iconCss: 'sf-icon-AlignHorizontally' }, { text: 'Top', iconCss: 'sf-icon-AilgnTop' },
                    { text: 'Bottom', iconCss: 'sf-icon-AlignBottom' }, { text: 'Middle', iconCss: 'sf-icon-AlignVertically' }
                ]
            },
            {
                text: 'Distribute Objects', items: [
                    { text: 'Horizontally', iconCss: 'sf-icon-DistributeHorizontal' },
                    { text: 'Vertically', iconCss: 'sf-icon-DistributeVertical' }
                ]
            },
            {
                text: 'Match Size', items: [
                    { text: 'Both Width and Height' }, { text: 'Width' }, { text: 'Height' }
                ]
            }, { separator: true },
            { text: 'Lock' }, { text: 'Unlock' }, { separator: true },
            { text: 'Group' }, { text: 'Ungroup' }
        ];
        return menuItems1;
    }

    public getWindowMenuItems(): ItemModel[] {
        let menuItems: ItemModel[] = [
            { text: 'Show Toolbar', iconCss: 'sf-icon-Selection' }, { text: 'Show Stencil', iconCss: 'sf-icon-Selection' },
            { text: 'Show Properties', iconCss: 'sf-icon-Selection' }, { text: 'Show Layers' },
            { text: 'Show Pager', iconCss: 'sf-icon-Selection' }, { text: 'Themes' }
        ];
        return menuItems;
    }

    public getHelpMenuItems(): ItemModel[] {
        let menuItems: ItemModel[] = [
            { text: 'Keyboard Shortcuts' }, { text: 'Documentation' }
        ];
        return menuItems;
    }

    public fileFormats: { [key: string]: Object }[] = [
        { text: 'JPG', value: 'JPG' }, { text: 'PNG', value: 'PNG' },
        { text: 'BMP', value: 'BMP' }, { text: 'SVG', value: 'SVG' }
    ];

    public diagramRegions: { [key: string]: Object }[] = [
        { text: 'Content', value: 'Content' }, { text: 'PageSettings', value: 'PageSettings' }
    ];

    public importFormat: { [key: string]: Object }[] = [
        { text: 'CSV', value: 'CSV' }, { text: 'XML', value: 'XML' }, { text: 'JSON', value: 'JSON' }
    ];

    public borderStyles: { [key: string]: Object }[] = [
        { text: 'None', value: 'None', className: 'ddl-svg-style ddl_linestyle_none' },
        { text: '1,2', value: '1,2', className: 'ddl-svg-style ddl_linestyle_one_two' },
        { text: '3,3', value: '3,3', className: 'ddl-svg-style ddl_linestyle_three_three' },
        { text: '5,3', value: '5,3', className: 'ddl-svg-style ddl_linestyle_five_three' },
        { text: '4,4,1', value: '4,4,1', className: 'ddl-svg-style ddl_linestyle_four_four_one' }
    ];

    public fontFamilyList: { [key: string]: Object }[] = [
        { text: 'Arial', value: 'Arial' },
        { text: 'Aharoni', value: 'Aharoni' },
        { text: 'Bell MT', value: 'Bell MT' },
        { text: 'Fantasy', value: 'Fantasy' },
        { text: 'Times New Roman', value: 'Times New Roman' },
        { text: 'Segoe UI', value: 'Segoe UI' },
        { text: 'Verdana', value: 'Verdana' },
    ];

    public decoratorList: { [key: string]: Object }[] = [
        { text: 'None', value: 'None' },
        { text: 'Arrow', value: 'Arrow' },
        { text: 'Diamond', value: 'Diamond' },
        { text: 'OpenArrow', value: 'OpenArrow' },
        { text: 'Circle', value: 'Circle' },
        { text: 'Square', value: 'Square' },
        { text: 'Fletch', value: 'Fletch' },
        { text: 'OpenFetch', value: 'OpenFetch' },
        { text: 'IndentedArrow', value: 'IndentedArrow' },
        { text: 'OutdentedArrow', value: 'OutdentedArrow' },
        { text: 'DoubleArrow', value: 'DoubleArrow' }
    ];

    public lineTypes: { [key: string]: Object }[] = [
        { text: 'Straight', value: 'Straight' }, { text: 'Orthogonal', value: 'Orthogonal' },
        { text: 'Bezier', value: 'Bezier' }
    ];

    public gradientDirections: { [key: string]: Object }[] = [
        { text: 'South', value: 'South' }, { text: 'North', value: 'North' },
        { text: 'East', value: 'East' }, { text: 'West', value: 'West' }
    ];

    public drawShapesList: ItemModel[] = [
        { iconCss: 'sf-icon-Square', text: 'Rectangle' },
        { iconCss: 'sf-icon-Ellipse', text: 'Ellipse' },
        { iconCss: 'sf-icon-Triangle', text: 'Polygon' }
    ];

    public drawConnectorsList: ItemModel[] = [
        { iconCss: 'sf-icon-StraightLine', text: 'Straight Line' },
        { iconCss: 'sf-icon-ConnectorMode', text: 'Orthogonal Line' },
        { iconCss: 'sf-icon-BeizerLine', text: 'Bezier' }
    ];

    public orderCommandsList: ItemModel[] = [
        { iconCss: 'sf-icon-Sendback', text: 'Send To Back' },
        { iconCss: 'sf-icon-BringFront', text: 'Bring To Front' },
        { iconCss: 'sf-icon-SendBackward', text: 'Send Backward' },
        { iconCss: 'sf-icon-BringForward', text: 'Bring Forward' },
    ];

    public mindmapLevels: { [key: string]: Object }[] = [
        { text: 'Root', value: 'Level0' }, { text: 'Level1', value: 'Level1' },
        { text: 'Level2', value: 'Level2' }, { text: 'Level3', value: 'Level3' },
        { text: 'Level4', value: 'Level4' }, { text: 'Level5', value: 'Level5' },
    ];

    public zoomMenuItems: ItemModel[] = [
        { text: '400%' }, { text: '300%' }, { text: '200%' }, { text: '150%' },
        { text: '100%' }, { text: '75%' }, { text: '50%' }, { text: '25%' }, { separator: true },
        { text: 'Fit To Screen' }
        // { separator: true },
        // { text: 'Custom' },
    ];

    public paperList: { [key: string]: Object }[] = [
        { text: 'Letter (8.5 in x 11 in)', value: 'Letter' }, { text: 'Legal (8.5 in x 14 in)', value: 'Legal' },
        { text: 'Tabloid (279 mm x 432 mm)', value: 'Tabloid' }, { text: 'A3 (297 mm x 420 mm)', value: 'A3' },
        { text: 'A4 (210 mm x 297 mm)', value: 'A4' }, { text: 'A5 (148 mm x 210 mm)', value: 'A5' },
        { text: 'A6 (105 mm x 148 mm)', value: 'A6' }, { text: 'Custom', value: 'Custom' },
    ];

}
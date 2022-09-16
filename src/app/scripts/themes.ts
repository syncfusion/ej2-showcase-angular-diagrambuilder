import { SelectorViewModel } from './selector';
import { MindMapUtilityMethods } from './mindmap';
import { Diagram, Node, Connector, FlowShapes, BasicShapes, FlowShapeModel, BasicShapeModel, DiagramConstraints, Segments } from '@syncfusion/ej2-diagrams';

/**
 *  Theme handler
 */

export class DiagramTheme {

    private nodeOldStyles: { [key: string]: string }[] = [];
    private connectorOldStyles: { [key: string]: string }[] = [];
    private isThemeApplied: boolean = false;
    public selectedItem: SelectorViewModel;

    constructor(selectedItem: SelectorViewModel) {
        this.selectedItem = selectedItem;
    }

    public colorList: { [key: string]: Object }[] = [
        {
            themeName: 'theme1', themeStyle: [
                { fillColor: '#F0F0F0', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#E3E3E3', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType2' },
                { fillColor: '#ffffff', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#D2D2D2', borderColor: '#D2D2D2', textColor: '#000000', type: 'shapeType4' }
            ], lineColor: '#6A696A', lineType: 'Orthogonal'
        },
        {
            themeName: 'theme2', themeStyle: [
                { fillColor: '#F0F0F0', borderColor: '#ABABAB', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#6A696A', borderColor: '#6A696A', textColor: '#FFFFFF', type: 'shapeType2' },
                { fillColor: '#FFFFFF', borderColor: '#ABABAB', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#161415', borderColor: '#161415', textColor: '#FFFFFF', type: 'shapeType4' }
            ], lineColor: '#6A696A', lineType: 'Orthogonal'
        },
        {
            themeName: 'theme3', themeStyle: [
                { fillColor: '#D8EBEC', borderColor: '#77B4B7', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#F4E6CE', borderColor: '#D8B983', textColor: '#000000', type: 'shapeType2' },
                { fillColor: '#F3CBDB', borderColor: '#F4B1CC', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#528AD8', borderColor: '#174F9C', textColor: '#000000', type: 'shapeType4' }
            ], lineColor: '#18519D', lineType: 'Orthogonal'
        },
        {
            themeName: 'theme4', themeStyle: [
                { fillColor: '#A9DDD8', borderColor: '#00AE9D', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#F4E0BB', borderColor: '#FBB63D', textColor: '#000000', type: 'shapeType2' },
                { fillColor: '#B5DAEA', borderColor: '#29A4DA', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#D69BC1', borderColor: '#C360A0', textColor: '#000000', type: 'shapeType4' }
            ], lineColor: '#C86DA7', lineType: 'Bezier'
        },
        {
            themeName: 'theme5', themeStyle: [
                { fillColor: '#BFEAE5', borderColor: '#96C7BF', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#F8ECC4', borderColor: '#C3B58B', textColor: '#000000', type: 'shapeType2' },
                { fillColor: '#E8E2FF', borderColor: '#CFC4FB', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#F7E2E5', borderColor: '#D4A8AF', textColor: '#000000', type: 'shapeType4' }
            ], lineColor: '#4D4D4D', lineType: 'Orthogonal'
        },
        {
            themeName: 'theme6', themeStyle: [
                { fillColor: '#FFE9E1', borderColor: '#F6D2C4', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#DFEEE4', borderColor: '#ACD9BB', textColor: '#000000', type: 'shapeType2' },
                { fillColor: '#FFF8F6', borderColor: '#FFE7E0', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#B2ABA9', borderColor: '#161415', textColor: '#000000', type: 'shapeType4' }
            ], lineColor: '#161415', lineType: 'Orthogonal'
        },
        {
            themeName: 'theme7', themeStyle: [
                { fillColor: '#9FE3DD', borderColor: '#49C7BC', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#2EA499', borderColor: '#50BFB5', textColor: '#FFFFFF', type: 'shapeType2' },
                { fillColor: '#E6F5F7', borderColor: '#9FE3DD', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#13615A', borderColor: '#13615A', textColor: '#FFFFFF', type: 'shapeType4' }
            ], lineColor: '#13615A', lineType: 'Bezier'
        },
        {
            themeName: 'theme8', themeStyle: [
                { fillColor: '#F5F2D7', borderColor: '#E4D772', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#FCEBFF', borderColor: '#F8CAFF', textColor: '#000000', type: 'shapeType2' },
                { fillColor: '#EAE4F2', borderColor: '#D3BDF1', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#551660', borderColor: '#551660', textColor: '#FFFFFF', type: 'shapeType4' }
            ], lineColor: '#551660', lineType: 'Bezier'
        },
        {
            themeName: 'theme9', themeStyle: [
                { fillColor: '#2CBAA7', borderColor: '#FFFFFF', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#EFC608', borderColor: '#FFFFFF', textColor: '#000000', type: 'shapeType2' },
                { fillColor: '#27BBD6', borderColor: '#FFFFFF', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#2B333C', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType4' }
            ], lineColor: '#2B333C', lineType: 'Orthogonal'
        },
        {
            themeName: 'theme10', themeStyle: [
                { fillColor: '#8DAF5B', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType1' },
                { fillColor: '#E6B15A', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType2' },
                { fillColor: '#2683A8', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType3' },
                { fillColor: '#E64759', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType4' }
            ], lineColor: '#E64759', lineType: 'Bezier'
        },
        {
            themeName: 'theme11', themeStyle: [
                { fillColor: '#46B38E', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType1' },
                { fillColor: '#42A5F5', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType2' },
                { fillColor: '#9F86FF', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType3' },
                { fillColor: '#E64759', borderColor: '#FFFFFF', textColor: '#FFFFFF', type: 'shapeType4' }
            ], lineColor: '#696969', lineType: 'Orthogonal'
        },
        {
            themeName: 'theme12', themeStyle: [
                { fillColor: '#78BFFE', borderColor: '#5AAAFF', textColor: '#000000', type: 'shapeType1' },
                { fillColor: '#288CF7', borderColor: '#288CF7', textColor: '#FFFFFF', type: 'shapeType2' },
                { fillColor: '#BCDEF8', borderColor: '#8ECAFF', textColor: '#000000', type: 'shapeType3' },
                { fillColor: '#054F96', borderColor: '#054F96', textColor: '#FFFFFF', type: 'shapeType4' }
            ], lineColor: '#054F96', lineType: 'Bezier'
        }
    ];

    public getShapeType(shapeType: FlowShapes | BasicShapes): string {
        if (shapeType === 'Ellipse' || shapeType === 'Terminator') {
            return 'shapeType2';
        } else if (shapeType === 'Plus' || shapeType === 'Star' || shapeType === 'Diamond' || shapeType === 'Decision') {
            return 'shapeType4';
        } else if (shapeType === 'Hexagon' || shapeType === 'Parallelogram' || shapeType === 'Trapezoid' || shapeType === 'Cylinder') {
            return 'shapeType3';
        } else if (shapeType === 'DirectData' || shapeType === 'SequentialData' || shapeType === 'Sort' || shapeType === 'MultiDocument' ||
            shapeType === 'Collate' || shapeType === 'Or' || shapeType === 'InternalStorage' || shapeType === 'SequentialAccessStorage' ||
            shapeType === 'Annotation2' || shapeType === 'ManualInput' || shapeType === 'StoredData') {
            return 'shapeType3';
        } else {
            return 'shapeType1';
        }
    }

    public getShapeStyle(shapeType: string, themeStyle: { [key: string]: string }[]): { [key: string]: string } {
        for (let i: number = 0; i < themeStyle.length; i++) {
            if (themeStyle[i].type === shapeType) {
                return themeStyle[i];
            }
        }
        return null;
    }

    public getThemeStyle(themeName: string): { [key: string]: Object } {
        for (let i: number = 0; i < this.colorList.length; i++) {
            if (this.colorList[i].themeName === themeName) {
                return this.colorList[i];
            }
        }
        return null;
    }

    public themeMouseOver(args: MouseEvent): void {
        let target: HTMLDivElement = args.target as HTMLDivElement;
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (target.className === 'db-theme-style-div') {
            let themeName: string = target.children[0].className.replace('db-theme-style ', '');
            this.applyStyle(themeName);
            this.isThemeApplied = true;
        }
    }

    public applyOldStyle(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        diagram.historyManager.startGroupAction();
        for (let i: number = 0; i < this.nodeOldStyles.length; i++) {
            let themeStyle: { [key: string]: string } = this.nodeOldStyles[i];
            let node: Node = MindMapUtilityMethods.getNode(diagram.nodes, this.nodeOldStyles[i].name.toString());
            node.style.fill = themeStyle.fill.toString();
            node.style.strokeColor = themeStyle.border.toString();
            if (node.annotations.length > 0) {
                node.annotations[0].style.color = themeStyle.fontColor;
            }
            diagram.dataBind();
        }
        for (let i: number = 0; i < this.connectorOldStyles.length; i++) {
            let themeStyle: { [key: string]: string } = this.connectorOldStyles[i];
            let connector: Connector = MindMapUtilityMethods.getConnector(diagram.connectors, this.connectorOldStyles[i].name.toString());
            connector.style.strokeColor = themeStyle.border.toString();
            connector.sourceDecorator.style.fill = connector.sourceDecorator.style.strokeColor = themeStyle.border.toString();
            connector.targetDecorator.style.fill = connector.targetDecorator.style.strokeColor = themeStyle.border.toString();
            connector.type = themeStyle.type as Segments;
            diagram.dataBind();
        }
        this.isThemeApplied = false;
        diagram.historyManager.endGroupAction();
    }

    public themeClick(args: MouseEvent): void {
        let target: HTMLDivElement = args.target as HTMLDivElement;
        if (target.classList.contains('db-theme-style-div')) {
            let themeName: string = target.children[0].className.replace('db-theme-style ', '');
            this.applyStyle(themeName);
            this.setNodeOldStyles();
            for (let i: number = 0; i < this.colorList.length; i++) {
                let element: HTMLDivElement = document.getElementsByClassName(String(this.colorList[i].themeName))[0].parentNode as HTMLDivElement;
                if (element.classList.contains('db-theme-focus-style-div')) {
                    element.classList.remove('db-theme-focus-style-div');
                }
                if (this.colorList[i].themeName === themeName) {
                    element.classList.add('db-theme-focus-style-div');
                }
            }
        }
    }

    public setNodeOldStyles(): void {
        this.nodeOldStyles = []; this.connectorOldStyles = [];
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (diagram.nodes.length > 0) {
            let nodes: Node[] = diagram.nodes as Node[];
            for (let i: number = 0; i < nodes.length; i++) {
                let node: Node = nodes[i];
                let style: { [key: string]: string } = { name: node.id, 'fill': node.style.fill, 'border': node.style.strokeColor };
                if (node.annotations.length > 0) {
                    style.fontColor = node.annotations[0].style.color;
                }
                this.nodeOldStyles.push(style);
            }
        }
        if (diagram.connectors.length > 0) {
            let connectors: Connector[] = diagram.connectors as Connector[];
            for (let i: number = 0; i < connectors.length; i++) {
                let connector: Connector = connectors[i];
                this.connectorOldStyles.push({ name: connector.id, 'border': connector.style.strokeColor, 'type': connector.type });
            }
        }
    }

    public applyStyle(themeName: string): void {
        let themeType: { [key: string]: Object } = this.getThemeStyle(themeName);
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        diagram.historyManager.startGroupAction();
        if (diagram.nodes.length > 0) {
            let nodes: Node[] = diagram.nodes as Node[];
            for (let i: number = 0; i < nodes.length; i++) {
                let node: Node = nodes[i];
                if (node.shape) {
                    let shapeStyle: { [key: string]: string } = null;
                    if (node.shape.type === 'Flow' || node.shape.type === 'Basic') {
                        let shapeModel: FlowShapeModel | BasicShapeModel = node.shape as (FlowShapeModel | BasicShapeModel);
                        shapeStyle = this.getShapeStyle(this.getShapeType(shapeModel.shape), themeType.themeStyle as { [key: string]: string }[]);
                        if (shapeStyle) {
                            node.style.fill = shapeStyle.fillColor;
                            node.style.strokeColor = shapeStyle.borderColor;
                            if (node.annotations.length > 0) {
                                node.annotations[0].style.color = shapeStyle.textColor;
                            }
                            diagram.dataBind();
                        }
                    }
                }
            }
        }
        if (diagram.connectors.length > 0 && themeType) {
            let connectors: Connector[] = diagram.connectors as Connector[];
            for (let i: number = 0; i < connectors.length; i++) {
                let connector: Connector = connectors[i];
                connector.style.strokeColor = themeType.lineColor.toString();
                connector.sourceDecorator.style.fill = connector.sourceDecorator.style.strokeColor = themeType.lineColor.toString();
                connector.targetDecorator.style.fill = connector.targetDecorator.style.strokeColor = themeType.lineColor.toString();
                connector.type = themeType.lineType as Segments;
            }
            diagram.dataBind();
        }
        diagram.historyManager.endGroupAction();
    }
}
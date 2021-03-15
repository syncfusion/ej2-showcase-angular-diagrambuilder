import {
    Diagram, CommandManagerModel, Keys, NodeModel, ConnectorModel, Node,
    Rect, Connector, DiagramTools, SelectorConstraints, SnapConstraints,
    NodeConstraints, ShapeAnnotationModel, PointModel, KeyModifiers, UserHandleModel, TreeInfo, SubTreeOrientation,
    SubTreeAlignments, DiagramConstraints, cloneObject, ConnectorConstraints,
    ICollectionChangeEventArgs, INodeInfo, IDropEventArgs
} from '@syncfusion/ej2-diagrams';
import { SelectorViewModel } from './selector';
import { DataManager } from '@syncfusion/ej2-data';
import { Dialog } from '@syncfusion/ej2-angular-popups';
import { MindMapUtilityMethods } from './mindmap';
import { CustomProperties } from './customproperties';
import { CommonKeyboardCommands } from './commoncommands';

export class OrgChartData {
    private selectedItem: SelectorViewModel;

    constructor(selectedItem1: SelectorViewModel) {
        this.selectedItem = selectedItem1;
    }

    public getCommandSettings(): CommandManagerModel {

        let commandManager: CommandManagerModel = {
            commands: [{
                gesture: { key: Keys.Tab }, canExecute: this.canExecute,
                execute: this.addChild.bind(this), name: 'SubChild'
            },
            {
                gesture: { key: Keys.Enter }, canExecute: this.canExecute,
                execute: this.addRightChild.bind(this), name: 'SameLevelSubChild'
            },
            {
                gesture: { key: Keys.Tab, keyModifiers: KeyModifiers.Shift }, canExecute: this.canExecute,
                execute: this.changeChildParent.bind(this), name: 'sibilingChildTop'
            },
            {
                gesture: { key: Keys.Delete }, canExecute: this.canExecute,
                execute: this.removeChild.bind(this), name: 'deleteChid'
            },
            {
                gesture: { key: Keys.Down }, canExecute: this.canExecute,
                execute: this.navigateBottomChild.bind(this), name: 'navigationDown'
            },
            {
                gesture: { key: Keys.Up }, canExecute: this.canExecute,
                execute: this.navigateTopChild.bind(this), name: 'navigationUp'
            },
            {
                gesture: { key: Keys.Left }, canExecute: this.canExecute,
                execute: this.navigateLeftChild.bind(this), name: 'navigationLeft'
            },
            {
                gesture: { key: Keys.Right }, canExecute: this.canExecute,
                execute: this.navigateRightChild.bind(this), name: 'navigationRight'
            },
            {
                gesture: { key: Keys.F2 }, canExecute: this.canExecute,
                execute: this.editChild.bind(this), name: 'editChild'
            },
            {
                gesture: { key: Keys.F1 }, canExecute: this.canExecute,
                execute: OrgChartUtilityMethods.onHideNodeClick.bind(OrgChartUtilityMethods), name: 'showShortCut'
            },
            {
                gesture: { key: Keys.Z, keyModifiers: KeyModifiers.Control }, canExecute: this.canExecute,
                execute: this.undoOrgChart.bind(this), name: 'undo'
            },
            {
                gesture: { key: Keys.Y, keyModifiers: KeyModifiers.Control }, canExecute: this.canExecute,
                execute: this.redoOrgChart.bind(this), name: 'redo'
            },
            {
                gesture: { key: Keys.Space }, canExecute: this.canExecute,
                execute: this.spaceOrgChart.bind(this), name: 'expandcollapse'
            },
            {
                gesture: { key: Keys.X, keyModifiers: KeyModifiers.Control }, canExecute: this.canExecute,
                execute: this.cutOrgChart.bind(this), name: 'cutObject'
            },
            {
                gesture: { key: Keys.C, keyModifiers: KeyModifiers.Control }, canExecute: this.canExecute,
                execute: this.copyOrgChart.bind(this), name: 'copyObject'
            },
            {
                gesture: { key: Keys.V, keyModifiers: KeyModifiers.Control }, canExecute: this.canExecute,
                execute: this.pasteOrgChart.bind(this), name: 'pasteObject'
            }
            ]
        };
        commandManager.commands = CommonKeyboardCommands.addCommonCommands(commandManager.commands);
        return commandManager;
    }
    private spaceOrgChart(): void {
        // let diagram: Diagram = this.selectedItem.selectedDiagram;
        // let selectedNode: Node = diagram.selectedItems.nodes[0] as Node;
        // selectedNode.isExpanded = !selectedNode.isExpanded;
        // diagram.dataBind();
    }
    private undoOrgChart(): void {
        this.selectedItem.utilityMethods.undoRedoLayout(true, this.selectedItem);
    }

    private redoOrgChart(): void {
        this.selectedItem.utilityMethods.undoRedoLayout(false, this.selectedItem);
    }

    private cutOrgChart(): void {
        this.selectedItem.utilityMethods.cutLayout(this.selectedItem);
    }
    public copyOrgChart(): void {
        this.selectedItem.utilityMethods.copyLayout(this.selectedItem);
    }
    public pasteOrgChart(): void {
        this.selectedItem.utilityMethods.pasteLayout(this.selectedItem);
    }

    private addChild(args: { [key: string]: Object }): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        OrgChartUtilityMethods.addChild(diagram.selectedItems.nodes[0].id);
    }

    private editChild(args: { [key: string]: Object }): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        OrgChartUtilityMethods.showCustomProperty();
    }

    private addRightChild(args: { [key: string]: Object }): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (diagram.selectedItems.nodes.length > 0) {
            let node: Node = diagram.selectedItems.nodes[0] as Node;
            if (node.inEdges.length > 0) {
                let connector1: Connector = this.getConnector(diagram.connectors, node.inEdges[0]);
                OrgChartUtilityMethods.addChild(connector1.sourceID);
            }
        }
    }

    public changeChildParent(): void {
        this.selectedItem.preventPropertyChange = true;
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        let selectedNode: Node = diagram.selectedItems.nodes[0] as Node;
        if (selectedNode.inEdges.length > 0) {
            let connector1: Connector = this.getConnector(diagram.connectors, selectedNode.inEdges[0]);
            let parentNode: Node = this.getNode(diagram.nodes, connector1.sourceID);
            if (parentNode.inEdges.length > 0) {
                let connector2: Connector = this.getConnector(diagram.connectors, parentNode.inEdges[0]);
                connector1.sourceID = connector2.sourceID;
                diagram.dataBind();
            } else {
                diagram.remove(connector1);
            }
            diagram.doLayout();
            diagram.select([selectedNode]);
        }
        this.selectedItem.preventPropertyChange = false;
        this.selectedItem.isModified = true;
    }

    private removeChild(args: { [key: string]: Object }): void {
        this.selectedItem.utilityMethods.removeChild(this.selectedItem);
    }

    private navigateLeftChild(): void {
        this.navigateChild('left');
    }

    private navigateRightChild(): void {
        this.navigateChild('right');
    }

    private navigateTopChild(): void {
        this.navigateChild('up');
    }

    private navigateBottomChild(): void {
        this.navigateChild('down');
    }

    private navigateChild(direction: string): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        let node: Node = null;
        if (direction === 'left' || direction === 'right') {
            let sameLevelNodes: Node[] = this.getSameLevelNodes();
            let index: number = sameLevelNodes.indexOf(diagram.selectedItems.nodes[0] as Node);
            node = direction === 'left' ? sameLevelNodes[index - 1] : sameLevelNodes[index + 1];
        } else {
            node = this.getMinDistanceNode(diagram, direction);
        }
        if (node) {
            diagram.clearSelection();
            diagram.select([node]);
            diagram.bringIntoView(node.wrapper.bounds);
        }
    }

    private getMinDistanceNode(diagram: Diagram, direction: string): Node {
        let node: Node = diagram.selectedItems.nodes[0] as Node;
        let selectedNodeBounds: Rect = node.wrapper.bounds;
        let lastChildNode: Node = null;
        if (direction === 'up') {
            let edges: string[] = node.inEdges;
            if (edges.length > 0) {
                let connector: Connector = this.getConnector(diagram.connectors, edges[0]);
                let parentNode: Node = this.getNode(diagram.nodes, connector.sourceID);
                let childNodes: Node[] = [];
                for (let i: number = 0; i < parentNode.outEdges.length; i++) {
                    connector = this.getConnector(diagram.connectors, parentNode.outEdges[i]);
                    let childNode: Node = this.getNode(diagram.nodes, connector.targetID);
                    if (childNode) {
                        childNodes.push(childNode);
                    }
                }
                if (childNodes.length > 0) {
                    for (let i: number = 0; i < childNodes.length; i++) {
                        let childNodeBounds: Rect = childNodes[i].wrapper.bounds;
                        if (childNodeBounds.top < selectedNodeBounds.top && childNodeBounds.left === selectedNodeBounds.left) {
                            lastChildNode = childNodes[i];
                        }
                    }
                }
                if (!lastChildNode) {
                    lastChildNode = parentNode;
                }
            }
        } else {
            let oldChildBoundsLeft: number = 0;
            let edges: string[] = node.outEdges;
            for (let i: number = 0; i < edges.length; i++) {
                let connector: Connector = this.getConnector(diagram.connectors, edges[i]);
                let childNode: Node = this.getNode(diagram.nodes, connector.targetID);
                if (childNode) {
                    let childNodeBounds: Rect = childNode.wrapper.bounds;
                    if (selectedNodeBounds.left >= childNodeBounds.left &&
                        (childNodeBounds.left >= oldChildBoundsLeft || oldChildBoundsLeft === 0)) {
                        if (lastChildNode) {
                            if (childNodeBounds.top <= lastChildNode.wrapper.bounds.top) {
                                lastChildNode = childNode;
                            }
                        } else {
                            lastChildNode = childNode;
                        }
                    }
                }
                if (!lastChildNode) {
                    lastChildNode = childNode;
                }
            }
        }
        return lastChildNode;
    }

    private getSameLevelNodes(): Node[] {
        let sameLevelNodes: Node[] = [];
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (diagram.selectedItems.nodes.length > 0) {
            let node: Node = diagram.selectedItems.nodes[0] as Node;
            let connector: Connector = this.getConnector(diagram.connectors, node.inEdges[0]);
            let parentNode: Node = this.getNode(diagram.nodes, connector.sourceID);
            for (let i: number = 0; i < parentNode.outEdges.length; i++) {
                connector = this.getConnector(diagram.connectors, parentNode.outEdges[i]);
                let childNode: Node = this.getNode(diagram.nodes, connector.targetID);
                if (childNode) {
                    sameLevelNodes.push(childNode);
                }
            }
        }
        return sameLevelNodes;
    }

    private getConnector(connectors: ConnectorModel[], name: string): Connector {
        for (let i: number = 0; i < connectors.length; i++) {
            if (connectors[i].id === name) {
                return connectors[i] as Connector;
            }
        }
        return null;
    }

    private getNode(nodes: NodeModel[], name: string): Node {
        for (let i: number = 0; i < nodes.length; i++) {
            if (nodes[i].id === name) {
                return nodes[i] as Node;
            }
        }
        return null;
    }

    public createOrgChart(isNew: boolean): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        this.selectedItem.utilityMethods.currentDiagramVisibility('orgchart-diagram', this.selectedItem);
        diagram.updateViewPort();
        if (isNew) {
            diagram.clear();
            OrgChartUtilityMethods.createEmptyOrgChart();
            this.doLayoutSettings(diagram);
        } else {
            diagram.commandManager = this.getCommandSettings();
        }
        diagram.contextMenuSettings.show = false;
        diagram.dataBind();
    }

    public doLayoutSettings(diagram: Diagram): void {
        diagram.layout = {
            type: 'OrganizationalChart',
            horizontalSpacing: 50, verticalSpacing: 50,
            getLayoutInfo: OrgChartUtilityMethods.getLayoutInfo.bind(OrgChartUtilityMethods)
        };
        diagram.selectedItems = { userHandles: OrgChartUtilityMethods.handle, constraints: SelectorConstraints.UserHandle };
        diagram.tool = DiagramTools.SingleSelect | DiagramTools.ZoomPan;
        diagram.pageSettings = { width: null, height: null };
        diagram.commandManager = this.getCommandSettings();
        diagram.snapSettings.constraints = diagram.snapSettings.constraints & ~SnapConstraints.ShowLines;
        diagram.selectedItems.constraints = SelectorConstraints.UserHandle;
        diagram.dataBind();
    }

    private canExecute(): boolean {
        return true;
    }

}

export abstract class OrgChartUtilityMethods {

    public static fileType: string;
    public static uploadDialog: Dialog;
    public static customPropertyDialog: Dialog;
    public static isUploadSuccess: boolean;

    public static selectedItem: SelectorViewModel;

    public static columnsList: string[] = [];

    public static orgDataSource: Object[] = [];

    public static orgChart: OrgChartData;

    public static customProperty: CustomProperties;

    public static orgchartPaste(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        let selectedNode: Node = diagram.selectedItems.nodes[0] as Node;
        let selectedelement: Node;
        let mindmapData: { [key: string]: Object };
        let orientation: string;
        diagram.startGroupAction();
        if (this.selectedItem.pasteData.length > 0) {
            diagram.paste(this.selectedItem.pasteData);
            selectedelement = this.selectedItem.pastedFirstItem;

            let connector: ConnectorModel = {
                id: 'connector' + this.selectedItem.randomIdGenerator(), sourceID: selectedNode.id,
                targetID: selectedelement.id, type: 'Orthogonal',
                style: { strokeColor: 'black', strokeWidth: 2 }
            };
            connector.constraints = ConnectorConstraints.PointerEvents | ConnectorConstraints.Select | ConnectorConstraints.Delete;
            diagram.add(connector);
            diagram.clearSelection();
            diagram.select([selectedelement]);
            diagram.doLayout();
            diagram.bringIntoView(diagram.nodes[diagram.nodes.length - 1].wrapper.bounds);
        }
        this.selectedItem.isModified = true;
        diagram.endGroupAction();
    }

    public static showUploadDialog(): void {
        this.uploadDialog.show();
    }

    public static readFile(event: ProgressEvent): void {
        this.orgChart = new OrgChartData(this.selectedItem);
        this.columnsList = [];
        let resultString: string = (event.target as FileReader).result.toString();
        if (this.fileType === 'csv') {
            this.orgDataSource = OrgChartUtilityMethods.convertCsvToJson(resultString);
        } else if (this.fileType === 'json') {
            this.orgDataSource = JSON.parse(resultString);
            for (let i: number = 0; i < this.orgDataSource.length; i++) {
                let attr: { [key: string]: Object } = this.orgDataSource[i] as { [key: string]: Object };
                for (let prop in attr) {
                    if (this.columnsList.indexOf(prop) === -1) {
                        this.columnsList.push(prop);
                    }
                }
            }
        } else {
            let parser: DOMParser = new DOMParser();
            let xmlDom: XMLDocument = parser.parseFromString(resultString, 'text/xml');
            let element: Element = xmlDom.children[0];
            this.orgDataSource = this.convertXmlToJson(element);
        }
        let columns: { [key: string]: Object }[] = this.getDataSourceColumns();
        this.selectedItem.orgDataSettings.dataSourceColumns = columns;
    }

    public static validateParentChildRelation(): boolean {
        let isParentChild: boolean = false;
        let ss1: { [key: string]: string[] } = this.getParentChildValues();
        for (let i: number = 0; i < ss1.childValues.length; i++) {
            if (ss1.parentValues.indexOf(ss1.childValues[i]) !== -1) {
                isParentChild = true;
            }
        }
        return isParentChild;
    }

    public static showCustomProperty(): void {
        let node: NodeModel = this.selectedItem.selectedDiagram.selectedItems.nodes[0] as NodeModel;
        this.customProperty = new CustomProperties(this.selectedItem, this.customPropertyDialog);
        this.customProperty.getPropertyDialogContent(node.addInfo);
        this.customPropertyDialog.cssClass = 'db-org-diagram';
        this.customPropertyDialog.dataBind();
        this.customPropertyDialog.show();
    }

    public static getParentChildValues(): { [key: string]: string[] } {
        let parentValues: string[] = [], childValues: string[] = [];
        for (let i: number = 0; i < this.orgDataSource.length; i++) {
            let data: { [key: string]: Object } = this.orgDataSource[i] as { [key: string]: Object };
            let childValue: string = data[this.selectedItem.orgDataSettings.id] ? data[this.selectedItem.orgDataSettings.id].toString() : '';
            let parentValue: string = data[this.selectedItem.orgDataSettings.parent] ? data[this.selectedItem.orgDataSettings.parent].toString() : '';
            if (childValue) {
                childValues.push(childValue);
            }
            if (parentValue) {
                parentValues.push(parentValue);
            }
        }
        return { parentValues: parentValues, childValues: childValues };
    }

    public static addChild(sourceId: string): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        let parentNode: Node = this.getNode(diagram.nodes, sourceId);
        diagram.startGroupAction();
        let node: NodeModel = {
            id: 'node' + this.selectedItem.randomIdGenerator(),
            minWidth: parentNode.minWidth, minHeight: parentNode.minHeight, maxHeight: parentNode.maxHeight,
            annotations: [{ content: 'Name', style: { bold: true, fontSize: 14 } }],
            style: { fill: parentNode.style.fill, strokeColor: parentNode.style.strokeColor, strokeWidth: parentNode.style.strokeWidth },
            offsetX: 200, offsetY: 200
        };
        node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
        if (parentNode.shape && parentNode.shape.type === 'Image') {
            node.shape = { type: 'Image', source: './assets/dbstyle/orgchart_images/blank-male.jpg', align: 'XMinYMin', scale: 'Meet' };
        } else {
            node.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 5 };
        }
        let keys: string[] = Object.keys(parentNode.addInfo);
        let addInfo: any = {};
        for (let i: number = 0; i < keys.length; i++) {
            let key: string = keys[i];
            let keyValue: any = cloneObject((parentNode.addInfo as { [key: string]: Object })[key]);
            addInfo[key] = keyValue;
            if (key !== 'Name') {
                addInfo[key].value = '';
            } else {
                addInfo[key].value = 'Name';
            }
        }
        node.addInfo = cloneObject(addInfo);
        diagram.add(node);
        let connector: ConnectorModel = {
            id: 'connector' + this.selectedItem.randomIdGenerator(), sourceID: sourceId,
            targetID: node.id, type: 'Orthogonal',
            style: { strokeColor: 'black', strokeWidth: 2 }
        };
        connector.constraints = ConnectorConstraints.PointerEvents | ConnectorConstraints.Select | ConnectorConstraints.Delete;
        diagram.add(connector);
        let node1: NodeModel = this.getNode(diagram.nodes, node.id);
        diagram.doLayout();
        diagram.endGroupAction();
        this.selectedItem.preventPropertyChange = true;
        diagram.select([node1]);
        this.selectedItem.preventPropertyChange = false;
        diagram.bringIntoView(node1.wrapper.bounds);
        this.selectedItem.isModified = true;
    }

    private static getNode(nodes: NodeModel[], name: string): Node {
        for (let i: number = 0; i < nodes.length; i++) {
            if (nodes[i].id === name) {
                return nodes[i] as Node;
            }
        }
        return null;
    }

    private static bindFields(): Object[] {
        let addInfo: { [key: string]: Object } = {};
        for (let i: number = 0; i < this.orgDataSource.length; i++) {
            addInfo = {};
            addInfo.nameField = this.selectedItem.orgDataSettings.nameField;
            addInfo.bindingFields = this.selectedItem.orgDataSettings.bindingFields;
            addInfo.imageField = this.selectedItem.orgDataSettings.imageField;
            addInfo.additionalFields = this.selectedItem.orgDataSettings.additionalFields;
            (this.orgDataSource[i] as { [key: string]: Object }).addInfo = cloneObject(addInfo);
        }
        return this.orgDataSource;
    }

    public static createEmptyOrgChart(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        diagram.constraints = diagram.constraints & ~DiagramConstraints.UndoRedo;
        let node: NodeModel = {
            id: 'rootNode', minWidth: 150, minHeight: 50, maxHeight: 50,
            annotations: [{ content: 'Name', style: { fontSize: 14, bold: true } }],
            shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 5 },
            style: { fill: '#C4F2E8', strokeColor: '#8BC1B7', strokeWidth: 2 },
            addInfo: {
                'Name': { value: 'Name', type: 'nameField', checked: true },
                'Image URL': { value: '', type: 'imageField', checked: false }
            },
        };
        node.constraints = NodeConstraints.Default & ~NodeConstraints.Delete;
        node.constraints |= NodeConstraints.AllowDrop;
        diagram.add(node);
        let node1: NodeModel = {
            id: 'textNode', width: 400, height: 300, offsetX: diagram.scrollSettings.viewPortWidth - 200,
            offsetY: 150, shape: { type: 'HTML', content: this.getShortCutString() }, style: { strokeWidth: 0 },
            excludeFromLayout: true, constraints: NodeConstraints.Default & ~NodeConstraints.Delete
        };
        diagram.add(node1);
        (document.getElementById('diagram').querySelector('#closeIconDiv') as HTMLElement).onclick = this.onHideNodeClick.bind(this);
        diagram.constraints = diagram.constraints | DiagramConstraints.UndoRedo;
    }

    public static onHideNodeClick(): void {
        let node1: NodeModel = MindMapUtilityMethods.getNode(this.selectedItem.selectedDiagram.nodes, 'textNode');
        node1.visible = !node1.visible;
        this.selectedItem.selectedDiagram.dataBind();
    }

    public static getShortCutString(): string {
        return '<div style="width: 400px; height: 300px; padding: 10px; background-color: #FFF7B5; border: 1px solid #FFF7B5">' +
            '<div id="closeIconDiv" style="float: right; width: 22px; height: 22px; border: 1px solid #FFF7B5">' +
            '<span class="sf-icon-Close" style="font-size:14px;cursor:pointer;"></span>' +
            '</div>' +
            '<div>' +
            '<span class="db-html-font-medium">Quick shortcuts</span>' +
            '</div>' +
            '<div style="padding-top:10px">' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Tab : </span>' +
            '<span class="db-html-font-normal">Add a child to parent</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Enter : </span>' +
            '<span class="db-html-font-normal">Add a child to the same level</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Shift + Tab : </span>' +
            '<span class="db-html-font-normal">Move the child parent to the next level</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Delete : </span>' +
            '<span class="db-html-font-normal">Delete a topic</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">F2 : </span>' +
            '<span class="db-html-font-normal">Edit a topic</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Esc : </span>' +
            '<span class="db-html-font-normal">End text editing</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Arrow(Up, Down, Left, Right) : </span>' +
            '<span class="db-html-font-normal">Navigate between child</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Spacebar : </span>' +
            '<span class="db-html-font-normal">Expand/Collapse a shape</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">F1 : </span>' +
            '<span class="db-html-font-normal">Show/Hide shortcut Key</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>';
    }

    public static applyDataSource(): void {
        document.getElementsByClassName('db-property-editor-container')[0].classList.add('orgchart-diagram');
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        diagram.clear();
        diagram.updateViewPort();
        diagram.getNodeDefaults = this.setNodeDefaults;
        diagram.getConnectorDefaults = this.setConnectorDefaults;
        let items: DataManager = new DataManager(this.bindFields() as JSON[]);
        if (this.fileType === 'xml') {
            diagram.dataSourceSettings = {
                id: 'id', parentId: 'parentId', dataManager: items
            };
        } else {
            diagram.dataSourceSettings = {
                id: this.selectedItem.orgDataSettings.id.toString(), parentId: this.selectedItem.orgDataSettings.parent.toString(),
                dataManager: items
            };
        }
        diagram.layout = {
            type: 'OrganizationalChart',
            getLayoutInfo: this.getLayoutInfo.bind(this)
        };
        diagram.selectedItems = { userHandles: OrgChartUtilityMethods.handle, constraints: SelectorConstraints.UserHandle };
        diagram.pageSettings = { width: null, height: null };
        //diagram.tool = DiagramTools.SingleSelect | DiagramTools.ZoomPan;
        diagram.commandManager = this.orgChart.getCommandSettings();
        diagram.snapSettings.constraints = diagram.snapSettings.constraints & ~SnapConstraints.ShowLines;
        diagram.selectedItems.constraints = SelectorConstraints.UserHandle;
        diagram.dataBind();
        diagram.dataBind();
        this.uploadDialog.hide();
    }

    public static subTreeOrientation: SubTreeOrientation = 'Vertical';
    public static subTreeAlignments: SubTreeAlignments = 'Alternate';
    public static getLayoutInfo(node: Node, options: TreeInfo): void {
        if (!options.hasSubTree) {
            options.orientation = this.subTreeOrientation;
            options.type = this.subTreeAlignments;
        }
    }

    private static getDataSourceColumns(): { [key: string]: Object }[] {
        let columns: { [key: string]: Object }[] = [];
        for (let i: number = 0; i < this.columnsList.length; i++) {
            if (this.columnsList[i]) {
                columns.push({
                    'text': this.columnsList[i], 'value': this.columnsList[i]
                });
            }
        }
        return columns;
    }

    private static setConnectorDefaults(connector: Connector, diagram: Diagram): ConnectorModel {
        let connector1: ConnectorModel = { type: 'Orthogonal', style: { strokeWidth: 2 } };
        return connector1;
    }

    private static setNodeDefaults(node: Node, diagram: Diagram): Node {
        node.minWidth = node.minWidth || 150;
        node.minHeight = node.minHeight || 100;
        node.maxHeight = node.maxHeight || 100;
        if (node.data) {
            let data: { [key: string]: Object } = node.data as { [key: string]: Object };
            let addInfo: { [key: string]: Object } = data.addInfo as { [key: string]: Object };

            let addInfo1: { [key: string]: Object } = {};
            let propName1: string = 'Name';
            addInfo1[propName1] = { 'value': data[addInfo.nameField.toString()], 'type': 'nameField', 'checked': true };

            let propertyFields: string[] = [addInfo.nameField.toString()];
            if (addInfo.imageField) {
                propName1 = 'Image URL';
                node.shape = {
                    type: 'Image', source: data[addInfo.imageField.toString()].toString(),
                    align: 'XMinYMin', scale: 'Meet'
                };
                node.minWidth = 250;
                addInfo1[propName1] = { 'value': data[addInfo.imageField.toString()], 'type': 'imageField', 'checked': true };
            }
            if (addInfo.bindingFields) {
                let bindingFields: string[] = addInfo.bindingFields as string[]
                for (let i: number = 0; i < bindingFields.length; i++) {
                    addInfo1[bindingFields[i]] = { 'value': data[bindingFields[i]], 'type': 'bindingField', 'checked': true };
                }
                propertyFields = propertyFields.concat(bindingFields);
            }
            let annotations: ShapeAnnotationModel[] = [];
            let startY: number = 0.5 - ((propertyFields.length - 1) / 10);
            for (let i: number = 0; i < propertyFields.length; i++) {
                let content: string = data[propertyFields[i]] as string;
                let annotation1: ShapeAnnotationModel = { content: content ? content : '' };
                let offset: PointModel = { x: 0.5, y: startY };
                if (node.shape && node.shape.type === 'Image') {
                    offset.x = 0;
                    annotation1.margin = { left: 110 };
                    annotation1.horizontalAlignment = 'Left';
                }
                if (i === 0) {
                    annotation1.style = { fontSize: 14, bold: true };
                }
                startY += 0.2;
                annotation1.offset = offset;
                annotations.push(annotation1);
            }
            if (annotations.length > 0) {
                node.annotations = annotations;
            }

            if (addInfo.additionalFields) {
                let additionalFields: string[] = addInfo.additionalFields as string[];
                let content: string = '';
                for (let i: number = 0; i < additionalFields.length; i++) {
                    content = content + additionalFields[i] + ':' + data[additionalFields[i]] as string + '\n';
                    addInfo1[additionalFields[i]] = { 'value': data[additionalFields[i]], 'type': 'bindingField', 'checked': false };
                }
                node.tooltip = { content: content, position: 'BottomCenter', relativeMode: 'Object' };
                node.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
            }
            node.style.fill = '#88C65C';
            node.style.strokeColor = '#88C65C';
            node.addInfo = addInfo1;
        }
        return node;
    }

    public static convertCsvToJson(csvText: string): Object[] {
        let allTextLines: string[] = csvText.split(/\r\n|\n/);
        this.columnsList = allTextLines[0].split(',');
        let lines: Object[] = [];
        for (let i: number = 1; i < allTextLines.length; i++) {
            if (allTextLines[i]) {
                let data: string[] = allTextLines[i].split(',');
                //if (data.length === headers.length) {
                let tarr: { [key: string]: Object } = {};
                for (let j: number = 0; j < this.columnsList.length; j++) {
                    if (data[j].trim().startsWith('"') && !data[j].trim().endsWith('"')) {
                        while (!data[j].trim().endsWith('"')) {
                            data[j] = data[j] + ',' + data[j + 1];
                            data.splice(j + 1, 1);
                        }
                    }
                    tarr[this.columnsList[j]] = data[j];
                }
                lines.push(tarr);
                //}
            }
        }
        return lines;
    }

    public static convertXmlToJson(element: Element): Object[] {
        let dataSource: Object[] = [];
        for (let i: number = 0; i < element.children.length; i++) {
            let childElement: Element = element.children[i] as Element;
            let rowData: { [key: string]: Object } = this.generateRowData(childElement, dataSource.length.toString());
            if (Object.keys(rowData).length > 0) {
                dataSource.push(rowData);
            }
            if (childElement.children.length > 0) {
                let key: string = 'id';
                this.convertChildXmlToJson(childElement, rowData[key].toString(), dataSource);
            }
        }
        return dataSource;
    }

    public static convertChildXmlToJson(element: Element, parentId: string, dataSource: Object[]): void {
        for (let i: number = 0; i < element.children.length; i++) {
            let childElement: Element = element.children[i] as Element;
            let rowData: { [key: string]: Object } =
                this.generateRowData(childElement, dataSource.length.toString(), parentId.toString());
            if (Object.keys(rowData).length > 0) {
                dataSource.push(rowData);
            }
            if (childElement.children.length > 0) {
                let key: string = 'id';
                this.convertChildXmlToJson(childElement, rowData[key].toString(), dataSource);
            }
        }
    }

    public static generateRowData(element: Element, id: string, parentId?: string): { [key: string]: Object } {
        let rowData: { [key: string]: Object } = {};
        for (let i: number = 0; i < element.attributes.length; i++) {
            let attr: Attr = element.attributes[i];
            rowData[attr.name] = attr.value;
            if (this.columnsList.indexOf(attr.name) === -1) {
                this.columnsList.push(attr.name);
            }
        }
        let key: string = 'id';
        rowData[key] = id;
        if (parentId) {
            key = 'parentId';
            rowData[key] = parentId;
        }
        return rowData;
    }

    public static shortCutkeys: { [key: string]: Object }[] = [
        { 'key': 'Tab', 'value': 'Add a child to parent' },
        { 'key': 'Enter', 'value': 'Add a child to same level' },
        { 'key': 'Shift + Tab', 'value': 'Move the child parent to next level' },
        { 'key': 'Delete', 'value': 'Delete a child' },
        { 'key': 'Spacebar', 'value': 'Expand/Collapse a shape' },
        { 'key': 'F2', 'value': 'Edit a shape' },
        { 'key': 'Esc', 'value': 'End Editing' },
        { 'key': 'Arrow(Up, Down, Left, Right)', 'value': 'Navigate between child' },
    ];

    public static handle: UserHandleModel[] = [
        {
            name: 'orgAddHandle', pathColor: 'white', backgroundColor: '#7d7d7d', borderColor: 'white',
            pathData: 'M 30.05 15.03 L 30.05 30.05 L 15.02 30.05 L 15.02 39.9 L 30.05 39.9 L 30.05 54.93 L 39.9 54.93 L 39.9 39.9 L 54.93 39.9 L 54.93 30.05 L 39.9 30.05 L 39.9 15.03 z',
            side: 'Left', offset: 0, horizontalAlignment: 'Center', verticalAlignment: 'Center'
        },
        {
            name: 'orgRemoveHandle', pathColor: 'white', backgroundColor: '#7d7d7d', borderColor: 'white',
            pathData: 'M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76 96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04 91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z',
            visible: true, offset: 1, side: 'Right', horizontalAlignment: 'Center', verticalAlignment: 'Center'
        }, {
            name: 'orgEditHandle', pathColor: 'white', backgroundColor: '#7d7d7d', borderColor: 'white',
            pathData: 'M 42.65 30.41 L 67.5 53.99 L 41.2 78.73 C 39.41 80.42 37.34 81.27 34.99 81.27 C 32.65 81.27 30.57 80.49 28.78 78.93 L 25.05 82.44 L 0 82.44 L 16.36 67.05 C 14.57 65.36 13.67 63.41 13.67 61.2 C 13.67 58.99 14.57 56.98 16.36 55.16 z M 78.42 25.49 C 78.57 0 78.73 0.01 78.88 0.01 C 81.09 -0.12 83.09 0.66 84.88 2.35 L 97.52 14.04 C 99.17 15.86 100 17.87 100 20.09 C 100 22.29 99.17 24.24 97.52 25.93 L 71.84 50.09 L 46.79 26.51 L 72.47 2.35 C 74.15 0.77 76.13 -0.02 78.42 25.49 z',
            side: 'Right', offset: 0, horizontalAlignment: 'Center', verticalAlignment: 'Center'
        },
    ];
}


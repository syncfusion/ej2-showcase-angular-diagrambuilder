/**
 *  Home page handler
 */

import {
    Diagram, CommandManagerModel, Keys, NodeModel, ConnectorModel, Node, Rect,
    Connector, DiagramTools, ShapeAnnotationModel, ConnectorConstraints, SnapConstraints,
    SelectorConstraints, UserHandleModel, ShapeAnnotation, KeyModifiers, DiagramConstraints, IClickEventArgs, NodeConstraints, ITextEditEventArgs
} from '@syncfusion/ej2-diagrams';
import { SelectorViewModel } from './selector';
import { CommonKeyboardCommands } from './commoncommands';


export class MindMap {

    private selectedItem: SelectorViewModel;

    constructor(selectedItem: SelectorViewModel) {
        this.selectedItem = selectedItem;
    }

    public getCommandSettings(): CommandManagerModel {

        let commandManager: CommandManagerModel = {
            commands: [{
                gesture: { key: Keys.Tab }, canExecute: this.canExecute,
                execute: this.addChild.bind(this), name: 'leftChild'
            },
            {
                gesture: { key: Keys.Tab, keyModifiers: KeyModifiers.Shift }, canExecute: this.canExecute,
                execute: this.addRightChild.bind(this), name: 'rightChild'
            },
            {
                gesture: { key: Keys.Enter }, canExecute: this.canExecute,
                execute: this.addSibilingChildTop.bind(this), name: 'sibilingChildTop'
            },
            {
                gesture: { key: Keys.Enter, keyModifiers: KeyModifiers.Shift }, canExecute: this.canExecute,
                execute: this.addSibilingChildBottom.bind(this), name: 'sibilingChildBottom'
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
                gesture: { key: Keys.Right }, canExecute: this.canExecute,
                execute: this.navigateLeftChild.bind(this), name: 'navigationLeft'
            },
            {
                gesture: { key: Keys.Left }, canExecute: this.canExecute,
                execute: this.navigateRightChild.bind(this), name: 'navigationRight'
            },
            {
                gesture: { key: Keys.Space }, canExecute: this.canExecute,
                execute: this.expandCollapse.bind(this), name: 'expandCollapse'
            },
            {
                gesture: { key: Keys.F2 }, canExecute: this.canExecute,
                execute: this.editNode.bind(this), name: 'editing'
            },
            {
                gesture: { key: Keys.F1 }, canExecute: this.canExecute,
                execute: MindMapUtilityMethods.onHideNodeClick.bind(MindMapUtilityMethods), name: 'showShortCut'
            },
            {
                gesture: { key: Keys.Z, keyModifiers: KeyModifiers.Control }, canExecute: this.canExecute,
                execute: this.undoMindMap.bind(this), name: 'undo'
            },
            {
                gesture: { key: Keys.Y, keyModifiers: KeyModifiers.Control }, canExecute: this.canExecute,
                execute: this.redoMindMap.bind(this), name: 'redo'
            },
            {
                gesture: { key: Keys.X, keyModifiers: KeyModifiers.Control }, canExecute: this.preventExecute, name: 'cutObject'
            },
            {
                gesture: { key: Keys.C, keyModifiers: KeyModifiers.Control }, canExecute: this.preventExecute, name: 'copyObject'
            },
            {
                gesture: { key: Keys.V, keyModifiers: KeyModifiers.Control }, canExecute: this.preventExecute, name: 'pasteObject'
            }
            ]
        };
        commandManager.commands = CommonKeyboardCommands.addCommonCommands(commandManager.commands);
        return commandManager;
    }

    private preventExecute(): boolean {
        return false;
    }

    private canExecute(): boolean {
        return true;
    }

    private undoMindMap(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        diagram.undo();
        diagram.doLayout();
    }

    private redoMindMap(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        diagram.redo();
        diagram.doLayout();
    }

    private addChild(args: { [key: string]: Object }): void {
        MindMapUtilityMethods.addNode('Left');
    }

    private addRightChild(args: { [key: string]: Object }): void {
        MindMapUtilityMethods.addNode('Right');
    }

    private addSibilingChildTop(): void {
        MindMapUtilityMethods.addSibilingChild('Top');
    }

    private addSibilingChildBottom(): void {
        MindMapUtilityMethods.addSibilingChild('Bottom');
    }

    private removeChild(args: { [key: string]: Object }): void {
        MindMapUtilityMethods.removeChild();
    }

    private navigateLeftChild(args: Object): void {
        this.navigateChild('left');
    }

    private navigateRightChild(): void {
        this.navigateChild('right');
    }

    private navigateTopChild(): void {
        this.navigateChild('top');
    }

    private navigateBottomChild(): void {
        this.navigateChild('bottom');
    }

    private expandCollapse(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (diagram.selectedItems.nodes.length > 0) {
            let node: Node = diagram.selectedItems.nodes[0] as Node;
            node.isExpanded = !node.isExpanded;
            diagram.dataBind();
        }
    }

    private editNode(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (diagram.selectedItems.nodes.length > 0) {
            let node: Node = diagram.selectedItems.nodes[0] as Node;
            diagram.startTextEdit(node, node.annotations[0].id);
            this.selectedItem.isModified = true;
        }
    }

    private navigateChild(direction: string): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        let node: Node = null;
        if (direction === 'top' || direction === 'bottom') {
            let sameLevelNodes: Node[] = this.getSameLevelNodes();
            let index: number = sameLevelNodes.indexOf(diagram.selectedItems.nodes[0] as Node);
            node = direction === 'top' ? sameLevelNodes[index - 1] : sameLevelNodes[index + 1];
        } else {
            node = this.getMinDistanceNode(diagram, direction);
        }
        if (node) {
            diagram.clearSelection();
            diagram.select([node]);
            diagram.bringIntoView(node.wrapper.bounds);
        }
    }

    private getSameLevelNodes(): Node[] {
        let sameLevelNodes: Node[] = [];
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (diagram.selectedItems.nodes.length > 0) {
            let node: Node = diagram.selectedItems.nodes[0] as Node;
            let orientation: string = (node.addInfo as { [key: string]: Object }).orientation.toString();
            let connector: Connector = MindMapUtilityMethods.getConnector(diagram.connectors, node.inEdges[0]);
            let parentNode: Node = MindMapUtilityMethods.getNode(diagram.nodes, connector.sourceID);
            for (let i: number = 0; i < parentNode.outEdges.length; i++) {
                connector = MindMapUtilityMethods.getConnector(diagram.connectors, parentNode.outEdges[i]);
                let childNode: Node = MindMapUtilityMethods.getNode(diagram.nodes, connector.targetID);
                if (childNode) {
                    let childOrientation: string = (childNode.addInfo as { [key: string]: Object }).orientation.toString();
                    if (orientation === childOrientation) {
                        sameLevelNodes.push(childNode);
                    }
                }
            }
        }
        return sameLevelNodes;
    }

    private getMinDistanceNode(diagram: Diagram, direction: string): Node {
        let node: Node = diagram.selectedItems.nodes[0] as Node;
        let parentBounds: Rect = node.wrapper.bounds;
        let childBounds: Rect = null;
        let oldChildBoundsTop: number = 0;
        let childNode: Node = null;
        let lastChildNode: Node = null;
        let leftOrientationFirstChild: Node = null, rightOrientationFirstChild: Node = null;
        if (node.id === 'rootNode') {
            let edges: string[] = node.outEdges;
            for (let i: number = 0; i < edges.length; i++) {
                let connector: Connector = MindMapUtilityMethods.getConnector(diagram.connectors, edges[i]);
                childNode = MindMapUtilityMethods.getNode(diagram.nodes, connector.targetID);
                let addInfo: { [key: string]: Object } = childNode.addInfo as { [key: string]: Object };
                if (addInfo.orientation.toString().toLowerCase() === direction) {
                    if (direction === 'left' && leftOrientationFirstChild === null) {
                        leftOrientationFirstChild = childNode;
                    }
                    if (direction === 'right' && rightOrientationFirstChild === null) {
                        rightOrientationFirstChild = childNode;
                    }
                    childBounds = childNode.wrapper.bounds;
                    if (parentBounds.top >= childBounds.top && (childBounds.top >= oldChildBoundsTop || oldChildBoundsTop === 0)) {
                        oldChildBoundsTop = childBounds.top;
                        lastChildNode = childNode;
                    }
                }
            }
            if (!lastChildNode) {
                lastChildNode = direction === 'left' ? leftOrientationFirstChild : rightOrientationFirstChild;
            }

        } else {
            let edges: string[] = [];
            let selecttype: string = '';
            let orientation: string = (node.addInfo as { [key: string]: Object }).orientation.toString();
            if (orientation.toLowerCase() === 'left') {
                edges = direction === 'left' ? node.outEdges : node.inEdges;
                selecttype = direction === 'left' ? 'target' : 'source';
            } else {
                edges = direction === 'right' ? node.outEdges : node.inEdges;
                selecttype = direction === 'right' ? 'target' : 'source';
            }
            for (let i: number = 0; i < edges.length; i++) {
                let connector: Connector = MindMapUtilityMethods.getConnector(diagram.connectors, edges[i]);
                childNode = MindMapUtilityMethods.getNode(diagram.nodes, selecttype === 'target' ? connector.targetID : connector.sourceID);
                if (childNode.id === 'rootNode') {
                    lastChildNode = childNode;
                    break;
                } else {
                    childBounds = childNode.wrapper.bounds;
                    if (selecttype === 'target') {
                        if (parentBounds.top >= childBounds.top && (childBounds.top >= oldChildBoundsTop || oldChildBoundsTop === 0)) {
                            oldChildBoundsTop = childBounds.top;
                            lastChildNode = childNode;
                        }
                    } else {
                        lastChildNode = childNode;
                    }
                }
            }
        }
        return lastChildNode;
    }

    public createMindMap(isNew: boolean): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        this.selectedItem.utilityMethods.currentDiagramVisibility('mindmap-diagram', this.selectedItem);
        diagram.updateViewPort();
        diagram.textEdit = (args: ITextEditEventArgs) => {
            diagram.doLayout();
            this.selectedItem.isModified = true;
        };

        if (isNew) {
            diagram.clear();
            diagram.constraints = diagram.constraints & ~DiagramConstraints.UndoRedo;
            let rootNode: NodeModel = MindMapUtilityMethods.createEmptyMindMap();
            diagram.layout = {
                horizontalSpacing: 100,
                verticalSpacing: 50,
                type: 'MindMap',
                getBranch: (node: Node): string => {
                    if (node.addInfo) {
                        let addInfo: { [key: string]: Object } = node.addInfo as { [key: string]: Object };
                        return addInfo.orientation.toString();
                    }
                    return 'Left';
                },
                root: rootNode.id
            };
            diagram.pageSettings = { width: null, height: null };
            diagram.selectedItems = { userHandles: MindMapUtilityMethods.handle, constraints: SelectorConstraints.UserHandle };
            diagram.commandManager = this.getCommandSettings();
            //diagram.tool = DiagramTools.SingleSelect | DiagramTools.ZoomPan;
            diagram.snapSettings.constraints = diagram.snapSettings.constraints & ~SnapConstraints.ShowLines;
            diagram.constraints = diagram.constraints | DiagramConstraints.UndoRedo;
            diagram.tool = DiagramTools.SingleSelect | DiagramTools.ZoomPan;
            diagram.dataBind();
            this.selectedItem.utilityMethods.bindMindMapProperties(rootNode, this.selectedItem);
        } else {
            this.updateMindMap();
        }
    }
    public updateMindMap(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        diagram.layout = {
            getBranch: (node: Node): string => {
                if (node.addInfo) {
                    let addInfo: { [key: string]: Object } = node.addInfo as { [key: string]: Object };
                    return addInfo.orientation.toString();
                }
                return 'Left';
            },
        };
        diagram.pageSettings = { width: null, height: null };
        diagram.selectedItems = { userHandles: MindMapUtilityMethods.handle, constraints: SelectorConstraints.UserHandle };
        diagram.commandManager = this.getCommandSettings();
        diagram.tool = DiagramTools.SingleSelect | DiagramTools.ZoomPan;
    }
    public getShortCutKeys(shortcutKeys: { [key: string]: Object }[]): ShapeAnnotationModel[] {
        let annotations: ShapeAnnotationModel[] = [];
        let y: number = 0.1;
        for (let i: number = 0; i < shortcutKeys.length; i++) {
            let annotation: ShapeAnnotationModel = {
                content: shortcutKeys[i].key.toString() + ': ' + shortcutKeys[i].value.toString(), offset: { x: 0.1, y: y }, visibility: true,
                style: { color: 'white' }, horizontalAlignment: 'Left', verticalAlignment: 'Bottom'
            }
            annotations.push(annotation);
            y += 0.1;
        }
        return annotations;
    }

}

export abstract class MindMapUtilityMethods {

    public static selectedItem: SelectorViewModel;

    private static lastFillIndex: number = 0;

    public static templateType: string;

    public static createEmptyMindMap(): NodeModel {
        let node: NodeModel = {
            id: 'rootNode', width: 150, minHeight: 50,
            annotations: [{ content: 'MindMap', style: { color: '#000000' } }],
            shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 5 },
            ports: [{ id: 'leftPort', offset: { x: 0, y: 0.5 } }, { id: 'rightPort', offset: { x: 1, y: 0.5 } }],
            addInfo: { level: 0 }, style: { fill: '#D0ECFF', strokeColor: '#80BFEA' },
            constraints: NodeConstraints.Default & ~NodeConstraints.Delete
        };
        this.selectedItem.selectedDiagram.add(node);
        let node1: NodeModel = {
            id: 'textNode', width: 400, height: 280, offsetX: this.selectedItem.selectedDiagram.scrollSettings.viewPortWidth - 200, offsetY: 140,
            shape: { type: 'HTML', content: this.getShortCutString() }, style: { strokeWidth: 0 },
            excludeFromLayout: true,
            constraints: NodeConstraints.Default & ~NodeConstraints.Delete
        };
        this.selectedItem.selectedDiagram.add(node1);
        (document.getElementById('diagram').querySelector('#closeIconDiv') as HTMLElement).onclick = this.onHideNodeClick.bind(this);
        return node;
    }

    public static onHideNodeClick(): void {
        let node1: NodeModel = MindMapUtilityMethods.getNode(this.selectedItem.selectedDiagram.nodes, 'textNode');
        node1.visible = !node1.visible;
        this.selectedItem.selectedDiagram.dataBind();
    }

    public static getShortCutString(): string {
        return '<div style="width: 400px; height: 280px; padding: 10px; background-color: #FFF7B5; border: 1px solid #FFF7B5">' +
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
            '<span class="db-html-font-normal">Add a subtopic to the left</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Shift + Tab : </span>' +
            '<span class="db-html-font-normal">Add a subtopic to the right</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div>' +
            '<ul>' +
            '<li>' +
            '<span class="db-html-font-medium">Enter : </span>' +
            '<span class="db-html-font-normal">Add a sibling subtopic to the top</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            // '<div>' +
            // '<ul>' +
            // '<li>' +
            // '<span class="db-html-font-medium">Shift + Enter - </span>' +
            // '<span class="db-html-font-normal">Add a sibling subtopic to bottom</span>' +
            // '</li>' +
            // '</ul>' +
            // '</div>' +
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
            '<span class="db-html-font-normal">Navigate between topics</span>' +
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

    public static getMindMapShape(parentNode: NodeModel): { [key: string]: Object } {
        let sss: { [key: string]: Object } = {};
        let node: NodeModel = {};
        let connector: ConnectorModel = {};
        let addInfo: { [key: string]: Object } = parentNode.addInfo as { [key: string]: Object };
        if (this.templateType === 'template1') {
            let annotations: ShapeAnnotationModel = {
                //verticalAlignment: 'Bottom', offset: { x: 0.5, y: 0 },
                content: ''
            };
            node = {
                minWidth: 100, maxWidth: 100, minHeight: 20, shape: { type: 'Basic', shape: 'Rectangle' },
                annotations: [annotations], style: { fill: '#000000', strokeColor: '#000000' },
                addInfo: { level: (addInfo.level as number) + 1 },
                offsetX: 200, offsetY: 200
            };
            connector = { type: 'Bezier', style: { strokeWidth: 3 } };
        } else {
            node = {
                minWidth: 100, maxWidth: 100, minHeight: 50, shape: { type: 'Basic', shape: 'Rectangle' },
                annotations: [{ content: '' }],
                style: { fill: '#000000', strokeColor: '#000000' },
                addInfo: { level: (addInfo.level as number) + 1 },
                offsetX: 200, offsetY: 200
            };
            if (this.templateType === 'template2') {
                connector = { type: 'Orthogonal', style: { strokeColor: '#000000' } };
            } else if (this.templateType === 'template3') {
                connector = { type: 'Straight', style: { strokeColor: '#000000' } };
            } else {
                connector = { type: 'Bezier', style: { strokeColor: '#000000' } };
            }
        }
        if (addInfo.level < 1) {
            node.style.fill = this.selectedItem.utilityMethods.fillColorCode[this.lastFillIndex];
            node.style.strokeColor = this.selectedItem.utilityMethods.borderColorCode[this.lastFillIndex];;
            if (this.lastFillIndex + 1 >= this.selectedItem.utilityMethods.fillColorCode.length) {
                this.lastFillIndex = 0;
            } else {
                this.lastFillIndex++;
            }
        } else {
            node.style.strokeColor = node.style.fill = parentNode.style.fill;
        }
        connector.style.strokeColor = node.style.fill;
        connector.targetDecorator = { shape: 'None' };
        connector.constraints = ConnectorConstraints.PointerEvents | ConnectorConstraints.Select | ConnectorConstraints.Delete;
        node.constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
        node.ports = [{ id: 'leftPort', offset: { x: 0, y: 0.5 } }, { id: 'rightPort', offset: { x: 1, y: 0.5 } }];
        sss.node = node;
        sss.connector = connector;
        return sss;
    }

    public static addNode(orientation: string): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        let selectedNode: Node = diagram.selectedItems.nodes[0] as Node;
        if (selectedNode.id !== 'rootNode') {
            let selectedNodeOrientation: string = (selectedNode.addInfo as { [key: string]: Object }).orientation.toString();
            orientation = selectedNodeOrientation;
        }
        diagram.startGroupAction();
        let mindmapData: { [key: string]: Object } = this.getMindMapShape(selectedNode);
        let node: NodeModel = mindmapData.node;
        node.id = 'node' + this.selectedItem.randomIdGenerator();
        if (node.addInfo) {
            (node.addInfo as { [key: string]: Object }).orientation = orientation;
        } else {
            node.addInfo = { 'orientation': orientation };
        }
        diagram.add(node);
        let connector: ConnectorModel = this.setConnectorDefault(diagram, orientation, mindmapData.connector, selectedNode.id, node.id);
        diagram.add(connector);
        let node1: NodeModel = this.getNode(diagram.nodes, node.id);
        diagram.doLayout();
        diagram.endGroupAction();
        this.selectedItem.preventPropertyChange = true;
        diagram.select([node1]);
        this.selectedItem.preventPropertyChange = false;
        diagram.dataBind();
        diagram.bringIntoView(node1.wrapper.bounds);
        diagram.startTextEdit(node1, node1.annotations[0].id);
        this.selectedItem.isModified = true;
    }

    public static addSibilingChild(position: string): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        let selectedNode: Node = diagram.selectedItems.nodes[0] as Node;
        if (selectedNode.id !== 'rootNode') {
            let selectedNodeOrientation: string = (selectedNode.addInfo as { [key: string]: Object }).orientation.toString();
            let orientation: string = selectedNodeOrientation;

            let connector1: Connector = this.getConnector(diagram.connectors, selectedNode.inEdges[0]);
            diagram.startGroupAction();
            let mindmapData: { [key: string]: Object } = this.getMindMapShape(this.getNode(diagram.nodes, connector1.sourceID));
            let node: NodeModel = mindmapData.node;
            node.id = 'node' + this.selectedItem.randomIdGenerator();
            if (node.addInfo) {
                (node.addInfo as { [key: string]: Object }).orientation = orientation;
            } else {
                node.addInfo = { 'orientation': orientation };
            }
            diagram.add(node);

            let connector: ConnectorModel =
                this.setConnectorDefault(diagram, orientation, mindmapData.connector, connector1.sourceID, node.id);
            diagram.add(connector);
            let node1: NodeModel = this.getNode(diagram.nodes, node.id);
            diagram.doLayout();
            diagram.endGroupAction();
            this.selectedItem.preventPropertyChange = true;
            diagram.select([node1]);
            this.selectedItem.preventPropertyChange = false;
            diagram.bringIntoView(node1.wrapper.bounds);
            diagram.startTextEdit(node1, node1.annotations[0].id);
            this.selectedItem.isModified = true;
        }
    }

    public static getConnector(connectors: ConnectorModel[], name: string): Connector {
        for (let i: number = 0; i < connectors.length; i++) {
            if (connectors[i].id === name) {
                return connectors[i] as Connector;
            }
        }
        return null;
    }

    public static getNode(nodes: NodeModel[], name: string): Node {
        for (let i: number = 0; i < nodes.length; i++) {
            if (nodes[i].id === name) {
                return nodes[i] as Node;
            }
        }
        return null;
    }

    public static removeChild(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        if (diagram.selectedItems.nodes.length > 0) {
            this.selectedItem.preventPropertyChange = true;
            diagram.historyManager.startGroupAction();
            this.removeSubChild(diagram.selectedItems.nodes[0] as Node);
            diagram.historyManager.endGroupAction();
            diagram.doLayout();
            this.selectedItem.preventPropertyChange = false;
        }
        this.selectedItem.isModified = true;
    }

    private static removeSubChild(node: Node): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        for (let i: number = node.outEdges.length - 1; i >= 0; i--) {
            let connector: Connector = MindMapUtilityMethods.getConnector(diagram.connectors, node.outEdges[i]);
            let childNode: Node = MindMapUtilityMethods.getNode(diagram.nodes, connector.targetID);
            if (childNode != null && childNode.outEdges.length > 0) {
                this.removeSubChild(childNode);
            } else {
                diagram.remove(childNode);
            }
        }
        for (let j: number = node.inEdges.length - 1; j >= 0; j--) {
            let connector: Connector = MindMapUtilityMethods.getConnector(diagram.connectors, node.inEdges[j]);
            let childNode: Node = MindMapUtilityMethods.getNode(diagram.nodes, connector.sourceID);
            let index: number = childNode.outEdges.indexOf(connector.id);
            if (index > 0) {
                let node1: string = childNode.outEdges[index - 1] as string;
                let connector1: any = diagram.getObject(node1);
                let node2: Node = MindMapUtilityMethods.getNode(diagram.nodes, connector1.targetID);
                diagram.select([node2]);
            } else {
                diagram.select([childNode]);
            }
        }
        diagram.remove(node);
    }
    public static
        setConnectorDefault(diagram: Diagram, orientation: string, connector: ConnectorModel, sourceID: string, targetID: string):
        ConnectorModel {
        connector.id = 'connector' + this.selectedItem.randomIdGenerator();
        connector.sourceID = sourceID;
        connector.targetID = targetID;
        connector.sourcePortID = 'rightPort';
        connector.targetPortID = 'leftPort';
        if (orientation === 'Right') {
            connector.sourcePortID = 'leftPort';
            connector.targetPortID = 'rightPort';
        }
        connector.style.strokeWidth = 3;
        return connector;
    }

    public static shortCutkeys: { [key: string]: Object }[] = [
        { 'key': 'Tab', 'value': 'Add a subtopic to left side' },
        { 'key': 'Shift + Tab', 'value': 'Add a subtopic to right side' },
        { 'key': 'Enter', 'value': 'Add a sibling subtopic to top' },
        { 'key': 'Shift + Enter', 'value': 'Add a sibling subtopic to bottom' },
        { 'key': 'Delete', 'value': 'Delete a topic' },
        { 'key': 'Spacebar', 'value': 'Expand/Collapse a topic' },
        { 'key': 'F2', 'value': 'Edit a topic' },
        { 'key': 'Esc', 'value': 'End a text editing' },
        { 'key': 'Arrow(Up, Down, Left, Right)', 'value': 'Navigate between topics' },
    ];

    public static handle: UserHandleModel[] = [
        {
            name: 'leftHandle', pathColor: 'white', backgroundColor: '#7d7d7d', borderColor: 'white',
            pathData: 'M0,3.063 L7.292,3.063 L7.292,0 L11.924,4.633 L7.292,9.266 L7.292,5.714 L0.001,5.714 L0.001,3.063Z',
            side: 'Right', offset: 0.5, horizontalAlignment: 'Center', verticalAlignment: 'Center',
        },
        {
            name: 'rightHandle', pathColor: 'white', backgroundColor: '#7d7d7d', borderColor: 'white',
            pathData: 'M11.924,6.202 L4.633,6.202 L4.633,9.266 L0,4.633 L4.632,0 L4.632,3.551 L11.923,3.551 L11.923,6.202Z',
            visible: true, offset: 0.5, side: 'Left', horizontalAlignment: 'Center', verticalAlignment: 'Center'
        }, {
            name: 'removeHandle', pathColor: 'white', backgroundColor: '#7d7d7d', borderColor: 'white',
            pathData: 'M 7.04 22.13 L 92.95 22.13 L 92.95 88.8 C 92.95 91.92 91.55 94.58 88.76 96.74 C 85.97 98.91 82.55 100 78.52 100 L 21.48 100 C 17.45 100 14.03 98.91 11.24 96.74 C 8.45 94.58 7.04 91.92 7.04 88.8 z M 32.22 0 L 67.78 0 L 75.17 5.47 L 100 5.47 L 100 16.67 L 0 16.67 L 0 5.47 L 24.83 5.47 z',
            side: 'Bottom', offset: 0.5, horizontalAlignment: 'Center', verticalAlignment: 'Center'
        }
    ];
}
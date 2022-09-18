import { Diagram, Node, ToolBase, MouseEventArgs, IElement, cloneObject, randomId, NodeModel, MoveTool, ConnectorDrawingTool, Connector } from '@syncfusion/ej2-diagrams';
import { MindMapUtilityMethods } from './mindmap';
import { OrgChartUtilityMethods } from './orgchart';
import { SelectorViewModel } from './selector';

export class CustomDiagram extends Diagram {
    public selectedItem: SelectorViewModel = null;
    public getTool(action: string): ToolBase {
        if (action === 'leftHandle') {
            let leftTool: LeftExtendTool = new LeftExtendTool(this.commandHandler);
            leftTool.selectedItem = this.selectedItem;
            return leftTool;
        } else if (action === 'rightHandle') {
            let rightTool: RightExtendTool = new RightExtendTool(this.commandHandler);
            rightTool.selectedItem = this.selectedItem;
            return rightTool;
        } else if (action === 'removeHandle') {
            let removeTool: RemoveTool = new RemoveTool(this.commandHandler);
            removeTool.selectedItem = this.selectedItem;
            return removeTool;
        } else if (action === 'orgAddHandle') {
            let orgAddTool: OrgAddHandleTool = new OrgAddHandleTool(this.commandHandler);
            orgAddTool.selectedItem = this.selectedItem;
            return orgAddTool;
        } else if (action === 'orgRemoveHandle') {
            let orgRemoveTool: OrgRemoveHandleTool = new OrgRemoveHandleTool(this.commandHandler);
            orgRemoveTool.selectedItem = this.selectedItem;
            return orgRemoveTool;
        } else if (action === 'orgEditHandle') {
            let orgEditTool: OrgEditHandleTool = new OrgEditHandleTool(this.commandHandler);
            orgEditTool.selectedItem = this.selectedItem;
            return orgEditTool;
        } else {
            return super.getTool(action);
        }
    }
}

class LeftExtendTool extends ToolBase {
    public selectedItem: SelectorViewModel = null;
    public mouseDown(args: MouseEventArgs): void {
        this.inAction = true;
        super.mouseDown(args);
    }
    public mouseUp(args: MouseEventArgs): void {
        if (this.inAction) {
            let selectedObject: Object[] = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof Node) {
                    MindMapUtilityMethods.addNode('Left');
                }
            }
        }
        super.mouseUp(args);
    }
}

class RightExtendTool extends ToolBase {
    public selectedItem: SelectorViewModel = null;
    public mouseDown(args: MouseEventArgs): void {
        this.inAction = true;
        super.mouseDown(args);
    }
    public mouseUp(args: MouseEventArgs): void {
        if (this.inAction) {
            let selectedObject: Object[] = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof Node) {
                    MindMapUtilityMethods.addNode('Right');
                }
            }
        }
        super.mouseUp(args);
    }
}

class RemoveTool extends ToolBase {
    public selectedItem: SelectorViewModel = null;
    public mouseDown(args: MouseEventArgs): void {
        this.inAction = true;
        super.mouseDown(args);
    }
    public mouseUp(args: MouseEventArgs): void {
        if (this.inAction) {
            let selectedObject: Object[] = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof Node) {
                    MindMapUtilityMethods.removeChild();
                }
            }
        }
        super.mouseUp(args);
    }
}

class OrgAddHandleTool extends ToolBase {
    public selectedItem: SelectorViewModel = null;
    public mouseDown(args: MouseEventArgs): void {
        this.inAction = true;
        super.mouseDown(args);
    }
    public mouseUp(args: MouseEventArgs): void {
        if (this.inAction) {
            let selectedObject: Object[] = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof Node) {
                    OrgChartUtilityMethods.addChild(this.selectedItem.selectedDiagram.selectedItems.nodes[0].id);
                }
            }
        }
        super.mouseUp(args);
    }
}

class OrgRemoveHandleTool extends ToolBase {
    public selectedItem: SelectorViewModel = null;
    public mouseDown(args: MouseEventArgs): void {
        this.inAction = true;
        super.mouseDown(args);
    }
    public mouseUp(args: MouseEventArgs): void {
        if (this.inAction) {
            let selectedObject: Object[] = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof Node) {
                    OrgChartUtilityMethods.removeChild();
                }
            }
        }
        super.mouseUp(args);
    }
}

class OrgEditHandleTool extends ToolBase {
    public selectedItem: SelectorViewModel = null;
    public mouseDown(args: MouseEventArgs): void {
        this.inAction = true;
        super.mouseDown(args);
    }
    public mouseUp(args: MouseEventArgs): void {
        if (this.inAction) {
            let selectedObject: Object[] = this.commandHandler.getSelectedObject();
            if (selectedObject[0]) {
                if (selectedObject[0] instanceof Node) {
                    OrgChartUtilityMethods.showCustomProperty();
                }
            }
        }
        super.mouseUp(args);
    }
}
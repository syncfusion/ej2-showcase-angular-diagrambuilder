import { Node, ToolBase, MouseEventArgs } from '@syncfusion/ej2-diagrams';
import { MindMapUtilityMethods } from './mindmap';
import { OrgChartUtilityMethods } from './orgchart';
import { SelectorViewModel } from './selector';

export class CustomTool {
    public selectedItem: SelectorViewModel = null;
    constructor(selectedItem: SelectorViewModel) {
        this.selectedItem = selectedItem;
    }
    public getTool(action: string): ToolBase {
        let tool: ToolBase;
        if (action === 'leftHandle') {
            let leftTool: LeftExtendTool = new LeftExtendTool(this.selectedItem.selectedDiagram.commandHandler);
            leftTool.selectedItem = this.selectedItem;
            return leftTool;
        } else if (action === 'rightHandle') {
            let rightTool: RightExtendTool = new RightExtendTool(this.selectedItem.selectedDiagram.commandHandler);
            rightTool.selectedItem = this.selectedItem;
            return rightTool;
        } else if (action === 'removeHandle') {
            let removeTool: RemoveTool = new RemoveTool(this.selectedItem.selectedDiagram.commandHandler);
            removeTool.selectedItem = this.selectedItem;
            return removeTool;
        } else if (action === 'orgAddHandle') {
            let orgAddTool: OrgAddHandleTool = new OrgAddHandleTool(this.selectedItem.selectedDiagram.commandHandler);
            orgAddTool.selectedItem = this.selectedItem;
            return orgAddTool;
        } else if (action === 'orgRemoveHandle') {
            let orgRemoveTool: OrgRemoveHandleTool = new OrgRemoveHandleTool(this.selectedItem.selectedDiagram.commandHandler);
            orgRemoveTool.selectedItem = this.selectedItem;
            return orgRemoveTool;
        } else if (action === 'orgEditHandle') {
            let orgEditTool: OrgEditHandleTool = new OrgEditHandleTool(this.selectedItem.selectedDiagram.commandHandler);
            orgEditTool.selectedItem = this.selectedItem;
            return orgEditTool;
        }
        return tool;
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
                    this.selectedItem.utilityMethods.removeChild(this.selectedItem);
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
                    this.selectedItem.utilityMethods.removeChild(this.selectedItem);
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
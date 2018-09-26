import { ContextMenuItemModel, Node, BpmnShapeModel, Diagram, BpmnEvents, BpmnTriggers, BpmnTasks } from '@syncfusion/ej2-diagrams';
import { ContextMenu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { CommonKeyboardCommands } from './commoncommands';

export class CustomContextMenuItems {
    public items: ContextMenuItemModel[] = [
        {
            text: 'Duplicate', id: 'duplicate'
        },
        // {
        //     text: 'Ad-Hoc', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None' }, { text: 'Ad-Hoc' }
        //     ]
        // }, {
        //     text: 'Loop', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None' }, { text: 'Standard' },
        //         { text: 'Parallel Multi-Instance' }, { text: 'Sequence Multi-Instance' }
        //     ]
        // }, {
        //     text: 'Compensation', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None' }, { text: 'Compensation' }
        //     ]
        // }, {
        //     text: 'Activity-Type', iconCss: 'e-copy',
        //     items: [
        //         { text: 'Task' }, { text: 'Collapsed sub-process' }
        //     ]
        // }, {
        //     text: 'Boundry', iconCss: 'e-copy',
        //     items: [
        //         { text: 'Default' }, { text: 'Call' }, { text: 'Event' }
        //     ]
        // }, {
        //     text: 'Data Object', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None' }, { text: 'Input' }, { text: 'Output' }
        //     ]
        // }, {
        //     text: 'Collection', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None' }, { text: 'Collection' }
        //     ]
        // }, {
        //     text: 'Call', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None' }, { text: 'Call' }
        //     ]
        // }, {
        //     text: 'Trigger Result', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None', id: 'triggerTypeNone' }, { text: 'Message', id: 'triggerTypeMessage' }, { text: 'Timer', id: 'triggerTypeTimer' },
        //         { text: 'Conditional', id: 'triggerTypeConditional' }, { text: 'Signal', id: 'triggerTypeSignal' }, { text: 'Multiple', id: 'triggerTypeMultiple' },
        //         { text: 'Parallel', id: 'triggerTypeParallel' }, { text: 'Escalation', id: 'triggerTypeEscalation' }, { text: 'Error', id: 'triggerTypeError' },
        //         { text: 'Compensation', id: 'triggerTypeCompensation' }, { text: 'Link', id: 'triggerTypeLink' }, { text: 'Cancel', id: 'triggerTypeCancel' },
        //         { text: 'Terminate', id: 'triggerTypeTerminate' },
        //     ]
        // },
        // {
        //     text: 'Event Type', iconCss: 'e-copy',
        //     items: [
        //         { text: 'Start', id: 'eventTypeStart' }, { text: 'Non-Interrupting Start', id: 'eventTypeNonStart' },
        //         { text: 'Intermediate', id: 'eventTypeIntermediate' }, { text: 'Non-Interrupting Intermediate', id: 'eventTypeNonIntermediate' },
        //         { text: 'Throwing Intermediate', id: 'eventTypeThrowingIntermediate' },
        //         { text: 'End', id: 'eventTypeEnd' }
        //     ]
        // }, {
        //     text: 'Task Type', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None', id: 'taskTypeNone' }, { text: 'Service', id: 'taskTypeService' },
        //         { text: 'Send', id: 'taskTypeSend' }, { text: 'Receive', id: 'taskTypeReceive' },
        //         { text: 'User', id: 'taskTypeUser' }, { text: 'Manual', id: 'taskTypeManual' },
        //         { text: 'Business Rule', id: 'taskTypeBusinessRule' }, { text: 'Script', id: 'taskTypeScript' },
        //         { text: 'Instantiating Receive', id: 'taskTypeInstantiatingReceive' },
        //     ]
        // }, {
        //     text: 'GateWay', iconCss: 'e-copy',
        //     items: [
        //         { text: 'None' }, { text: 'Exclusive' }, { text: 'Inclusive' }, { text: 'Parallel' },
        //         { text: 'Complex' }, { text: 'Event Based' }, { text: 'Exclusive Event Based' }, { text: 'Parallel Event Based' }
        //     ]
        // }
    ];

    public getHiddenMenuItems(diagram: Diagram): string[] {
        let hiddenItems: string[] = [];
        hiddenItems.push('duplicate');
        // hiddenItems.push('Ad-Hoc', 'Loop', 'Compensation', 'Activity-Type', 'Boundry',
        //     'Data Object', 'Collection', 'Call', 'Trigger Result', 'Event Type', 'Task Type', 'GateWay');
        if (diagram.selectedItems.nodes.length > 0 || diagram.selectedItems.connectors.length > 0) {
            hiddenItems.splice(hiddenItems.indexOf('duplicate'), 1);
        }
        if (diagram.selectedItems.nodes.length === 1 && diagram.selectedItems.connectors.length === 0) {
            let node: Node = diagram.selectedItems.nodes[0] as Node;
            if (node.shape && node.shape.type === 'Bpmn') {
                let bpmnShape: BpmnShapeModel = node.shape as BpmnShapeModel;
                if (bpmnShape.shape === 'Event') {
                    // hiddenItems.splice(hiddenItems.indexOf('Event Type'), 1);
                    // hiddenItems.splice(hiddenItems.indexOf('Trigger Result'), 1);
                }
            }
        }
        return hiddenItems;
    }

    public updateBpmnShape(diagram: Diagram, item: MenuItemModel): void {
        let itemText: string = item.text.replace(/[' ']/g, '').replace(/[-]/g, '');
        if (itemText === 'Duplicate') {
            CommonKeyboardCommands.duplicateSelectedItems();
        } else if (diagram.selectedItems.nodes.length === 1 && diagram.selectedItems.connectors.length === 0) {
            let node: Node = diagram.selectedItems.nodes[0] as Node;
            if (node.shape && node.shape.type === 'Bpmn') {

                let bpmnShape: BpmnShapeModel = node.shape as BpmnShapeModel;
                if (item.id.startsWith('eventType')) {
                    bpmnShape.event.event = itemText as BpmnEvents;
                } else if (item.id.startsWith('triggerType')) {
                    bpmnShape.event.trigger = itemText as BpmnTriggers;
                } else if (item.id.startsWith('taskType')) {
                    // bpmnShape.activity.task.type = itemText as BpmnTasks;
                    bpmnShape.activity.subProcess = {}
                }
            }
        }
    }
}
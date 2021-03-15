/**
 *  Palette handler
 */

import {
    NodeModel, ConnectorModel, SymbolInfo, PortVisibility, PortConstraints,
    PaletteModel, SymbolPreviewModel, MarginModel
} from '@syncfusion/ej2-diagrams';
import { ElectricalShapes } from './electrical-shapes';
import { FloorplanShapes } from './floorplan-shapes';
import { NetworkShapes } from './network-shapes';
import { ExpandMode } from '@syncfusion/ej2-navigations';

export class Palettes {

    private electricalShapes: ElectricalShapes = new ElectricalShapes();
    private floorplans: FloorplanShapes = new FloorplanShapes();
    private networkShapes: NetworkShapes = new NetworkShapes();
    private getBasicShapes(): NodeModel[] {

        let basicShapes: NodeModel[] = [
            { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' }, style: { strokeWidth: 2 } },
            { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeWidth: 2 } },
            { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' }, style: { strokeWidth: 2 } },
            { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' }, style: { strokeWidth: 2 } },
            { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' }, style: { strokeWidth: 2 } },
            { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' }, style: { strokeWidth: 2 } },
            { id: 'Star', shape: { type: 'Basic', shape: 'Star' }, style: { strokeWidth: 2 } },
            { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' }, style: { strokeWidth: 2 } },
            { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' }, style: { strokeWidth: 2 } },
            { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' }, style: { strokeWidth: 2 } },
            { id: 'Trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' }, style: { strokeWidth: 2 } },
            { id: 'Decagon', shape: { type: 'Basic', shape: 'Decagon' }, style: { strokeWidth: 2 } },
            { id: 'RightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' }, style: { strokeWidth: 2 } },
            { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' }, style: { strokeWidth: 2 } },
            { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' }, style: { strokeWidth: 2 } },
        ];

        return basicShapes;
    }

    private getFlowShapes(): NodeModel[] {

        let flowShapes: NodeModel[] = [
            { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' }, style: { strokeWidth: 2 } },
            { id: 'Process', shape: { type: 'Flow', shape: 'Process' }, style: { strokeWidth: 2 } },
            { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' }, style: { strokeWidth: 2 } },
            { id: 'Document', shape: { type: 'Flow', shape: 'Document' }, style: { strokeWidth: 2 } },
            { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' }, style: { strokeWidth: 2 } },
            { id: 'PaperTap', shape: { type: 'Flow', shape: 'PaperTap' }, style: { strokeWidth: 2 } },
            { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' }, style: { strokeWidth: 2 } },
            { id: 'SequentialData', shape: { type: 'Flow', shape: 'SequentialData' }, style: { strokeWidth: 2 } },
            { id: 'Sort', shape: { type: 'Flow', shape: 'Sort' }, style: { strokeWidth: 2 } },
            { id: 'MultiDocument', shape: { type: 'Flow', shape: 'MultiDocument' }, style: { strokeWidth: 2 } },
            { id: 'Collate', shape: { type: 'Flow', shape: 'Collate' }, style: { strokeWidth: 2 } },
            { id: 'SummingJunction', shape: { type: 'Flow', shape: 'SummingJunction' }, style: { strokeWidth: 2 } },
            { id: 'Or', shape: { type: 'Flow', shape: 'Or' }, style: { strokeWidth: 2 } },
            { id: 'InternalStorage', shape: { type: 'Flow', shape: 'InternalStorage' }, style: { strokeWidth: 2 } },
            { id: 'Extract', shape: { type: 'Flow', shape: 'Extract' }, style: { strokeWidth: 2 } },
            { id: 'ManualOperation', shape: { type: 'Flow', shape: 'ManualOperation' }, style: { strokeWidth: 2 } },
            { id: 'Merge', shape: { type: 'Flow', shape: 'Merge' }, style: { strokeWidth: 2 } },
            { id: 'OffPageReference', shape: { type: 'Flow', shape: 'OffPageReference' }, style: { strokeWidth: 2 } },
            { id: 'SequentialAccessStorage', shape: { type: 'Flow', shape: 'SequentialAccessStorage' }, style: { strokeWidth: 2 } },
            { id: 'Annotation', shape: { type: 'Flow', shape: 'Annotation' }, style: { strokeWidth: 2 } },
            { id: 'Annotation2', shape: { type: 'Flow', shape: 'Annotation2' }, style: { strokeWidth: 2 } },
            { id: 'data', shape: { type: 'Flow', shape: 'Data' }, style: { strokeWidth: 2 } },
            { id: 'Card', shape: { type: 'Flow', shape: 'Card' }, style: { strokeWidth: 2 } },
            { id: 'Delay', shape: { type: 'Flow', shape: 'Delay' }, style: { strokeWidth: 2 } },
            { id: 'Preparation', shape: { type: 'Flow', shape: 'Preparation' }, style: { strokeWidth: 2 } },
            { id: 'Display', shape: { type: 'Flow', shape: 'Display' }, style: { strokeWidth: 2 } },
            { id: 'ManualInput', shape: { type: 'Flow', shape: 'ManualInput' }, style: { strokeWidth: 2 } },
            { id: 'LoopLimit', shape: { type: 'Flow', shape: 'LoopLimit' }, style: { strokeWidth: 2 } },
            { id: 'StoredData', shape: { type: 'Flow', shape: 'StoredData' }, style: { strokeWidth: 2 } }
        ];

        return flowShapes;
    }

    private getBPMNShapes(): NodeModel[] {

        let bpmnShapes: NodeModel[] = [
            {
                id: 'BPMNStart', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start', trigger: 'None' } },
            },
            {
                id: 'Intermediate', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Intermediate', trigger: 'None' } },
            },
            {
                id: 'End', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End', trigger: 'None' } },
            },
            {
                id: 'Gateway', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Gateway' }
            },
            {
                id: 'Task', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task' } }
            },
            {
                id: 'SubProcessEventBased', style: { strokeWidth: 2 }, shape: {
                    type: 'Bpmn', shape: 'Activity', activity: {
                        activity: 'SubProcess',
                        subProcess: { type: 'Transaction', transaction: { success: { visible: false }, failure: { visible: false }, cancel: { visible: false } } }
                    },
                },
            },
            {
                id: 'Message', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Message' }
            },
            {
                id: 'DataObject', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'DataObject' }
            },
            {
                id: 'DataSource', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'DataSource' }
            },
            {
                id: 'Activity', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Activity' }
            },
            {
                id: 'Group', style: { strokeWidth: 2 }, shape: { type: 'Bpmn', shape: 'Group' }
            },
            // {
            //     id: 'sequenceFlow', shape: { type: 'Bpmn', shape: '' }
            // }
        ];

        return bpmnShapes;
    }

    private getConnectors(): ConnectorModel[] {

        let connectorSymbols: ConnectorModel[] = [
            {
                id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                targetDecorator: { shape: 'Arrow', style: { strokeWidth: 2 } }, style: { strokeWidth: 2 }
            },
            {
                id: 'Link2', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                targetDecorator: { shape: 'Arrow', style: { strokeWidth: 2 } }, style: { strokeWidth: 2, strokeDashArray: '3,3' }
            },
            {
                id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                style: { strokeWidth: 2 }, targetDecorator: { shape: 'None' }
            },
            {
                id: 'Link4', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                style: { strokeWidth: 2, strokeDashArray: '3,3' }, targetDecorator: { shape: 'None' }
            },
            {
                id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                targetDecorator: { shape: 'Arrow', style: { strokeWidth: 2 } }, style: { strokeWidth: 2 }
            },
            {
                id: 'Link22', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                targetDecorator: { shape: 'Arrow', style: { strokeWidth: 2 } }, style: { strokeWidth: 2, strokeDashArray: '3,3' }
            },
            {
                id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                style: { strokeWidth: 2 }, targetDecorator: { shape: 'None' }
            },
            {
                id: 'Link24', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                style: { strokeWidth: 2, strokeDashArray: '3,3' }, targetDecorator: { shape: 'None' }
            },
            {
                id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                style: { strokeWidth: 2 }, targetDecorator: { shape: 'None' }
            },
            {
                id: 'Link34', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 },
                style: { strokeWidth: 2, strokeDashArray: '3,3' }, targetDecorator: { shape: 'None' }
            }
        ];

        return connectorSymbols;
    }


    public palettes: PaletteModel[] = [
        { id: 'flow', expanded: true, symbols: this.getFlowShapes(), title: 'Flow Shapes' },
        { id: 'basic', expanded: false, symbols: this.getBasicShapes(), title: 'Basic Shapes' },
        { id: 'bpmn', expanded: false, symbols: this.getBPMNShapes(), title: 'BPMN Shapes' },
        { id: 'connectors', expanded: false, symbols: this.getConnectors(), title: 'Connectors' }
    ];
    public expandMode: ExpandMode = 'Multiple';
    public symbolPreview: SymbolPreviewModel = { height: 100, width: 100 };
    public enableSearch: boolean = true;
    public symbolMargin: MarginModel = { left: 12, right: 12, top: 12, bottom: 12 };

    public getSymbolInfo(symbol: NodeModel): SymbolInfo {
        return { fit: true };
    }

    public setPaletteNodeDefaults(node: NodeModel): void {
        if (!(node.addInfo && (node.addInfo as { [key: string]: Object }).type === 'CustomShapes') && (!node.children)) {
            if (node.id === 'Terminator' || node.id === 'Process') {
                node.width = 130;
                node.height = 65;
            } else {
                node.width = 50;
                node.height = 50;
            }
            node.ports = [
                { offset: { x: 0, y: 0.5 }, style: { fill: 'white' }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                { offset: { x: 0.5, y: 0 }, style: { fill: 'white' }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                { offset: { x: 1, y: 0.5 }, style: { fill: 'white' }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
                { offset: { x: 0.5, y: 1 }, style: { fill: 'white' }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
            ];
            node.style.strokeColor = '#3A3A3A';
        }
    }

    public getPalettes(text: string[]): PaletteModel[] {
        let palettes: PaletteModel[] = [];
        if (text.indexOf('Flow') !== -1) {
            palettes.push({ id: 'flow', expanded: true, symbols: this.getFlowShapes(), title: 'Flow Shapes' });
        }
        if (text.indexOf('Basic') !== -1) {
            palettes.push({ id: 'basic', expanded: false, symbols: this.getBasicShapes(), title: 'Basic Shapes' });
        }
        if (text.indexOf('BPMN') !== -1) {
            palettes.push({ id: 'bpmn', expanded: false, symbols: this.getBPMNShapes(), title: 'BPMN Shapes' });
        }
        if (text.indexOf('Connectors') !== -1) {
            palettes.push({ id: 'connectors', expanded: false, symbols: this.getConnectors(), title: 'Connectors' });
        }
        if (text.indexOf('Electrical') !== -1) {
            palettes = palettes.concat(this.electricalShapes.getElectricalShapes());
        }
        if (text.indexOf('Network') !== -1) {
            palettes.push({ id: 'network', expanded: false, symbols: this.networkShapes.getNetworkShapes(), title: 'Network Shapes' });
        }
        if (text.indexOf('Floorplan') !== -1) {
            palettes.push({ id: 'floorplan', expanded: false, symbols: this.floorplans.getFloorPlans(), title: 'Floorplan Shapes' });
        }
        return palettes;
    }
}
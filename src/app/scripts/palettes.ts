/**
 *  Palette handler
 */

import { NodeModel, ConnectorModel, SymbolPalette, Connector, SymbolInfo, Diagram, PortVisibility, BpmnDiagrams, PortConstraints, NodeConstraints, BpmnShapeModel, PointPortModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);

export function getBasicShapes(): NodeModel[] {

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

export function getFlowShapes(): NodeModel[] {

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

export function getBPMNShapes(): NodeModel[] {

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

        {
            id: 'NonInterruptingIntermediate', width: 35, height: 35, shape: {
                type: 'Bpmn', shape: 'Event',
                event: { event: 'NonInterruptingIntermediate' }
            },
        },

        {
            id: 'Transaction', width: 35, height: 35, offsetX: 300, offsetY: 100,
            constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
            shape: {
                type: 'Bpmn', shape: 'Activity',
                activity: {
                    activity: 'SubProcess', subProcess: {
                        type: 'Transaction', transaction: {
                            cancel: { visible: false }, failure: { visible: false }, success: { visible: false }
                        }
                    }
                }
            }
        }, {
            id: 'Task_Service', width: 35, height: 35, offsetX: 700, offsetY: 700,
            shape: {
                type: 'Bpmn', shape: 'Activity', activity: {
                    activity: 'Task', task: { type: 'Service' }
                },
            }
        },

        {
            id: 'subProcess', width: 520, height: 250, offsetX: 355, offsetY: 230,
            constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
            shape: {
                shape: 'Activity', type: 'Bpmn',
                activity: {
                    activity: 'SubProcess', subProcess: {
                        type: 'Transaction', collapsed: false,
                        processes: [], transaction: {
                            cancel: { visible: false }, failure: { visible: false }, success: { visible: false }
                        }
                    }
                }
            }
        },
    ];

    return bpmnShapes;
}

export function getConnectors(): ConnectorModel[] {

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

let orData: string = 'M21.7,76.5L21.7,76.5c6.4-18.1,6.4-37.8,0-55.9l0-0.1h1.6c21.5,0,41.7,10.4,54.2,28l0,0l0,0  c-12.5,17.6-32.7,28-54.2,28H21.7z M99.5,48.5l-22,0 M0,31.5h25 M0,65.5h25';
let andData: string = 'M21.5,20.5h28a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h-28a0,0,0,0,1,0,0v-56a0,0,0,0,1,0,0Z M78,48.5 L 100,48.5Z M0,32.5 L 21.4,32.5Z M0,65.5 L 21.4,65.5Z';
let notData: string = 'M75.5,50.5l-52,28v-56L75.5,50.5z M81.5,50.5h18 M1.5,50.5h22 M78.5,47.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3  S80.2,47.5,78.5,47.5z';

let orPort: PointPortModel[] = [
    { id: 'Or_port1', offset: { x: 0.01, y: 0.1963 } }, { id: 'Or_port2', offset: { x: 0.26, y: 0.5 } },
    { id: 'Or_port3', offset: { x: 0.01, y: 0.805 } }, { id: 'Or_port4', offset: { x: 0.99, y: 0.5 } }
];
let andPort: PointPortModel[] = [
    { id: 'And_port1', offset: { x: 0.01, y: 0.215 } }, { id: 'And_port2', offset: { x: 0.22, y: 0.5 } },
    { id: 'And_port3', offset: { x: 0.01, y: 0.805 } }, { id: 'And_port4', offset: { x: 0.99, y: 0.5 } }
];
let notPort: PointPortModel[] = [
    { id: 'Not_port1', offset: { x: 0.01, y: 0.5 } }, { id: 'Not_port2', offset: { x: 0.99, y: 0.5 } }
];
let flipPorts: PointPortModel[] = [{ offset: { x: 0.01, y: 0.221 } }, { offset: { x: 0.01, y: 0.779 } }, { offset: { x: 0.99, y: 0.221 } }, { offset: { x: 0.99, y: 0.779 } }];
let jkPorts: PointPortModel[] = [{ offset: { x: 0.01, y: 0.27 } }, { offset: { x: 0.01, y: 0.5 } }, { offset: { x: 0.01, y: 0.720 } }, { offset: { x: 0.99, y: 0.270 } }, { offset: { x: 0.99, y: 0.720 } }, { offset: { x: 0.5, y: 0.01 } }, { offset: { x: 0.5, y: 0.99 } }];
let rPorts: PointPortModel[] = [{ offset: { x: 0.01, y: 0.210 } }, { offset: { x: 0.01, y: 0.778 } }, { offset: { x: 0.5, y: 0.218 } }, { offset: { x: 0.99, y: 0.210 } }, { offset: { x: 0.99, y: 0.778 } }];

let items: (NodeModel | ConnectorModel)[] = [
    { id: 'Or', shape: { type: 'Path', data: orData }, ports: orPort },
    {
        id: 'Nor',
        shape: {
            type: 'Path', data: 'M21.7,76.5L21.7,76.5c6.4-18.1,6.4-37.8,0-55.9l0-0.1h1.6c21.5,0,41.7,10.4,54.2,28l0,0l0,0  c-12.5,17.6-32.7,28-54.2,28H21.7z M83.5,48.5h16 M1.5,32.5h24 M1.5,64.5h24 M80.5,45.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3  S82.2,45.5,80.5,45.5z'
        }
    },
    { id: 'And', shape: { type: 'Path', data: andData }, ports: andPort },
    {
        id: 'Nand',
        shape: {
            type: 'Path', data: 'M49.5,76.5h-28v-56h28c15.5,0,28,12.5,28,28v0C77.5,64,65,76.5,49.5,76.5z M83.5,48.5h16 M1.5,32.5h20   M1.5,65.5h20 M80.5,45.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S82.2,45.5,80.5,45.5z'
        }
    },
    { id: 'not', shape: { type: 'Path', data: notData }, ports: notPort },
    {
        id: 'Buffer', ports: [{ offset: { x: 0.01, y: 0.5 } }, { offset: { x: 0.99, y: 0.5 } }],
        shape: { type: 'Path', data: 'M170.354,66.6523000000002L199.753,83.6253000000002L170.354,100.5983L170.354,66.6523000000002zM199.7534,83.6255000000001L214.5004,83.6255000000001M154.5,83.6255000000001L170.354,83.6255000000001' },
    },
    {
        id: 'NorGate', ports: [{ offset: { x: 0.01, y: 0.19 } }, { offset: { x: 0.01, y: 0.809 } }, { offset: { x: 0.99, y: 0.5 } }],
        shape: {
            type: 'Path', data: 'M14.5055,0.00562288 C14.3031,0.00562288 14.1078,0.0433293 13.9072,0.0542443 L13.9072,49.959 C14.1078,49.9699 14.3031,50.0079 14.5055,50.0079 C23.223,50.0079 30.29,28.3205 30.29,25.004 C30.29,22.2835 23.223,0.00562288 14.5055,0.00562288 z M13.9074,9.48911 L-0.00120828,9.48911 M13.9074,40.5218 L-0.00120828,40.5218 M36.3023,25.005 L50.0033,25.005 M36.2352,25.005 C36.2352,29.5191 35.0457,33.1879 33.5781,33.1879 C32.1105,33.1879 30.921,29.5191 30.921,25.005 C30.921,20.4908 32.1105,16.8223 33.5781,16.8223 C35.0457,16.8223 36.2352,20.4908 36.2352,25.005 z'
        },
    },
    {
        id: 'XorGate', ports: orPort,
        shape: {
            type: 'Path', data: 'M21.7,76.5L21.7,76.5c6.4-18.1,6.4-37.8,0-55.9l0-0.1h1.6c21.5,0,41.7,10.4,54.2,28l0,0l0,0  c-12.5,17.6-32.7,28-54.2,28H21.7z M73.4,48.5L73.4,48.5 M17.5,76.8L17.5,76.8c6.7-18.2,6.7-38.1,0-56.3l0-0.1 M77.5,48.5h22   M0,32.5h21 M0,65.5h21'
        }
    },
    {
        id: 'ChEmitter', ports: orPort,
        shape: {
            type: 'Path', data: 'M75.5,49.5l-52,28v-56L75.5,49.5z M75.5,49.5h24 M1.5,49.5h22 M44.5,45.5h-5v8h5V45.5z M39.5,45.5h10   M34.5,53.5h10'
        }
    },
    {
        id: 'NandGate1', ports: jkPorts,
        shape: {
            type: 'Path', data: 'M173.2472,549L173.2472,539 M173.2472,466L173.2472,456 M154.6192,523L145.2472,518.305L145.2472,527.695L154.6192,523z M191.2472,518L197.2472,518 M125.2472,523L145.2472,523 M125.2472,482L145.2472,482 M201.2472,523L221.2472,523 M201.2472,482L221.2472,482 M196.2262,523.597C196.2162,524.421,196.0452,525.053,195.7132,525.494C195.3812,525.935,194.9122,526.156,194.3072,526.156C193.7012,526.156,193.2282,525.921,192.8892,525.453C192.5482,524.984,192.3782,524.343,192.3782,523.529L192.3782,523.006C192.3882,522.206,192.5622,521.58,192.9022,521.129C193.2432,520.678,193.7082,520.453,194.2972,520.453C194.9152,520.453,195.3922,520.68,195.7252,521.134C196.0592,521.588,196.2262,522.233,196.2262,523.07L196.2262,523.597z M197.1632,523.075C197.1632,522.381,197.0462,521.775,196.8112,521.256C196.5772,520.737,196.2422,520.339,195.8092,520.062C195.3732,519.785,194.8702,519.647,194.2972,519.647C193.7372,519.647,193.2402,519.786,192.8052,520.064C192.3712,520.343,192.0342,520.744,191.7972,521.268C191.5592,521.792,191.4402,522.396,191.4402,523.08L191.4402,523.592C191.4472,524.263,191.5702,524.853,191.8092,525.362C192.0492,525.872,192.3852,526.264,192.8172,526.539C193.2502,526.814,193.7472,526.952,194.3072,526.952C194.5672,526.952,194.8142,526.922,195.0492,526.864L196.5482,528.055L197.1872,527.464L195.9182,526.468C196.3112,526.188,196.6182,525.8,196.8362,525.304C197.0542,524.807,197.1632,524.216,197.1632,523.529L197.1632,523.075z M174.1562,473.249C174.4002,473.439,174.5222,473.709,174.5222,474.057C174.5222,474.405,174.3912,474.681,174.1272,474.882C173.8632,475.084,173.4842,475.185,172.9892,475.185C172.4592,475.185,172.0352,475.061,171.7172,474.812C171.4002,474.562,171.2412,474.223,171.2412,473.793L170.2992,473.793C170.2992,474.207,170.4142,474.576,170.6432,474.902C170.8732,475.228,171.1992,475.484,171.6222,475.671C172.0452,475.858,172.5012,475.952,172.9892,475.952C173.7412,475.952,174.3422,475.778,174.7912,475.432C175.2402,475.085,175.4652,474.624,175.4652,474.047C175.4652,473.686,175.3852,473.372,175.2232,473.105C175.0622,472.838,174.8142,472.604,174.4802,472.404C174.1472,472.204,173.6852,472.021,173.0942,471.854C172.5042,471.688,172.0852,471.505,171.8402,471.304C171.5942,471.104,171.4712,470.858,171.4712,470.568C171.4712,470.206,171.6002,469.923,171.8592,469.719C172.1172,469.516,172.4782,469.414,172.9402,469.414C173.4382,469.414,173.8242,469.537,174.0982,469.784C174.3712,470.03,174.5082,470.369,174.5082,470.8L175.4502,470.8C175.4502,470.406,175.3462,470.043,175.1352,469.711C174.9262,469.379,174.6292,469.119,174.2462,468.93C173.8642,468.741,173.4292,468.647,172.9402,468.647C172.2252,468.647,171.6432,468.83,171.1952,469.196C170.7472,469.562,170.5232,470.025,170.5232,470.585C170.5232,471.08,170.7072,471.496,171.0722,471.833C171.4392,472.17,172.0242,472.454,172.8282,472.685C173.4702,472.871,173.9122,473.059,174.1562,473.249z M171.6712,528.511L173.1062,528.511C173.6012,528.515,173.9792,528.633,174.2422,528.868C174.5042,529.103,174.6352,529.44,174.6352,529.881C174.6352,530.285,174.4972,530.608,174.2232,530.85C173.9472,531.091,173.5772,531.211,173.1112,531.211L171.6712,531.211L171.6712,528.511z M174.8842,534.854L175.8902,534.854L175.8902,534.795L174.2202,531.778C174.6462,531.615,174.9782,531.369,175.2192,531.041C175.4572,530.712,175.5772,530.326,175.5772,529.883C175.5772,529.187,175.3612,528.656,174.9302,528.292C174.4992,527.927,173.8832,527.745,173.0822,527.745L170.7282,527.745L170.7282,534.854L171.6712,534.854L171.6712,531.978L173.3412,531.978L174.8842,534.854z M196.2262,482.597C196.2162,483.421,196.0452,484.053,195.7132,484.494C195.3812,484.935,194.9122,485.156,194.3072,485.156C193.7012,485.156,193.2282,484.921,192.8892,484.453C192.5482,483.984,192.3782,483.343,192.3782,482.529L192.3782,482.006C192.3882,481.206,192.5622,480.58,192.9022,480.129C193.2432,479.678,193.7082,479.453,194.2972,479.453C194.9152,479.453,195.3922,479.68,195.7252,480.134C196.0592,480.588,196.2262,481.233,196.2262,482.07L196.2262,482.597z M197.1632,482.075C197.1632,481.381,197.0462,480.775,196.8112,480.256C196.5772,479.737,196.2422,479.339,195.8092,479.062C195.3732,478.785,194.8702,478.647,194.2972,478.647C193.7372,478.647,193.2402,478.786,192.8052,479.064C192.3712,479.343,192.0342,479.744,191.7972,480.268C191.5592,480.792,191.4402,481.396,191.4402,482.08L191.4402,482.592C191.4472,483.263,191.5702,483.853,191.8092,484.362C192.0492,484.872,192.3852,485.264,192.8172,485.539C193.2502,485.814,193.7472,485.952,194.3072,485.952C194.5672,485.952,194.8142,485.922,195.0492,485.864L196.5482,487.055L197.1872,486.464L195.9182,485.468C196.3112,485.188,196.6182,484.8,196.8362,484.304C197.0542,483.807,197.1632,483.216,197.1632,482.529L197.1632,482.075z M173.0302,499.315C174.0512,499.315,174.8302,499.641,175.3662,500.29C175.9022,500.94,176.1712,501.881,176.1712,503.113L176.1712,503.745C176.1602,504.956,175.8782,505.885,175.3232,506.532C174.7682,507.179,173.9732,507.503,172.9362,507.503L171.6472,507.503L171.6472,499.315L173.0302,499.315z M172.9442,509.097C173.9712,509.097,174.8812,508.875,175.6752,508.433C176.4692,507.99,177.0812,507.36,177.5112,506.542C177.9402,505.725,178.1552,504.776,178.1552,503.698L178.1552,503.128C178.1552,502.065,177.9412,501.123,177.5152,500.3C177.0882,499.477,176.4842,498.842,175.7062,498.394C174.9282,497.946,174.0352,497.722,173.0302,497.722L169.6712,497.722L169.6712,509.097L172.9442,509.097z M150.7652,479.511C151.4612,479.518,151.9992,479.745,152.3792,480.193C152.7582,480.641,152.9472,481.269,152.9472,482.077L152.9472,482.492C152.9472,483.323,152.7462,483.963,152.3442,484.413C151.9422,484.863,151.3802,485.087,150.6572,485.087L149.6712,485.087L149.6712,479.511L150.7652,479.511z M150.7012,485.854C151.3392,485.848,151.8982,485.709,152.3792,485.439C152.8582,485.169,153.2282,484.781,153.4862,484.277C153.7462,483.772,153.8752,483.185,153.8752,482.514L153.8752,482.06C153.8722,481.406,153.7402,480.826,153.4822,480.322C153.2232,479.817,152.8562,479.428,152.3812,479.155C151.9052,478.881,151.3582,478.745,150.7402,478.745L148.7332,478.745L148.7332,485.854L150.7012,485.854z M145.2382,466L201.2552,466L201.2552,539L145.2382,539z'
        }
    },
    {
        id: 'Flipflop', ports: flipPorts,
        shape: {
            type: 'Path', data: 'M21.5,13.5h57v73h-57V13.5z M29.8,26.2h-5.4V27h2.2v6.4h0.9V27h2.2V26.2z M54.2,45.2h-9v1.5h3.5v9.9h1.9v-9.9  h3.6V45.2z M74.5,29.2c0-0.9-0.3-1.6-0.8-2.2c-0.5-0.6-1.2-0.9-2.1-0.9c-0.8,0-1.5,0.3-2,0.9s-0.8,1.3-0.8,2.2v1.3  c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2l0.6-0.6l-1.2-1.1c0.4-0.3,0.7-0.6,0.9-1.1  s0.3-0.9,0.3-1.4V29.2z M73.6,30.4c0,0.7-0.2,1.2-0.5,1.6c-0.4,0.4-0.8,0.6-1.5,0.6c-0.6,0-1-0.2-1.4-0.6c-0.3-0.4-0.5-1-0.5-1.6  v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6c0.6,0,1.1,0.2,1.5,0.6s0.5,1,0.5,1.6V30.4z M74.5,70.2c0-0.9-0.3-1.6-0.8-2.2  c-0.5-0.6-1.2-0.9-2.1-0.9c-0.8,0-1.5,0.3-2,0.9s-0.8,1.3-0.8,2.2v1.3c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0  c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2l0.6-0.6l-1.2-1.1c0.4-0.3,0.7-0.6,0.9-1.1s0.3-0.9,0.3-1.4V70.2z M73.6,71.4c0,0.7-0.2,1.2-0.5,1.6  c-0.4,0.4-0.8,0.6-1.5,0.6c-0.6,0-1-0.2-1.4-0.6c-0.3-0.4-0.5-1-0.5-1.6v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6  c0.6,0,1.1,0.2,1.5,0.6s0.5,1,0.5,1.6V71.4z M78.5,29.5h20 M78.5,70.5h20 M1.5,29.5h20 M1.5,70.5h20 M68.5,65.5h6 M31.5,70.5l-10-5  v10L31.5,70.5z'
        }
    },
    {
        id: 'RSLatch', ports: flipPorts,
        shape: {
            type: 'Path', data: 'M21.5,11.5h57v73h-57V11.5z M28.5,30.4c-0.3,0.2-0.7,0.3-1.2,0.3c-0.5,0-0.9-0.1-1.3-0.4  c-0.3-0.2-0.5-0.6-0.5-1.1h-0.9c0,0.7,0.3,1.2,0.8,1.6c0.5,0.4,1.2,0.6,1.9,0.6c0.8,0,1.4-0.2,1.8-0.5c0.5-0.3,0.7-0.8,0.7-1.4  c0-0.5-0.2-1-0.6-1.3c-0.4-0.4-1-0.6-1.7-0.8c-0.7-0.2-1.1-0.3-1.4-0.5c-0.3-0.2-0.4-0.5-0.4-0.8c0-0.4,0.1-0.6,0.4-0.9  s0.6-0.3,1.1-0.3c0.5,0,0.9,0.1,1.2,0.4s0.4,0.6,0.4,1h0.9c0-0.6-0.2-1.1-0.7-1.5s-1.1-0.6-1.9-0.6c-0.7,0-1.3,0.2-1.8,0.5  c-0.4,0.4-0.7,0.8-0.7,1.4c0,0.5,0.2,1,0.6,1.3s1,0.6,1.8,0.8c0.6,0.2,1.1,0.3,1.3,0.6s0.4,0.5,0.4,0.8  C28.9,29.9,28.8,30.2,28.5,30.4z M27.7,69.3c0.4,0,0.7,0.1,0.9,0.3s0.3,0.5,0.3,0.9v0.6c0,0.2,0,0.4,0.1,0.7s0.1,0.4,0.2,0.5h0.9  v-0.1c-0.1-0.1-0.2-0.3-0.3-0.4s-0.1-0.4-0.1-0.6v-0.7c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.3-0.5-0.5-0.9-0.6c0.4-0.2,0.7-0.4,0.9-0.6  c0.2-0.3,0.3-0.6,0.3-1c0-0.7-0.2-1.2-0.6-1.5c-0.4-0.3-1-0.5-1.8-0.5H25v7.1h0.9v-3.1H27.7z M25.9,66h1.6c0.5,0,0.9,0.1,1.1,0.3  s0.4,0.5,0.4,0.9c0,0.4-0.1,0.8-0.4,1c-0.2,0.2-0.6,0.3-1.2,0.3h-1.6V66z M49.5,54.6c1.6,0,2.9-0.4,3.8-1.3c0.9-0.9,1.4-2.1,1.4-3.6  v-1.5c0-1.5-0.5-2.7-1.4-3.6c-0.9-0.9-2.1-1.4-3.7-1.4H46v11.4H49.5z M49.5,44.7c1.1,0,1.9,0.3,2.4,0.9c0.5,0.6,0.8,1.4,0.8,2.5v1.5  c0,1.1-0.3,1.9-0.8,2.5s-1.4,0.9-2.5,0.9h-1.5v-8.3H49.5z M74.5,27.2c0-0.9-0.3-1.6-0.8-2.2c-0.5-0.6-1.2-0.9-2.1-0.9  c-0.8,0-1.5,0.3-2,0.9s-0.8,1.3-0.8,2.2v1.3c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2  l0.6-0.6l-1.2-1.1c0.4-0.3,0.7-0.6,0.9-1.1s0.3-0.9,0.3-1.4V27.2z M73.6,28.4c0,0.7-0.2,1.2-0.5,1.6c-0.4,0.4-0.8,0.6-1.5,0.6  c-0.6,0-1-0.2-1.4-0.6c-0.3-0.4-0.5-1-0.5-1.6v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6c0.6,0,1.1,0.2,1.5,0.6  s0.5,1,0.5,1.6V28.4z M74.5,68.2c0-0.9-0.3-1.6-0.8-2.2c-0.5-0.6-1.2-0.9-2.1-0.9c-0.8,0-1.5,0.3-2,0.9s-0.8,1.3-0.8,2.2v1.3  c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2l0.6-0.6l-1.2-1.1c0.4-0.3,0.7-0.6,0.9-1.1  s0.3-0.9,0.3-1.4V68.2z M73.6,69.4c0,0.7-0.2,1.2-0.5,1.6c-0.4,0.4-0.8,0.6-1.5,0.6c-0.6,0-1-0.2-1.4-0.6c-0.3-0.4-0.5-1-0.5-1.6  v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6c0.6,0,1.1,0.2,1.5,0.6s0.5,1,0.5,1.6V69.4z M78.5,27.5h20 M78.5,68.5h20   M1.5,27.5h20 M1.5,68.5h20 M68.5,63.5h6'
        }
    },
    {
        id: 'RSLatchSync', ports: rPorts,
        shape: {
            type: 'Path', data: 'M21.5,11.5h56v72h-56V11.5z M28.5,29.4c-0.3,0.2-0.7,0.3-1.2,0.3c-0.5,0-0.9-0.1-1.3-0.4  c-0.3-0.2-0.5-0.6-0.5-1.1h-0.9c0,0.7,0.3,1.2,0.8,1.6c0.5,0.4,1.2,0.6,1.9,0.6c0.8,0,1.4-0.2,1.8-0.5c0.5-0.3,0.7-0.8,0.7-1.4  c0-0.5-0.2-1-0.6-1.3c-0.4-0.4-1-0.6-1.7-0.8c-0.7-0.2-1.1-0.3-1.4-0.5c-0.3-0.2-0.4-0.5-0.4-0.8c0-0.4,0.1-0.6,0.4-0.9  s0.6-0.3,1.1-0.3c0.5,0,0.9,0.1,1.2,0.4s0.4,0.6,0.4,1h0.9c0-0.6-0.2-1.1-0.7-1.5s-1.1-0.6-1.9-0.6c-0.7,0-1.3,0.2-1.8,0.5  c-0.4,0.4-0.7,0.8-0.7,1.4c0,0.5,0.2,1,0.6,1.3s1,0.6,1.8,0.8c0.6,0.2,1.1,0.3,1.3,0.6s0.4,0.5,0.4,0.8  C28.9,28.9,28.8,29.2,28.5,29.4z M27.7,67.3c0.4,0,0.7,0.1,0.9,0.3s0.3,0.5,0.3,0.9v0.6c0,0.2,0,0.4,0.1,0.7s0.1,0.4,0.2,0.5h0.9  v-0.1c-0.1-0.1-0.2-0.3-0.3-0.4s-0.1-0.4-0.1-0.6v-0.7c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.3-0.5-0.5-0.9-0.6c0.4-0.2,0.7-0.4,0.9-0.6  c0.2-0.3,0.3-0.6,0.3-1c0-0.7-0.2-1.2-0.6-1.5c-0.4-0.3-1-0.5-1.8-0.5H25v7.1h0.9v-3.1H27.7z M25.9,64h1.6c0.5,0,0.9,0.1,1.1,0.3  s0.4,0.5,0.4,0.9c0,0.4-0.1,0.8-0.4,1c-0.2,0.2-0.6,0.3-1.2,0.3h-1.6V64z M73.5,26.2c0-0.9-0.3-1.6-0.8-2.2  c-0.5-0.6-1.2-0.9-2.1-0.9c-0.8,0-1.5,0.3-2,0.9s-0.8,1.3-0.8,2.2v1.3c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0  c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2l0.6-0.6l-1.2-1.1c0.4-0.3,0.7-0.6,0.9-1.1s0.3-0.9,0.3-1.4V26.2z M72.6,27.4c0,0.7-0.2,1.2-0.5,1.6  c-0.4,0.4-0.8,0.6-1.5,0.6c-0.6,0-1-0.2-1.4-0.6c-0.3-0.4-0.5-1-0.5-1.6v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6  c0.6,0,1.1,0.2,1.5,0.6s0.5,1,0.5,1.6V27.4z M73.5,67.2c0-0.9-0.3-1.6-0.8-2.2c-0.5-0.6-1.2-0.9-2.1-0.9c-0.8,0-1.5,0.3-2,0.9  s-0.8,1.3-0.8,2.2v1.3c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2l0.6-0.6l-1.2-1.1  c0.4-0.3,0.7-0.6,0.9-1.1s0.3-0.9,0.3-1.4V67.2z M72.6,68.4c0,0.7-0.2,1.2-0.5,1.6c-0.4,0.4-0.8,0.6-1.5,0.6c-0.6,0-1-0.2-1.4-0.6  c-0.3-0.4-0.5-1-0.5-1.6v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6c0.6,0,1.1,0.2,1.5,0.6s0.5,1,0.5,1.6V68.4z M77.5,26.5  h20 M77.5,67.5h20 M1.5,26.5h20 M1.5,67.5h20 M67.5,62.5h6 M1.5,47.5h20 M30.9,47.5l-9.4-4.7v9.4L30.9,47.5z'
        }
    },
    {
        id: 'JKflipflop', ports: jkPorts,
        shape: {
            type: 'Path', data: 'M22.5,14.5h56v72h-56V14.5z M28.9,31.4c0,0.4-0.1,0.7-0.3,1s-0.5,0.4-0.9,0.4c-0.4,0-0.8-0.1-1-0.3  s-0.3-0.6-0.3-1h-0.9c0,0.7,0.2,1.2,0.6,1.5c0.4,0.3,0.9,0.5,1.6,0.5c0.6,0,1.2-0.2,1.6-0.5s0.6-0.9,0.6-1.5v-5.1h-0.9V31.4z   M30.4,73.4h1.1l-3-3.7l2.8-3.4h-1l-2.6,3.2H27v-3.2H26v7.1H27v-3.2h0.9L30.4,73.4z M74.5,29.2c0-0.9-0.3-1.6-0.8-2.2  c-0.5-0.6-1.2-0.9-2.1-0.9c-0.8,0-1.5,0.3-2,0.9s-0.8,1.3-0.8,2.2v1.3c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0  c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2l0.6-0.6l-1.2-1.1c0.4-0.3,0.7-0.6,0.9-1.1s0.3-0.9,0.3-1.4V29.2z M73.6,30.4c0,0.7-0.2,1.2-0.5,1.6  c-0.4,0.4-0.8,0.6-1.5,0.6c-0.6,0-1-0.2-1.4-0.6c-0.3-0.4-0.5-1-0.5-1.6v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6  c0.6,0,1.1,0.2,1.5,0.6s0.5,1,0.5,1.6V30.4z M74.5,70.2c0-0.9-0.3-1.6-0.8-2.2c-0.5-0.6-1.2-0.9-2.1-0.9c-0.8,0-1.5,0.3-2,0.9  s-0.8,1.3-0.8,2.2v1.3c0,0.9,0.3,1.6,0.8,2.2s1.2,0.9,2,0.9c0.2,0,0.3,0,0.5,0c0.2,0,0.3-0.1,0.5-0.1l1.3,1.2l0.6-0.6l-1.2-1.1  c0.4-0.3,0.7-0.6,0.9-1.1s0.3-0.9,0.3-1.4V70.2z M73.6,71.4c0,0.7-0.2,1.2-0.5,1.6c-0.4,0.4-0.8,0.6-1.5,0.6c-0.6,0-1-0.2-1.4-0.6  c-0.3-0.4-0.5-1-0.5-1.6v-1.3c0-0.7,0.2-1.2,0.5-1.6c0.3-0.4,0.8-0.6,1.4-0.6c0.6,0,1.1,0.2,1.5,0.6s0.5,1,0.5,1.6V71.4z M50.7,80.3  c0.4,0,0.7,0.1,0.9,0.3s0.3,0.5,0.3,0.9v0.6c0,0.2,0,0.4,0.1,0.7s0.1,0.4,0.2,0.5h0.9v-0.1c-0.1-0.1-0.2-0.3-0.3-0.4  s-0.1-0.4-0.1-0.6v-0.7c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.3-0.5-0.5-0.9-0.6c0.4-0.2,0.7-0.4,0.9-0.6c0.2-0.3,0.3-0.6,0.3-1  c0-0.7-0.2-1.2-0.6-1.5c-0.4-0.3-1-0.5-1.8-0.5H48v7.1h0.9v-3.1H50.7z M48.9,77h1.6c0.5,0,0.9,0.1,1.1,0.3s0.4,0.5,0.4,0.9  c0,0.4-0.1,0.8-0.4,1c-0.2,0.2-0.6,0.3-1.2,0.3h-1.6V77z M51.5,23.4c-0.3,0.2-0.7,0.3-1.2,0.3c-0.5,0-0.9-0.1-1.3-0.4  c-0.3-0.2-0.5-0.6-0.5-1.1h-0.9c0,0.7,0.3,1.2,0.8,1.6c0.5,0.4,1.2,0.6,1.9,0.6c0.8,0,1.4-0.2,1.8-0.5c0.5-0.3,0.7-0.8,0.7-1.4  c0-0.5-0.2-1-0.6-1.3c-0.4-0.4-1-0.6-1.7-0.8c-0.7-0.2-1.1-0.3-1.4-0.5c-0.3-0.2-0.4-0.5-0.4-0.8c0-0.4,0.1-0.6,0.4-0.9  s0.6-0.3,1.1-0.3c0.5,0,0.9,0.1,1.2,0.4s0.4,0.6,0.4,1h0.9c0-0.6-0.2-1.1-0.7-1.5s-1.1-0.6-1.9-0.6c-0.7,0-1.3,0.2-1.8,0.5  c-0.4,0.4-0.7,0.8-0.7,1.4c0,0.5,0.2,1,0.6,1.3s1,0.6,1.8,0.8c0.6,0.2,1.1,0.3,1.3,0.6s0.4,0.5,0.4,0.8  C51.9,22.9,51.8,23.2,51.5,23.4z M78.5,29.5h20 M78.5,70.5h20 M2.5,29.5h20 M2.5,70.5h20 M68.5,65.5h6 M2.5,50.5h20 M31.9,51.5  l-9.4-4.7v9.4L31.9,51.5z M50.5,14.5v-10 M50.5,96.5v-10'
        }
    },
    {
        id: 'Dflipflop', ports: flipPorts,
        shape: {
            type: 'Path', data: 'M21.2,13.5h57v73h-57V13.5z M78.2,29.5h20 M78.2,70.5h20 M1.2,29.5h20 M1.2,70.5h20 M26.6,33.4  c0.6,0,1.2-0.1,1.7-0.4c0.5-0.3,0.8-0.7,1.1-1.2c0.3-0.5,0.4-1.1,0.4-1.8v-0.5c0-0.7-0.1-1.2-0.4-1.7c-0.3-0.5-0.6-0.9-1.1-1.2  s-1-0.4-1.6-0.4h-2v7.1H26.6z M26.7,27c0.7,0,1.2,0.2,1.6,0.7c0.4,0.4,0.6,1.1,0.6,1.9V30c0,0.8-0.2,1.5-0.6,1.9  c-0.4,0.4-1,0.7-1.7,0.7h-1V27H26.7z M48.9,56.6c1,0,1.9-0.2,2.7-0.7c0.8-0.4,1.4-1.1,1.8-1.9c0.4-0.8,0.6-1.8,0.6-2.8v-0.6  c0-1.1-0.2-2-0.6-2.8c-0.4-0.8-1-1.5-1.8-1.9c-0.8-0.4-1.7-0.7-2.7-0.7h-3.4v11.4H48.9z M48.9,46.8c1,0,1.8,0.3,2.3,1  c0.5,0.7,0.8,1.6,0.8,2.8v0.6c0,1.2-0.3,2.1-0.8,2.8s-1.4,1-2.4,1h-1.3v-8.2H48.9z M74.1,29.6c0-0.7-0.1-1.3-0.4-1.8s-0.6-0.9-1-1.2  c-0.4-0.3-0.9-0.4-1.5-0.4c-0.6,0-1.1,0.1-1.5,0.4c-0.4,0.3-0.8,0.7-1,1.2s-0.4,1.1-0.4,1.8v0.5c0,0.7,0.1,1.3,0.4,1.8  c0.2,0.5,0.6,0.9,1,1.2s0.9,0.4,1.5,0.4c0.3,0,0.5,0,0.7-0.1l1.5,1.2l0.6-0.6l-1.3-1c0.4-0.3,0.7-0.7,0.9-1.2s0.3-1.1,0.3-1.8V29.6z   M73.1,30.1c0,0.8-0.2,1.5-0.5,1.9s-0.8,0.7-1.4,0.7s-1.1-0.2-1.4-0.7c-0.3-0.5-0.5-1.1-0.5-1.9v-0.5c0-0.8,0.2-1.4,0.5-1.9  c0.3-0.5,0.8-0.7,1.4-0.7c0.6,0,1.1,0.2,1.4,0.7c0.3,0.5,0.5,1.1,0.5,1.9V30.1z M74.1,70.6c0-0.7-0.1-1.3-0.4-1.8s-0.6-0.9-1-1.2  c-0.4-0.3-0.9-0.4-1.5-0.4c-0.6,0-1.1,0.1-1.5,0.4c-0.4,0.3-0.8,0.7-1,1.2s-0.4,1.1-0.4,1.8v0.5c0,0.7,0.1,1.3,0.4,1.8  c0.2,0.5,0.6,0.9,1,1.2s0.9,0.4,1.5,0.4c0.3,0,0.5,0,0.7-0.1l1.5,1.2l0.6-0.6l-1.3-1c0.4-0.3,0.7-0.7,0.9-1.2s0.3-1.1,0.3-1.8V70.6z   M73.1,71.1c0,0.8-0.2,1.5-0.5,1.9s-0.8,0.7-1.4,0.7s-1.1-0.2-1.4-0.7c-0.3-0.5-0.5-1.1-0.5-1.9v-0.5c0-0.8,0.2-1.4,0.5-1.9  c0.3-0.5,0.8-0.7,1.4-0.7c0.6,0,1.1,0.2,1.4,0.7c0.3,0.5,0.5,1.1,0.5,1.9V71.1z M68.2,65.5h6 M31.2,70.5l-10-5v10L31.2,70.5z'
        }
    }
];

let umlActivityShapes: NodeModel[] = [
    { id: 'Action', shape: { type: 'UmlActivity', shape: 'Action' } },
    { id: 'Decision', shape: { type: 'UmlActivity', shape: 'Decision' } },
    { id: 'MergeNode', shape: { type: 'UmlActivity', shape: 'MergeNode' } },
    { id: 'InitialNode', shape: { type: 'UmlActivity', shape: 'InitialNode' } },
    { id: 'FinalNode', shape: { type: 'UmlActivity', shape: 'FinalNode' } },
    { id: 'ForkNode', shape: { type: 'UmlActivity', shape: 'ForkNode' } },
    { id: 'JoinNode', shape: { type: 'UmlActivity', shape: 'JoinNode' } },
    { id: 'TimeEvent', shape: { type: 'UmlActivity', shape: 'TimeEvent' } },
    { id: 'AcceptingEvent', shape: { type: 'UmlActivity', shape: 'AcceptingEvent' } },
    { id: 'SendSignal', shape: { type: 'UmlActivity', shape: 'SendSignal' } },
    { id: 'ReceiveSignal', shape: { type: 'UmlActivity', shape: 'ReceiveSignal' } },
    { id: 'StructuredNode', shape: { type: 'UmlActivity', shape: 'StructuredNode' } },
    { id: 'Note', shape: { type: 'UmlActivity', shape: 'Note' } }

];

let swimlaneSymbols: NodeModel[] = [
    {
        id: 'Horizontalswimlane', addInfo: { tooltip: 'Horizontal swimlane' },
        shape: {
            type: 'SwimLane', lanes: [
                {
                    id: 'lane1',
                    style: { strokeColor: 'black' }, height: 60, width: 150,
                    header: { width: 50, height: 50, style: { strokeColor: 'black', fontSize: 11 } },
                }
            ],
            orientation: 'Horizontal', isLane: true
        },
        height: 60,
        width: 140,
        offsetX: 70,
        offsetY: 30,
    }, {
        id: 'Verticalswimlane', addInfo: { tooltip: 'Vertical swimlane' },
        shape: {
            type: 'SwimLane',
            lanes: [
                {
                    id: 'lane1',
                    style: { strokeColor: 'black' }, height: 150, width: 60,
                    header: { width: 50, height: 50, style: { strokeColor: 'black', fontSize: 11 } },
                }
            ],
            orientation: 'Vertical', isLane: true
        },
        height: 140,
        width: 60,
        // style: { fill: '#f5f5f5' },
        offsetX: 70,
        offsetY: 30,
    }, {
        id: 'Verticalphase', addInfo: { tooltip: 'Vertical phase' },
        shape: {
            type: 'SwimLane',
            phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3', strokeColor: '#A9A9A9' }, }],
            annotations: [{ text: '' }],
            orientation: 'Vertical', isPhase: true
        },
        height: 60,
        width: 140
    }, {
        id: 'Horizontalphase', addInfo: { tooltip: 'Horizontal phase' },
        shape: {
            type: 'SwimLane',
            phases: [{ style: { strokeWidth: 1, strokeDashArray: '3,3', strokeColor: '#A9A9A9' }, }],
            annotations: [{ text: '' }],
            orientation: 'Horizontal', isPhase: true
        },
        height: 60,
        width: 140
    }
];

let template1: string = "<g xmlns='http://www.w3.org/2000/svg' id='Server' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <path d='M6,11 L30,11 C31.1045695,11 32,10.1045695 32,9 L32,5 C32,3.8954305 31.1045695,3 30,3 L6,3 C4.8954305,3 4,3.8954305 4,5 L4,9 C4,10.1045695 4.8954305,11 6,11 Z' id='Stroke-61' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/>    <path d='M6,19 L30,19 C31.1045695,19 32,18.1045695 32,17 L32,13 C32,11.8954305 31.1045695,11 30,11 L6,11 C4.8954305,11 4,11.8954305 4,13 L4,17 C4,18.1045695 4.8954305,19 6,19 Z' id='Stroke-61-Copy' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/>    <path d='M6,27 L30,27 C31.1045695,27 32,26.1045695 32,25 L32,21 C32,19.8954305 31.1045695,19 30,19 L6,19 C4.8954305,19 4,19.8954305 4,21 L4,25 C4,26.1045695 4.8954305,27 6,27 Z' id='Stroke-61-Copy-2' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/>    <path d='M18,28 L18,33' id='Stroke-62' stroke='#5C90DF' stroke-width='2'/>    <path d='M5,33 L31,33' id='Stroke-64' stroke='#5C90DF' stroke-width='2' stroke-linecap='round'/>    <path d='M23,7 C23,7.552 22.552,8 22,8 C21.4473333,8 21,7.552 21,7 C21,6.448 21.4473333,6 22,6 C22.552,6 23,6.448 23,7' id='Fill-97' fill='#5C90DF' opacity='0.4'/>    <path d='M23,15 C23,15.552 22.552,16 22,16 C21.4473333,16 21,15.552 21,15 C21,14.448 21.4473333,14 22,14 C22.552,14 23,14.448 23,15' id='Fill-97-Copy-3' fill='#5C90DF' opacity='0.4'/>    <path d='M23,23 C23,23.552 22.552,24 22,24 C21.4473333,24 21,23.552 21,23 C21,22.448 21.4473333,22 22,22 C22.552,22 23,22.448 23,23' id='Fill-97-Copy-6' fill='#5C90DF' opacity='0.4'/>    <path d='M26,7 C26,7.552 25.552,8 25,8 C24.4473333,8 24,7.552 24,7 C24,6.448 24.4473333,6 25,6 C25.552,6 26,6.448 26,7' id='Fill-97-Copy' fill='#5C90DF' opacity='0.7'/>    <path d='M26,15 C26,15.552 25.552,16 25,16 C24.4473333,16 24,15.552 24,15 C24,14.448 24.4473333,14 25,14 C25.552,14 26,14.448 26,15' id='Fill-97-Copy-4' fill='#5C90DF' opacity='0.7'/>    <path d='M26,23 C26,23.552 25.552,24 25,24 C24.4473333,24 24,23.552 24,23 C24,22.448 24.4473333,22 25,22 C25.552,22 26,22.448 26,23' id='Fill-97-Copy-7' fill='#5C90DF' opacity='0.7'/>    <path d='M29,7 C29,7.552 28.552,8 28,8 C27.4473333,8 27,7.552 27,7 C27,6.448 27.4473333,6 28,6 C28.552,6 29,6.448 29,7' id='Fill-97-Copy-2' fill='#5C90DF'/>    <path d='M29,15 C29,15.552 28.552,16 28,16 C27.4473333,16 27,15.552 27,15 C27,14.448 27.4473333,14 28,14 C28.552,14 29,14.448 29,15' id='Fill-97-Copy-5' fill='#5C90DF'/>    <path d='M29,23 C29,23.552 28.552,24 28,24 C27.4473333,24 27,23.552 27,23 C27,22.448 27.4473333,22 28,22 C28.552,22 29,22.448 29,23' id='Fill-97-Copy-8' fill='#5C90DF'/>    <path d='M7,7 L18,7' id='Path-9' stroke='#FFFFFF' stroke-width='2'/>    <path d='M7,15 L18,15' id='Path-9-Copy' stroke='#FFFFFF' stroke-width='2'/>    <path d='M7,23 L18,23' id='Path-9-Copy-2' stroke='#FFFFFF' stroke-width='2'/></g>";
let template2: string = "<g xmlns='http://www.w3.org/2000/svg' id='Laptop' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <path d='M4.23333333,23.0666667 L31.7666667,23.0666667 C31.8218951,23.0666667 31.8666667,23.0218951 31.8666667,22.9666667 L31.8666667,6.1 C31.8666667,6.04477153 31.8218951,6 31.7666667,6 L4.23333333,6 C4.17810486,6 4.13333333,6.04477153 4.13333333,6.1 L4.13333333,22.9666667 C4.13333333,23.0218951 4.17810486,23.0666667 4.23333333,23.0666667 Z' id='Fill-60' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/>    <path d='M4,27.3333333 L32,27.3333333 C33.1045695,27.3333333 34,26.4379028 34,25.3333333 L34,23.1666667 C34,23.1114382 33.9552285,23.0666667 33.9,23.0666667 L2.1,23.0666667 C2.04477153,23.0666667 2,23.1114382 2,23.1666667 L2,25.3333333 C2,26.4379028 2.8954305,27.3333333 4,27.3333333 Z' id='Fill-60-Copy' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/>    <path d='M14.4190267,25.2 L21.5809733,25.2 C21.9596713,25.2 22.2666667,24.8930046 22.2666667,24.5143066 L22.2666667,23.9286133 C22.2666667,23.8733848 22.2218951,23.8286133 22.1666667,23.8286133 L13.8333333,23.8286133 C13.7781049,23.8286133 13.7333333,23.8733848 13.7333333,23.9286133 L13.7333333,24.5143066 C13.7333333,24.8930046 14.0403287,25.2 14.4190267,25.2 Z' id='Fill-60-Copy' fill='#5C90DF'/></g>";
let template3: string = "<g xmlns='http://www.w3.org/2000/svg' id='Wireless-Modem' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <path d='M6.01,24 L10.99,24 C10.9955228,24 11,23.9955228 11,23.99 L11,20 L6,20 L6,23.99 C6,23.9955228 6.00447715,24 6.01,24 Z' id='Stroke-84' stroke='#5C90DF' stroke-width='2'/>    <path d='M25.01,24 L29.99,24 C29.9955228,24 30,23.9955228 30,23.99 L30,20 L25,20 L25,23.99 C25,23.9955228 25.0044772,24 25.01,24 Z' id='Stroke-84-Copy' stroke='#5C90DF' stroke-width='2'/>    <polygon id='Fill-81' fill='#C6D9F6' points='3 22 33 22 33 9 3 9'/>    <path d='M2.1,22 L33.9,22 C33.9552285,22 34,21.9552285 34,21.9 L34,10.1 C34,10.0447715 33.9552285,10 33.9,10 L2.1,10 C2.04477153,10 2,10.0447715 2,10.1 L2,21.9 C2,21.9552285 2.04477153,22 2.1,22 Z' id='Stroke-82' stroke='#5C90DF' stroke-width='2'/>    <path d='M25,16 C25,16.552 24.552,17 24,17 C23.4473333,17 23,16.552 23,16 C23,15.448 23.4473333,15 24,15 C24.552,15 25,15.448 25,16' id='Fill-97' fill='#5C90DF' opacity='0.4'/>    <path d='M7,16 C7,16.552 6.552,17 6,17 C5.44733333,17 5,16.552 5,16 C5,15.448 5.44733333,15 6,15 C6.552,15 7,15.448 7,16' id='Fill-97-Copy-3' fill='#5C90DF'/>    <path d='M28,16 C28,16.552 27.552,17 27,17 C26.4473333,17 26,16.552 26,16 C26,15.448 26.4473333,15 27,15 C27.552,15 28,15.448 28,16' id='Fill-97-Copy' fill='#5C90DF' opacity='0.7'/>    <path d='M31,16 C31,16.552 30.552,17 30,17 C29.4473333,17 29,16.552 29,16 C29,15.448 29.4473333,15 30,15 C30.552,15 31,15.448 31,16' id='Fill-97-Copy-2' fill='#5C90DF'/>    <path d='M9,16 L20,16' id='Path-9' stroke='#FFFFFF' stroke-width='2'/>    <path d='M9,9 L9,4' id='Path-15' stroke='#5C90DF' stroke-width='2' stroke-linecap='round'/>    <path d='M27,9 L27,4' id='Path-15-Copy' stroke='#5C90DF' stroke-width='2' stroke-linecap='round'/></g>";
let template4: string = "<g xmlns='http://www.w3.org/2000/svg' id='Remote-Controller' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <path d='M16,13 L33,13 C34.1045695,13 35,13.8954305 35,15 L35,47 C35,48.1045695 34.1045695,49 33,49 L16,49 C14.8954305,49 14,48.1045695 14,47 L14,15 C14,13.8954305 14.8954305,13 16,13 Z M22.318788,9.04853283 C21.9136553,9.42388058 21.2809508,9.39973509 20.9056031,8.99460237 C20.5302553,8.58946966 20.5544008,7.95676524 20.9595335,7.58141749 C21.980632,6.63538923 23.1341286,6.07050294 24.3998438,5.90911287 C26.331275,5.66283803 28.1728069,6.23074486 29.6184833,7.58522642 C30.0215124,7.96283201 30.0421222,8.59566147 29.6645166,8.99869058 C29.286911,9.40171968 28.6540815,9.42232951 28.2510524,9.04472391 C27.2480078,8.10495237 26.0027303,7.72092342 24.6528136,7.89304993 C23.8141374,7.99998869 23.0428553,8.37769824 22.318788,9.04853283 Z M18.8057262,6.28094293 C18.4617358,6.71301827 17.8326103,6.78442526 17.400535,6.44043493 C16.9684596,6.09644459 16.8970526,5.46731906 17.241043,5.03524373 C18.7715437,3.11283038 20.819994,1.92798524 23.3413903,1.49930095 C27.108313,0.858854003 30.5224848,2.07385781 33.1555518,4.9876284 C33.5258394,5.39739122 33.4938384,6.029747 33.0840755,6.40003455 C32.6743127,6.77032211 32.0419569,6.73832108 31.6716694,6.32855826 C29.4931668,3.91781189 26.7630734,2.94625156 23.676617,3.47100658 C21.6342288,3.81825058 20.0255997,4.74869848 18.8057262,6.28094293 Z' id='Combined-Shape' fill='#5C90DF' fill-rule='nonzero'/>    <path d='M16,15 L33,15 L33,47 L16,47 L16,15 Z M21.5,36 C22.3284271,36 23,35.3284271 23,34.5 C23,33.6715729 22.3284271,33 21.5,33 C20.6715729,33 20,33.6715729 20,34.5 C20,35.3284271 20.6715729,36 21.5,36 Z M27.5,36 C28.3284271,36 29,35.3284271 29,34.5 C29,33.6715729 28.3284271,33 27.5,33 C26.6715729,33 26,33.6715729 26,34.5 C26,35.3284271 26.6715729,36 27.5,36 Z M21.5,43 C22.3284271,43 23,42.3284271 23,41.5 C23,40.6715729 22.3284271,40 21.5,40 C20.6715729,40 20,40.6715729 20,41.5 C20,42.3284271 20.6715729,43 21.5,43 Z M27.5,43 C28.3284271,43 29,42.3284271 29,41.5 C29,40.6715729 28.3284271,40 27.5,40 C26.6715729,40 26,40.6715729 26,41.5 C26,42.3284271 26.6715729,43 27.5,43 Z M24.5,29 C27.5375661,29 30,26.5375661 30,23.5 C30,20.4624339 27.5375661,18 24.5,18 C21.4624339,18 19,20.4624339 19,23.5 C19,26.5375661 21.4624339,29 24.5,29 Z M24.5,27 C22.5670034,27 21,25.4329966 21,23.5 C21,21.5670034 22.5670034,20 24.5,20 C26.4329966,20 28,21.5670034 28,23.5 C28,25.4329966 26.4329966,27 24.5,27 Z M24.5,25 C25.3284271,25 26,24.3284271 26,23.5 C26,22.6715729 25.3284271,22 24.5,22 C23.6715729,22 23,22.6715729 23,23.5 C23,24.3284271 23.6715729,25 24.5,25 Z' id='Combined-Shape' fill='#FFFFFF' fill-rule='nonzero' opacity='0.65'/></g>";
let template5 = "<g xmlns='http://www.w3.org/2000/svg' id='Analog-IO' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <g id='Group-5' transform='translate(5.000000, 1.000000)' fill='#5C90DF' fill-rule='nonzero'>        <rect id='Rectangle' x='0' y='0' width='40' height='48' rx='2'/>    </g>    <path d='M37.875,43.625 L37.875,45.0625 L35,45.0625 L35,43.625 L33.5625,43.625 L33.5625,40.75 L39.3125,40.75 L39.3125,43.625 L37.875,43.625 Z M30.6875,43.625 L30.6875,45.0625 L27.8125,45.0625 L27.8125,43.625 L26.375,43.625 L26.375,40.75 L32.125,40.75 L32.125,43.625 L30.6875,43.625 Z M16.3125,43.625 L16.3125,45.0625 L13.4375,45.0625 L13.4375,43.625 L12,43.625 L12,40.75 L17.75,40.75 L17.75,43.625 L16.3125,43.625 Z M23.5,43.625 L23.5,45.0625 L20.625,45.0625 L20.625,43.625 L19.1875,43.625 L19.1875,40.75 L24.9375,40.75 L24.9375,43.625 L23.5,43.625 Z M20.5519779,20.8010161 L19.2894463,19.9910693 C21.3482942,16.7817717 23.8315347,16.2736347 26.2346733,18.6830634 C27.8849449,20.3376546 29.1547317,20.0007128 30.5921132,17.3803418 L31.9072464,18.1017465 C30.02634,21.5306709 27.5987739,22.1748329 25.1726277,19.7423364 C23.4993485,18.0646774 22.1272967,18.3454356 20.5519779,20.8010161 Z' id='Combined-Shape' fill='#FFFFFF'/>    <path d='M43,37 L7,37 L7,3 L43,3 L43,37 Z M43,39 L43,47 L7,47 L7,39 L43,39 Z M16.5,13 C16.2238576,13 16,13.2238576 16,13.5 L16,24.5 C16,24.7761424 16.2238576,25 16.5,25 L34.5,25 C34.7761424,25 35,24.7761424 35,24.5 L35,13.5 C35,13.2238576 34.7761424,13 34.5,13 L16.5,13 Z M38.5,8 C39.3284271,8 40,7.32842712 40,6.5 C40,5.67157288 39.3284271,5 38.5,5 C37.6715729,5 37,5.67157288 37,6.5 C37,7.32842712 37.6715729,8 38.5,8 Z M11.5,8 C12.3284271,8 13,7.32842712 13,6.5 C13,5.67157288 12.3284271,5 11.5,5 C10.6715729,5 10,5.67157288 10,6.5 C10,7.32842712 10.6715729,8 11.5,8 Z M11.5,34 C12.3284271,34 13,33.3284271 13,32.5 C13,31.6715729 12.3284271,31 11.5,31 C10.6715729,31 10,31.6715729 10,32.5 C10,33.3284271 10.6715729,34 11.5,34 Z M38.5,34 C39.3284271,34 40,33.3284271 40,32.5 C40,31.6715729 39.3284271,31 38.5,31 C37.6715729,31 37,31.6715729 37,32.5 C37,33.3284271 37.6715729,34 38.5,34 Z' id='Combined-Shape' fill='#FFFFFF' fill-rule='nonzero' opacity='0.65'/></g>";
let template6 = "<g xmlns='http://www.w3.org/2000/svg' id='Sensor' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <path d='M25,32.0982549 C21.1340068,32.0982549 18,28.9642482 18,25.0982549 C18,21.2322617 21.1340068,18.0982549 25,18.0982549 C28.8659932,18.0982549 32,21.2322617 32,25.0982549 C32,28.9642482 28.8659932,32.0982549 25,32.0982549 Z M14.6091201,15.7156893 C14.9793682,15.3058909 15.6117209,15.273829 16.0215193,15.6440772 C16.4313178,16.0143254 16.4633796,16.646678 16.0931314,17.0564765 C14.1138639,19.2471713 13,22.0846194 13,25.0982549 C13,28.1352128 14.131278,30.9929705 16.1382115,33.1896514 C16.5107285,33.5973885 16.4821771,34.2299094 16.0744401,34.6024264 C15.666703,34.9749435 15.0341821,34.946392 14.6616651,34.538655 C12.3212022,31.9769109 11,28.6393796 11,25.0982549 C11,21.5843481 12.3008791,18.2704987 14.6091201,15.7156893 Z M10.5120899,11.31051 C10.8928857,10.9104938 11.525859,10.8949127 11.9258752,11.2757085 C12.3258913,11.6565044 12.3414725,12.2894776 11.9606766,12.6894938 C8.79557785,16.0143479 7,20.4139647 7,25.0982549 C7,29.7292172 8.75468072,34.0826524 11.8555952,37.3956927 C12.2329975,37.7989122 12.2120686,38.4317312 11.8088491,38.8091335 C11.4056296,39.1865358 10.7728106,39.1656069 10.3954083,38.7623874 C6.95099947,35.0823551 5,30.2418449 5,25.0982549 C5,19.8953983 6.99644701,15.0036015 10.5120899,11.31051 Z M35.3908863,34.480819 C35.0206381,34.8906174 34.3882854,34.9226792 33.978487,34.552431 C33.5686886,34.1821829 33.5366268,33.5498302 33.9068749,33.1400318 C35.8861425,30.949337 37.0000063,28.1118888 37.0000063,25.0982533 C37.0000063,22.0612954 35.8687283,19.2035377 33.8617949,17.0068568 C33.4892778,16.5991198 33.5178292,15.9665988 33.9255663,15.5940818 C34.3333033,15.2215647 34.9658242,15.2501162 35.3383413,15.6578532 C37.6788041,18.2195973 39.0000063,21.5571287 39.0000063,25.0982533 C39.0000063,28.6121601 37.6991272,31.9260095 35.3908863,34.480819 Z M39.487912,38.8860014 C39.1071162,39.2860176 38.4741429,39.3015987 38.0741267,38.9208029 C37.6741106,38.540007 37.6585294,37.9070337 38.0393253,37.5070176 C41.2044241,34.1821635 43.0000019,29.7825467 43.0000019,25.0982565 C43.0000019,20.4672942 41.2453212,16.113859 38.1444067,12.8008187 C37.7670044,12.3975992 37.7879333,11.7647802 38.1911528,11.3873779 C38.5943723,11.0099756 39.2271913,11.0309045 39.6045936,11.434124 C43.0490024,15.1141563 45.0000019,19.9546665 45.0000019,25.0982565 C45.0000019,30.3011131 43.0035549,35.1929099 39.487912,38.8860014 Z' id='Combined-Shape' fill='#5C90DF' fill-rule='nonzero'/></g>";
let template7 = "<g xmlns='http://www.w3.org/2000/svg' id='Driver' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <rect id='Rectangle' fill='#5C90DF' fill-rule='nonzero' x='5' y='1' width='40' height='48' rx='2'/>    <path d='M32,47 L29,47 L29,43 L32,43 L32,47 Z M34,47 L34,43 L43,43 L43,47 L34,47 Z M27,47 L24,47 L24,43 L27,43 L27,47 Z M22,47 L19,47 L19,43 L22,43 L22,47 Z M17,47 L7,47 L7,43 L17,43 L17,47 Z M43,41 L7,41 L7,3 L43,3 L43,41 Z M38.5,8 C39.3284271,8 40,7.32842712 40,6.5 C40,5.67157288 39.3284271,5 38.5,5 C37.6715729,5 37,5.67157288 37,6.5 C37,7.32842712 37.6715729,8 38.5,8 Z M11.5,8 C12.3284271,8 13,7.32842712 13,6.5 C13,5.67157288 12.3284271,5 11.5,5 C10.6715729,5 10,5.67157288 10,6.5 C10,7.32842712 10.6715729,8 11.5,8 Z M38.5,38 C39.3284271,38 40,37.3284271 40,36.5 C40,35.6715729 39.3284271,35 38.5,35 C37.6715729,35 37,35.6715729 37,36.5 C37,37.3284271 37.6715729,38 38.5,38 Z M11.5,38 C12.3284271,38 13,37.3284271 13,36.5 C13,35.6715729 12.3284271,35 11.5,35 C10.6715729,35 10,35.6715729 10,36.5 C10,37.3284271 10.6715729,38 11.5,38 Z M25,33 C31.0751322,33 36,28.0751322 36,22 C36,15.9248678 31.0751322,11 25,11 C18.9248678,11 14,15.9248678 14,22 C14,28.0751322 18.9248678,33 25,33 Z M25,31 C20.0294373,31 16,26.9705627 16,22 C16,17.0294373 20.0294373,13 25,13 C29.9705627,13 34,17.0294373 34,22 C34,26.9705627 29.9705627,31 25,31 Z M25,26 C27.209139,26 29,24.209139 29,22 C29,19.790861 27.209139,18 25,18 C22.790861,18 21,19.790861 21,22 C21,24.209139 22.790861,26 25,26 Z M25,24 C23.8954305,24 23,23.1045695 23,22 C23,20.8954305 23.8954305,20 25,20 C26.1045695,20 27,20.8954305 27,22 C27,23.1045695 26.1045695,24 25,24 Z' id='Combined-Shape' fill='#FFFFFF' fill-rule='nonzero' opacity='0.65'/></g>";
let template8 = "<g xmlns='http://www.w3.org/2000/svg' id='HMI' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>    <g id='Group-5' transform='translate(5.000000, 1.000000)' fill='#5C90DF' fill-rule='nonzero'>        <rect id='Rectangle' x='0' y='0' width='40' height='48' rx='2'/>    </g>    <path d='M43,37 L7,37 L7,3 L43,3 L43,37 Z M43,39 L43,47 L7,47 L7,39 L43,39 Z M38.5,8 C39.3284271,8 40,7.32842712 40,6.5 C40,5.67157288 39.3284271,5 38.5,5 C37.6715729,5 37,5.67157288 37,6.5 C37,7.32842712 37.6715729,8 38.5,8 Z M11.5,8 C12.3284271,8 13,7.32842712 13,6.5 C13,5.67157288 12.3284271,5 11.5,5 C10.6715729,5 10,5.67157288 10,6.5 C10,7.32842712 10.6715729,8 11.5,8 Z M11.5,34 C12.3284271,34 13,33.3284271 13,32.5 C13,31.6715729 12.3284271,31 11.5,31 C10.6715729,31 10,31.6715729 10,32.5 C10,33.3284271 10.6715729,34 11.5,34 Z M38.5,34 C39.3284271,34 40,33.3284271 40,32.5 C40,31.6715729 39.3284271,31 38.5,31 C37.6715729,31 37,31.6715729 37,32.5 C37,33.3284271 37.6715729,34 38.5,34 Z' id='Combined-Shape' fill='#FFFFFF' fill-rule='nonzero' opacity='0.65'/>    <path d='M37.875,43.625 L37.875,45.0625 L35,45.0625 L35,43.625 L33.5625,43.625 L33.5625,40.75 L39.3125,40.75 L39.3125,43.625 L37.875,43.625 Z M30.6875,43.625 L30.6875,45.0625 L27.8125,45.0625 L27.8125,43.625 L26.375,43.625 L26.375,40.75 L32.125,40.75 L32.125,43.625 L30.6875,43.625 Z M16.3125,43.625 L16.3125,45.0625 L13.4375,45.0625 L13.4375,43.625 L12,43.625 L12,40.75 L17.75,40.75 L17.75,43.625 L16.3125,43.625 Z M23.5,43.625 L23.5,45.0625 L20.625,45.0625 L20.625,43.625 L19.1875,43.625 L19.1875,40.75 L24.9375,40.75 L24.9375,43.625 L23.5,43.625 Z' id='Combined-Shape' fill='#FFFFFF'/></g>";
let template10 = "<g xmlns='http://www.w3.org/2000/svg' id='Virtual-Server-Copy' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M28.9678852,14.1906725 C28.6479482,14.0043396 28.3104835,13.8355344 27.9613092,13.6844026 C28.0079288,13.2830086 28.0368752,12.8815419 28.0368752,12.4801479 C28.0368752,8.26751125 25.3719945,4.46826891 21.4096926,3.03695283 C21.0957922,2.92611311 20.746618,3.07157206 20.6127958,3.38016323 C20.4789735,3.68839074 20.6068319,4.04352877 20.9037137,4.19466062 C23.0563607,5.29440302 24.3947285,7.48196019 24.3947285,9.89650604 C24.3947285,10.6820571 24.2492695,11.4559715 23.9699884,12.1832662 C22.3407026,10.8158793 20.2403481,9.99570905 17.953588,9.99570905 C15.6961378,9.99570905 13.6191294,10.7985697 11.9958075,12.1366466 C11.728163,11.4209886 11.588377,10.6647475 11.588377,9.90246986 C11.588377,7.487924 12.9267448,5.30007592 15.0793918,4.20062444 C15.3762735,4.04920167 15.5041319,3.69435456 15.3703097,3.38583613 C15.2364875,3.07753588 14.8873133,2.93207693 14.5731219,3.04262573 C10.6110383,4.47394181 7.94623031,8.26751125 7.94623031,12.4858208 C7.94623031,12.8815419 7.96950374,13.2830086 8.01612334,13.6844026 C7.66694912,13.8355344 7.32941163,14.0043396 7.00358358,14.1963454 C3.3671098,16.2966999 1.41221423,20.4976999 2.1568186,24.6520802 C2.20911109,24.9603077 2.47704648,25.1756597 2.7909469,25.1756597 C3.14012111,25.1696959 3.41940229,24.8904147 3.41940229,24.5416042 C3.41940229,24.5066213 3.41940229,24.477384 3.4137294,24.448365 C3.31481731,22.0570925 4.53645431,19.8286614 6.60778977,18.6300069 C7.2595186,18.2518864 7.96950374,18.0016243 8.70843521,17.8737658 C8.62690547,18.3624352 8.58632242,18.8687051 8.58632242,19.3806478 C8.58632242,23.4358252 11.1752736,26.8978937 14.782801,28.2070243 C14.2938407,28.8121335 13.6946953,29.3300401 13.0140202,29.725543 C12.0423544,30.2841054 10.9366482,30.5809871 9.81959614,30.5809871 C8.57461298,30.5809871 7.37006741,30.22614 6.32858132,29.551065 C6.04930013,29.3706959 5.6771434,29.4346251 5.47910104,29.7022695 C5.2813496,29.9698413 5.32200537,30.3482527 5.5779404,30.5633138 C7.38766794,32.0877963 9.68577391,32.9256399 12.059664,32.9256399 C13.8111352,32.9256399 15.5450059,32.460244 17.0691975,31.5815265 C17.3894254,31.3954845 17.7036167,31.1917692 18.0061714,30.9707443 C18.308726,31.1917692 18.62299,31.4014483 18.9428543,31.5815265 C20.4673368,32.460244 22.2012075,32.9256399 23.9523878,32.9256399 C26.3263506,32.9256399 28.6246748,32.0877963 30.4341114,30.5633138 C30.6901192,30.3482527 30.7307022,29.9698413 30.5329508,29.7022695 C30.3352721,29.4346251 29.9628244,29.365023 29.6835432,29.551065 C28.6419844,30.22614 27.4317659,30.5809871 26.1925284,30.5809871 C25.0754037,30.5809871 23.9756613,30.2841054 22.9983953,29.725543 C22.3116836,29.3300401 21.7065743,28.8061697 21.2119412,28.1897146 C24.7961952,26.8689474 27.3562,23.4185156 27.3562,19.3863207 C27.3562,18.8687051 27.3095804,18.3624352 27.2340145,17.867802 C27.9962921,17.9899148 28.7292598,18.2518864 29.404262,18.6356798 C31.4989437,19.845971 32.7207989,22.0977483 32.5986861,24.5122942 C32.5810855,24.8441588 32.8253838,25.1350767 33.1571757,25.1756597 C33.4887494,25.2163155 33.791304,24.9896177 33.8495603,24.6577531 C34.5768551,20.5033728 32.6216686,16.2966999 28.9678852,14.1906725 Z M22.1429512,14.7781812 C21.2875071,15.5054759 20.246021,16.005782 19.1172596,16.2038244 C18.3666914,16.3376466 17.6164141,16.3376466 16.8657732,16.2038244 C15.7194839,16.0001091 14.6722522,15.4938392 13.8111352,14.7492348 C14.9106594,13.7599685 16.3652489,13.1608231 17.9596245,13.1608231 C19.5713097,13.1548593 21.0432088,13.7716052 22.1429512,14.7781812 Z M11.7397998,19.3806478 C11.7397998,18.9499439 11.7864193,18.5252038 11.8676582,18.1180641 C12.9383815,18.484548 13.9100473,19.130313 14.6606155,20.0030667 C14.9222961,20.3115851 15.1549577,20.6374859 15.3470363,20.9747325 C15.5274054,21.2889238 15.684501,21.6207157 15.8126504,21.969599 C16.2141171,23.0577047 16.3013197,24.2097396 16.1035683,25.3151549 C13.5725098,24.5239309 11.7397998,22.1676413 11.7397998,19.3806478 Z M19.885501,25.2921723 C19.6874586,24.1864661 19.7806978,23.0460679 20.1764189,21.969599 C20.3042773,21.6207157 20.461373,21.2832509 20.6417421,20.9747325 C20.8394935,20.6374859 21.0664822,20.3115851 21.3284538,20.0030667 C22.0673853,19.1419497 23.0097411,18.5078941 24.057191,18.1414103 C24.1387207,18.5428043 24.1793765,18.9559077 24.1793765,19.3806478 C24.1793765,22.1443679 22.3756128,24.4833478 19.885501,25.2921723 Z' id='Fill-1' fill='#5C90DF'/></g>";
let template11 = "<g xmlns='http://www.w3.org/2000/svg' id='User' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M20.1026923,18 L15.0719231,18 C9.50923077,18 5,22.7873077 5,28.695 C5,30.84 6.63846154,32.58 8.66,32.58 L26.5157692,32.58 C28.5361538,32.58 30.1746154,30.84 30.1746154,28.695 C30.1746154,25.6165385 28.9492308,22.8426923 26.99,20.8903846 C25.1888462,19.0984615 22.7669231,18 20.1026923,18 Z' id='Stroke-1' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><path d='M24.1953846,10.29 C24.1953846,13.6234615 21.9592308,16.4342308 18.9038462,17.3030769 C18.2692308,17.4830769 17.5988462,17.58 16.9053846,17.58 C16.2142308,17.58 15.5438462,17.4830769 14.9103846,17.3042308 C11.8538462,16.4353846 9.61538462,13.6246154 9.61538462,10.29 C9.61538462,6.26423077 12.8796154,3 16.9053846,3 C20.9311538,3 24.1953846,6.26423077 24.1953846,10.29 Z' id='Stroke-2' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/></g>";
let template12 = "<g xmlns='http://www.w3.org/2000/svg' id='User-Group' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M14.1941817,16.9988692 C14.1941817,16.9988692 14.0981053,16.8547368 13.8943158,16.7326316 C13.7132632,16.6248421 13.528,16.528 13.336,16.4421053 C12.6968421,16.1574737 11.9987368,16 11.2669474,16 L8.51326316,16 C5.46821053,16 3,18.5566316 3,21.9098947 C3,23.1275789 3.89684211,24.1153684 5.00336842,24.1153684 L9.88926316,24.1153684' id='Stroke-3' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><path d='M13.5991579,12.6484211 C13.536,12.9153684 13.4450526,13.1722105 13.328,13.4138947 L13.328,13.4147368 C12.8572632,14.3890526 11.9755789,15.1351579 10.9044211,15.4349474 C10.5692632,15.5292632 10.2147368,15.5789474 9.84926316,15.5789474 C9.48378947,15.5789474 9.13010526,15.5292632 8.79494737,15.4357895 C7.18147368,14.9844211 6,13.5233684 6,11.7894737 C6,9.69684211 7.72294737,8 9.84926316,8 C10.928,8 11.904,8.43789474 12.6021053,9.14189474 C12.8429474,9.38357895 13.0501053,9.65726316 13.2176842,9.95536842 C13.2311579,9.97810526 13.2429474,10 13.2555789,10.0227368' id='Stroke-4' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><path d='M34,16.8664679 C33.8122105,16.7174153 34.0294375,16.8021053 33.825648,16.68 C33.6445954,16.5722105 33.4593322,16.4753684 33.2673322,16.3894737 C32.6281743,16.1048421 31.9300691,15.9473684 31.1982796,15.9473684 L28.4445954,15.9473684 C25.3995428,15.9473684 22.9313322,18.504 22.9313322,21.8572632 C22.9313322,23.0749474 23.8281743,24.0627368 24.9347007,24.0627368 L29.8205954,24.0627368' id='Stroke-3-Copy' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6' transform='translate(28.465666, 20.005053) scale(-1, 1) translate(-28.465666, -20.005053) '/><path d='M30.6315789,12.1747368 C30.5684211,12.4416842 30.4774737,12.6985263 30.3604211,12.9402105 L30.3604211,12.9410526 C29.8896842,13.9153684 29.008,14.6614737 27.9368421,14.9612632 C27.6016842,15.0555789 27.2471579,15.1052632 26.8816842,15.1052632 C26.5162105,15.1052632 26.1625263,15.0555789 25.8273684,14.9621053 C24.2138947,14.5107368 23.0324211,13.0496842 23.0324211,11.3157895 C23.0324211,9.22315789 24.7553684,7.52631579 26.8816842,7.52631579 C27.9604211,7.52631579 28.9364211,7.96421053 29.6345263,8.66821053 C29.8753684,8.90989474 30.0825263,9.18357895 30.2501053,9.48168421 C30.2635789,9.50442105 30.2753684,9.52631579 30.288,9.54905263' id='Stroke-4-Copy-3' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6' transform='translate(26.832000, 11.315789) scale(-1, 1) translate(-26.832000, -11.315789) '/><path d='M20.0223158,16 L16.3507368,16 C12.2909474,16 9,19.4938947 9,23.8054737 C9,25.3709474 10.1957895,26.6408421 11.6711579,26.6408421 L24.7027368,26.6408421 C26.1772632,26.6408421 27.3730526,25.3709474 27.3730526,23.8054737 C27.3730526,21.5587368 26.4787368,19.5343158 25.0488421,18.1094737 C23.7343158,16.8016842 21.9667368,16 20.0223158,16 Z' id='Stroke-1' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><path d='M23.6408421,10.3204211 C23.6408421,12.7532632 22.0088421,14.8046316 19.7789474,15.4387368 C19.3157895,15.5701053 18.8265263,15.6408421 18.3204211,15.6408421 C17.816,15.6408421 17.3267368,15.5701053 16.8644211,15.4395789 C14.6336842,14.8054737 13,12.7541053 13,10.3204211 C13,7.38231579 15.3823158,5 18.3204211,5 C21.2585263,5 23.6408421,7.38231579 23.6408421,10.3204211 Z' id='Stroke-2' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/></g>";
let template13 = "<g xmlns='http://www.w3.org/2000/svg' id='UPS' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M7.1,30 L28.9,30 C28.9552285,30 29,29.9552285 29,29.9 L29,3.1 C29,3.04477153 28.9552285,3 28.9,3 L7.1,3 C7.04477153,3 7,3.04477153 7,3.1 L7,29.9 C7,29.9552285 7.04477153,30 7.1,30 Z' id='Stroke-82-Copy-3' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><path d='M11.01,31.96466 L13.99,31.96466 C13.9955228,31.96466 14,31.9601829 14,31.95466 L14,31 L11,31 L11,31.95466 C11,31.9601829 11.0044772,31.96466 11.01,31.96466 Z' id='Stroke-84-Copy-2' stroke='#5C90DF' stroke-width='2'/><path d='M22.01,31.96466 L24.99,31.96466 C24.9955228,31.96466 25,31.9601829 25,31.95466 L25,31 L22,31 L22,31.95466 C22,31.9601829 22.0044772,31.96466 22.01,31.96466 Z' id='Stroke-84-Copy-3' stroke='#5C90DF' stroke-width='2'/><path d='M12,4 L12,15.8530273 C12,19.4428782 14.9101491,22.3530273 18.5,22.3530273 C22.0898509,22.3530273 25,19.4428782 25,15.8530273 L25,4 L12,4 Z' id='Rectangle-20' stroke='#5C90DF' stroke-width='2'/><circle id='Oval' stroke='#5C90DF' stroke-width='2' cx='18.5' cy='15.5' r='2.5'/><rect id='Rectangle-21' fill='#5C90DF' x='15' y='9' width='7' height='1'/><rect id='Rectangle-21-Copy-2' fill='#FFFFFF' x='15' y='25' width='9' height='2'/><rect id='Rectangle-21-Copy' fill='#5C90DF' x='15' y='7' width='7' height='1'/><path d='M14,26 C14,26.552 13.552,27 13,27 C12.4473333,27 12,26.552 12,26 C12,25.448 12.4473333,25 13,25 C13.552,25 14,25.448 14,26' id='Fill-97-Copy' fill='#5C90DF' opacity='0.7'/></g>";
let template14 = "<g xmlns='http://www.w3.org/2000/svg' id='Tablet' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M8,35 L28,35 C28.5522847,35 29,34.5522847 29,34 L29,4 C29,3.44771525 28.5522847,3 28,3 L8,3 C7.44771525,3 7,3.44771525 7,4 L7,34 C7,34.5522847 7.44771525,35 8,35 Z' id='Fill-5' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6' transform='translate(18.000000, 19.000000) rotate(-90.000000) translate(-18.000000, -19.000000) '/><path d='M29.5,21 C30.3284271,21 31,20.3284271 31,19.5 C31,18.6715729 30.3284271,18 29.5,18 C28.6715729,18 28,18.6715729 28,19.5 C28,20.3284271 28.6715729,21 29.5,21 Z' id='Oval-2' fill='#FFFFFF' transform='translate(29.500000, 19.500000) rotate(-90.000000) translate(-29.500000, -19.500000) '/></g>";
let template15 = "<g xmlns='http://www.w3.org/2000/svg' id='Switch' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M2.1,24 L27.9,24 C27.9552285,24 28,23.9552285 28,23.9 L28,11.1 C28,11.0447715 27.9552285,11 27.9,11 L2.1,11 C2.04477153,11 2,11.0447715 2,11.1 L2,23.9 C2,23.9552285 2.04477153,24 2.1,24 Z' id='Stroke-82-Copy-2' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><path d='M5,25 L24.9182941,25' id='Path-10-Copy' stroke='#5C90DF' stroke-width='2' stroke-linecap='round'/><path d='M6.5,22 C5.671,22 5,21.328 5,20.5 C5,19.672 5.671,19 6.5,19 C7.328,19 8,19.672 8,20.5 C8,21.328 7.328,22 6.5,22 Z' id='Fill-97-Copy-3' fill='#5C90DF' opacity='0.7'/><path d='M11.5,22 C10.671,22 10,21.328 10,20.5 C10,19.672 10.671,19 11.5,19 C12.328,19 13,19.672 13,20.5 C13,21.328 12.328,22 11.5,22 Z' id='Fill-97-Copy-4' fill='#5C90DF' opacity='0.7'/><path d='M16.052002,22 C15.223002,22 14.552002,21.328 14.552002,20.5 C14.552002,19.672 15.223002,19 16.052002,19 C16.880002,19 17.552002,19.672 17.552002,20.5 C17.552002,21.328 16.880002,22 16.052002,22 Z' id='Fill-97-Copy-5' fill='#5C90DF' opacity='0.7'/><path d='M21.0682373,22 C20.2392373,22 19.5682373,21.328 19.5682373,20.5 C19.5682373,19.672 20.2392373,19 21.0682373,19 C21.8962373,19 22.5682373,19.672 22.5682373,20.5 C22.5682373,21.328 21.8962373,22 21.0682373,22 Z' id='Fill-97-Copy-6' fill='#5C90DF' opacity='0.7'/><g id='Group-Copy-8' transform='translate(9.000000, 14.000000)' fill='#FFFFFF'>    <g id='Group-Copy-11'>        <polygon id='Fill-85' points='0 2 4 2 4 0 0 0'/>    </g>    <g id='Group-Copy-13' transform='translate(1.000000, 2.000000)'>        <polygon id='Fill-85' points='0 1 2 1 2 0 0 0'/>    </g></g><g id='Group-Copy-14' transform='translate(4.000000, 14.000000)' fill='#FFFFFF'>    <g id='Group-Copy-11'>        <polygon id='Fill-85' points='0 2 4 2 4 0 0 0'/>    </g>    <g id='Group-Copy-13' transform='translate(1.000000, 2.000000)'>        <polygon id='Fill-85' points='0 1 2 1 2 0 0 0'/>    </g></g><g id='Group-Copy-10' transform='translate(14.000000, 14.000000)' fill='#FFFFFF'>    <g id='Group-Copy-11'>        <polygon id='Fill-85' points='0 2 4 2 4 0 0 0'/>    </g>    <g id='Group-Copy-13' transform='translate(1.000000, 2.000000)'>        <polygon id='Fill-85' points='0 1 2 1 2 0 0 0'/>    </g></g><g id='Group-Copy-16' transform='translate(19.000000, 14.000000)' fill='#FFFFFF'>    <g id='Group-Copy-11'>        <polygon id='Fill-85' points='0 2 4 2 4 0 0 0'/>    </g>    <g id='Group-Copy-13' transform='translate(1.000000, 2.000000)'>        <polygon id='Fill-85' points='0 1 2 1 2 0 0 0'/>    </g></g><circle id='Oval-9' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6' cx='26.5' cy='10.5' r='7.5'/><polyline id='Path-32' stroke='#5C90DF' points='24.0113525 7.01446533 24.0113525 8.96695769 29.9925537 12.0139771 29.9925537 14.0222852'/><polyline id='Path-33' stroke='#5C90DF' points='22.4480591 7.53833008 24.0410767 6.49316406 25.4871216 7.53833008'/><polyline id='Path-33-Copy' stroke='#5C90DF' transform='translate(30.053162, 13.875427) rotate(-180.000000) translate(-30.053162, -13.875427) ' points='28.5336304 14.3980103 30.1266479 13.3528442 31.5726929 14.3980103'/><polyline id='Path-32' stroke='#5C90DF' transform='translate(26.998047, 10.518375) scale(-1, 1) translate(-26.998047, -10.518375) ' points='24.0074463 7.01446533 24.0074463 8.96695769 29.9886475 12.0139771 29.9886475 14.0222852'/><polyline id='Path-33' stroke='#5C90DF' transform='translate(30.032410, 7.015747) scale(-1, 1) translate(-30.032410, -7.015747) ' points='28.5128784 7.53833008 30.105896 6.49316406 31.5519409 7.53833008'/><polyline id='Path-33-Copy' stroke='#5C90DF' transform='translate(23.946838, 13.875427) scale(-1, 1) rotate(-180.000000) translate(-23.946838, -13.875427) ' points='22.4273071 14.3980103 24.0203247 13.3528442 25.4663696 14.3980103'/></g>";
let template16 = "<g xmlns='http://www.w3.org/2000/svg' id='Subwoofer' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M5,26.9077148 L15,26.9077148 C15.5522847,26.9077148 16,26.4599996 16,25.9077148 L16,6 C16,5.44771525 15.5522847,5 15,5 L5,5 C4.44771525,5 4,5.44771525 4,6 L4,25.9077148 C4,26.4599996 4.44771525,26.9077148 5,26.9077148 Z' id='Fill-5' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><path d='M21,26.9077148 L31,26.9077148 C31.5522847,26.9077148 32,26.4599996 32,25.9077148 L32,6 C32,5.44771525 31.5522847,5 31,5 L21,5 C20.4477153,5 20,5.44771525 20,6 L20,25.9077148 C20,26.4599996 20.4477153,26.9077148 21,26.9077148 Z' id='Fill-5-Copy' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><circle id='Oval-4' stroke='#5C90DF' stroke-width='2' cx='10' cy='20' r='2'/><circle id='Oval-4-Copy-2' stroke='#5C90DF' stroke-width='2' cx='26' cy='20' r='2'/><circle id='Oval-4-Copy' fill='#5C90DF' cx='10' cy='12' r='2'/><circle id='Oval-4-Copy-3' fill='#5C90DF' cx='26' cy='12' r='2'/><path d='M8,27 L8,32' id='Stroke-62' stroke='#5C90DF' stroke-width='2'/><path d='M12,27 L12,32' id='Stroke-63' stroke='#5C90DF' stroke-width='2'/><path d='M5,32 L15,32' id='Stroke-64' stroke='#5C90DF' stroke-width='2' stroke-linecap='round'/><path d='M24,27 L24,32' id='Stroke-62' stroke='#5C90DF' stroke-width='2'/><path d='M28,27 L28,32' id='Stroke-63' stroke='#5C90DF' stroke-width='2'/><path d='M21,32 L31,32' id='Stroke-64' stroke='#5C90DF' stroke-width='2' stroke-linecap='round'/></g>";
let template17 = "<g xmlns='http://www.w3.org/2000/svg' id='Speaker' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M7,34 L29,34 C29.5522847,34 30,33.5522847 30,33 L30,3 C30,2.44771525 29.5522847,2 29,2 L7,2 C6.44771525,2 6,2.44771525 6,3 L6,33 C6,33.5522847 6.44771525,34 7,34 Z' id='Fill-5' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><circle id='Oval-4' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6' cx='18' cy='24' r='6'/><circle id='Oval-4' fill='#5C90DF' cx='18' cy='24' r='2'/><circle id='Oval-4-Copy' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6' cx='18' cy='10' r='4'/><circle id='Oval-4-Copy-2' fill='#5C90DF' cx='18' cy='10' r='1'/></g>";
let template18 = "<g xmlns='http://www.w3.org/2000/svg' id='Security-camera' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><path d='M5,14 L31,14 C32.6568542,14 34,12.6568542 34,11 L34,8.1 C34,8.04477153 33.9552285,8 33.9,8 L2.1,8 C2.04477153,8 2,8.04477153 2,8.1 L2,11 C2,12.6568542 3.34314575,14 5,14 Z' id='Fill-60-Copy-7' stroke='#5C90DF' stroke-width='2' fill='#C6D9F6'/><g id='Rectangle-3'>    <use fill='#C6D9F6' fill-rule='evenodd' xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#path-1'/>    <path stroke='#5C90DF' stroke-width='2' d='M6,14 L6,21 C6,27.627417 11.372583,33 18,33 C24.627417,33 30,27.627417 30,21 L30,14 L6,14 Z'/></g>path d='M10.7131909,30.4389491 C10.6918801,30.423109 10.6701242,30.4087605 10.6482026,30.395712 L10.7131909,30.4389491 Z M11,30.6451981 C13.289733,32.2606898 15.7637224,32.9992203 18.4541771,32.8758063 C21.0894422,32.7549239 23.2603428,31.9860703 25,30.5711756 L25,26.6652832 C25,22.79929 21.8659932,19.6652832 18,19.6652832 C14.1340068,19.6652832 11,22.79929 11,26.6652832 C11,27.7731018 11,27.7731018 11,28.8809204 C11,29.8134885 11,29.9610154 11,30.6452056 Z' id='Rectangle-4' stroke='#5C90DF' stroke-width='2'/><path d='M18,30 C19.6568542,30 21,28.6568542 21,27 C21,25.3431458 19.6568542,24 18,24 C16.3431458,24 15,25.3431458 15,27 C15,28.6568542 16.3431458,30 18,30 Z' id='Oval-3' stroke='#5C90DF' stroke-width='2' fill='#FFFFFF'/></g>";
let arrow = "M 0 26.4576 L 26.4576 0 L 26.4576 0 L 26.4576 17.46239 L 26.4576 17.46239 L 113.3856 17.46239 L 113.3856 17.46239 L 113.3856 35.45279 L 113.3856 35.45279 L 26.4576 35.45279 L 26.4576 35.45279 L 26.4576 52.91519 L 26.4576 52.91519 L 0 26.4576 Z";
let symbols: NodeModel[] = [
    { id: 'server', shape: { type: 'Native', content: template1 } },
    { id: 'workStation', shape: { type: 'Native', content: template2 } },
    { id: 'modem', shape: { type: 'Native', content: template3 } },
    { id: 'remoteController', shape: { type: 'Native', content: template4 } },
    { id: 'hmi', shape: { type: 'Native', content: template8 } },
    { id: 'analogIO', shape: { type: 'Native', content: template5 } },
    { id: 'sensor', shape: { type: 'Native', content: template6 } },
    { id: 'deviceDriver', shape: { type: 'Native', content: template7 } },
    { id: 'Virtual-Server-Copy', shape: { type: 'Native', content: template10 } },
    { id: 'user', shape: { type: 'Native', content: template11 } },
    { id: 'User-group', shape: { type: 'Native', content: template12 } },
    { id: 'UPS', shape: { type: 'Native', content: template13 } },
    { id: 'Tablet', shape: { type: 'Native', content: template14 } },
    { id: 'Switch', shape: { type: 'Native', content: template15 } },
    { id: 'Subwoofer', shape: { type: 'Native', content: template16 } },
    { id: 'Speaker', shape: { type: 'Native', content: template17 } },
    { id: 'Security-camera', shape: { type: 'Native', content: template18 } },
    { id: 'arrow1', shape: { type: 'Path', data: arrow } }
];

export function generatePalette(): void {
    let palette: SymbolPalette = new SymbolPalette({
        expandMode: 'Multiple',
        palettes: [
            //{ id: 'scratchpad', expanded: true, symbols: [], iconCss: 'ej-icon-New scratch-pad', title: 'Scratchpad' },
            { id: 'flow', expanded: true, symbols: getFlowShapes(), title: 'Flow Shapes' },
            { id: 'basic', expanded: false, symbols: getBasicShapes(), title: 'Basic Shapes' },
            { id: 'bpmn', expanded: false, symbols: getBPMNShapes(), title: 'BPMN Shapes' },
            { id: 'network', expanded: false, symbols: symbols, title: 'Network Shapes'},
            { id: 'logic', expanded: false, symbols: items, title: 'Logic Gates' },
            { id: 'umlShapes', expanded: false, symbols: umlActivityShapes, title: 'UML Activity Shapes' },
            { id: 'connectors', expanded: false, symbols: getConnectors(), title: 'Connectors' }
        ],
        width: '100%', height: '100%', symbolHeight: 50, symbolWidth: 50,
        symbolPreview: { height: 100, width: 100 },
        enableSearch: true,
        getNodeDefaults: setPaletteNodeDefaults,
        symbolMargin: { left: 12, right: 12, top: 12, bottom: 12 },
        getSymbolInfo: (symbol: NodeModel): SymbolInfo => {
            return { fit: true };
        }
    });
    palette.appendTo('#symbolpalette');
}

function setPaletteNodeDefaults(node: NodeModel): void {
    if (node.id === 'Terminator' || node.id === 'Process') {
        node.width = 130;
        node.height = 65;
    } else {
        node.width = 50;
        node.height = 50;
    }
    node.ports = [
        { offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
        { offset: { x: 0.5, y: 0 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
        { offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw },
        { offset: { x: 0.5, y: 1 }, visibility: PortVisibility.Connect | PortVisibility.Hover, constraints: PortConstraints.Draw }
    ];
    node.style.strokeColor = '#3A3A3A';
}

import { NodeModel, PaletteModel, NodeConstraints } from '@syncfusion/ej2-diagrams';

export class ElectricalShapes {

    private getElectricalAudioShapes(): NodeModel[] {
        let audioShapes: NodeModel[] = [
            {
                id: 'SHAPe_BELL2n9D723',
                shape: {
                    type: 'Path',
                    data: 'M37.5,18.5h0a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30h0a0,0,0,0,1,0,0v-60A0,0,0,0,1,37.5,18.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 30,
                height: 60,
                offsetX: 52.5,
                offsetY: 48.5
            }, {
                id: 'SHAPe_BELL3U7sXks',
                shape: {
                    type: 'Path',
                    data: 'M 24 , 48.5 L 37.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 13.5,
                height: 1,
                offsetX: 30.75,
                offsetY: 49
            }, {
                id: 'SHAPe_BELL',
                'children': ['SHAPe_BELL2n9D723', 'SHAPe_BELL3U7sXks']
            }, {
                id: 'SHAPe_BUZZER2UsJQZn',
                shape: {
                    type: 'Path',
                    data: 'M32.5,18.5h0a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30h0a0,0,0,0,1,0,0v-60A0,0,0,0,1,32.5,18.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 30.000003814697266,
                height: 60,
                offsetX: 47.50000190734863,
                offsetY: 48.5
            }, {
                id: 'SHAPe_BUZZER3yppSXu',
                shape: {
                    type: 'Path',
                    data: 'M 61 , 39.5 L 76 , 39.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 15,
                height: 1,
                offsetX: 68.5,
                offsetY: 40
            }, {
                id: 'SHAPe_BUZZER4vOlqKB',
                shape: {
                    type: 'Path',
                    data: 'M 61 , 57.5 L 76 , 57.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 15,
                height: 1,
                offsetX: 68.5,
                offsetY: 58
            }, {
                id: 'SHAPe_BUZZER',
                'children': ['SHAPe_BUZZER2UsJQZn', 'SHAPe_BUZZER3yppSXu', 'SHAPe_BUZZER4vOlqKB']
            }, {
                id: 'SHAPe_DIPOLE2MECcG1',
                shape: {
                    type: 'Path',
                    data: 'M0 32.5 36.5 32.5 36.5 70'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 36.5,
                height: 37.5,
                offsetX: 18.25,
                offsetY: 51.25
            }, {
                id: 'SHAPe_DIPOLE3a3fz0a',
                shape: {
                    type: 'Path',
                    data: 'M99.5 32.5 63 32.5 63 70'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 36.5,
                height: 37.5,
                offsetX: 81.25,
                offsetY: 51.25
            }, {
                id: 'SHAPe_DIPOLE',
                'children': ['SHAPe_DIPOLE2MECcG1', 'SHAPe_DIPOLE3a3fz0a']
            }, {
                id: 'SHAPe_ELECTRETMICROPHONE241cvIF',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 64,
                height: 64,
                offsetX: 52.5,
                offsetY: 51.5
            }, {
                id: 'SHAPe_ELECTRETMICROPHONE3a4GLsu',
                shape: {
                    type: 'Path',
                    data: 'M 20.5 , 20 L 20.5 , 84'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 64,
                offsetX: 21,
                offsetY: 52
            }, {
                id: 'SHAPe_ELECTRETMICROPHONE4kETGTq',
                shape: {
                    type: 'Path',
                    data: 'M 52.5 , 54.5 L 52.5 , 83.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 29,
                offsetX: 53,
                offsetY: 69
            }, {
                id: 'SHAPe_ELECTRETMICROPHONE5S00vUm',
                shape: {
                    type: 'Path',
                    data: 'M 52.5 , 20 L 52.5 , 50'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 30,
                offsetX: 53,
                offsetY: 35
            }, {
                id: 'SHAPe_ELECTRETMICROPHONE6dfESfU',
                shape: {
                    type: 'Path',
                    data: 'M 44 , 54.5 L 61 , 54.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 17,
                height: 1,
                offsetX: 52.5,
                offsetY: 55
            }, {
                id: 'SHAPe_ELECTRETMICROPHONE76KqQNE',
                shape: {
                    type: 'Path',
                    data: 'M 44 , 49.5 L 61 , 49.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 17,
                height: 1,
                offsetX: 52.5,
                offsetY: 50
            }, {
                id: 'SHAPe_ELECTRETMICROPHONE',
                'children': ['SHAPe_ELECTRETMICROPHONE241cvIF', 'SHAPe_ELECTRETMICROPHONE3a4GLsu', 'SHAPe_ELECTRETMICROPHONE4kETGTq', 'SHAPe_ELECTRETMICROPHONE5S00vUm', 'SHAPe_ELECTRETMICROPHONE6dfESfU', 'SHAPe_ELECTRETMICROPHONE76KqQNE']
            }, {
                id: 'SHAPe_HEADPHONES2hBnFJM',
                shape: {
                    type: 'Path',
                    data: 'M29.5,51.91c0-13.53,11-23.41,24.5-23.41s24.5,9.85,24.5,23.38'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 49,
                height: 23.40999984741211,
                offsetX: 54,
                offsetY: 40.204999923706055
            }, {
                id: 'SHAPe_HEADPHONES3gk1MsY',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 22.139999389648438,
                offsetX: 32.5,
                offsetY: 61.5
            }, {
                id: 'SHAPe_HEADPHONES4Cy5ceS',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 22.139999389648438,
                offsetX: 75.5,
                offsetY: 61.5
            }, {
                id: 'SHAPe_HEADPHONES',
                'children': ['SHAPe_HEADPHONES2hBnFJM', 'SHAPe_HEADPHONES3gk1MsY', 'SHAPe_HEADPHONES4Cy5ceS']
            }, {
                id: 'SHAPe_LOUDSPEAKER2m0JVbP',
                shape: {
                    type: 'Path',
                    data: 'M49.5 41.5 44.5 41.5 44.5 57.5 49.5 57.5 58.5 68.66 58.5 29.41 49.5 41.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 14,
                height: 39.250003814697266,
                offsetX: 51.5,
                offsetY: 49.03500175476074
            }, {
                id: 'SHAPe_LOUDSPEAKER3HjVQee',
                shape: {
                    type: 'Path',
                    data: 'M 37 , 44.5 L 44.5 , 44.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 7.5,
                height: 1,
                offsetX: 40.75,
                offsetY: 45
            }, {
                id: 'SHAPe_LOUDSPEAKER4GxEBGB',
                shape: {
                    type: 'Path',
                    data: 'M 37 , 54.5 L 44.5 , 54.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 7.5,
                height: 1,
                offsetX: 40.75,
                offsetY: 55
            }, {
                id: 'SHAPe_LOUDSPEAKER5I0Btfg',
                shape: {
                    type: 'Path',
                    data: 'M 49.5 , 41.5 L 49.5 , 57.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 16,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPe_LOUDSPEAKER',
                'children': ['SHAPe_LOUDSPEAKER2m0JVbP', 'SHAPe_LOUDSPEAKER3HjVQee', 'SHAPe_LOUDSPEAKER4GxEBGB', 'SHAPe_LOUDSPEAKER5I0Btfg']
            }, {
                id: 'SHAPe_MICROPHONE2PZQ7Oa',
                shape: {
                    type: 'Path',
                    data: 'M31.5,17.5h0a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30h0a0,0,0,0,1,0,0v-60A0,0,0,0,1,31.5,17.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 30.00000762939453,
                height: 60.00000762939453,
                offsetX: 46.500003814697266,
                offsetY: 47.500003814697266
            }, {
                id: 'SHAPe_MICROPHONE3ZltMeQ',
                shape: {
                    type: 'Path',
                    data: 'M 61 , 41.5 L 67 , 41.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6,
                height: 1,
                offsetX: 64,
                offsetY: 42
            }, {
                id: 'SHAPe_MICROPHONE457BPdI',
                shape: {
                    type: 'Path',
                    data: 'M 61 , 53.5 L 67 , 53.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6,
                height: 1,
                offsetX: 64,
                offsetY: 54
            }, {
                id: 'SHAPe_MICROPHONE',
                'children': ['SHAPe_MICROPHONE2PZQ7Oa', 'SHAPe_MICROPHONE3ZltMeQ', 'SHAPe_MICROPHONE457BPdI']
            }, {
                id: 'SHAPe_MICROPHONE12yRRYxh',
                shape: {
                    type: 'Path',
                    data: 'M 21.5 , 20 L 21.5 , 84'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 64,
                offsetX: 22,
                offsetY: 52
            }, {
                id: 'SHAPe_MICROPHONE13k846hj',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 64,
                height: 64,
                offsetX: 53.5,
                offsetY: 51.5
            }, {
                id: 'SHAPe_MICROPHONE1',
                'children': ['SHAPe_MICROPHONE12yRRYxh', 'SHAPe_MICROPHONE13k846hj']
            }, {
                id: 'SHAPe_PIEZOSOUNDER2NmWkyZ',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16,
                height: 42,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPe_PIEZOSOUNDER3zf1oj8',
                shape: {
                    type: 'Path',
                    data: 'M 62.5 , 29 L 62.5 , 72'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 43,
                offsetX: 63,
                offsetY: 50.5
            }, {
                id: 'SHAPe_PIEZOSOUNDER40Xl7mx',
                shape: {
                    type: 'Path',
                    data: 'M 100 , 50.5 L 62 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 38,
                height: 1,
                offsetX: 81,
                offsetY: 51
            }, {
                id: 'SHAPe_PIEZOSOUNDER55SxVPv',
                shape: {
                    type: 'Path',
                    data: 'M 39 , 50.5 L 1 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 39,
                height: 1,
                offsetX: 19.5,
                offsetY: 51
            }, {
                id: 'SHAPe_PIEZOSOUNDER6gYGtF2',
                shape: {
                    type: 'Path',
                    data: 'M 38.5 , 29 L 38.5 , 72'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 43,
                offsetX: 39,
                offsetY: 50.5
            }, {
                id: 'SHAPe_PIEZOSOUNDER',
                'children': ['SHAPe_PIEZOSOUNDER2NmWkyZ', 'SHAPe_PIEZOSOUNDER3zf1oj8', 'SHAPe_PIEZOSOUNDER40Xl7mx', 'SHAPe_PIEZOSOUNDER55SxVPv', 'SHAPe_PIEZOSOUNDER6gYGtF2']
            }
        ];
        for (let i = 0; i < audioShapes.length; i++) {
            if(!audioShapes[i].children) {
                audioShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            audioShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return audioShapes;
    }

    private getElectricalCapcitorsShapes(): NodeModel[] {
        let capacitorsShapes: NodeModel[] = [
            {
                id: 'SHAPE_CAPACITORUK2d0MhiT',
                shape: {
                    type: 'Path',
                    data: 'M 57.5 , 49.5 L 99.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 42,
                height: 1,
                offsetX: 78.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CAPACITORUK3245u8y',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 49.5 L 42.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 42,
                height: 1,
                offsetX: 21.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CAPACITORUK4jI9JiZ',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 3,
                height: 58,
                offsetX: 44,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CAPACITORUK513vTdR',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 3,
                height: 58,
                offsetX: 56,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CAPACITORUK',
                'children': ['SHAPE_CAPACITORUK2d0MhiT', 'SHAPE_CAPACITORUK3245u8y', 'SHAPE_CAPACITORUK4jI9JiZ', 'SHAPE_CAPACITORUK513vTdR']
            }, {
                id: 'SHAPE_CAPACITORUS-462gi3i3d',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 21 L 45.5 , 80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CAPACITORUS-463PG0eD7',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 21 L 54.5 , 80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 55,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CAPACITORUS-464lmey8Z',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 50.5 L 98.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 51
            }, {
                id: 'SHAPE_CAPACITORUS-465t7moAn',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 50.5 L 45.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 51
            }, {
                id: 'SHAPE_CAPACITORUS-46',
                'children': ['SHAPE_CAPACITORUS-462gi3i3d', 'SHAPE_CAPACITORUS-463PG0eD7', 'SHAPE_CAPACITORUS-464lmey8Z', 'SHAPE_CAPACITORUS-465t7moAn']
            }, {
                id: 'SHAPE_CAPACITORUS-482kuQ1Nd',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 21 L 45.5 , 80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CAPACITORUS-483oBW0em',
                shape: {
                    type: 'Path',
                    data: 'M60.55,21.22h0a64.33,64.33,0,0,0,0,58.56h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7.049724578857422,
                height: 58.56000518798828,
                offsetX: 57.0251407623291,
                offsetY: 50.50000190734863
            }, {
                id: 'SHAPE_CAPACITORUS-484y4w7HR',
                shape: {
                    type: 'Path',
                    data: 'M 54 , 50.5 L 100 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 1,
                offsetX: 77,
                offsetY: 51
            }, {
                id: 'SHAPE_CAPACITORUS-4859460wK',
                shape: {
                    type: 'Path',
                    data: 'M 0 , 50.5 L 46 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 1,
                offsetX: 23,
                offsetY: 51
            }, {
                id: 'SHAPE_CAPACITORUS-4861PXqSl',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 21 L 45.5 , 80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CAPACITORUS-487BN0tmv',
                shape: {
                    type: 'Path',
                    data: 'M60.55,21.22h0a64.33,64.33,0,0,0,0,58.56h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7.049724578857422,
                height: 58.56000518798828,
                offsetX: 57.0251407623291,
                offsetY: 50.50000190734863
            }, {
                id: 'SHAPE_CAPACITORUS-488OKDfx0',
                shape: {
                    type: 'Path',
                    data: 'M 53.5 , 50.5 L 99.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 1,
                offsetX: 76.5,
                offsetY: 51
            }, {
                id: 'SHAPE_CAPACITORUS-489AZS32A',
                shape: {
                    type: 'Path',
                    data: 'M -0.5 , 50.5 L 45.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 1,
                offsetX: 22.5,
                offsetY: 51
            }, {
                id: 'SHAPE_CAPACITORUS-48',
                'children': ['SHAPE_CAPACITORUS-482kuQ1Nd', 'SHAPE_CAPACITORUS-483oBW0em', 'SHAPE_CAPACITORUS-484y4w7HR', 'SHAPE_CAPACITORUS-4859460wK', 'SHAPE_CAPACITORUS-4861PXqSl', 'SHAPE_CAPACITORUS-487BN0tmv', 'SHAPE_CAPACITORUS-488OKDfx0', 'SHAPE_CAPACITORUS-489AZS32A']
            }, {
                id: 'SHAPE_CAPACITOR2FQ7KRo',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 81 L 54.5 , 22'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 55,
                offsetY: 51.5
            }, {
                id: 'SHAPE_CAPACITOR3YP0FcS',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 81 L 45.5 , 22'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 51.5
            }, {
                id: 'SHAPE_CAPACITOR4bCowRZ',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 51.5 L 99.5 , 51.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 77,
                offsetY: 52
            }, {
                id: 'SHAPE_CAPACITOR5KpzRqu',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 51.5 L 45.5 , 51.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 23,
                offsetY: 52
            }, {
                id: 'SHAPE_CAPACITOR6gOG8cO',
                shape: {
                    type: 'Path',
                    data: 'M 29.5 , 28 L 29.5 , 37'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 9,
                offsetX: 30,
                offsetY: 32.5
            }, {
                id: 'SHAPE_CAPACITOR7rvJT57',
                shape: {
                    type: 'Path',
                    data: 'M 25 , 32.5 L 34 , 32.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9,
                height: 1,
                offsetX: 29.5,
                offsetY: 33
            }, {
                id: 'SHAPE_CAPACITOR8cCZ6Mb',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 72.36 L 46.35 , 80.64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8.290000915527344,
                height: 8.279998779296875,
                offsetX: 50.494998931884766,
                offsetY: 76.5
            }, {
                id: 'SHAPE_CAPACITOR917UAYS',
                shape: {
                    type: 'Path',
                    data: 'M 54.65 , 77.36 L 51.35 , 80.64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 3.3000030517578125,
                height: 3.279998779296875,
                offsetX: 53,
                offsetY: 79
            }, {
                id: 'SHAPE_CAPACITOR10OiFi5h',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 67.35 L 45.35 , 76.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 72
            }, {
                id: 'SHAPE_CAPACITOR11MCduy3',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 62.35 L 45.35 , 71.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 67
            }, {
                id: 'SHAPE_CAPACITOR12xhJRxO',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 57.35 L 45.35 , 66.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 62
            }, {
                id: 'SHAPE_CAPACITOR135nkAsL',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 52.35 L 45.35 , 61.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 57
            }, {
                id: 'SHAPE_CAPACITOR14rjZU0J',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 47.35 L 45.35 , 56.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 52
            }, {
                id: 'SHAPE_CAPACITOR15PrT8AU',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 42.35 L 45.35 , 51.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 47
            }, {
                id: 'SHAPE_CAPACITOR1692F6eJ',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 37.35 L 45.35 , 46.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 42
            }, {
                id: 'SHAPE_CAPACITOR17DwUz3p',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 32.35 L 45.35 , 41.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.300003051757812,
                offsetX: 49.994998931884766,
                offsetY: 37
            }, {
                id: 'SHAPE_CAPACITOR185Ny2r2',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 27.35 L 45.35 , 36.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.30000114440918,
                offsetX: 49.994998931884766,
                offsetY: 32.000000953674316
            }, {
                id: 'SHAPE_CAPACITOR19VYVUWu',
                shape: {
                    type: 'Path',
                    data: 'M 54.64 , 22.35 L 45.35 , 31.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.290000915527344,
                height: 9.299999237060547,
                offsetX: 49.994998931884766,
                offsetY: 27
            }, {
                id: 'SHAPE_CAPACITOR202uptZc',
                shape: {
                    type: 'Path',
                    data: 'M 49.64 , 22.35 L 45.35 , 26.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.290000915527344,
                height: 4.299999237060547,
                offsetX: 47.494998931884766,
                offsetY: 24.5
            }, {
                id: 'SHAPE_CAPACITOR',
                'children': ['SHAPE_CAPACITOR2FQ7KRo', 'SHAPE_CAPACITOR3YP0FcS', 'SHAPE_CAPACITOR4bCowRZ', 'SHAPE_CAPACITOR5KpzRqu', 'SHAPE_CAPACITOR6gOG8cO', 'SHAPE_CAPACITOR7rvJT57', 'SHAPE_CAPACITOR8cCZ6Mb', 'SHAPE_CAPACITOR917UAYS', 'SHAPE_CAPACITOR10OiFi5h', 'SHAPE_CAPACITOR11MCduy3', 'SHAPE_CAPACITOR12xhJRxO', 'SHAPE_CAPACITOR135nkAsL', 'SHAPE_CAPACITOR14rjZU0J', 'SHAPE_CAPACITOR15PrT8AU', 'SHAPE_CAPACITOR1692F6eJ', 'SHAPE_CAPACITOR17DwUz3p', 'SHAPE_CAPACITOR185Ny2r2', 'SHAPE_CAPACITOR19VYVUWu', 'SHAPE_CAPACITOR202uptZc']
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR2jaEeXE',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 30 L 45.5 , 89'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 59.5
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR3xtjhGR',
                shape: {
                    type: 'Path',
                    data: 'M 55.5 , 30 L 55.5 , 89'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 56,
                offsetY: 59.5
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR4wvETnE',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 9 L 50.5 , 89'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 80,
                offsetX: 51,
                offsetY: 49
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR5ruKhQa',
                shape: {
                    type: 'Path',
                    data: 'M 55.5 , 59.5 L 99.5 , 59.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 77.5,
                offsetY: 60
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR60IepT6',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 59.5 L 45.5 , 59.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 23,
                offsetY: 60
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR7UxznQ3',
                shape: {
                    type: 'Path',
                    data: 'M 33.69 , 88.31 L 67.83 , 30.07'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.1400032043457,
                height: 58.23999786376953,
                offsetX: 50.760000228881836,
                offsetY: 59.189998626708984
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR8sTa2qK',
                shape: {
                    type: 'Path',
                    data: 'M59.31 34.98 68.37 29.02 67.06 39.9'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.060001373291016,
                height: 10.880001068115234,
                offsetX: 63.84000205993652,
                offsetY: 34.46000099182129
            }, {
                id: 'SHAPE_DIFFERENTIALCAPACITOR',
                'children': ['SHAPE_DIFFERENTIALCAPACITOR2jaEeXE', 'SHAPE_DIFFERENTIALCAPACITOR3xtjhGR', 'SHAPE_DIFFERENTIALCAPACITOR4wvETnE', 'SHAPE_DIFFERENTIALCAPACITOR5ruKhQa', 'SHAPE_DIFFERENTIALCAPACITOR60IepT6', 'SHAPE_DIFFERENTIALCAPACITOR7UxznQ3', 'SHAPE_DIFFERENTIALCAPACITOR8sTa2qK']
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS2vYxtyK',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 21 L 45.5 , 80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS3o39doz',
                shape: {
                    type: 'Path',
                    data: 'M60.55,21.22h0a64.33,64.33,0,0,0,0,58.56h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7.049724578857422,
                height: 58.56000518798828,
                offsetX: 57.0251407623291,
                offsetY: 50.50000190734863
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS4v198Dm',
                shape: {
                    type: 'Path',
                    data: 'M 53.5 , 50.5 L 99.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 1,
                offsetX: 76.5,
                offsetY: 51
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS5fdpgel',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 50.5 L 45.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 23,
                offsetY: 51
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS6KcyKXL',
                shape: {
                    type: 'Path',
                    data: 'M 29.5 , 27 L 29.5 , 36'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 9,
                offsetX: 30,
                offsetY: 31.5
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS7B9OZHk',
                shape: {
                    type: 'Path',
                    data: 'M 25 , 31.5 L 34 , 31.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9,
                height: 1,
                offsetX: 29.5,
                offsetY: 32
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS',
                'children': ['SHAPE_ELECTROLYTICCAPACITORUS2vYxtyK', 'SHAPE_ELECTROLYTICCAPACITORUS3o39doz', 'SHAPE_ELECTROLYTICCAPACITORUS4v198Dm', 'SHAPE_ELECTROLYTICCAPACITORUS5fdpgel', 'SHAPE_ELECTROLYTICCAPACITORUS6KcyKXL', 'SHAPE_ELECTROLYTICCAPACITORUS7B9OZHk']
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS2epIuhH',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 21 L 45.5 , 80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS32bb7AM',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 21 L 54.5 , 80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 55,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS4ob8tSN',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 50.5 L 98.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 51
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS5QsLOBr',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 50.5 L 45.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 51
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS6gXctyr',
                shape: {
                    type: 'Path',
                    data: 'M 29.5 , 27 L 29.5 , 36'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 9,
                offsetX: 30,
                offsetY: 31.5
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS7GFfSuO',
                shape: {
                    type: 'Path',
                    data: 'M 25 , 31.5 L 34 , 31.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9,
                height: 1,
                offsetX: 29.5,
                offsetY: 32
            }, {
                id: 'SHAPE_ELECTROLYTICCAPACITORUS',
                'children': ['SHAPE_ELECTROLYTICCAPACITORUS2epIuhH', 'SHAPE_ELECTROLYTICCAPACITORUS32bb7AM', 'SHAPE_ELECTROLYTICCAPACITORUS4ob8tSN', 'SHAPE_ELECTROLYTICCAPACITORUS5QsLOBr', 'SHAPE_ELECTROLYTICCAPACITORUS6gXctyr', 'SHAPE_ELECTROLYTICCAPACITORUS7GFfSuO']
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR2uV7eFp',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 21 L 45.5 , 74'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 53,
                offsetX: 46,
                offsetY: 47.5
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR3GkFP9s',
                shape: {
                    type: 'Path',
                    data: 'M 55.5 , 21 L 55.5 , 74'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 53,
                offsetX: 56,
                offsetY: 47.5
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR4Evrt4X',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 3 L 50.5 , 92'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 89,
                offsetX: 51,
                offsetY: 47.5
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR5ILRzOi',
                shape: {
                    type: 'Path',
                    data: 'M 55.5 , 47.5 L 66 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.5,
                height: 1,
                offsetX: 60.75,
                offsetY: 48
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR6tJBYgO',
                shape: {
                    type: 'Path',
                    data: 'M 72 , 47.5 L 83 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11,
                height: 1,
                offsetX: 77.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR7jzmSMp',
                shape: {
                    type: 'Path',
                    data: 'M 89 , 47.5 L 100 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11,
                height: 1,
                offsetX: 94.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR8Exds8F',
                shape: {
                    type: 'Path',
                    data: 'M 0 , 47.5 L 11 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11,
                height: 1,
                offsetX: 5.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR9XtyeSt',
                shape: {
                    type: 'Path',
                    data: 'M 17 , 47.5 L 28 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11,
                height: 1,
                offsetX: 22.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR10OK1hCo',
                shape: {
                    type: 'Path',
                    data: 'M 34 , 47.5 L 45.5 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11.5,
                height: 1,
                offsetX: 39.75,
                offsetY: 48
            }, {
                id: 'SHAPE_FEEDTHROUGHCAPACITOR',
                'children': ['SHAPE_FEEDTHROUGHCAPACITOR2uV7eFp', 'SHAPE_FEEDTHROUGHCAPACITOR3GkFP9s', 'SHAPE_FEEDTHROUGHCAPACITOR4Evrt4X', 'SHAPE_FEEDTHROUGHCAPACITOR5ILRzOi', 'SHAPE_FEEDTHROUGHCAPACITOR6tJBYgO', 'SHAPE_FEEDTHROUGHCAPACITOR7jzmSMp', 'SHAPE_FEEDTHROUGHCAPACITOR8Exds8F', 'SHAPE_FEEDTHROUGHCAPACITOR9XtyeSt', 'SHAPE_FEEDTHROUGHCAPACITOR10OK1hCo']
            }, {
                id: 'SHAPE_GANGEDCAPACITOR2or2cB2',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 2 L 45.5 , 47'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 46,
                offsetY: 24.5
            }, {
                id: 'SHAPE_GANGEDCAPACITOR3Qu3cmQ',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 2 L 54.5 , 47'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 24.5
            }, {
                id: 'SHAPE_GANGEDCAPACITOR4VuJi7n',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 24.5 L 98.5 , 24.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 25
            }, {
                id: 'SHAPE_GANGEDCAPACITOR5LGhlv8',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 24.5 L 45.5 , 24.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 25
            }, {
                id: 'SHAPE_GANGEDCAPACITOR6Cqbzub',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 55 L 45.5 , 100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 46,
                offsetY: 77.5
            }, {
                id: 'SHAPE_GANGEDCAPACITOR747hdR6',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 55 L 54.5 , 100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 77.5
            }, {
                id: 'SHAPE_GANGEDCAPACITOR8e6BPsf',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 77.5 L 98.5 , 77.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 78
            }, {
                id: 'SHAPE_GANGEDCAPACITOR9HzLwX8',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 77.5 L 45.5 , 77.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 78
            }, {
                id: 'SHAPE_GANGEDCAPACITOR104FKlpH',
                shape: {
                    type: 'Path',
                    data: 'M66.64 55.06 38.5 98.5 38.5 93'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 28.139999389648438,
                height: 43.439998626708984,
                offsetX: 52.56999969482422,
                offsetY: 76.78000068664551
            }, {
                id: 'SHAPE_GANGEDCAPACITOR11tIHITi',
                shape: {
                    type: 'Path',
                    data: 'M58.37 59.96 67.38 54.01 66.08 64.85'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.009998321533203,
                height: 10.84000015258789,
                offsetX: 62.87499809265137,
                offsetY: 59.42999839782715
            }, {
                id: 'SHAPE_GANGEDCAPACITOR12hGn2cb',
                shape: {
                    type: 'Path',
                    data: 'M66.95 1.57 38.5 46.5 38.5 53.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 28.449996948242188,
                height: 51.93000030517578,
                offsetX: 52.724998474121094,
                offsetY: 27.53500008583069
            }, {
                id: 'SHAPE_GANGEDCAPACITOR13tOifX5',
                shape: {
                    type: 'Path',
                    data: 'M58.37 6.96 67.38 1.01 66.08 11.85'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.009998321533203,
                height: 10.84000015258789,
                offsetX: 62.87499809265137,
                offsetY: 6.430000066757202
            }, {
                id: 'SHAPE_GANGEDCAPACITOR143Lxtjb',
                shape: {
                    type: 'Path',
                    data: 'M 38.5 , 62.5 L 38.5 , 69.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 7,
                offsetX: 39,
                offsetY: 66
            }, {
                id: 'SHAPE_GANGEDCAPACITOR15GRuXAS',
                shape: {
                    type: 'Path',
                    data: 'M 38.5 , 77.5 L 38.5 , 84.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 7,
                offsetX: 39,
                offsetY: 81
            }, {
                id: 'SHAPE_GANGEDCAPACITOR',
                'children': ['SHAPE_GANGEDCAPACITOR2or2cB2', 'SHAPE_GANGEDCAPACITOR3Qu3cmQ', 'SHAPE_GANGEDCAPACITOR4VuJi7n', 'SHAPE_GANGEDCAPACITOR5LGhlv8', 'SHAPE_GANGEDCAPACITOR6Cqbzub', 'SHAPE_GANGEDCAPACITOR747hdR6', 'SHAPE_GANGEDCAPACITOR8e6BPsf', 'SHAPE_GANGEDCAPACITOR9HzLwX8', 'SHAPE_GANGEDCAPACITOR104FKlpH', 'SHAPE_GANGEDCAPACITOR11tIHITi', 'SHAPE_GANGEDCAPACITOR12hGn2cb', 'SHAPE_GANGEDCAPACITOR13tOifX5', 'SHAPE_GANGEDCAPACITOR143Lxtjb', 'SHAPE_GANGEDCAPACITOR15GRuXAS']
            }, {
                id: 'SHAPE_MULTIPLECAPACITOR2LWao7M',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 1 L 54.5 , 46'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 23.5
            }, {
                id: 'SHAPE_MULTIPLECAPACITOR3puMuBC',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 23.5 L 98.5 , 23.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 24
            }, {
                id: 'SHAPE_MULTIPLECAPACITOR47jIjY8',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 49 L 45.5 , 49'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MULTIPLECAPACITOR5IrjBym',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 1 L 45.5 , 98'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 97,
                offsetX: 46,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MULTIPLECAPACITOR6OMEy5C',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 53 L 54.5 , 98'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 75.5
            }, {
                id: 'SHAPE_MULTIPLECAPACITOR73i8W0V',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 75.5 L 98.5 , 75.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 76
            }, {
                id: 'SHAPE_MULTIPLECAPACITOR',
                'children': ['SHAPE_MULTIPLECAPACITOR2LWao7M', 'SHAPE_MULTIPLECAPACITOR3puMuBC', 'SHAPE_MULTIPLECAPACITOR47jIjY8', 'SHAPE_MULTIPLECAPACITOR5IrjBym', 'SHAPE_MULTIPLECAPACITOR6OMEy5C', 'SHAPE_MULTIPLECAPACITOR73i8W0V']
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative2mjxcoY',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 2 L 54.5 , 47'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 24.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative3387hDU',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 24.5 L 98.5 , 24.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 25
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative4t6qqxv',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 50.5 L 45.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 51
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative5hmY1b8',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 2 L 45.5 , 99'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 97,
                offsetX: 46,
                offsetY: 50.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative6yqACJ7',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 54 L 54.5 , 99'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 76.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative7EQMjRK',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 76.5 L 98.5 , 76.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 77
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative8crZjtz',
                shape: {
                    type: 'Path',
                    data: 'M 67.5 , 88 L 67.5 , 95'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 7,
                offsetX: 68,
                offsetY: 91.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative9z4Zq5I',
                shape: {
                    type: 'Path',
                    data: 'M 64 , 91.5 L 71 , 91.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 67.5,
                offsetY: 92
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative10fZ1mds',
                shape: {
                    type: 'Path',
                    data: 'M 67.5 , 7 L 67.5 , 14'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 7,
                offsetX: 68,
                offsetY: 10.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative11un4TNV',
                shape: {
                    type: 'Path',
                    data: 'M 64 , 10.5 L 71 , 10.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 67.5,
                offsetY: 11
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative12ynpOLC',
                shape: {
                    type: 'Path',
                    data: 'M 29 , 10.5 L 36 , 10.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 32.5,
                offsetY: 11
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative',
                'children': ['SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative2mjxcoY', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative3387hDU', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative4t6qqxv', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative5hmY1b8', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative6yqACJ7', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative7EQMjRK', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative8crZjtz', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative9z4Zq5I', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative10fZ1mds', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative11un4TNV', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonNegative12ynpOLC']
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive2UUteQF',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 1 L 54.5 , 46'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 23.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive3QuYVrs',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 23.5 L 98.5 , 23.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 24
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive4xe26Nm',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 49 L 45.5 , 49'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive5jl0wyW',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 1 L 45.5 , 98'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 97,
                offsetX: 46,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive6Dcrnv6',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 53 L 54.5 , 98'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 55,
                offsetY: 75.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive7oc6Sr5',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 75.5 L 98.5 , 75.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 76
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive8jlic0c',
                shape: {
                    type: 'Path',
                    data: 'M 64 , 90.5 L 71 , 90.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 67.5,
                offsetY: 91
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive9rwpB2O',
                shape: {
                    type: 'Path',
                    data: 'M 32.5 , 6 L 32.5 , 13'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 7,
                offsetX: 33,
                offsetY: 9.5
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive10a6FoUK',
                shape: {
                    type: 'Path',
                    data: 'M 64 , 9.5 L 71 , 9.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 67.5,
                offsetY: 10
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive11lUQ2Yq',
                shape: {
                    type: 'Path',
                    data: 'M 29 , 9.5 L 36 , 9.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 32.5,
                offsetY: 10
            }, {
                id: 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive',
                'children': ['SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive2UUteQF', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive3QuYVrs', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive4xe26Nm', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive5jl0wyW', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive6Dcrnv6', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive7oc6Sr5', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive8jlic0c', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive9rwpB2O', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive10a6FoUK', 'SHAPE_MULTIPLEELECTROLYTICCAPACITOR-CommonPositive11lUQ2Yq']
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS2tFx4dK',
                shape: {
                    type: 'Path',
                    data: 'M 33.69 , 78.31 L 67.83 , 20.07'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.1400032043457,
                height: 58.23999786376953,
                offsetX: 50.760000228881836,
                offsetY: 49.189998626708984
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS3TkW73z',
                shape: {
                    type: 'Path',
                    data: 'M59.31 24.98 68.37 19.02 67.06 29.9'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.060001373291016,
                height: 10.879999160766602,
                offsetX: 63.84000205993652,
                offsetY: 24.460000038146973
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS4RHNo7t',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 20 L 45.5 , 79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS5AbTk2V',
                shape: {
                    type: 'Path',
                    data: 'M60.55,20.22h0a64.33,64.33,0,0,0,0,58.56h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7.049724578857422,
                height: 58.56000518798828,
                offsetX: 57.0251407623291,
                offsetY: 49.50000190734863
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS6U3aOUz',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 20 L 45.5 , 79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS7hx5JmM',
                shape: {
                    type: 'Path',
                    data: 'M60.55,20.22h0a64.33,64.33,0,0,0,0,58.56h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7.049724578857422,
                height: 58.56000518798828,
                offsetX: 57.0251407623291,
                offsetY: 49.50000190734863
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS8vLyUu1',
                shape: {
                    type: 'Path',
                    data: 'M 53.5 , 49.5 L 99.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 1,
                offsetX: 76.5,
                offsetY: 50
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS9ed1cw3',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 49.5 L 45.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 23,
                offsetY: 50
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS',
                'children': ['SHAPE_TRIMMERVARIABLECAPACITORUS2tFx4dK', 'SHAPE_TRIMMERVARIABLECAPACITORUS3TkW73z', 'SHAPE_TRIMMERVARIABLECAPACITORUS4RHNo7t', 'SHAPE_TRIMMERVARIABLECAPACITORUS5AbTk2V', 'SHAPE_TRIMMERVARIABLECAPACITORUS6U3aOUz', 'SHAPE_TRIMMERVARIABLECAPACITORUS7hx5JmM', 'SHAPE_TRIMMERVARIABLECAPACITORUS8vLyUu1', 'SHAPE_TRIMMERVARIABLECAPACITORUS9ed1cw3']
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS12Tv7TZH',
                shape: {
                    type: 'Path',
                    data: 'M 33.69 , 81.31 L 68.07 , 22.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.380001068115234,
                height: 58.659996032714844,
                offsetX: 50.8799991607666,
                offsetY: 51.979997634887695
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS13ESFlXC',
                shape: {
                    type: 'Path',
                    data: 'M59.31 27.98 68.37 22.02 67.06 32.9'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.060001373291016,
                height: 10.880001068115234,
                offsetX: 63.84000205993652,
                offsetY: 27.46000099182129
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS14lNjoFm',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 23 L 45.5 , 82'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 52.5
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS15gqN0Zt',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 23 L 54.5 , 82'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 55,
                offsetY: 52.5
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS16gMAPZl',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 52.5 L 99.5 , 52.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 77,
                offsetY: 53
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS17J7Cvji',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 52.5 L 45.5 , 52.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 23,
                offsetY: 53
            }, {
                id: 'SHAPE_TRIMMERVARIABLECAPACITORUS1',
                'children': ['SHAPE_TRIMMERVARIABLECAPACITORUS12Tv7TZH', 'SHAPE_TRIMMERVARIABLECAPACITORUS13ESFlXC', 'SHAPE_TRIMMERVARIABLECAPACITORUS14lNjoFm', 'SHAPE_TRIMMERVARIABLECAPACITORUS15gqN0Zt', 'SHAPE_TRIMMERVARIABLECAPACITORUS16gMAPZl', 'SHAPE_TRIMMERVARIABLECAPACITORUS17J7Cvji']
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS2zNMHkl',
                shape: {
                    type: 'Path',
                    data: 'M 33.69 , 78.31 L 68.28 , 19.29'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.59000015258789,
                height: 59.019996643066406,
                offsetX: 50.98499870300293,
                offsetY: 48.79999923706055
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS3MIMfB5',
                shape: {
                    type: 'Path',
                    data: 'M 60.43 , 15.66 L 76.34 , 22.93'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.909996032714844,
                height: 7.270000457763672,
                offsetX: 68.3849983215332,
                offsetY: 19.295000076293945
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS4rYl4uS',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 20 L 45.5 , 79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS532ZVNT',
                shape: {
                    type: 'Path',
                    data: 'M60.55,20.22h0a64.33,64.33,0,0,0,0,58.56h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7.049724578857422,
                height: 58.56000518798828,
                offsetX: 57.0251407623291,
                offsetY: 49.50000190734863
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS6Q1oBCh',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 20 L 45.5 , 79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS7RBzihh',
                shape: {
                    type: 'Path',
                    data: 'M60.55,20.22h0a64.33,64.33,0,0,0,0,58.56h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7.049724578857422,
                height: 58.56000518798828,
                offsetX: 57.0251407623291,
                offsetY: 49.50000190734863
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS8AGIsGW',
                shape: {
                    type: 'Path',
                    data: 'M 53.5 , 49.5 L 99.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 1,
                offsetX: 76.5,
                offsetY: 50
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS9Lux7Hk',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 49.5 L 45.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 45,
                height: 1,
                offsetX: 23,
                offsetY: 50
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS',
                'children': ['SHAPE_TUNINGVARIABLECAPACITORUS2zNMHkl', 'SHAPE_TUNINGVARIABLECAPACITORUS3MIMfB5', 'SHAPE_TUNINGVARIABLECAPACITORUS4rYl4uS', 'SHAPE_TUNINGVARIABLECAPACITORUS532ZVNT', 'SHAPE_TUNINGVARIABLECAPACITORUS6Q1oBCh', 'SHAPE_TUNINGVARIABLECAPACITORUS7RBzihh', 'SHAPE_TUNINGVARIABLECAPACITORUS8AGIsGW', 'SHAPE_TUNINGVARIABLECAPACITORUS9Lux7Hk']
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS12yWS4Fq',
                shape: {
                    type: 'Path',
                    data: 'M 45.5 , 23 L 45.5 , 82'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 46,
                offsetY: 52.5
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS135rPQQj',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 23 L 54.5 , 82'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 55,
                offsetY: 52.5
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS14y8wN4Z',
                shape: {
                    type: 'Path',
                    data: 'M 54.5 , 52.5 L 98.5 , 52.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 76.5,
                offsetY: 53
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS15gpFyRp',
                shape: {
                    type: 'Path',
                    data: 'M 1.5 , 52.5 L 45.5 , 52.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 1,
                offsetX: 23.5,
                offsetY: 53
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS1604jJOS',
                shape: {
                    type: 'Path',
                    data: 'M 33.69 , 81.31 L 68.3 , 22.26'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.61000442504883,
                height: 59.04999542236328,
                offsetX: 50.9950008392334,
                offsetY: 51.78499794006348
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS17DdhE8a',
                shape: {
                    type: 'Path',
                    data: 'M 60.74 , 18.06 L 76.03 , 26.53'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.289997100830078,
                height: 8.470001220703125,
                offsetX: 68.38500022888184,
                offsetY: 22.295000076293945
            }, {
                id: 'SHAPE_TUNINGVARIABLECAPACITORUS1',
                'children': ['SHAPE_TUNINGVARIABLECAPACITORUS12yWS4Fq', 'SHAPE_TUNINGVARIABLECAPACITORUS135rPQQj', 'SHAPE_TUNINGVARIABLECAPACITORUS14y8wN4Z', 'SHAPE_TUNINGVARIABLECAPACITORUS15gpFyRp', 'SHAPE_TUNINGVARIABLECAPACITORUS1604jJOS', 'SHAPE_TUNINGVARIABLECAPACITORUS17DdhE8a']
            }]
        for (let i = 0; i < capacitorsShapes.length; i++) {
            if(!capacitorsShapes[i].children) {
                capacitorsShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            capacitorsShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return capacitorsShapes;
    }

    private getElectricalDiodesShapes(): NodeModel[] {
        let diodeShapes: NodeModel[] = [
            {
                id: 'SHAPE_BREAKDOWN2TyDZFR',
                shape: {
                    type: 'Path',
                    data: 'M0,50.5H30m30-31h9.5V81M70,50.5h30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 61.5,
                offsetX: 50,
                offsetY: 50.25
            }, {
                id: 'SHAPE_BREAKDOWN3kS2ouK',
                shape: {
                    type: 'Path',
                    data: 'M29.5 20.5 69.5 50.5 29.5 80.5 29.5 20.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_BREAKDOWN',
                'children': ['SHAPE_BREAKDOWN2TyDZFR', 'SHAPE_BREAKDOWN3kS2ouK']
            }, {
                id: 'SHAPE_FIELDEFFECTDIODE2Ud0lD9',
                shape: {
                    type: 'Path',
                    data: 'M29.5 16.5 69.5 46.5 29.5 76.5 29.5 16.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_FIELDEFFECTDIODE3kmDGt2',
                shape: {
                    type: 'Path',
                    data: 'M0,46.5H30M69.5,17V77M70,46.5h30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60,
                offsetX: 50,
                offsetY: 47
            }, {
                id: 'SHAPE_FIELDEFFECTDIODE4tPxO0h',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 16.5 L 74 , 16.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9,
                height: 1,
                offsetX: 69.5,
                offsetY: 17
            }, {
                id: 'SHAPE_FIELDEFFECTDIODE5eAV5mR',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 76.5 L 74 , 76.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9,
                height: 1,
                offsetX: 69.5,
                offsetY: 77
            }, {
                id: 'SHAPE_FIELDEFFECTDIODE',
                'children': ['SHAPE_FIELDEFFECTDIODE2Ud0lD9', 'SHAPE_FIELDEFFECTDIODE3kmDGt2', 'SHAPE_FIELDEFFECTDIODE4tPxO0h', 'SHAPE_FIELDEFFECTDIODE5eAV5mR']
            }, {
                id: 'SHAPE_FOURLAYERDIODE2iDiyy5',
                shape: {
                    type: 'Path',
                    data: 'M0,48.5H29.5m0,0V79M69,48.5h31'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.5,
                offsetX: 50,
                offsetY: 63.75
            }, {
                id: 'SHAPE_FOURLAYERDIODE36tvWP6',
                shape: {
                    type: 'Path',
                    data: 'M29.5 48.5 29.5 18.5 69.5 48.5 29.5 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 30,
                offsetX: 49.5,
                offsetY: 33.5
            }, {
                id: 'SHAPE_FOURLAYERDIODE4HeBqzn',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 80,
                height: 80,
                offsetX: 48.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_FOURLAYERDIODE',
                'children': ['SHAPE_FOURLAYERDIODE2iDiyy5', 'SHAPE_FOURLAYERDIODE36tvWP6', 'SHAPE_FOURLAYERDIODE4HeBqzn']
            }, {
                id: 'SHAPE_GUNNDIODE29NbPSM',
                shape: {
                    type: 'Path',
                    data: 'M10.5 19.5 50.5 49.5 10.5 79.5 10.5 19.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 30.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_GUNNDIODE34bVyQ3',
                shape: {
                    type: 'Path',
                    data: 'M90.5 79.5 50.5 49.5 90.5 19.5 90.5 79.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 70.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_GUNNDIODE4Y874FG',
                shape: {
                    type: 'Path',
                    data: 'M 90 , 49.5 L 100 , 49.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 1,
                offsetX: 95,
                offsetY: 50
            }, {
                id: 'SHAPE_GUNNDIODE5EpPt9k',
                shape: {
                    type: 'Path',
                    data: 'M 0 , 49.5 L 10 , 49.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 1,
                offsetX: 5,
                offsetY: 50
            }, {
                id: 'SHAPE_GUNNDIODE',
                'children': ['SHAPE_GUNNDIODE29NbPSM', 'SHAPE_GUNNDIODE34bVyQ3', 'SHAPE_GUNNDIODE4Y874FG', 'SHAPE_GUNNDIODE5EpPt9k']
            }, {
                id: 'SHAPE_PNDIODE2DOkjM6',
                shape: {
                    type: 'Path',
                    data: 'M29.5,20.5l40,30-40,30ZM0,50.5H30M69.5,21V81M70,50.5h30'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60.5,
                offsetX: 50,
                offsetY: 50.75
            }, {
                id: 'SHAPE_PNDIODE',
                'children': ['SHAPE_PNDIODE2DOkjM6']
            }, {
                id: 'SHAPE_SCHOTTKYDIODE2CPgWRq',
                shape: {
                    type: 'Path',
                    data: 'M0,50.5H30M59.5,25V19.5h10v63h10V77M70,50.5h30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 63,
                offsetX: 50,
                offsetY: 51
            }, {
                id: 'SHAPE_SCHOTTKYDIODE32U3ad7',
                shape: {
                    type: 'Path',
                    data: 'M29.5 20.5 69.5 50.5 29.5 80.5 29.5 20.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_SCHOTTKYDIODE',
                'children': ['SHAPE_SCHOTTKYDIODE2CPgWRq', 'SHAPE_SCHOTTKYDIODE32U3ad7']
            }, {
                id: 'SHAPE_TRANSORB123tNzlP',
                shape: {
                    type: 'Path',
                    data: 'M10.5 20.5 50.5 50.5 10.5 80.5 10.5 20.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 30.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TRANSORB13ByLEiX',
                shape: {
                    type: 'Path',
                    data: 'M90.5 80.5 50.5 50.5 90.5 20.5 90.5 80.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 70.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TRANSORB14YkujG5',
                shape: {
                    type: 'Path',
                    data: 'M 90 , 50.5 L 100 , 50.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 1,
                offsetX: 95,
                offsetY: 51
            }, {
                id: 'SHAPE_TRANSORB15CS9tBA',
                shape: {
                    type: 'Path',
                    data: 'M 0 , 50.5 L 10 , 50.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 1,
                offsetX: 5,
                offsetY: 51
            }, {
                id: 'SHAPE_TRANSORB16YLvUdG',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 20 L 50.5 , 81'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 61,
                offsetX: 51,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TRANSORB1',
                'children': ['SHAPE_TRANSORB123tNzlP', 'SHAPE_TRANSORB13ByLEiX', 'SHAPE_TRANSORB14YkujG5', 'SHAPE_TRANSORB15CS9tBA', 'SHAPE_TRANSORB16YLvUdG']
            }, {
                id: 'SHAPE_TRANSORB22Cii9vi',
                shape: {
                    type: 'Path',
                    data: 'M10.5 20.5 50.5 50.5 10.5 80.5 10.5 20.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 30.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TRANSORB23OTnyzL',
                shape: {
                    type: 'Path',
                    data: 'M90.5 80.5 50.5 50.5 90.5 20.5 90.5 80.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 70.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TRANSORB2423k4jQ',
                shape: {
                    type: 'Path',
                    data: 'M 90 , 50.5 L 100 , 50.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 1,
                offsetX: 95,
                offsetY: 51
            }, {
                id: 'SHAPE_TRANSORB25IrzcsC',
                shape: {
                    type: 'Path',
                    data: 'M 0 , 50.5 L 10 , 50.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 1,
                offsetX: 5,
                offsetY: 51
            }, {
                id: 'SHAPE_TRANSORB26hbjHrI',
                shape: {
                    type: 'Path',
                    data: 'M41.37 19.34 50.5 29.29 50.5 70.71 59.63 80.66'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 18.26000213623047,
                height: 61.320003509521484,
                offsetX: 50.5,
                offsetY: 50.00000190734863
            }, {
                id: 'SHAPE_TRANSORB2',
                'children': ['SHAPE_TRANSORB22Cii9vi', 'SHAPE_TRANSORB23OTnyzL', 'SHAPE_TRANSORB2423k4jQ', 'SHAPE_TRANSORB25IrzcsC', 'SHAPE_TRANSORB26hbjHrI']
            }, {
                id: 'SHAPE_TUNNELDIODE12HaeMgY',
                shape: {
                    type: 'Path',
                    data: 'M0,50.5H30m30-31h9.5v62H60m10-31h30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 62,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TUNNELDIODE13EzeNeJ',
                shape: {
                    type: 'Path',
                    data: 'M29.5 20.5 69.5 50.5 29.5 80.5 29.5 20.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TUNNELDIODE1',
                'children': ['SHAPE_TUNNELDIODE12HaeMgY', 'SHAPE_TUNNELDIODE13EzeNeJ']
            }, {
                id: 'SHAPE_TUNNELDIODE22TCNjJV',
                shape: {
                    type: 'Path',
                    data: 'M0,46.5H30M69.5,16V77M70,46.5h30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 61,
                offsetX: 50,
                offsetY: 46.5
            }, {
                id: 'SHAPE_TUNNELDIODE23pmagVx',
                shape: {
                    type: 'Path',
                    data: 'M29.5 16.5 69.5 46.5 29.5 76.5 29.5 16.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_TUNNELDIODE24rJLWyL',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 80,
                height: 80,
                offsetX: 48.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_TUNNELDIODE2',
                'children': ['SHAPE_TUNNELDIODE22TCNjJV', 'SHAPE_TUNNELDIODE23pmagVx', 'SHAPE_TUNNELDIODE24rJLWyL']
            }, {
                id: 'SHAPE_VARACTOR-VARICAP2FRW2vJ',
                shape: {
                    type: 'Path',
                    data: 'M0,46.5H30M69.5,17V77m5-60V77M70,46.5h30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60,
                offsetX: 50,
                offsetY: 47
            }, {
                id: 'SHAPE_VARACTOR-VARICAP3wJ5O3a',
                shape: {
                    type: 'Path',
                    data: 'M29.5 16.5 69.5 46.5 29.5 76.5 29.5 16.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_VARACTOR-VARICAP',
                'children': ['SHAPE_VARACTOR-VARICAP2FRW2vJ', 'SHAPE_VARACTOR-VARICAP3wJ5O3a']
            }, {
                id: 'SHAPE_ZENERDIODE12zK9Nha',
                shape: {
                    type: 'Path',
                    data: 'M23.5,20.5l50,30-50,30Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 60,
                offsetX: 48.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ZENERDIODE135CHza3',
                shape: {
                    type: 'Path',
                    data: 'M65 20.5 74.5 20.5 74.5 81.5 84 81.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19,
                height: 61,
                offsetX: 74.5,
                offsetY: 51
            }, {
                id: 'SHAPE_ZENERDIODE14Jh9byr',
                shape: {
                    type: 'Path',
                    data: 'M 24 , 50.5 L 1 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 24,
                height: 1,
                offsetX: 12,
                offsetY: 51
            }, {
                id: 'SHAPE_ZENERDIODE15qtMWPO',
                shape: {
                    type: 'Path',
                    data: 'M 100 , 50.5 L 75 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 25,
                height: 1,
                offsetX: 87.5,
                offsetY: 51
            }, {
                id: 'SHAPE_ZENERDIODE1',
                'children': ['SHAPE_ZENERDIODE12zK9Nha', 'SHAPE_ZENERDIODE135CHza3', 'SHAPE_ZENERDIODE14Jh9byr', 'SHAPE_ZENERDIODE15qtMWPO']
            }, {
                id: 'SHAPE_ZENERDIODE227lDouR',
                shape: {
                    type: 'Path',
                    data: 'M23.5,20.5l50,30-50,30Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 60,
                offsetX: 48.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ZENERDIODE23Tank4q',
                shape: {
                    type: 'Path',
                    data: 'M65 20.5 74.5 30.5 74.5 71.5 84 81.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19,
                height: 61,
                offsetX: 74.5,
                offsetY: 51
            }, {
                id: 'SHAPE_ZENERDIODE24p2vLGd',
                shape: {
                    type: 'Path',
                    data: 'M 24 , 50.5 L 1 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 24,
                height: 1,
                offsetX: 12,
                offsetY: 51
            }, {
                id: 'SHAPE_ZENERDIODE2504bM51',
                shape: {
                    type: 'Path',
                    data: 'M 100 , 50.5 L 75 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 25,
                height: 1,
                offsetX: 87.5,
                offsetY: 51
            }, {
                id: 'SHAPE_ZENERDIODE2',
                'children': ['SHAPE_ZENERDIODE227lDouR', 'SHAPE_ZENERDIODE23Tank4q', 'SHAPE_ZENERDIODE24p2vLGd', 'SHAPE_ZENERDIODE2504bM51']
            }
        ];
        for (let i = 0; i < diodeShapes.length; i++) {
            if(!diodeShapes[i].children) {
                diodeShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            diodeShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return diodeShapes;
    }

    private getElectricalGatesShapes(): NodeModel[] {
        let gateShapes: NodeModel[] = [
            {
                "id": "Shape_ANDIEC2jTghLS",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 57,
                "height": 73,
                "offsetX": 49,
                "offsetY": 50
            }, {
                "id": "Shape_ANDIEC",
                "children": ["Shape_ANDIEC2jTghLS"]
            }, {
                "id": "Shape_ANDGATE2xItPLs",
                "shape": {
                    "type": "Path",
                    "data": "M21.5,20.5h28a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h-28a0,0,0,0,1,0,0v-56a0,0,0,0,1,0,0Z"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56.00000762939453,
                "height": 56,
                "offsetX": 49.500003814697266,
                "offsetY": 48.5
            }, {
                "id": "Shape_ANDGATE3o71P9m",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 48.5 L 97.5 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 49
            }, {
                "id": "Shape_ANDGATE48RM7fl",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 32.5 L 21.5 , 32.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 33
            }, {
                "id": "Shape_ANDGATE5xeVj0q",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 65.5 L 21.5 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 66
            }, {
                "id": "Shape_ANDGATE",
                "children": ["Shape_ANDGATE2xItPLs", "Shape_ANDGATE3o71P9m", "Shape_ANDGATE48RM7fl", "Shape_ANDGATE5xeVj0q"]
            }, {
                "id": "Shape_BUFFER2SV61IG",
                "shape": {
                    "type": "Path",
                    "data": "M75.5 50.5 23.5 78.5 23.5 22.5 75.5 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 52,
                "height": 56,
                "offsetX": 49.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_BUFFER39JEyqu",
                "shape": {
                    "type": "Path",
                    "data": "M 75.5 , 50.5 L 99.5 , 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 24,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 51
            }, {
                "id": "Shape_BUFFER42OTHhI",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 50.5 L 23.5 , 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 22,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 51
            }, {
                "id": "Shape_BUFFER",
                "children": ["Shape_BUFFER2SV61IG", "Shape_BUFFER39JEyqu", "Shape_BUFFER42OTHhI"]
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR2HXPZTc",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56.02000045776367,
                "height": 73,
                "offsetX": 49.5,
                "offsetY": 53
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR7e77fqC",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 4,
                "height": 4,
                "offsetX": 49.5,
                "offsetY": 14.5
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR8TnwXcf",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 32.5 L 97.5 , 32.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 33
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR9Tjai3L",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 73.5 L 97.5 , 73.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 74
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR10tBgSSj",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 32.5 L 21.5 , 32.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 33
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR11UD5pPb",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 73.5 L 21.5 , 73.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 74
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR12R9kEVK",
                "shape": {
                    "type": "Path",
                    "data": "M 67.5 , 68.5 L 73.5 , 68.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 1,
                "offsetX": 70.5,
                "offsetY": 69
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR13FT3JYw",
                "shape": {
                    "type": "Path",
                    "data": "M21.5 78.5 21.5 68.5 31.5 73.5 21.5 78.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 10,
                "height": 10,
                "offsetX": 26.5,
                "offsetY": 73.5
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR14XlXhOJ",
                "shape": {
                    "type": "Path",
                    "data": "M 49.5 , 12.5 L 49.5 , 6.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 6,
                "offsetX": 50,
                "offsetY": 9.5
            }, {
                "id": "Shape_DTYPEFLIPFLOPWITHCLEAR",
                "children": ["Shape_DTYPEFLIPFLOPWITHCLEAR2HXPZTc", "Shape_DTYPEFLIPFLOPWITHCLEAR7e77fqC", "Shape_DTYPEFLIPFLOPWITHCLEAR8TnwXcf", "Shape_DTYPEFLIPFLOPWITHCLEAR9Tjai3L", "Shape_DTYPEFLIPFLOPWITHCLEAR10tBgSSj", "Shape_DTYPEFLIPFLOPWITHCLEAR11UD5pPb", "Shape_DTYPEFLIPFLOPWITHCLEAR12R9kEVK", "Shape_DTYPEFLIPFLOPWITHCLEAR13FT3JYw", "Shape_DTYPEFLIPFLOPWITHCLEAR14XlXhOJ"]
            }, {
                "id": "Shape_DTYPEFLIPFLOP2uA47Tj",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 57,
                "height": 73,
                "offsetX": 50,
                "offsetY": 49
            }, {
                "id": "Shape_DTYPEFLIPFLOP7jEBNCi",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 28.5 L 98.5 , 28.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 29
            }, {
                "id": "Shape_DTYPEFLIPFLOP85aMJ8O",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 69.5 L 98.5 , 69.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 70
            }, {
                "id": "Shape_DTYPEFLIPFLOP93kqKvy",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 28.5 L 21.5 , 28.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 29
            }, {
                "id": "Shape_DTYPEFLIPFLOP10SUvIKs",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 69.5 L 21.5 , 69.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 70
            }, {
                "id": "Shape_DTYPEFLIPFLOP11gOz4jb",
                "shape": {
                    "type": "Path",
                    "data": "M 68.5 , 64.5 L 74.5 , 64.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 1,
                "offsetX": 71.5,
                "offsetY": 65
            }, {
                "id": "Shape_DTYPEFLIPFLOP12DF5hEh",
                "shape": {
                    "type": "Path",
                    "data": "M21.5 74.5 21.5 64.5 31.5 69.5 21.5 74.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 10,
                "height": 10,
                "offsetX": 26.5,
                "offsetY": 69.5
            }, {
                "id": "Shape_DTYPEFLIPFLOP",
                "children": ["Shape_DTYPEFLIPFLOP2uA47Tj", "Shape_DTYPEFLIPFLOP7jEBNCi", "Shape_DTYPEFLIPFLOP85aMJ8O", "Shape_DTYPEFLIPFLOP93kqKvy", "Shape_DTYPEFLIPFLOP10SUvIKs", "Shape_DTYPEFLIPFLOP11gOz4jb", "Shape_DTYPEFLIPFLOP12DF5hEh"]
            }, {
                "id": "Shape_DTYPERSFLIPFLOP2GnXh5l",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56.02000045776367,
                "height": 73,
                "offsetX": 49.5,
                "offsetY": 50
            }, {
                "id": "Shape_DTYPERSFLIPFLOP9GM76Ni",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 29.5 L 97.5 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 30
            }, {
                "id": "Shape_DTYPERSFLIPFLOP10Q3XfML",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 70.5 L 97.5 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 71
            }, {
                "id": "Shape_DTYPERSFLIPFLOP11cZD57V",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 29.5 L 21.5 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 30
            }, {
                "id": "Shape_DTYPERSFLIPFLOP12m3SR9b",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 70.5 L 21.5 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 71
            }, {
                "id": "Shape_DTYPERSFLIPFLOP131hEVw0",
                "shape": {
                    "type": "Path",
                    "data": "M 67.5 , 65.5 L 73.5 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 1,
                "offsetX": 70.5,
                "offsetY": 66
            }, {
                "id": "Shape_DTYPERSFLIPFLOP14yGMooz",
                "shape": {
                    "type": "Path",
                    "data": "M21.5 75.19 21.5 65.81 30.87 70.5 21.5 75.19"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 9.370000839233398,
                "height": 9.3800048828125,
                "offsetX": 26.1850004196167,
                "offsetY": 70.5
            }, {
                "id": "Shape_DTYPERSFLIPFLOP15pzSWk6",
                "shape": {
                    "type": "Path",
                    "data": "M 49.5 , 13.5 L 49.5 , 3.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 10,
                "offsetX": 50,
                "offsetY": 8.5
            }, {
                "id": "Shape_DTYPERSFLIPFLOP160K3y5Z",
                "shape": {
                    "type": "Path",
                    "data": "M 49.5 , 96.5 L 49.5 , 86.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 10,
                "offsetX": 50,
                "offsetY": 91.5
            }, {
                "id": "Shape_DTYPERSFLIPFLOP",
                "children": ["Shape_DTYPERSFLIPFLOP2GnXh5l", "Shape_DTYPERSFLIPFLOP9GM76Ni", "Shape_DTYPERSFLIPFLOP10Q3XfML", "Shape_DTYPERSFLIPFLOP11cZD57V", "Shape_DTYPERSFLIPFLOP12m3SR9b", "Shape_DTYPERSFLIPFLOP131hEVw0", "Shape_DTYPERSFLIPFLOP14yGMooz", "Shape_DTYPERSFLIPFLOP15pzSWk6", "Shape_DTYPERSFLIPFLOP160K3y5Z"]
            }, {
                "id": "Shape_INVERTINGBUFFER2PrekjF",
                "shape": {
                    "type": "Path",
                    "data": "M75.5 50.5 23.5 78.5 23.5 22.5 75.5 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 52,
                "height": 56,
                "offsetX": 49.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_INVERTINGBUFFER3Keo9Ac",
                "shape": {
                    "type": "Path",
                    "data": "M 81.5 , 50.5 L 99.5 , 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 18,
                "height": 1,
                "offsetX": 90.5,
                "offsetY": 51
            }, {
                "id": "Shape_INVERTINGBUFFER4t34Gbx",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 50.5 L 23.5 , 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 22,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 51
            }, {
                "id": "Shape_INVERTINGBUFFER5hkN7Yq",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 6,
                "offsetX": 78.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_INVERTINGBUFFER",
                "children": ["Shape_INVERTINGBUFFER2PrekjF", "Shape_INVERTINGBUFFER3Keo9Ac", "Shape_INVERTINGBUFFER4t34Gbx", "Shape_INVERTINGBUFFER5hkN7Yq"]
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR2HYYRth",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56,
                "height": 72,
                "offsetX": 50.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR91R6lsl",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 29.5 L 98.5 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 30
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR10VgeRWI",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 70.5 L 98.5 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 71
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR11aTyRsL",
                "shape": {
                    "type": "Path",
                    "data": "M 2.5 , 29.5 L 22.5 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 30
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR12EKEdF3",
                "shape": {
                    "type": "Path",
                    "data": "M 2.5 , 70.5 L 22.5 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 71
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR13TD4AOk",
                "shape": {
                    "type": "Path",
                    "data": "M 68.5 , 65.5 L 74.5 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 1,
                "offsetX": 71.5,
                "offsetY": 66
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR144ZaXu2",
                "shape": {
                    "type": "Path",
                    "data": "M 2.5 , 50.5 L 22.5 , 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 51
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR15DAGow2",
                "shape": {
                    "type": "Path",
                    "data": "M22.5 56.19 22.5 46.81 31.89 51.5 22.5 56.19"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 9.389999389648438,
                "height": 9.379997253417969,
                "offsetX": 27.19499969482422,
                "offsetY": 51.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR16wwWev1",
                "shape": {
                    "type": "Path",
                    "data": "M 50.5 , 14.5 L 50.5 , 4.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 10,
                "offsetX": 51,
                "offsetY": 9.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR17lw9T6O",
                "shape": {
                    "type": "Path",
                    "data": "M 50.5 , 96.5 L 50.5 , 86.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 10,
                "offsetX": 51,
                "offsetY": 91.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPSR",
                "children": ["Shape_JKTYPEFLIPFLOPSR2HYYRth", "Shape_JKTYPEFLIPFLOPSR91R6lsl", "Shape_JKTYPEFLIPFLOPSR10VgeRWI", "Shape_JKTYPEFLIPFLOPSR11aTyRsL", "Shape_JKTYPEFLIPFLOPSR12EKEdF3", "Shape_JKTYPEFLIPFLOPSR13TD4AOk", "Shape_JKTYPEFLIPFLOPSR144ZaXu2", "Shape_JKTYPEFLIPFLOPSR15DAGow2", "Shape_JKTYPEFLIPFLOPSR16wwWev1", "Shape_JKTYPEFLIPFLOPSR17lw9T6O"]
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR218c9Jd",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56,
                "height": 72,
                "offsetX": 49.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR792W7dE",
                "shape": {
                    "type": "Path",
                    "data": "M 67 , 65.5 L 74 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 7,
                "height": 1,
                "offsetX": 70.5,
                "offsetY": 66
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR8ZJ4oiM",
                "shape": {
                    "type": "Path",
                    "data": "M 78 , 29.5 L 99 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 30
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR9JUBo4u",
                "shape": {
                    "type": "Path",
                    "data": "M 78 , 70.5 L 99 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 71
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR10uzTMbq",
                "shape": {
                    "type": "Path",
                    "data": "M 0 , 29.5 L 21 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 10.5,
                "offsetY": 30
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR117u7zrq",
                "shape": {
                    "type": "Path",
                    "data": "M 0 , 70.5 L 21 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 10.5,
                "offsetY": 71
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR125AKKyn",
                "shape": {
                    "type": "Path",
                    "data": "M 0 , 50.5 L 21 , 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 10.5,
                "offsetY": 51
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR13oo5LGE",
                "shape": {
                    "type": "Path",
                    "data": "M21.5 55.5 21.5 45.5 31.5 50.5 21.5 55.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 10,
                "height": 10,
                "offsetX": 26.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR14uj00Oj",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 4,
                "height": 4,
                "offsetX": 49.5,
                "offsetY": 12.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR15dIzWQe",
                "shape": {
                    "type": "Path",
                    "data": "M 49.5 , 11 L 49.5 , 4"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 7,
                "offsetX": 50,
                "offsetY": 7.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOPWITHCLEAR",
                "children": ["Shape_JKTYPEFLIPFLOPWITHCLEAR218c9Jd", "Shape_JKTYPEFLIPFLOPWITHCLEAR792W7dE", "Shape_JKTYPEFLIPFLOPWITHCLEAR8ZJ4oiM", "Shape_JKTYPEFLIPFLOPWITHCLEAR9JUBo4u", "Shape_JKTYPEFLIPFLOPWITHCLEAR10uzTMbq", "Shape_JKTYPEFLIPFLOPWITHCLEAR117u7zrq", "Shape_JKTYPEFLIPFLOPWITHCLEAR125AKKyn", "Shape_JKTYPEFLIPFLOPWITHCLEAR13oo5LGE", "Shape_JKTYPEFLIPFLOPWITHCLEAR14uj00Oj", "Shape_JKTYPEFLIPFLOPWITHCLEAR15dIzWQe"]
            }, {
                "id": "Shape_JKTYPEFLIPFLOP2auMqB1",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56,
                "height": 72,
                "offsetX": 50.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOP7G5TrTr",
                "shape": {
                    "type": "Path",
                    "data": "M 68 , 65.5 L 75 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 7,
                "height": 1,
                "offsetX": 71.5,
                "offsetY": 66
            }, {
                "id": "Shape_JKTYPEFLIPFLOP8HeqSKJ",
                "shape": {
                    "type": "Path",
                    "data": "M 79 , 29.5 L 100 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 89.5,
                "offsetY": 30
            }, {
                "id": "Shape_JKTYPEFLIPFLOP97eyg3V",
                "shape": {
                    "type": "Path",
                    "data": "M 79 , 70.5 L 100 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 89.5,
                "offsetY": 71
            }, {
                "id": "Shape_JKTYPEFLIPFLOP10V8yrYQ",
                "shape": {
                    "type": "Path",
                    "data": "M 1 , 29.5 L 22 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 30
            }, {
                "id": "Shape_JKTYPEFLIPFLOP11flPRtx",
                "shape": {
                    "type": "Path",
                    "data": "M 1 , 70.5 L 22 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 71
            }, {
                "id": "Shape_JKTYPEFLIPFLOP12ATk1Xn",
                "shape": {
                    "type": "Path",
                    "data": "M 1 , 50.5 L 22 , 50.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 51
            }, {
                "id": "Shape_JKTYPEFLIPFLOP13DJAdZW",
                "shape": {
                    "type": "Path",
                    "data": "M22.5 55.2 22.5 45.8 31.87 50.5 22.5 55.2"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 9.370000839233398,
                "height": 9.400001525878906,
                "offsetX": 27.1850004196167,
                "offsetY": 50.5
            }, {
                "id": "Shape_JKTYPEFLIPFLOP",
                "children": ["Shape_JKTYPEFLIPFLOP2auMqB1", "Shape_JKTYPEFLIPFLOP7G5TrTr", "Shape_JKTYPEFLIPFLOP8HeqSKJ", "Shape_JKTYPEFLIPFLOP97eyg3V", "Shape_JKTYPEFLIPFLOP10V8yrYQ", "Shape_JKTYPEFLIPFLOP11flPRtx", "Shape_JKTYPEFLIPFLOP12ATk1Xn", "Shape_JKTYPEFLIPFLOP13DJAdZW"]
            }, {
                "id": "Shape_NANDIEC24fcuHD",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56,
                "height": 72,
                "offsetX": 51.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_NANDIEC4ERS3tH",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 4,
                "height": 4,
                "offsetX": 81.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_NANDIEC",
                "children": ["Shape_NANDIEC24fcuHD", "Shape_NANDIEC4ERS3tH"]
            }, {
                "id": "Shape_NANDGATE268osvV",
                "shape": {
                    "type": "Path",
                    "data": "M21.5,20.5h28a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h-28a0,0,0,0,1,0,0v-56a0,0,0,0,1,0,0Z"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56.00000762939453,
                "height": 56,
                "offsetX": 49.500003814697266,
                "offsetY": 48.5
            }, {
                "id": "Shape_NANDGATE3deNJRm",
                "shape": {
                    "type": "Path",
                    "data": "M 83.5 , 48.5 L 99.5 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 16,
                "height": 1,
                "offsetX": 91.5,
                "offsetY": 49
            }, {
                "id": "Shape_NANDGATE4Cobuz8",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 32.5 L 21.5 , 32.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 33
            }, {
                "id": "Shape_NANDGATE5ZAfgyz",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 65.5 L 21.5 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 66
            }, {
                "id": "Shape_NANDGATE6nsxwYK",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 6,
                "offsetX": 80.5,
                "offsetY": 48.5
            }, {
                "id": "Shape_NANDGATE",
                "children": ["Shape_NANDGATE268osvV", "Shape_NANDGATE3deNJRm", "Shape_NANDGATE4Cobuz8", "Shape_NANDGATE5ZAfgyz", "Shape_NANDGATE6nsxwYK"]
            }, {
                "id": "Shape_NORIEC2slAokF",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56,
                "height": 72,
                "offsetX": 50.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_NORIEC45cDLy0",
                "shape": {
                    "type": "Path",
                    "data": "M45.73 45.28 50.83 49.43 45.73 53.59"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 5.100002288818359,
                "height": 8.310001373291016,
                "offsetX": 48.28000068664551,
                "offsetY": 49.43499946594238
            }, {
                "id": "Shape_NORIEC5RZn3Vy",
                "shape": {
                    "type": "Path",
                    "data": "M 53.33 , 51.55 L 47.67 , 56.45"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 5.660003662109375,
                "height": 4.900001525878906,
                "offsetX": 50.5,
                "offsetY": 54
            }, {
                "id": "Shape_NORIEC6SYE4sa",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 6,
                "offsetX": 81.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_NORIEC",
                "children": ["Shape_NORIEC2slAokF", "Shape_NORIEC45cDLy0", "Shape_NORIEC5RZn3Vy", "Shape_NORIEC6SYE4sa"]
            }, {
                "id": "Shape_NORGATE2wvndNg",
                "shape": {
                    "type": "Path",
                    "data": "M21.71,76.5h0a83.59,83.59,0,0,0,0-55.9l0-.1h1.58a66.58,66.58,0,0,1,54.21,28h0a66.58,66.58,0,0,1-54.21,28Z"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 55.790000915527344,
                "height": 56,
                "offsetX": 49.60499954223633,
                "offsetY": 48.49999809265137
            }, {
                "id": "Shape_NORGATE3dY2BuT",
                "shape": {
                    "type": "Path",
                    "data": "M 83.5 , 48.5 L 99.5 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 16,
                "height": 1,
                "offsetX": 91.5,
                "offsetY": 49
            }, {
                "id": "Shape_NORGATE4rAfIkJ",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 32.5 L 25.5 , 32.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 24,
                "height": 1,
                "offsetX": 13.5,
                "offsetY": 33
            }, {
                "id": "Shape_NORGATE5Co0zTO",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 64.5 L 25.5 , 64.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 24,
                "height": 1,
                "offsetX": 13.5,
                "offsetY": 65
            }, {
                "id": "Shape_NORGATE62zq1xw",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 6,
                "offsetX": 80.5,
                "offsetY": 48.5
            }, {
                "id": "Shape_NORGATE",
                "children": ["Shape_NORGATE2wvndNg", "Shape_NORGATE3dY2BuT", "Shape_NORGATE4rAfIkJ", "Shape_NORGATE5Co0zTO", "Shape_NORGATE62zq1xw"]
            }, {
                "id": "Shape_NOTIEC2m8n8M5",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 57,
                "height": 73,
                "offsetX": 51,
                "offsetY": 50
            }, {
                "id": "Shape_NOTIEC",
                "children": ["Shape_NOTIEC2m8n8M5"]
            }, {
                "id": "Shape_ORIEC2KZJvkg",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 57,
                "height": 73,
                "offsetX": 50,
                "offsetY": 50
            }, {
                "id": "Shape_ORIEC4Fkkj2D",
                "shape": {
                    "type": "Path",
                    "data": "M45.23 45.28 50.33 49.43 45.23 53.59"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 5.100002288818359,
                "height": 8.310001373291016,
                "offsetX": 47.78000068664551,
                "offsetY": 49.43499946594238
            }, {
                "id": "Shape_ORIEC5YdXNEw",
                "shape": {
                    "type": "Path",
                    "data": "M 52.83 , 51.55 L 47.17 , 56.45"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 5.660003662109375,
                "height": 4.900001525878906,
                "offsetX": 50,
                "offsetY": 54
            }, {
                "id": "Shape_ORIEC",
                "children": ["Shape_ORIEC2KZJvkg", "Shape_ORIEC4Fkkj2D", "Shape_ORIEC5YdXNEw"]
            }, {
                "id": "Shape_ORGATE2PZ1ZNw",
                "shape": {
                    "type": "Path",
                    "data": "M21.71,76.5h0a83.53,83.53,0,0,0,0-55.9l0-.1h1.58a66.58,66.58,0,0,1,54.21,28h0a66.58,66.58,0,0,1-54.21,28Z"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 55.790000915527344,
                "height": 56,
                "offsetX": 49.60499954223633,
                "offsetY": 48.49999809265137
            }, {
                "id": "Shape_ORGATE3aUij9r",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 48.5 L 99.5 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 22,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 49
            }, {
                "id": "Shape_ORGATE4om5Z26",
                "shape": {
                    "type": "Path",
                    "data": "M 0 , 31.5 L 25 , 31.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 25,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 32
            }, {
                "id": "Shape_ORGATE5PfWUGG",
                "shape": {
                    "type": "Path",
                    "data": "M 0 , 65.5 L 25 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 25,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 66
            }, {
                "id": "Shape_ORGATE",
                "children": ["Shape_ORGATE2PZ1ZNw", "Shape_ORGATE3aUij9r", "Shape_ORGATE4om5Z26", "Shape_ORGATE5PfWUGG"]
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS2eZ5jm9",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56,
                "height": 72,
                "offsetX": 49.5,
                "offsetY": 47.5
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS7kXiMoi",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 26.5 L 97.5 , 26.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 27
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS8DIVlWR",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 67.5 L 97.5 , 67.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 68
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS9tDB4Qo",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 26.5 L 21.5 , 26.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 27
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS10irncH7",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 67.5 L 21.5 , 67.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 68
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS11zMJyqS",
                "shape": {
                    "type": "Path",
                    "data": "M 67.5 , 62.5 L 73.5 , 62.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 1,
                "offsetX": 70.5,
                "offsetY": 63
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS12aMLs2X",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 47.5 L 21.5 , 47.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 48
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS13taXsoK",
                "shape": {
                    "type": "Path",
                    "data": "M21.5 52.19 21.5 42.81 30.89 47.5 21.5 52.19"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 9.389999389648438,
                "height": 9.379997253417969,
                "offsetX": 26.19499969482422,
                "offsetY": 47.5
            }, {
                "id": "Shape_RSLATCHSYNCHRONOUS",
                "children": ["Shape_RSLATCHSYNCHRONOUS2eZ5jm9", "Shape_RSLATCHSYNCHRONOUS7kXiMoi", "Shape_RSLATCHSYNCHRONOUS8DIVlWR", "Shape_RSLATCHSYNCHRONOUS9tDB4Qo", "Shape_RSLATCHSYNCHRONOUS10irncH7", "Shape_RSLATCHSYNCHRONOUS11zMJyqS", "Shape_RSLATCHSYNCHRONOUS12aMLs2X", "Shape_RSLATCHSYNCHRONOUS13taXsoK"]
            }, {
                "id": "Shape_RSLATCH2pFv3Uo",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 57,
                "height": 73,
                "offsetX": 50,
                "offsetY": 48
            }, {
                "id": "Shape_RSLATCH85R7W0o",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 27.5 L 98.5 , 27.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 28
            }, {
                "id": "Shape_RSLATCH94czuMn",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 68.5 L 98.5 , 68.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 69
            }, {
                "id": "Shape_RSLATCH10IssZHF",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 27.5 L 21.5 , 27.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 28
            }, {
                "id": "Shape_RSLATCH11tnwgWi",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 68.5 L 21.5 , 68.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 69
            }, {
                "id": "Shape_RSLATCH12X8DXGs",
                "shape": {
                    "type": "Path",
                    "data": "M 68.5 , 63.5 L 74.5 , 63.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 1,
                "offsetX": 71.5,
                "offsetY": 64
            }, {
                "id": "Shape_RSLATCH",
                "children": ["Shape_RSLATCH2pFv3Uo", "Shape_RSLATCH85R7W0o", "Shape_RSLATCH94czuMn", "Shape_RSLATCH10IssZHF", "Shape_RSLATCH11tnwgWi", "Shape_RSLATCH12X8DXGs"]
            }, {
                "id": "Shape_SCHMITTTRIGGER24M4WnZ",
                "shape": {
                    "type": "Path",
                    "data": "M75.5 49.5 23.5 77.5 23.5 21.5 75.5 49.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 52,
                "height": 56,
                "offsetX": 49.5,
                "offsetY": 49.5
            }, {
                "id": "Shape_SCHMITTTRIGGER3j6SJW7",
                "shape": {
                    "type": "Path",
                    "data": "M 75.5 , 49.5 L 99.5 , 49.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 24,
                "height": 1,
                "offsetX": 87.5,
                "offsetY": 50
            }, {
                "id": "Shape_SCHMITTTRIGGER4hjmFMu",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 49.5 L 23.5 , 49.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 22,
                "height": 1,
                "offsetX": 12.5,
                "offsetY": 50
            }, {
                "id": "Shape_SCHMITTTRIGGER5XKdBSB",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 5,
                "height": 8,
                "offsetX": 42,
                "offsetY": 49.5
            }, {
                "id": "Shape_SCHMITTTRIGGER6TwqYDu",
                "shape": {
                    "type": "Path",
                    "data": "M 39.5 , 45.5 L 49.5 , 45.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 10,
                "height": 1,
                "offsetX": 44.5,
                "offsetY": 46
            }, {
                "id": "Shape_SCHMITTTRIGGER7rrmlre",
                "shape": {
                    "type": "Path",
                    "data": "M 34.5 , 53.5 L 44.5 , 53.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 10,
                "height": 1,
                "offsetX": 39.5,
                "offsetY": 54
            }, {
                "id": "Shape_SCHMITTTRIGGER",
                "children": ["Shape_SCHMITTTRIGGER24M4WnZ", "Shape_SCHMITTTRIGGER3j6SJW7", "Shape_SCHMITTTRIGGER4hjmFMu", "Shape_SCHMITTTRIGGER5XKdBSB", "Shape_SCHMITTTRIGGER6TwqYDu", "Shape_SCHMITTTRIGGER7rrmlre"]
            }, {
                "id": "Shape_TTYPEFLIPFLOP2AMd4jR",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 57,
                "height": 73,
                "offsetX": 50,
                "offsetY": 50
            }, {
                "id": "Shape_TTYPEFLIPFLOP71NBh77",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 29.5 L 98.5 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 30
            }, {
                "id": "Shape_TTYPEFLIPFLOP8WjYRol",
                "shape": {
                    "type": "Path",
                    "data": "M 78.5 , 70.5 L 98.5 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 71
            }, {
                "id": "Shape_TTYPEFLIPFLOP94ltePi",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 29.5 L 21.5 , 29.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 30
            }, {
                "id": "Shape_TTYPEFLIPFLOP10LqiL6f",
                "shape": {
                    "type": "Path",
                    "data": "M 1.5 , 70.5 L 21.5 , 70.5"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 20,
                "height": 1,
                "offsetX": 11.5,
                "offsetY": 71
            }, {
                "id": "Shape_TTYPEFLIPFLOP11Pyo0nS",
                "shape": {
                    "type": "Path",
                    "data": "M 68.5 , 65.5 L 74.5 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 1,
                "offsetX": 71.5,
                "offsetY": 66
            }, {
                "id": "Shape_TTYPEFLIPFLOP12T35asK",
                "shape": {
                    "type": "Path",
                    "data": "M21.5 75.5 21.5 65.5 31.5 70.5 21.5 75.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 10,
                "height": 10,
                "offsetX": 26.5,
                "offsetY": 70.5
            }, {
                "id": "Shape_TTYPEFLIPFLOP",
                "children": ["Shape_TTYPEFLIPFLOP2AMd4jR", "Shape_TTYPEFLIPFLOP71NBh77", "Shape_TTYPEFLIPFLOP8WjYRol", "Shape_TTYPEFLIPFLOP94ltePi", "Shape_TTYPEFLIPFLOP10LqiL6f", "Shape_TTYPEFLIPFLOP11Pyo0nS", "Shape_TTYPEFLIPFLOP12T35asK"]
            }, {
                "id": "Shape_XNORGATE24lVVGz",
                "shape": {
                    "type": "Path",
                    "data": "M21.71,76.5h0a83.59,83.59,0,0,0,0-55.9l0-.1h1.58a66.58,66.58,0,0,1,54.21,28h0a66.58,66.58,0,0,1-54.21,28Z"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 55.790000915527344,
                "height": 56,
                "offsetX": 49.60499954223633,
                "offsetY": 48.49999809265137
            }, {
                "id": "Shape_XNORGATE3bFmxXS",
                "shape": {
                    "type": "Path",
                    "data": "M 73.39 , 48.5 L 73.39 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 1,
                "offsetX": 73.88999938964844,
                "offsetY": 49
            }, {
                "id": "Shape_XNORGATE4If0aTe",
                "shape": {
                    "type": "Path",
                    "data": "M18,76.83h0A81.67,81.67,0,0,0,18,20.5l0-.1"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 5.010225296020508,
                "height": 56.43000030517578,
                "offsetX": 20.505112648010254,
                "offsetY": 48.614999771118164
            }, {
                "id": "Shape_XNORGATE5E7FbwK",
                "shape": {
                    "type": "Path",
                    "data": "M 83.5 , 48.5 L 99.5 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 16,
                "height": 1,
                "offsetX": 91.5,
                "offsetY": 49
            }, {
                "id": "Shape_XNORGATE6qMxHxd",
                "shape": {
                    "type": "Path",
                    "data": "M 0.5 , 32.5 L 21.5 , 32.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 11,
                "offsetY": 33
            }, {
                "id": "Shape_XNORGATE7qsFwXD",
                "shape": {
                    "type": "Path",
                    "data": "M 0.5 , 65.5 L 21.5 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 11,
                "offsetY": 66
            }, {
                "id": "Shape_XNORGATE81rc8YG",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 6,
                "offsetX": 80.5,
                "offsetY": 48.5
            }, {
                "id": "Shape_XNORGATE",
                "children": ["Shape_XNORGATE24lVVGz", "Shape_XNORGATE3bFmxXS", "Shape_XNORGATE4If0aTe", "Shape_XNORGATE5E7FbwK", "Shape_XNORGATE6qMxHxd", "Shape_XNORGATE7qsFwXD", "Shape_XNORGATE81rc8YG"]
            }, {
                "id": "Shape_XORIEC2jjcRcI",
                "shape": {
                    "type": "Basic",
                    "shape": "Rectangle"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 56,
                "height": 72,
                "offsetX": 50.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_XORIEC3zdSQIL",
                "shape": {
                    "type": "Basic",
                    "shape": "Ellipse"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 6,
                "height": 6,
                "offsetX": 81.5,
                "offsetY": 50.5
            }, {
                "id": "Shape_XORIEC",
                "children": ["Shape_XORIEC2jjcRcI", "Shape_XORIEC3zdSQIL"]
            }, {
                "id": "Shape_XORGATE2LLv1py",
                "shape": {
                    "type": "Path",
                    "data": "M21.71,76.5h0a83.59,83.59,0,0,0,0-55.9l0-.1h1.58a66.58,66.58,0,0,1,54.21,28h0a66.58,66.58,0,0,1-54.21,28Z"
                },
                "style": {
                    "fill": "#fff",
                    "strokeColor": "#000"
                },
                "width": 55.790000915527344,
                "height": 56,
                "offsetX": 49.60499954223633,
                "offsetY": 48.49999809265137
            }, {
                "id": "Shape_XORGATE3bsEkeS",
                "shape": {
                    "type": "Path",
                    "data": "M 73.39 , 48.5 L 73.39 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 1,
                "height": 1,
                "offsetX": 73.88999938964844,
                "offsetY": 49
            }, {
                "id": "Shape_XORGATE4CSJUe0",
                "shape": {
                    "type": "Path",
                    "data": "M17.47,76.83h0a81.67,81.67,0,0,0,0-56.33l0-.1"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 5.010223388671875,
                "height": 56.43000030517578,
                "offsetX": 19.97511100769043,
                "offsetY": 48.614999771118164
            }, {
                "id": "Shape_XORGATE52ePw6D",
                "shape": {
                    "type": "Path",
                    "data": "M 77.5 , 48.5 L 99.5 , 48.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 22,
                "height": 1,
                "offsetX": 88.5,
                "offsetY": 49
            }, {
                "id": "Shape_XORGATE6dwLs2D",
                "shape": {
                    "type": "Path",
                    "data": "M 0 , 32.5 L 21 , 32.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 10.5,
                "offsetY": 33
            }, {
                "id": "Shape_XORGATE7YCpfPx",
                "shape": {
                    "type": "Path",
                    "data": "M 0 , 65.5 L 21 , 65.5"
                },
                "style": {
                    "fill": "none",
                    "strokeColor": "#000"
                },
                "width": 21,
                "height": 1,
                "offsetX": 10.5,
                "offsetY": 66
            }, {
                "id": "Shape_XORGATE",
                "children": ["Shape_XORGATE2LLv1py", "Shape_XORGATE3bsEkeS", "Shape_XORGATE4CSJUe0", "Shape_XORGATE52ePw6D", "Shape_XORGATE6dwLs2D", "Shape_XORGATE7YCpfPx"]
            }];
        for (let i = 0; i < gateShapes.length; i++) {
            if(!gateShapes[i].children) {
                gateShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            gateShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return gateShapes;
    }

    private getElectricalInductorsShapes(): NodeModel[] {
        let inductorsShapes: NodeModel[] = [
            {
                id: 'SHAPE_1PHASEINDUCTIONVOLTAGEREGULATOR28ngSXD',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 98.9800033569336,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_1PHASEINDUCTIONVOLTAGEREGULATOR3s4n3Si',
                shape: {
                    type: 'Path',
                    data: 'M30.5,25.5A12.5,12.5,0,0,1,43,38c0,6.9-6.6,12.5-13.5,12.5C36.4,50.5,43,56.1,43,63A12.5,12.5,0,0,1,30.5,75.5h40a12.5,12.5,0,0,1,0-25,12.5,12.5,0,0,1,0-25'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 41,
                height: 50,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_1PHASEINDUCTIONVOLTAGEREGULATOR',
                'children': ['SHAPE_1PHASEINDUCTIONVOLTAGEREGULATOR28ngSXD', 'SHAPE_1PHASEINDUCTIONVOLTAGEREGULATOR3s4n3Si']
            }, {
                id: 'SHAPE_ADJUSTABLETRANSFORMER2RCpeQU',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 51.5,
                offsetY: 36.5
            }, {
                id: 'SHAPE_ADJUSTABLETRANSFORMER3ke9Swk',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 51.5,
                offsetY: 63.5
            }, {
                id: 'SHAPE_ADJUSTABLETRANSFORMER4qO6Aqj',
                shape: {
                    type: 'Path',
                    data: 'M28.5,49.15,70.93,23M72,24.44l-2.14-2.82,4.64-1.06Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 46,
                height: 28.59000015258789,
                offsetX: 51.5,
                offsetY: 34.85500144958496
            }, {
                id: 'SHAPE_ADJUSTABLETRANSFORMER',
                'children': ['SHAPE_ADJUSTABLETRANSFORMER2RCpeQU', 'SHAPE_ADJUSTABLETRANSFORMER3ke9Swk', 'SHAPE_ADJUSTABLETRANSFORMER4qO6Aqj']
            }, {
                id: 'SHAPE_CHOKE22k3zH0',
                shape: {
                    type: 'Path',
                    data: 'M50.5,100V75.5a26,26,0,1,0-26-26h26V0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 52,
                height: 100,
                offsetX: 50.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CHOKE',
                'children': ['SHAPE_CHOKE22k3zH0']
            }, {
                id: 'SHAPE_COAXIALCHOKE2PVjtbY',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 26,
                height: 26,
                offsetX: 112.5,
                offsetY: 69.5
            }, {
                id: 'SHAPE_COAXIALCHOKE3OntxLH',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 26,
                height: 26,
                offsetX: 16.5,
                offsetY: 69.5
            }, {
                id: 'SHAPE_COAXIALCHOKE420AtRW',
                shape: {
                    type: 'Path',
                    data: 'M3,82.5H32.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0H126'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 123,
                height: 8,
                offsetX: 64.5,
                offsetY: 78.5
            }, {
                id: 'SHAPE_COAXIALCHOKE5N77m3d',
                shape: {
                    type: 'Path',
                    data: 'M0,69.5H32.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0H130'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 130,
                height: 8,
                offsetX: 65,
                offsetY: 65.5
            }, {
                id: 'SHAPE_COAXIALCHOKE6i5ONyB',
                shape: {
                    type: 'Path',
                    data: 'M 47 , 56.5 L 83 , 56.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 36,
                height: 1,
                offsetX: 65,
                offsetY: 57
            }, {
                id: 'SHAPE_COAXIALCHOKE',
                'children': ['SHAPE_COAXIALCHOKE2PVjtbY', 'SHAPE_COAXIALCHOKE3OntxLH', 'SHAPE_COAXIALCHOKE420AtRW', 'SHAPE_COAXIALCHOKE5N77m3d', 'SHAPE_COAXIALCHOKE6i5ONyB']
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-862k8Gohx',
                shape: {
                    type: 'Path',
                    data: 'M52.1,12.5v75M54.5,25a12.26,12.26,0,0,0-12,12.5A12.26,12.26,0,0,0,54.5,50a12.51,12.51,0,0,0,0,25'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 12.00992202758789,
                height: 75,
                offsetX: 48.49504280090332,
                offsetY: 50
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-86',
                'children': ['SHAPE_CURRENTTRANSFORMER-862k8Gohx']
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-872oLlW37',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 54,
                height: 54,
                offsetX: 38.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-873cS3OGb',
                shape: {
                    type: 'Path',
                    data: 'M38.5,0V100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 100,
                offsetX: 39,
                offsetY: 50
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-874wz2nBE',
                shape: {
                    type: 'Path',
                    data: 'M 65.5 , 50.49 L 99.5 , 50.49'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34,
                height: 1,
                offsetX: 82.5,
                offsetY: 50.9900016784668
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-875SESsLd',
                shape: {
                    type: 'Path',
                    data: 'M 80.29 , 45.28 L 73.42 , 55.72'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.870002746582031,
                height: 10.44000244140625,
                offsetX: 76.85499954223633,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-876I3g2yF',
                shape: {
                    type: 'Path',
                    data: 'M 90.59 , 45.28 L 83.72 , 55.72'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.8699951171875,
                height: 10.44000244140625,
                offsetX: 87.15499877929688,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER-87',
                'children': ['SHAPE_CURRENTTRANSFORMER-872oLlW37', 'SHAPE_CURRENTTRANSFORMER-873cS3OGb', 'SHAPE_CURRENTTRANSFORMER-874wz2nBE', 'SHAPE_CURRENTTRANSFORMER-875SESsLd', 'SHAPE_CURRENTTRANSFORMER-876I3g2yF']
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER12ifyhiX',
                shape: {
                    type: 'Path',
                    data: 'M14,51.5H89m-65.5-3a10,10,0,0,0,20,0h7a7,7,0,0,0,14,0,7,7,0,0,0,14,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 9.9951171875,
                offsetX: 51.5,
                offsetY: 53.49755859375
            }, {
                id: 'SHAPE_CURRENTTRANSFORMER1',
                'children': ['SHAPE_CURRENTTRANSFORMER12ifyhiX']
            }, {
                id: 'SHAPE_FERRITECORE2RhsuZY',
                shape: {
                    type: 'Path',
                    data: 'M 15 , 45.5 L 8 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 11.5,
                offsetY: 46
            }, {
                id: 'SHAPE_FERRITECORE3Zhje5o',
                shape: {
                    type: 'Path',
                    data: 'M 8 , 47.5 L 15 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 11.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FERRITECORE4fixBgq',
                shape: {
                    type: 'Path',
                    data: 'M 8 , 49.5 L 15 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 11.5,
                offsetY: 50
            }, {
                id: 'SHAPE_FERRITECORE5hGZPgu',
                shape: {
                    type: 'Path',
                    data: 'M 21 , 45.5 L 28 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 24.5,
                offsetY: 46
            }, {
                id: 'SHAPE_FERRITECORE6qQZ72m',
                shape: {
                    type: 'Path',
                    data: 'M 21 , 47.5 L 28 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 24.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FERRITECORE7Cnk8h8',
                shape: {
                    type: 'Path',
                    data: 'M 21 , 49.5 L 28 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 24.5,
                offsetY: 50
            }, {
                id: 'SHAPE_FERRITECORE8oPPnkA',
                shape: {
                    type: 'Path',
                    data: 'M 34 , 45.5 L 41 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 37.5,
                offsetY: 46
            }, {
                id: 'SHAPE_FERRITECORE92St05M',
                shape: {
                    type: 'Path',
                    data: 'M 34 , 47.5 L 41 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 37.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FERRITECORE103P160Q',
                shape: {
                    type: 'Path',
                    data: 'M 34 , 49.5 L 41 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 37.5,
                offsetY: 50
            }, {
                id: 'SHAPE_FERRITECORE11Sq5jwv',
                shape: {
                    type: 'Path',
                    data: 'M 47 , 45.5 L 54 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 50.5,
                offsetY: 46
            }, {
                id: 'SHAPE_FERRITECORE120vPWNS',
                shape: {
                    type: 'Path',
                    data: 'M 47 , 47.5 L 54 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 50.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FERRITECORE13jJVmXl',
                shape: {
                    type: 'Path',
                    data: 'M 47 , 49.5 L 54 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 50.5,
                offsetY: 50
            }, {
                id: 'SHAPE_FERRITECORE147vkYVQ',
                shape: {
                    type: 'Path',
                    data: 'M 60 , 45.5 L 67 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 63.5,
                offsetY: 46
            }, {
                id: 'SHAPE_FERRITECORE15nhOOuX',
                shape: {
                    type: 'Path',
                    data: 'M 60 , 47.5 L 67 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 63.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FERRITECORE161WG0AZ',
                shape: {
                    type: 'Path',
                    data: 'M 60 , 49.5 L 67 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 63.5,
                offsetY: 50
            }, {
                id: 'SHAPE_FERRITECORE17cJnDF0',
                shape: {
                    type: 'Path',
                    data: 'M 73 , 45.5 L 80 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 76.5,
                offsetY: 46
            }, {
                id: 'SHAPE_FERRITECORE18V465fr',
                shape: {
                    type: 'Path',
                    data: 'M 73 , 47.5 L 80 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 76.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FERRITECORE19eQPbB9',
                shape: {
                    type: 'Path',
                    data: 'M 73 , 49.5 L 80 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 76.5,
                offsetY: 50
            }, {
                id: 'SHAPE_FERRITECORE20SEGY2j',
                shape: {
                    type: 'Path',
                    data: 'M 86 , 45.5 L 93 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 89.5,
                offsetY: 46
            }, {
                id: 'SHAPE_FERRITECORE21Mt1spi',
                shape: {
                    type: 'Path',
                    data: 'M 86 , 47.5 L 93 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 89.5,
                offsetY: 48
            }, {
                id: 'SHAPE_FERRITECORE22FXT9r4',
                shape: {
                    type: 'Path',
                    data: 'M 86 , 49.5 L 93 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 1,
                offsetX: 89.5,
                offsetY: 50
            }, {
                id: 'SHAPE_FERRITECORE',
                'children': ['SHAPE_FERRITECORE2RhsuZY', 'SHAPE_FERRITECORE3Zhje5o', 'SHAPE_FERRITECORE4fixBgq', 'SHAPE_FERRITECORE5hGZPgu', 'SHAPE_FERRITECORE6qQZ72m', 'SHAPE_FERRITECORE7Cnk8h8', 'SHAPE_FERRITECORE8oPPnkA', 'SHAPE_FERRITECORE92St05M', 'SHAPE_FERRITECORE103P160Q', 'SHAPE_FERRITECORE11Sq5jwv', 'SHAPE_FERRITECORE120vPWNS', 'SHAPE_FERRITECORE13jJVmXl', 'SHAPE_FERRITECORE147vkYVQ', 'SHAPE_FERRITECORE15nhOOuX', 'SHAPE_FERRITECORE161WG0AZ', 'SHAPE_FERRITECORE17cJnDF0', 'SHAPE_FERRITECORE18V465fr', 'SHAPE_FERRITECORE19eQPbB9', 'SHAPE_FERRITECORE20SEGY2j', 'SHAPE_FERRITECORE21Mt1spi', 'SHAPE_FERRITECORE22FXT9r4']
            }, {
                id: 'SHAPE_HALFCONDUCTOR22Dj3BU',
                shape: {
                    type: 'Path',
                    data: 'M66.46,47.07A9.5,9.5,0,1,0,48,51.17a2.06,2.06,0,0,0,2,1.33h0a2.12,2.12,0,0,0,2-1.45A9.5,9.5,0,1,0,33.51,47.5V62'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.95000076293945,
                height: 23.478557586669922,
                offsetX: 49.98499870300293,
                offsetY: 50.26072120666504
            }, {
                id: 'SHAPE_HALFCONDUCTOR36qg4LY',
                shape: {
                    type: 'Path',
                    data: 'M33.56,47.07A9.5,9.5,0,1,1,52,51.17,2.06,2.06,0,0,1,50,52.5h0a2.12,2.12,0,0,1-2-1.45,9.4,9.4,0,0,1-.46-4,9.5,9.5,0,0,1,18.94.43V62'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.92000198364258,
                height: 23.51215362548828,
                offsetX: 50.020002365112305,
                offsetY: 50.24392318725586
            }, {
                id: 'SHAPE_HALFCONDUCTOR',
                'children': ['SHAPE_HALFCONDUCTOR22Dj3BU', 'SHAPE_HALFCONDUCTOR36qg4LY']
            }, {
                id: 'SHAPE_INDUCTIONVOLTAGEREGULATOR2Qt4BkB',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70,
                height: 70,
                offsetX: 49,
                offsetY: 50.5
            }, {
                id: 'SHAPE_INDUCTIONVOLTAGEREGULATOR3sNm3QB',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 46,
                height: 46,
                offsetX: 49,
                offsetY: 38.5
            }, {
                id: 'SHAPE_INDUCTIONVOLTAGEREGULATOR4HGXFvC',
                shape: {
                    type: 'Path',
                    data: 'M50,1.5v14m0,70v14m-38.18,0L79.47,10.81M75,7.77,86.73,1.21,83.92,13.85Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 74.91000366210938,
                height: 98.29000091552734,
                offsetX: 49.275001525878906,
                offsetY: 50.355000495910645
            }, {
                id: 'SHAPE_INDUCTIONVOLTAGEREGULATOR',
                'children': ['SHAPE_INDUCTIONVOLTAGEREGULATOR2Qt4BkB', 'SHAPE_INDUCTIONVOLTAGEREGULATOR3sNm3QB', 'SHAPE_INDUCTIONVOLTAGEREGULATOR4HGXFvC']
            }, {
                id: 'SHAPE_INDUCTORAirCore-622J0VtlA',
                shape: {
                    type: 'Path',
                    data: 'M0,49.5H17.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 8,
                offsetX: 50,
                offsetY: 45.5
            }, {
                id: 'SHAPE_INDUCTORAirCore-62',
                'children': ['SHAPE_INDUCTORAirCore-622J0VtlA']
            }, {
                id: 'SHAPE_INDUCTORAirCore-632qHPHKB',
                shape: {
                    type: 'Path',
                    data: 'M66.46,52.07A9.5,9.5,0,1,0,48,56.17a2.06,2.06,0,0,0,2,1.33h0a2.12,2.12,0,0,0,2-1.45,9.5,9.5,0,1,0-18.5-3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.960086822509766,
                height: 13.992412567138672,
                offsetX: 49.97995567321777,
                offsetY: 50.50510215759277
            }, {
                id: 'SHAPE_INDUCTORAirCore-633q05k8h',
                shape: {
                    type: 'Path',
                    data: 'M47.5,53a9.5,9.5,0,1,1,18.5,3,2.12,2.12,0,0,1-2,1.45h0a2.06,2.06,0,0,1-2-1.33A9.5,9.5,0,1,1,80.38,51.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 52.50008773803711,
                height: 13.992412567138672,
                offsetX: 73.74995613098145,
                offsetY: 50.455095291137695
            }, {
                id: 'SHAPE_INDUCTORAirCore-634lYgUR0',
                shape: {
                    type: 'Path',
                    data: 'M52.46,52.07A9.5,9.5,0,1,0,34,56.17a2.06,2.06,0,0,0,2,1.33h0a2.12,2.12,0,0,0,2-1.45A9.5,9.5,0,1,0,19.51,52.5H0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 52.459999084472656,
                height: 13.979873657226562,
                offsetX: 26.229999542236328,
                offsetY: 50.51136779785156
            }, {
                id: 'SHAPE_INDUCTORAirCore-635m7GmA3',
                shape: {
                    type: 'Path',
                    data: 'M-52.5,13A9.5,9.5,0,0,1-41.93,3.56a9.57,9.57,0,0,1,8.39,8.51,9.56,9.56,0,0,1-.46,4,2.12,2.12,0,0,1-2,1.45h0a2.06,2.06,0,0,1-2-1.33A9.51,9.51,0,0,1-38.5,13,9.5,9.5,0,0,1-27.93,3.56a9.56,9.56,0,0,1,8.31,7.94H0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 52.5,
                height: 14.021751403808594,
                offsetX: -26.25,
                offsetY: 10.510425329208374
            }, {
                id: 'SHAPE_INDUCTORAirCore-63',
                'children': ['SHAPE_INDUCTORAirCore-632qHPHKB', 'SHAPE_INDUCTORAirCore-633q05k8h', 'SHAPE_INDUCTORAirCore-634lYgUR0', 'SHAPE_INDUCTORAirCore-635m7GmA3']
            }, {
                id: 'SHAPE_INDUCTORAirCore12nVS3Iy',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 10,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_INDUCTORAirCore134EqUVT',
                shape: {
                    type: 'Path',
                    data: 'M 99.5 , 54.5 L 99.5 , 60.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 6,
                offsetX: 100,
                offsetY: 57.5
            }, {
                id: 'SHAPE_INDUCTORAirCore14yfM3ms',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 54.5 L 0.5 , 60.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 6,
                offsetX: 1,
                offsetY: 57.5
            }, {
                id: 'SHAPE_INDUCTORAirCore1',
                'children': ['SHAPE_INDUCTORAirCore12nVS3Iy', 'SHAPE_INDUCTORAirCore134EqUVT', 'SHAPE_INDUCTORAirCore14yfM3ms']
            }, {
                id: 'SHAPE_INDUCTOR2yLxyXv',
                shape: {
                    type: 'Path',
                    data: 'M19.5,64V42.75a8.17,8.17,0,0,1,6.82-8.17A8,8,0,0,1,35.5,42.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,9.18-7.92,8.17,8.17,0,0,1,6.82,8.17V64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 64.00154113769531,
                height: 29.507503509521484,
                offsetX: 51.50000190734863,
                offsetY: 49.24624824523926
            }, {
                id: 'SHAPE_INDUCTOR',
                'children': ['SHAPE_INDUCTOR2yLxyXv']
            }, {
                id: 'SHAPE_IRONCORE2q1GqXK',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 48 L 84 , 48'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 68,
                height: 1,
                offsetX: 50,
                offsetY: 48.5
            }, {
                id: 'SHAPE_IRONCORE3kEbOmP',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 50 L 84 , 50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 68,
                height: 1,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_IRONCORE4XIbMHM',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 52 L 84 , 52'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 68,
                height: 1,
                offsetX: 50,
                offsetY: 52.5
            }, {
                id: 'SHAPE_IRONCORE',
                'children': ['SHAPE_IRONCORE2q1GqXK', 'SHAPE_IRONCORE3kEbOmP', 'SHAPE_IRONCORE4XIbMHM']
            }, {
                id: 'SHAPE_LINEARCOUPLER2zGnQlZ',
                shape: {
                    type: 'Path',
                    data: 'M23.5,44v9.18A10.21,10.21,0,0,0,32,63.39,10,10,0,0,0,43.5,53.5v-10h8a7,7,0,0,0,14,0,7,7,0,0,0,14,0M14,56.5H94'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 80,
                height: 20.003143310546875,
                offsetX: 54,
                offsetY: 53.50157165527344
            }, {
                id: 'SHAPE_LINEARCOUPLER',
                'children': ['SHAPE_LINEARCOUPLER2zGnQlZ']
            }, {
                id: 'SHAPE_MAGENTICCORE20E2gLY',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 48.5 L 84 , 48.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 68,
                height: 1,
                offsetX: 50,
                offsetY: 49
            }, {
                id: 'SHAPE_MAGENTICCORE3oQql9A',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 51.5 L 84 , 51.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 68,
                height: 1,
                offsetX: 50,
                offsetY: 52
            }, {
                id: 'SHAPE_MAGENTICCORE',
                'children': ['SHAPE_MAGENTICCORE20E2gLY', 'SHAPE_MAGENTICCORE3oQql9A']
            }, {
                id: 'SHAPE_OUTDOORMETERINGDEVICE26KWpqC',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 99,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTDOORMETERINGDEVICE3TRUmJ5',
                shape: {
                    type: 'Path',
                    data: 'M65.5,25V95M63,36.5H40m.5-25a12.5,12.5,0,0,0,0,25,12.5,12.5,0,0,0,0,25m28-11a9,9,0,0,0,0,18,9,9,0,0,0,0,18'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40.5,
                height: 83.5,
                offsetX: 48.24999809265137,
                offsetY: 53.25
            }, {
                id: 'SHAPE_OUTDOORMETERINGDEVICE4MgUCgJ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 65.5,
                offsetY: 36.5
            }, {
                id: 'SHAPE_OUTDOORMETERINGDEVICE',
                'children': ['SHAPE_OUTDOORMETERINGDEVICE26KWpqC', 'SHAPE_OUTDOORMETERINGDEVICE3TRUmJ5', 'SHAPE_OUTDOORMETERINGDEVICE4MgUCgJ']
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS2VwpxVB',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 63.5,
                offsetY: 59.5
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS3aXNPn2',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 36.5,
                offsetY: 59.5
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS4H9i86B',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 50,
                offsetY: 36
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS5PCzRpI',
                shape: {
                    type: 'Path',
                    data: 'M 63.5 , 79.5 L 63.5 , 95.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 16,
                offsetX: 64,
                offsetY: 87.5
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS6dvnrl5',
                shape: {
                    type: 'Path',
                    data: 'M 36.5 , 79.5 L 36.5 , 95.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 16,
                offsetX: 37,
                offsetY: 87.5
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS7BXKKmw',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 0.5 L 50.5 , 16.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 16,
                offsetX: 51,
                offsetY: 8.5
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS',
                'children': ['SHAPE_POTENTIALTRANSFORMER-3WINDINGS2VwpxVB', 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS3aXNPn2', 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS4H9i86B', 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS5PCzRpI', 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS6dvnrl5', 'SHAPE_POTENTIALTRANSFORMER-3WINDINGS7BXKKmw']
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-792d7W85z',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 36.5,
                offsetY: 50
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-793OGq8kb',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 63.5,
                offsetY: 50
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-794cEJu8y',
                shape: {
                    type: 'Path',
                    data: 'M 83.5 , 50 L 99.5 , 50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16,
                height: 1,
                offsetX: 91.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-79542gYMr',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 50 L 16.5 , 50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16,
                height: 1,
                offsetX: 8.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-79',
                'children': ['SHAPE_POTENTIALTRANSFORMER-792d7W85z', 'SHAPE_POTENTIALTRANSFORMER-793OGq8kb', 'SHAPE_POTENTIALTRANSFORMER-794cEJu8y', 'SHAPE_POTENTIALTRANSFORMER-79542gYMr']
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-892BmPX0S',
                shape: {
                    type: 'Path',
                    data: 'M1,48.5H34m34,0h32M33,23A12.5,12.5,0,0,1,45.5,35.5c0,6.9-5.1,13-12,13a11.67,11.67,0,0,1,12,12A12.5,12.5,0,0,1,33,73M68,23A12.5,12.5,0,0,0,55.5,35.5a13.38,13.38,0,0,0,13,13c-6.9,0-13,5.1-13,12A12.5,12.5,0,0,0,68,73'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99,
                height: 49.99999237060547,
                offsetX: 50.5,
                offsetY: 47.999996185302734
            }, {
                id: 'SHAPE_POTENTIALTRANSFORMER-89',
                'children': ['SHAPE_POTENTIALTRANSFORMER-892BmPX0S']
            }, {
                id: 'SHAPE_SATURATINGTRANSFORMER2fJMD4s',
                shape: {
                    type: 'Path',
                    data: 'M0,49.5H17.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 8,
                offsetX: 50,
                offsetY: 45.5
            }, {
                id: 'SHAPE_SATURATINGTRANSFORMER3NnO8EQ',
                shape: {
                    type: 'Path',
                    data: 'M0,76.5H17.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 8,
                offsetX: 50,
                offsetY: 72.5
            }, {
                id: 'SHAPE_SATURATINGTRANSFORMER45QcWgd',
                shape: {
                    type: 'Path',
                    data: 'M100,24.5H82.5a8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-16,0H0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 8,
                offsetX: 50,
                offsetY: 28.5
            }, {
                id: 'SHAPE_SATURATINGTRANSFORMER5Q0S1Ol',
                shape: {
                    type: 'Path',
                    data: 'M50 83.5 57.5 83.5 57.5 16.5 66 16.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16,
                height: 67,
                offsetX: 58,
                offsetY: 50
            }, {
                id: 'SHAPE_SATURATINGTRANSFORMER',
                'children': ['SHAPE_SATURATINGTRANSFORMER2fJMD4s', 'SHAPE_SATURATINGTRANSFORMER3NnO8EQ', 'SHAPE_SATURATINGTRANSFORMER45QcWgd', 'SHAPE_SATURATINGTRANSFORMER5Q0S1Ol']
            }, {
                id: 'SHAPE_TRANSDUCTOR2XjUXXx',
                shape: {
                    type: 'Path',
                    data: 'M57.5,65.5a8,8,0,0,1,16,0H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 42.5,
                height: 8,
                offsetX: 78.75,
                offsetY: 61.5
            }, {
                id: 'SHAPE_TRANSDUCTOR3mlSRRc',
                shape: {
                    type: 'Path',
                    data: 'M0,65.5H25.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 57.5,
                height: 8,
                offsetX: 28.75,
                offsetY: 61.5
            }, {
                id: 'SHAPE_TRANSDUCTOR4FfBBMf',
                shape: {
                    type: 'Path',
                    data: 'M100,36.5H89.5a8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-16,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 74.5,
                height: 8,
                offsetX: 62.75,
                offsetY: 40.5
            }, {
                id: 'SHAPE_TRANSDUCTOR5cXPFYX',
                shape: {
                    type: 'Path',
                    data: 'M25.5,36.5a8,8,0,0,1-16,0H0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 25.5,
                height: 8,
                offsetX: 12.75,
                offsetY: 40.5
            }, {
                id: 'SHAPE_TRANSDUCTOR6t1Q7Vo',
                shape: {
                    type: 'Path',
                    data: 'M42 74.5 49.5 74.5 49.5 27.5 58 27.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16,
                height: 47,
                offsetX: 50,
                offsetY: 51
            }, {
                id: 'SHAPE_TRANSDUCTOR',
                'children': ['SHAPE_TRANSDUCTOR2XjUXXx', 'SHAPE_TRANSDUCTOR3mlSRRc', 'SHAPE_TRANSDUCTOR4FfBBMf', 'SHAPE_TRANSDUCTOR5cXPFYX', 'SHAPE_TRANSDUCTOR6t1Q7Vo']
            }, {
                id: 'SHAPE_TRANSFORMERironCore-6924gogOL',
                shape: {
                    type: 'Path',
                    data: 'M17.5,76V63.75a8.17,8.17,0,0,1,6.82-8.17A8,8,0,0,1,33.5,63.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,9.18-7.92,8.17,8.17,0,0,1,6.82,8.17V77'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 64.00153350830078,
                height: 21.507503509521484,
                offsetX: 49.499996185302734,
                offsetY: 66.24624824523926
            }, {
                id: 'SHAPE_TRANSFORMERironCore-6937Actpe',
                shape: {
                    type: 'Path',
                    data: 'M81.5,18V31.3a8.16,8.16,0,0,1-6.82,8.16,8,8,0,0,1-9.18-7.92,8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-9.18,7.92A8.16,8.16,0,0,1,17.5,31.3V19'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 64.00149536132812,
                height: 21.547504425048828,
                offsetX: 49.49999809265137,
                offsetY: 28.773752212524414
            }, {
                id: 'SHAPE_TRANSFORMERironCore-694oLlibe',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 45.5 L 82 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 66,
                height: 1,
                offsetX: 49,
                offsetY: 46
            }, {
                id: 'SHAPE_TRANSFORMERironCore-6952MaGAG',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 47.5 L 82 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 66,
                height: 1,
                offsetX: 49,
                offsetY: 48
            }, {
                id: 'SHAPE_TRANSFORMERironCore-696drVqGy',
                shape: {
                    type: 'Path',
                    data: 'M 16 , 49.5 L 82 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 66,
                height: 1,
                offsetX: 49,
                offsetY: 50
            }, {
                id: 'SHAPE_TRANSFORMERironCore-69',
                'children': ['SHAPE_TRANSFORMERironCore-6924gogOL', 'SHAPE_TRANSFORMERironCore-6937Actpe', 'SHAPE_TRANSFORMERironCore-694oLlibe', 'SHAPE_TRANSFORMERironCore-6952MaGAG', 'SHAPE_TRANSFORMERironCore-696drVqGy']
            }, {
                id: 'SHAPE_TRANSFORMERironCore-702Z7OtMX',
                shape: {
                    type: 'Path',
                    data: 'M 17 , 45.5 L 83 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 66,
                height: 1,
                offsetX: 50,
                offsetY: 46
            }, {
                id: 'SHAPE_TRANSFORMERironCore-703r9xa09',
                shape: {
                    type: 'Path',
                    data: 'M 17 , 47.5 L 83 , 47.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 66,
                height: 1,
                offsetX: 50,
                offsetY: 48
            }, {
                id: 'SHAPE_TRANSFORMERironCore-704MSF1Qn',
                shape: {
                    type: 'Path',
                    data: 'M 17 , 49.5 L 83 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 66,
                height: 1,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_TRANSFORMERironCore-705UrNkYl',
                shape: {
                    type: 'Path',
                    data: 'M66.46,64.07A9.5,9.5,0,1,0,48,68.17a2.06,2.06,0,0,0,2,1.33h0a2.12,2.12,0,0,0,2-1.45,9.5,9.5,0,1,0-18.5-3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.960086822509766,
                height: 13.99239730834961,
                offsetX: 49.97995567321777,
                offsetY: 62.50509834289551
            }, {
                id: 'SHAPE_TRANSFORMERironCore-706jdg3md',
                shape: {
                    type: 'Path',
                    data: 'M52.46,64.07A9.5,9.5,0,1,0,34,68.17a2.06,2.06,0,0,0,2,1.33h0a2.12,2.12,0,0,0,2-1.45A9.5,9.5,0,1,0,19.51,64.5V79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.94999694824219,
                height: 23.478561401367188,
                offsetX: 35.98499870300293,
                offsetY: 67.2607192993164
            }, {
                id: 'SHAPE_TRANSFORMERironCore-707bp6EbL',
                shape: {
                    type: 'Path',
                    data: 'M47.56,64.07A9.5,9.5,0,1,1,66,68.17a2.06,2.06,0,0,1-2,1.33h0a2.12,2.12,0,0,1-2-1.45,9.4,9.4,0,0,1-.46-4,9.5,9.5,0,0,1,18.94.43V79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.92000198364258,
                height: 23.512123107910156,
                offsetX: 64.0200023651123,
                offsetY: 67.24393844604492
            }, {
                id: 'SHAPE_TRANSFORMERironCore-708eAbwBN',
                shape: {
                    type: 'Path',
                    data: 'M33.54,30.93A9.5,9.5,0,1,0,52,26.83a2.06,2.06,0,0,0-2-1.33h0A2.12,2.12,0,0,0,48,27,9.5,9.5,0,1,0,66.5,30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.96009063720703,
                height: 14.04241943359375,
                offsetX: 50.02004623413086,
                offsetY: 32.5199089050293
            }, {
                id: 'SHAPE_TRANSFORMERironCore-709sP06nz',
                shape: {
                    type: 'Path',
                    data: 'M47.54,30.93A9.5,9.5,0,1,0,66,26.83a2.06,2.06,0,0,0-2-1.33h0A2.12,2.12,0,0,0,62,27,9.5,9.5,0,1,0,80.49,30.5V16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.94999694824219,
                height: 23.537677764892578,
                offsetX: 64.01499938964844,
                offsetY: 27.76883888244629
            }, {
                id: 'SHAPE_TRANSFORMERironCore-701071BxKr',
                shape: {
                    type: 'Path',
                    data: 'M52.44,30.93A9.5,9.5,0,1,1,34,26.83,2.06,2.06,0,0,1,36,25.5h0A2.12,2.12,0,0,1,38,27a9.4,9.4,0,0,1,.46,4A9.5,9.5,0,0,1,19.5,30.5V16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 32.94000244140625,
                height: 23.687057495117188,
                offsetX: 35.96999931335449,
                offsetY: 27.843528747558594
            }, {
                id: 'SHAPE_TRANSFORMERironCore-70',
                'children': ['SHAPE_TRANSFORMERironCore-702Z7OtMX', 'SHAPE_TRANSFORMERironCore-703r9xa09', 'SHAPE_TRANSFORMERironCore-704MSF1Qn', 'SHAPE_TRANSFORMERironCore-705UrNkYl', 'SHAPE_TRANSFORMERironCore-706jdg3md', 'SHAPE_TRANSFORMERironCore-707bp6EbL', 'SHAPE_TRANSFORMERironCore-708eAbwBN', 'SHAPE_TRANSFORMERironCore-709sP06nz', 'SHAPE_TRANSFORMERironCore-701071BxKr']
            }, {
                id: 'SHAPE_TRANSFORMER-722YRzl20',
                shape: {
                    type: 'Path',
                    data: 'M19.5,84V62.75a8.17,8.17,0,0,1,6.82-8.17A8,8,0,0,1,35.5,62.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,9.18-7.92,8.17,8.17,0,0,1,6.82,8.17V84'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 64.00154113769531,
                height: 29.507503509521484,
                offsetX: 51.50000190734863,
                offsetY: 69.24624824523926
            }, {
                id: 'SHAPE_TRANSFORMER-723U8aQUg',
                shape: {
                    type: 'Path',
                    data: 'M83.5,19V40.3a8.16,8.16,0,0,1-6.82,8.16,8,8,0,0,1-9.18-7.92,8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-9.18,7.92A8.16,8.16,0,0,1,19.5,40.3V19'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 64.00149536132812,
                height: 29.547500610351562,
                offsetX: 51.5,
                offsetY: 33.77375030517578
            }, {
                id: 'SHAPE_TRANSFORMER-72',
                'children': ['SHAPE_TRANSFORMER-722YRzl20', 'SHAPE_TRANSFORMER-723U8aQUg']
            }, {
                id: 'SHAPE_TRANSFORMER-812bmLCqW',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 50,
                offsetY: 63.5
            }, {
                id: 'SHAPE_TRANSFORMER-813BXX0zB',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 50,
                offsetY: 36.5
            }, {
                id: 'SHAPE_TRANSFORMER-814JDTnoF',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 50,
                offsetY: 63.5
            }, {
                id: 'SHAPE_TRANSFORMER-81',
                'children': ['SHAPE_TRANSFORMER-812bmLCqW', 'SHAPE_TRANSFORMER-813BXX0zB', 'SHAPE_TRANSFORMER-814JDTnoF']
            }, {
                id: 'SHAPE_TRIPLEXINDUCTIONVOLTAGEREGULATOR20jv3a9',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TRIPLEXINDUCTIONVOLTAGEREGULATOR3LwITKJ',
                shape: {
                    type: 'Path',
                    data: 'M49.5.5v98m-38-63a9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0m-76,20a9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0m-76,20a9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0,9.5,9.5,0,0,1,19,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 76,
                height: 98,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TRIPLEXINDUCTIONVOLTAGEREGULATOR',
                'children': ['SHAPE_TRIPLEXINDUCTIONVOLTAGEREGULATOR20jv3a9', 'SHAPE_TRIPLEXINDUCTIONVOLTAGEREGULATOR3LwITKJ']
            }, {
                id: 'SHAPE_VARIABLE2gzmvfK',
                shape: {
                    type: 'Path',
                    data: 'M0,49.5H17.5a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 8,
                offsetX: 50,
                offsetY: 45.5
            }, {
                id: 'SHAPE_VARIABLE3bmTvlu',
                shape: {
                    type: 'Path',
                    data: 'M 33.69 , 77.31 L 67.98 , 19.78'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.29000473022461,
                height: 57.529998779296875,
                offsetX: 50.83500099182129,
                offsetY: 48.545000076293945
            }, {
                id: 'SHAPE_VARIABLE4PAUHph',
                shape: {
                    type: 'Path',
                    data: 'M59.31 24.88 68.37 19 67.06 29.71'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.060001373291016,
                height: 10.709999084472656,
                offsetX: 63.84000205993652,
                offsetY: 24.354999542236328
            }, {
                id: 'SHAPE_VARIABLE',
                'children': ['SHAPE_VARIABLE2gzmvfK', 'SHAPE_VARIABLE3bmTvlu', 'SHAPE_VARIABLE4PAUHph']
            }, {
                id: 'SHAPE_VARIOMETER2eYqA7t',
                shape: {
                    type: 'Path',
                    data: 'M0,62.5H27a8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0,8,8,0,0,1,16,0h8.5v-29H91a8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-16,0,8,8,0,0,1-16,0H0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99.5,
                height: 29,
                offsetX: 49.75,
                offsetY: 48
            }, {
                id: 'SHAPE_VARIOMETER3olTjzb',
                shape: {
                    type: 'Path',
                    data: 'M 32.71 , 71.79 L 85.8 , 22.6'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 53.090003967285156,
                height: 49.19000244140625,
                offsetX: 59.255001068115234,
                offsetY: 47.19500160217285
            }, {
                id: 'SHAPE_VARIOMETER4Wx58RX',
                shape: {
                    type: 'Path',
                    data: 'M82.92 33 76 24.59 88 21 82.92 33'
                },
                width: 12,
                height: 12,
                offsetX: 82,
                offsetY: 27
            }, {
                id: 'SHAPE_VARIOMETER',
                'children': ['SHAPE_VARIOMETER2eYqA7t', 'SHAPE_VARIOMETER3olTjzb', 'SHAPE_VARIOMETER4Wx58RX']
            }
        ];
        for (let i = 0; i < inductorsShapes.length; i++) {
            if(!inductorsShapes[i].children) {
                inductorsShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            inductorsShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return inductorsShapes;
    }

    private getElectricalInstrumentsShapes(): NodeModel[] {
        let instrumentShapes: NodeModel[] = [
            {
                id: 'SHAPE_AMPERMETER216PYm8',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 82,
                height: 82,
                offsetX: 52.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_AMPERMETER3khkoMZ',
                shape: {
                    type: 'Path',
                    data: 'M 62.5 , 23.5 L 43.34 , 71.27'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 19.15999984741211,
                height: 47.769996643066406,
                offsetX: 52.920000076293945,
                offsetY: 47.3849983215332
            }, {
                id: 'SHAPE_AMPERMETER4QhvF53',
                shape: {
                    type: 'Path',
                    data: 'M63.39 21.66 62.6 34.29 55.18 31.29 63.39 21.66 63.39 21.66 63.39 21.66'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 8.209999084472656,
                height: 12.630001068115234,
                offsetX: 59.28499984741211,
                offsetY: 27.975000381469727
            }, {
                id: 'SHAPE_AMPERMETER',
                'children': ['SHAPE_AMPERMETER216PYm8', 'SHAPE_AMPERMETER3khkoMZ', 'SHAPE_AMPERMETER4QhvF53']
            }, {
                id: 'SHAPE_GALVINOMETER23zLt8v',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 82,
                height: 82,
                offsetX: 50.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_GALVINOMETER33CXJsm',
                shape: {
                    type: 'Path',
                    data: 'M44.54 33.54 50.54 21.54 50.54 21.54 50.54 21.54 56.54 33.54'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 12,
                offsetX: 50.540000915527344,
                offsetY: 27.540000915527344
            }, {
                id: 'SHAPE_GALVINOMETER4niTclb',
                shape: {
                    type: 'Path',
                    data: 'M 50.54 , 22.04 L 50.54 , 75.04'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 53,
                offsetX: 51.040000915527344,
                offsetY: 48.540000915527344
            }, {
                id: 'SHAPE_GALVINOMETER',
                'children': ['SHAPE_GALVINOMETER23zLt8v', 'SHAPE_GALVINOMETER33CXJsm', 'SHAPE_GALVINOMETER4niTclb']
            }, {
                id: 'SHAPE_OSCILLOSCOPE2JGjc7Y',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 82,
                height: 82,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_OSCILLOSCOPE31ydMlM',
                shape: {
                    type: 'Path',
                    data: 'M16.4 60.13 31.81 39.5 31.81 39.71 31.81 60.26 47 39.71 47 39.71 47 60.26 62.18 39.71 62.18 39.71 62.18 60.26 77.36 39.71 77.36 39.71 77.36 60.46 83.59 51.9'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 67.18999481201172,
                height: 20.959999084472656,
                offsetX: 49.99499702453613,
                offsetY: 49.97999954223633
            }, {
                id: 'SHAPE_OSCILLOSCOPE',
                'children': ['SHAPE_OSCILLOSCOPE2JGjc7Y', 'SHAPE_OSCILLOSCOPE31ydMlM']
            }, {
                id: 'SHAPE_SIGNALGENERATOR2w8Ivkt',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 82,
                height: 82,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_SIGNALGENERATOR3rH6W7l',
                shape: {
                    type: 'Path',
                    data: 'M36.83,78.54l8.67-8.67V78.7l9-9v9l9-9V79M37,27.87a6.93,6.93,0,0,1,13,0,6.93,6.93,0,0,0,13,0M37.5,51V43.5h13v16h13V51'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 26.669998168945312,
                height: 55.656898498535156,
                offsetX: 50.165000915527344,
                offsetY: 51.171552658081055
            }, {
                id: 'SHAPE_SIGNALGENERATOR',
                'children': ['SHAPE_SIGNALGENERATOR2w8Ivkt', 'SHAPE_SIGNALGENERATOR3rH6W7l']
            }, {
                id: 'SHAPE_VOLTMETER2um1o7Y',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 82,
                height: 82,
                offsetX: 48.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_VOLTMETER',
                'children': ['SHAPE_VOLTMETER2um1o7Y']
            }
        ];
        for (let i = 0; i < instrumentShapes.length; i++) {
            if(!instrumentShapes[i].children) {
                instrumentShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            instrumentShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return instrumentShapes;
    }

    private getElectricalMiscShapes(): NodeModel[] {
        let miscShapes: NodeModel[] = [
            {
                id: 'SHAPE_2CONDUCTORJACK2a8gZFk',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 15,
                height: 50,
                offsetX: 8,
                offsetY: 50.5
            }, {
                id: 'SHAPE_2CONDUCTORJACK359VPwu',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 10,
                offsetX: 94.5,
                offsetY: 45.5
            }, {
                id: 'SHAPE_2CONDUCTORJACK4fpUYVD',
                shape: {
                    type: 'Path',
                    data: 'M29.5,45.5l10,10,10-10H90'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60.5,
                height: 10,
                offsetX: 59.75,
                offsetY: 50.5
            }, {
                id: 'SHAPE_2CONDUCTORJACK',
                'children': ['SHAPE_2CONDUCTORJACK2a8gZFk', 'SHAPE_2CONDUCTORJACK359VPwu', 'SHAPE_2CONDUCTORJACK4fpUYVD']
            }, {
                id: 'SHAPE_2CONDUCTORPLUG2fsSxAE',
                shape: {
                    type: 'Path',
                    data: 'M78,37.5H37.5v5H31m47,19H37.5v-5H31'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 47,
                height: 24,
                offsetX: 54.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_2CONDUCTORPLUG3zA1WwI',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 27.5,
                offsetY: 56.5
            }, {
                id: 'SHAPE_2CONDUCTORPLUG',
                'children': ['SHAPE_2CONDUCTORPLUG2fsSxAE', 'SHAPE_2CONDUCTORPLUG3zA1WwI']
            }, {
                id: 'SHAPE_3CONDUCTORJACK2ckXHPq',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 15,
                height: 50,
                offsetX: 8,
                offsetY: 51.5
            }, {
                id: 'SHAPE_3CONDUCTORJACK3gcrPKk',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 10,
                offsetX: 94.5,
                offsetY: 31.5
            }, {
                id: 'SHAPE_3CONDUCTORJACK4rVcy1K',
                shape: {
                    type: 'Path',
                    data: 'M29.5,31.5l10,10,10-10H90'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60.5,
                height: 10,
                offsetX: 59.75,
                offsetY: 36.5
            }, {
                id: 'SHAPE_3CONDUCTORJACK5g0TCm0',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10,
                height: 10,
                offsetX: 94.5,
                offsetY: 71.5
            }, {
                id: 'SHAPE_3CONDUCTORJACK6rXbx5r',
                shape: {
                    type: 'Path',
                    data: 'M39.5,71.5l10-10,10,10H90'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 50.5,
                height: 10,
                offsetX: 64.75,
                offsetY: 66.5
            }, {
                id: 'SHAPE_3CONDUCTORJACK',
                'children': ['SHAPE_3CONDUCTORJACK2ckXHPq', 'SHAPE_3CONDUCTORJACK3gcrPKk', 'SHAPE_3CONDUCTORJACK4rVcy1K', 'SHAPE_3CONDUCTORJACK5g0TCm0', 'SHAPE_3CONDUCTORJACK6rXbx5r']
            }, {
                id: 'SHAPE_3CONDUCTORPLUG2ta7XlC',
                shape: {
                    type: 'Path',
                    data: 'M77,35.5H36.5v5H30m47,19H36.5v-5H30m-1-7H76'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 48,
                height: 24,
                offsetX: 53,
                offsetY: 47.5
            }, {
                id: 'SHAPE_3CONDUCTORPLUG3ZMJDLE',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 26.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_3CONDUCTORPLUG',
                'children': ['SHAPE_3CONDUCTORPLUG2ta7XlC', 'SHAPE_3CONDUCTORPLUG3ZMJDLE']
            }, {
                id: 'SHAPE_ACOUT2AXSw2q',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 50,
                offsetX: 50,
                offsetY: 48.5
            }, {
                id: 'SHAPE_ACOUT3GSAPlp',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 13,
                height: 28,
                offsetX: 50,
                offsetY: 43.5
            }, {
                id: 'SHAPE_ACOUT4axfrm4',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 13,
                height: 28,
                offsetX: 13,
                offsetY: 53.5
            }, {
                id: 'SHAPE_ACOUT5VaI6pI',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 13,
                height: 28,
                offsetX: 87,
                offsetY: 53.5
            }, {
                id: 'SHAPE_ACOUT',
                'children': ['SHAPE_ACOUT2AXSw2q', 'SHAPE_ACOUT3GSAPlp', 'SHAPE_ACOUT4axfrm4', 'SHAPE_ACOUT5VaI6pI']
            }, {
                id: 'SHAPE_ADAPTER2JQJqsI',
                shape: {
                    type: 'Path',
                    data: 'M99.5,70.5a21,21,0,0,1,0-40'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14.596878051757812,
                height: 40,
                offsetX: 92.2015609741211,
                offsetY: 50.50000190734863
            }, {
                id: 'SHAPE_ADAPTER3gyjTsm',
                shape: {
                    type: 'Path',
                    data: 'M.5,55.5h85a20.88,20.88,0,0,1,0-10H.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 85,
                height: 10,
                offsetX: 43,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ADAPTER',
                'children': ['SHAPE_ADAPTER2JQJqsI', 'SHAPE_ADAPTER3gyjTsm']
            }, {
                id: 'SHAPE_AMPLIFIER2yHQJ1H',
                shape: {
                    type: 'Path',
                    data: 'M12.5,1.88,94,50.5,12.5,99.12Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 81.5,
                height: 97.24000549316406,
                offsetX: 53.25,
                offsetY: 50.50000274181366
            }, {
                id: 'SHAPE_AMPLIFIER3WSOEHY',
                shape: {
                    type: 'Path',
                    data: 'M8.5,50.5h4m81,0h5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 90,
                height: 1,
                offsetX: 53.5,
                offsetY: 51
            }, {
                id: 'SHAPE_AMPLIFIER',
                'children': ['SHAPE_AMPLIFIER2yHQJ1H', 'SHAPE_AMPLIFIER3WSOEHY']
            }, {
                id: 'SHAPE_ANTENNA2RM5oao',
                shape: {
                    type: 'Path',
                    data: 'M5.5.5l40,40,40-40M45.5,2v98'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 80,
                height: 99.5,
                offsetX: 45.5,
                offsetY: 50.25
            }, {
                id: 'SHAPE_ANTENNA',
                'children': ['SHAPE_ANTENNA2RM5oao']
            }, {
                id: 'SHAPE_ANTENNA12kBxlJ3',
                shape: {
                    type: 'Path',
                    data: 'M11.5.5l40,39.79L90.5.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 79,
                height: 39.790000915527344,
                offsetX: 51,
                offsetY: 20.395000457763672
            }, {
                id: 'SHAPE_ANTENNA13Ddui3Y',
                shape: {
                    type: 'Path',
                    data: 'M51.5,0V100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 100,
                offsetX: 52,
                offsetY: 50
            }, {
                id: 'SHAPE_ANTENNA1',
                'children': ['SHAPE_ANTENNA12kBxlJ3', 'SHAPE_ANTENNA13Ddui3Y']
            }, {
                id: 'SHAPE_BANDPASSFILTER2Ovd0zC',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 52,
                height: 46,
                offsetX: 51.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_BANDPASSFILTER3yEeY5e',
                shape: {
                    type: 'Path',
                    data: 'M31.5,60.5l10-20h20l10,20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 20,
                offsetX: 51.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_BANDPASSFILTER',
                'children': ['SHAPE_BANDPASSFILTER2Ovd0zC', 'SHAPE_BANDPASSFILTER3yEeY5e']
            }, {
                id: 'SHAPE_BUZZER2vQUQg8',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_BUZZER3Ya13jD',
                shape: {
                    type: 'Path',
                    data: 'M11,50.5H26m49.5-25,15,50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 79.5,
                height: 50,
                offsetX: 50.75,
                offsetY: 50.5
            }, {
                id: 'SHAPE_BUZZER',
                'children': ['SHAPE_BUZZER2vQUQg8', 'SHAPE_BUZZER3Ya13jD']
            }, {
                id: 'SHAPE_CHEADERCONNECTOR2qEzvTb',
                shape: {
                    type: 'Path',
                    data: 'M18.23,68.5H7.92L.5,54.1V32.5h99v22l-7.39,14H82.26l-4.92-7H23.16Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 36,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CHEADERCONNECTOR3o6SR5H',
                shape: {
                    type: 'Path',
                    data: 'M44.5,61V51.5h10V61'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 9.5,
                offsetX: 49.5,
                offsetY: 56.25
            }, {
                id: 'SHAPE_CHEADERCONNECTOR',
                'children': ['SHAPE_CHEADERCONNECTOR2qEzvTb', 'SHAPE_CHEADERCONNECTOR3o6SR5H']
            }, {
                id: 'SHAPE_CABLETERMINATION236EdHM',
                shape: {
                    type: 'Path',
                    data: 'M59.5,76.5v-50l25,25Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 25,
                height: 50,
                offsetX: 72,
                offsetY: 51.5
            }, {
                id: 'SHAPE_CABLETERMINATION3wruBT0',
                shape: {
                    type: 'Path',
                    data: 'M0,51.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 52
            }, {
                id: 'SHAPE_CABLETERMINATION',
                'children': ['SHAPE_CABLETERMINATION236EdHM', 'SHAPE_CABLETERMINATION3wruBT0']
            }, {
                id: 'SHAPE_CHASSIS2oyZiuy',
                shape: {
                    type: 'Path',
                    data: 'M16.5,64.6,31.91,42.5H81.5L68.29,64.6m-26.13-.1L56.5,42.4V33'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 65,
                height: 31.599998474121094,
                offsetX: 49,
                offsetY: 48.79999923706055
            }, {
                id: 'SHAPE_CHASSIS',
                'children': ['SHAPE_CHASSIS2oyZiuy']
            }, {
                id: 'SHAPE_CIRCUITBREAKER2XyiMkn',
                shape: {
                    type: 'Path',
                    data: 'M0,53.5H30m40,0h30M28,50.4a29.39,29.39,0,0,1,44,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 13.002254486083984,
                offsetX: 50,
                offsetY: 46.99887275695801
            }, {
                id: 'SHAPE_CIRCUITBREAKER',
                'children': ['SHAPE_CIRCUITBREAKER2XyiMkn']
            }, {
                id: 'SHAPE_CIRCUITTERMINAL2FVuBAJ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 15,
                height: 15,
                offsetX: 48.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CIRCUITTERMINAL',
                'children': ['SHAPE_CIRCUITTERMINAL2FVuBAJ']
            }, {
                id: 'SHAPE_CO-AX22EI0PN',
                shape: {
                    type: 'Path',
                    data: 'M35.5,75.5h30m-15-20v20m5-35h20m-17,35-5,10m-3-10-5.4,9.8m-2.6-9.8-5,10'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 45,
                offsetX: 55.5,
                offsetY: 63
            }, {
                id: 'SHAPE_CO-AX31FCyzh',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 30,
                height: 30,
                offsetX: 50.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_CO-AX4BwizdP',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 10,
                offsetX: 50.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_CO-AX',
                'children': ['SHAPE_CO-AX22EI0PN', 'SHAPE_CO-AX31FCyzh', 'SHAPE_CO-AX4BwizdP']
            }, {
                id: 'SHAPE_COAXIALCENTERCONDUCTOR2RZa2rH',
                shape: {
                    type: 'Path',
                    data: 'M7,39.5H24m54,0H93M45.94,27.14l4.31,4.31-4.31,4.31m5-8.62,4.32,4.31-4.32,4.31M15.5,39V62.5H50m-4.06-3.86L50.25,63l-4.31,4.31m5-8.63L55.23,63l-4.32,4.31m45.57,5.64-5-5V58l5,5M55,62.5H91.71l5,5M55,31.5h45M0,31.5H50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 45.80999755859375,
                offsetX: 50,
                offsetY: 50.04499816894531
            }, {
                id: 'SHAPE_COAXIALCENTERCONDUCTOR3CtLsuk',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14.119999885559082,
                height: 14.119999885559082,
                offsetX: 15.500000476837158,
                offsetY: 31.500000476837158
            }, {
                id: 'SHAPE_COAXIALCENTERCONDUCTOR4G9d59F',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14.119999885559082,
                height: 14.119999885559082,
                offsetX: 85.50000238418579,
                offsetY: 31.500000476837158
            }, {
                id: 'SHAPE_COAXIALCENTERCONDUCTOR',
                'children': ['SHAPE_COAXIALCENTERCONDUCTOR2RZa2rH', 'SHAPE_COAXIALCENTERCONDUCTOR3CtLsuk', 'SHAPE_COAXIALCENTERCONDUCTOR4G9d59F']
            }, {
                id: 'SHAPE_COAXIALJACK-PLUGGED2hdY81I',
                shape: {
                    type: 'Path',
                    data: 'M46,99.5H56m-18-7H64m-32-7H70M50.5,51V86'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 38,
                height: 48.5,
                offsetX: 51,
                offsetY: 75.25
            }, {
                id: 'SHAPE_COAXIALJACK-PLUGGED3msKlks',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50.5,
                offsetY: 25.5
            }, {
                id: 'SHAPE_COAXIALJACK-PLUGGED4miSf5g',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 12,
                height: 12,
                offsetX: 50.5,
                offsetY: 25.5
            }, {
                id: 'SHAPE_COAXIALJACK-PLUGGED',
                'children': ['SHAPE_COAXIALJACK-PLUGGED2hdY81I', 'SHAPE_COAXIALJACK-PLUGGED3msKlks', 'SHAPE_COAXIALJACK-PLUGGED4miSf5g']
            }, {
                id: 'SHAPE_COAXIALOUTSIDECONDUCTOR2qTzVRo',
                shape: {
                    type: 'Path',
                    data: 'M7,43.5H24m52,0H93M45.64,31.17l4.28,4.29-4.28,4.28m4.94-8.57,4.28,4.29-4.28,4.28M15.5,44V72.5H50m-4.36-4.42,4.28,4.28-4.28,4.28m4.94-8.56,4.28,4.28-4.28,4.28M55,72.5H84.5V44M55,35.5H99m-98,0H50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 45.470001220703125,
                offsetX: 50,
                offsetY: 53.904998779296875
            }, {
                id: 'SHAPE_COAXIALOUTSIDECONDUCTOR3Esl5wI',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16.479999542236328,
                height: 16.479999542236328,
                offsetX: 15.329999923706055,
                offsetY: 35.459999084472656
            }, {
                id: 'SHAPE_COAXIALOUTSIDECONDUCTOR48O6KJd',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16.479999542236328,
                height: 16.479999542236328,
                offsetX: 84.51999855041504,
                offsetY: 35.459999084472656
            }, {
                id: 'SHAPE_COAXIALOUTSIDECONDUCTOR',
                'children': ['SHAPE_COAXIALOUTSIDECONDUCTOR2qTzVRo', 'SHAPE_COAXIALOUTSIDECONDUCTOR3Esl5wI', 'SHAPE_COAXIALOUTSIDECONDUCTOR48O6KJd']
            }, {
                id: 'SHAPE_CONTROLLEDAMPLIFIER2wd8vhW',
                shape: {
                    type: 'Path',
                    data: 'M4.5,4.5l90,45-90,45Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 90,
                height: 90,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CONTROLLEDAMPLIFIER3E79nER',
                shape: {
                    type: 'Path',
                    data: 'M.5,49.5h4m89.5,0h6m-40.5,39v-16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99.5,
                height: 39,
                offsetX: 50.25,
                offsetY: 69
            }, {
                id: 'SHAPE_CONTROLLEDAMPLIFIER4MeXd2q',
                shape: {
                    type: 'Path',
                    data: 'M56.5,72.5l3-5,3,5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 5,
                offsetX: 59.5,
                offsetY: 70
            }, {
                id: 'SHAPE_CONTROLLEDAMPLIFIER',
                'children': ['SHAPE_CONTROLLEDAMPLIFIER2wd8vhW', 'SHAPE_CONTROLLEDAMPLIFIER3E79nER', 'SHAPE_CONTROLLEDAMPLIFIER4MeXd2q']
            }, {
                id: 'SHAPE_CRYSTAL2UAS44M',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 14,
                height: 40,
                offsetX: 49.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CRYSTAL31apt93',
                shape: {
                    type: 'Path',
                    data: 'M.5,50.5h38m22,0h38M38.5,31V71m22-40V71'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 40,
                offsetX: 49.5,
                offsetY: 51
            }, {
                id: 'SHAPE_CRYSTAL',
                'children': ['SHAPE_CRYSTAL2UAS44M', 'SHAPE_CRYSTAL31apt93']
            }, {
                id: 'SHAPE_CURRENTFLOW2eWON4j',
                shape: {
                    type: 'Path',
                    data: 'M14,53.5H84m-10.5-5,10,5-10,5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70,
                height: 10,
                offsetX: 49,
                offsetY: 53.5
            }, {
                id: 'SHAPE_CURRENTFLOW',
                'children': ['SHAPE_CURRENTFLOW2eWON4j']
            }, {
                id: 'SHAPE_DAC2bWzHBr',
                shape: {
                    type: 'Path',
                    data: 'M15.5,27.5h45l25,23-25,23h-45Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 70,
                height: 46,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_DAC',
                'children': ['SHAPE_DAC2bWzHBr']
            }, {
                id: 'SHAPE_DELAYELEMENT2O6O26k',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 90,
                height: 99.01000213623047,
                offsetX: 49.5,
                offsetY: 50.005001068115234
            }, {
                id: 'SHAPE_DELAYELEMENT3nPO7NE',
                shape: {
                    type: 'Path',
                    data: 'M0,49.5H5m90,0h5M14.5,40V60M15,49.5H85M84.5,40V60'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 20,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_DELAYELEMENT',
                'children': ['SHAPE_DELAYELEMENT2O6O26k', 'SHAPE_DELAYELEMENT3nPO7NE']
            }, {
                id: 'SHAPE_DELTA2TpxsN9',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DELTA3KNxYAv',
                shape: {
                    type: 'Path',
                    data: 'M40.5,59.5l10-20,10,20Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 20,
                height: 20,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DELTA',
                'children': ['SHAPE_DELTA2TpxsN9', 'SHAPE_DELTA3KNxYAv']
            }, {
                id: 'SHAPE_DEMUX2x5aBVr',
                shape: {
                    type: 'Path',
                    data: 'M30.5,4.5l40,20v50l-40,20Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 90,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DEMUX3tIy5xm',
                shape: {
                    type: 'Path',
                    data: 'M45.5,87v8m25-40.5h10m-10,10h10m-60-15h10m40-5h10m-10-10h10M55.5,82V95'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60.5,
                offsetX: 50.5,
                offsetY: 64.75
            }, {
                id: 'SHAPE_DEMUX',
                'children': ['SHAPE_DEMUX2x5aBVr', 'SHAPE_DEMUX3tIy5xm']
            }, {
                id: 'SHAPE_ELECTRICALMOTOR2NDmHuy',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 50.5,
                offsetY: 45.5
            }, {
                id: 'SHAPE_ELECTRICALMOTOR3hIeB3j',
                shape: {
                    type: 'Path',
                    data: 'M.5,45.5h20m60,0h20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 1,
                offsetX: 50.5,
                offsetY: 46
            }, {
                id: 'SHAPE_ELECTRICALMOTOR',
                'children': ['SHAPE_ELECTRICALMOTOR2NDmHuy', 'SHAPE_ELECTRICALMOTOR3hIeB3j']
            }, {
                id: 'SHAPE_EQUIPOTENT2WHbtNo',
                shape: {
                    type: 'Path',
                    data: 'M39,44.5H64m-23,3H62m-19,3H60m-13,6h8m-6,3h4M51.5,40v5M45,53.5H57m-6,6h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 25,
                height: 19.5,
                offsetX: 51.5,
                offsetY: 49.75
            }, {
                id: 'SHAPE_EQUIPOTENT',
                'children': ['SHAPE_EQUIPOTENT2WHbtNo']
            }, {
                id: 'SHAPE_EQUIPOTENTIAL2qD5ub6',
                shape: {
                    type: 'Path',
                    data: 'M5.5,19.5l45,75,45-75Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 90,
                height: 75,
                offsetX: 50.5,
                offsetY: 57
            }, {
                id: 'SHAPE_EQUIPOTENTIAL3Dd8AX9',
                shape: {
                    type: 'Path',
                    data: 'M50.5,5V20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 15,
                offsetX: 51,
                offsetY: 12.5
            }, {
                id: 'SHAPE_EQUIPOTENTIAL4Xxy6wl',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50.5,
                offsetY: 45.5
            }, {
                id: 'SHAPE_EQUIPOTENTIAL',
                'children': ['SHAPE_EQUIPOTENTIAL2qD5ub6', 'SHAPE_EQUIPOTENTIAL3Dd8AX9', 'SHAPE_EQUIPOTENTIAL4Xxy6wl']
            }, {
                id: 'SHAPE_F-M2conductor-6021vTMDE',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_F-M2conductor-603b5PNkO',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 17.639999389648438,
                height: 35.279998779296875,
                offsetX: 24.039999961853027,
                offsetY: 49.5
            }, {
                id: 'SHAPE_F-M2conductor-604BpTlEz',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 17.639999389648438,
                height: 21.559999465942383,
                offsetX: 76.97000122070312,
                offsetY: 49.500000953674316
            }, {
                id: 'SHAPE_F-M2conductor-605PM1xVz',
                shape: {
                    type: 'Path',
                    data: 'M2,49.5H15.71m70.57,0H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 1,
                offsetX: 51,
                offsetY: 50
            }, {
                id: 'SHAPE_F-M2conductor-60',
                'children': ['SHAPE_F-M2conductor-6021vTMDE', 'SHAPE_F-M2conductor-603b5PNkO', 'SHAPE_F-M2conductor-604BpTlEz', 'SHAPE_F-M2conductor-605PM1xVz']
            }, {
                id: 'SHAPE_F-M2conductor-612GMKYL4',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_F-M2conductor-613R9hCak',
                shape: {
                    type: 'Path',
                    data: 'M1,49.5H7m86,0h6M19.52,80a43.13,43.13,0,0,1,0-61l8.33,8.33a31.37,31.37,0,0,0,0,44.3Zm52.64-8.33a31.37,31.37,0,0,0,0-44.3L80.49,19a43.13,43.13,0,0,1,0,61Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 61.00000762939453,
                offsetX: 50,
                offsetY: 49.4999942779541
            }, {
                id: 'SHAPE_F-M2conductor-61',
                'children': ['SHAPE_F-M2conductor-612GMKYL4', 'SHAPE_F-M2conductor-613R9hCak']
            }, {
                id: 'SHAPE_F-M2conductor-622XRJsWb',
                shape: {
                    type: 'Path',
                    data: 'M25,74.5A25,25,0,0,1,.58,44C2.86,33.24,14.18,24.5,25.22,24.5H74.78c11,0,22.36,8.74,24.64,19.54A25,25,0,0,1,75,74.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100.05602264404297,
                height: 50.00001525878906,
                offsetX: 49.99550519883633,
                offsetY: 49.50000762939453
            }, {
                id: 'SHAPE_F-M2conductor-623RdElbt',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.899999618530273,
                height: 9.899999618530273,
                offsetX: 25.249999046325684,
                offsetY: 49.249999046325684
            }, {
                id: 'SHAPE_F-M2conductor-624cXzHLA',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.899999618530273,
                height: 9.899999618530273,
                offsetX: 74.75000286102295,
                offsetY: 49.249999046325684
            }, {
                id: 'SHAPE_F-M2conductor-6255gC4el',
                shape: {
                    type: 'Path',
                    data: 'M0,49.5H20m60,0h20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_F-M2conductor-62',
                'children': ['SHAPE_F-M2conductor-622XRJsWb', 'SHAPE_F-M2conductor-623RdElbt', 'SHAPE_F-M2conductor-624cXzHLA', 'SHAPE_F-M2conductor-6255gC4el']
            }, {
                id: 'SHAPE_F-M2conductor-632lMKQzq',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_F-M2conductor-633mGr41u',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 18,
                height: 35,
                offsetX: 24.5,
                offsetY: 37
            }, {
                id: 'SHAPE_F-M2conductor-634Rhe6ls',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 18,
                height: 22,
                offsetX: 76.5,
                offsetY: 36.5
            }, {
                id: 'SHAPE_F-M2conductor-635opbdXF',
                shape: {
                    type: 'Path',
                    data: 'M3.24,36.5H15.5m70,0H97.76M50.5,99V84m-9.8-.5c0-8.12,4.39-14.7,9.8-14.7s9.8,6.58,9.8,14.7Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 94.52000427246094,
                height: 62.5,
                offsetX: 50.50000214576721,
                offsetY: 67.75
            }, {
                id: 'SHAPE_F-M2conductor-63',
                'children': ['SHAPE_F-M2conductor-632lMKQzq', 'SHAPE_F-M2conductor-633mGr41u', 'SHAPE_F-M2conductor-634Rhe6ls', 'SHAPE_F-M2conductor-635opbdXF']
            }, {
                id: 'SHAPE_F-M3conductor12qrK606',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_F-M3conductor13Z4It2b',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 17.639999389648438,
                height: 35.279998779296875,
                offsetX: 49.5,
                offsetY: 72.04000091552734
            }, {
                id: 'SHAPE_F-M3conductor14zVMKqf',
                shape: {
                    type: 'Path',
                    data: 'M7.36,25h9.31m65.66,0h9.31M49.5,98.5V89.68M4.81,45.87,22.35,15.3l15.19,8.82L20,54.69ZM61.46,24,76.65,15.1,94.29,45.78,79,54.69Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 89.4800033569336,
                height: 83.4000015258789,
                offsetX: 49.55000162124634,
                offsetY: 56.80000114440918
            }, {
                id: 'SHAPE_F-M3conductor1',
                'children': ['SHAPE_F-M3conductor12qrK606', 'SHAPE_F-M3conductor13Z4It2b', 'SHAPE_F-M3conductor14zVMKqf']
            }, {
                id: 'SHAPE_F-M3conductor226cNfJS',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_F-M3conductor23VfHnrR',
                shape: {
                    type: 'Path',
                    data: 'M4.44,31.86h8.33m74.48,0h8.33M50,98.5V89.68m-9.8,0V74a9.8,9.8,0,0,1,19.6,0V89.68Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 91.13999938964844,
                height: 66.63999938964844,
                offsetX: 50.00999975204468,
                offsetY: 65.18000030517578
            }, {
                id: 'SHAPE_F-M3conductor24Xf7J7j',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.559999465942383,
                height: 13.720000267028809,
                offsetX: 23.550000190734863,
                offsetY: 31.860000133514404
            }, {
                id: 'SHAPE_F-M3conductor25A21Z44',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.559999465942383,
                height: 13.720000267028809,
                offsetX: 76.47000217437744,
                offsetY: 31.860000133514404
            }, {
                id: 'SHAPE_F-M3conductor2',
                'children': ['SHAPE_F-M3conductor226cNfJS', 'SHAPE_F-M3conductor23VfHnrR', 'SHAPE_F-M3conductor24Xf7J7j', 'SHAPE_F-M3conductor25A21Z44']
            }, {
                id: 'SHAPE_F-M3conductor32L5kT8t',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_F-M3conductor33msdVJr',
                shape: {
                    type: 'Path',
                    data: 'M1.5,50.5H7.38m86.24,0H99.5M44.09,93.21a43.15,43.15,0,0,1-28.2-17l9.49-7a31.43,31.43,0,0,0,20.5,12.38ZM10.61,66.57A43.14,43.14,0,0,1,20,20l8.33,8.33a31.36,31.36,0,0,0-6.86,33.81Zm68.9-4.41a31.36,31.36,0,0,0-6.86-33.81L81,20a43.12,43.12,0,0,1,9.5,46.45ZM26,92.93V86.07'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 73.21001434326172,
                offsetX: 50.5,
                offsetY: 56.60499382019043
            }, {
                id: 'SHAPE_F-M3conductor341bp0CG',
                shape: {
                    type: 'Path',
                    data: 'M50.26,64.09A43.11,43.11,0,0,1,45.9,96.77L35.72,90.84A31.42,31.42,0,0,0,38.88,67.1Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 15.986141204833984,
                height: 32.68000030517578,
                offsetX: 43.71307182312012,
                offsetY: 80.42999649047852
            }, {
                id: 'SHAPE_F-M3conductor3',
                'children': ['SHAPE_F-M3conductor32L5kT8t', 'SHAPE_F-M3conductor33msdVJr', 'SHAPE_F-M3conductor341bp0CG']
            }, {
                id: 'SHAPE_F-M3conductor42fTTtnm',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98,
                height: 98,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_F-M3conductor43XvyyCj',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.9900016784668,
                height: 18,
                offsetX: 50.9950008392334,
                offsetY: 80.5
            }, {
                id: 'SHAPE_F-M3conductor44xQ8tyC',
                shape: {
                    type: 'Path',
                    data: 'M8,24.51H18m65,0H93M50.5,99V90m12-66L77.65,15.1,95.29,45.78,80,54.69ZM5.81,45.87,23.35,15.3l15.19,8.82L21,54.69Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 89.4800033569336,
                height: 83.9000015258789,
                offsetX: 50.55000162124634,
                offsetY: 57.05000114440918
            }, {
                id: 'SHAPE_F-M3conductor4',
                'children': ['SHAPE_F-M3conductor42fTTtnm', 'SHAPE_F-M3conductor43XvyyCj', 'SHAPE_F-M3conductor44xQ8tyC']
            }, {
                id: 'SHAPE_FILTER2r5P9TC',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 52,
                height: 46,
                offsetX: 53.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_FILTER3YkQPuf',
                shape: {
                    type: 'Path',
                    data: 'M33.5,51.5a15,15,0,0,1,20,0,15,15,0,0,0,20,0m-40-10a15,15,0,0,1,20,0,15,15,0,0,0,20,0m-40,20a15,15,0,0,1,20,0,15,15,0,0,0,20,0m-24,2,6-6m-6-14,6-6'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 27.819671630859375,
                offsetX: 53.5,
                offsetY: 51.40983581542969
            }, {
                id: 'SHAPE_FILTER',
                'children': ['SHAPE_FILTER2r5P9TC', 'SHAPE_FILTER3YkQPuf']
            }, {
                id: 'SHAPE_FLOURESCENTLAMP2p75Nv1',
                shape: {
                    type: 'Path',
                    data: 'M30.5,69.5a15,15,0,0,1,0-30h40a15,15,0,0,1,0,30Zm-21-15h16m50,0h16M75.5,49V60m-50-11V60'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 82,
                height: 30.00000762939453,
                offsetX: 50.5,
                offsetY: 54.500003814697266
            }, {
                id: 'SHAPE_FLOURESCENTLAMP3pgp3Ki',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 10,
                offsetX: 30.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_FLOURESCENTLAMP4zil7yg',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 10,
                offsetX: 70.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_FLOURESCENTLAMP58UTV5c',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4,
                height: 4,
                offsetX: 50.5,
                offsetY: 44.5
            }, {
                id: 'SHAPE_FLOURESCENTLAMP',
                'children': ['SHAPE_FLOURESCENTLAMP2p75Nv1', 'SHAPE_FLOURESCENTLAMP3pgp3Ki', 'SHAPE_FLOURESCENTLAMP4zil7yg', 'SHAPE_FLOURESCENTLAMP58UTV5c']
            }, {
                id: 'SHAPE_FUNCTION2okkH16',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_FUNCTION',
                'children': ['SHAPE_FUNCTION2okkH16']
            }, {
                id: 'SHAPE_FUSEIEC2sBzn5l',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 64,
                height: 20,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_FUSEIEC39ZfrW8',
                shape: {
                    type: 'Path',
                    data: 'M.5,49.5h17m64,0h18m-75-10v20m50-20v20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99,
                height: 20,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_FUSEIEC',
                'children': ['SHAPE_FUSEIEC2sBzn5l', 'SHAPE_FUSEIEC39ZfrW8']
            }, {
                id: 'SHAPE_FUSEIEEE12PaXHrw',
                shape: {
                    type: 'Path',
                    data: 'M0,47.5H18a16,16,0,0,1,32,0,16,16,0,0,0,32,0h18'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 32,
                offsetX: 50,
                offsetY: 47.5
            }, {
                id: 'SHAPE_FUSEIEEE1',
                'children': ['SHAPE_FUSEIEEE12PaXHrw']
            }, {
                id: 'SHAPE_FUSEIEEE2y2NjqA',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 64,
                height: 20,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_FUSEIEEE3WTTRYv',
                shape: {
                    type: 'Path',
                    data: 'M.5,50.5h99'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99,
                height: 1,
                offsetX: 50,
                offsetY: 51
            }, {
                id: 'SHAPE_FUSEIEEE',
                'children': ['SHAPE_FUSEIEEE2y2NjqA', 'SHAPE_FUSEIEEE3WTTRYv']
            }, {
                id: 'SHAPE_FUSEISOLETE2SbCpGO',
                shape: {
                    type: 'Path',
                    data: 'M0,47.5H16m68,0h16m-77.5-6,55,12m1-12-56,12'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100,
                height: 12,
                offsetX: 50,
                offsetY: 47.5
            }, {
                id: 'SHAPE_FUSEISOLETE3xsqJiI',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 12,
                offsetX: 78,
                offsetY: 47.5
            }, {
                id: 'SHAPE_FUSEISOLETE4z7AnaK',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 12,
                offsetX: 22,
                offsetY: 47.5
            }, {
                id: 'SHAPE_FUSEISOLETE',
                'children': ['SHAPE_FUSEISOLETE2SbCpGO', 'SHAPE_FUSEISOLETE3xsqJiI', 'SHAPE_FUSEISOLETE4z7AnaK']
            }, {
                id: 'SHAPE_GENERICCOMPONENT2DKvSvn',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 51.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_GENERICCOMPONENT3P20CIw',
                shape: {
                    type: 'Path',
                    data: 'M42,38.5H61.5l-20,24H62'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 20.5,
                height: 24,
                offsetX: 51.75,
                offsetY: 50.5
            }, {
                id: 'SHAPE_GENERICCOMPONENT',
                'children': ['SHAPE_GENERICCOMPONENT2DKvSvn', 'SHAPE_GENERICCOMPONENT3P20CIw']
            }, {
                id: 'SHAPE_HIGHPASSFILTER2nYg15z',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 52,
                height: 46,
                offsetX: 51.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_HIGHPASSFILTER38LuLtA',
                shape: {
                    type: 'Path',
                    data: 'M31.5,61.5l10-20H72'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40.5,
                height: 20,
                offsetX: 51.75,
                offsetY: 51.5
            }, {
                id: 'SHAPE_HIGHPASSFILTER',
                'children': ['SHAPE_HIGHPASSFILTER2nYg15z', 'SHAPE_HIGHPASSFILTER38LuLtA']
            }, {
                id: 'SHAPE_IGNITORPLUG28wiL0N',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 26,
                offsetX: 53.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_IGNITORPLUG3mjbdO5',
                shape: {
                    type: 'Path',
                    data: 'M33.5,36.5h-2a2,2,0,0,0-2,2v16a2,2,0,0,0,2,2h2Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 4,
                height: 20,
                offsetX: 31.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_IGNITORPLUG4VXSR0y',
                shape: {
                    type: 'Path',
                    data: 'M69,46.5H81.5V67M77,66.5H87m-8,3h6m-4,3h2m-61.5-30a4,4,0,0,0,0,8m1-8a4,4,0,0,1,0,8m-7.5-4H39'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 72,
                height: 30,
                offsetX: 51,
                offsetY: 57.5
            }, {
                id: 'SHAPE_IGNITORPLUG5vE1fwC',
                shape: {
                    type: 'Path',
                    data: 'M38.5,42.5l10,4-10,4Zm30,0v8l-10-4Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 30,
                height: 8,
                offsetX: 53.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_IGNITORPLUG',
                'children': ['SHAPE_IGNITORPLUG28wiL0N', 'SHAPE_IGNITORPLUG3mjbdO5', 'SHAPE_IGNITORPLUG4VXSR0y', 'SHAPE_IGNITORPLUG5vE1fwC']
            }, {
                id: 'SHAPE_ILLUMINATINGBULB2QUd1Zu',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_ILLUMINATINGBULB31htKLK',
                shape: {
                    type: 'Path',
                    data: 'M20,49.5H30a20,20,0,0,1,40,0H80'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 20,
                offsetX: 50,
                offsetY: 39.500003814697266
            }, {
                id: 'SHAPE_ILLUMINATINGBULB',
                'children': ['SHAPE_ILLUMINATINGBULB2QUd1Zu', 'SHAPE_ILLUMINATINGBULB31htKLK']
            }, {
                id: 'SHAPE_INDICATOR2m8i8EK',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_INDICATOR3H0HhA5',
                shape: {
                    type: 'Path',
                    data: 'M25.5,53.5l35-10v10l15-5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 50,
                height: 10,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_INDICATOR',
                'children': ['SHAPE_INDICATOR2m8i8EK', 'SHAPE_INDICATOR3H0HhA5']
            }, {
                id: 'SHAPE_INTERGRATOR234qBCq',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 54.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_INTERGRATOR3xvyUhR',
                shape: {
                    type: 'Path',
                    data: 'M49.5,60.5a2.5,2.5,0,0,0,5,0v-20a2.5,2.5,0,0,1,5,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.000003814697266,
                height: 25,
                offsetX: 54.50000190734863,
                offsetY: 50.5
            }, {
                id: 'SHAPE_INTERGRATOR',
                'children': ['SHAPE_INTERGRATOR234qBCq', 'SHAPE_INTERGRATOR3xvyUhR']
            }, {
                id: 'SHAPE_LAMP2kRPcHo',
                shape: {
                    type: 'Path',
                    data: 'M25.5,80.5v-55a25,25,0,0,1,50,0v55Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 80,
                offsetX: 50.5,
                offsetY: 40.49999952316284
            }, {
                id: 'SHAPE_LAMP3MlvoCM',
                shape: {
                    type: 'Path',
                    data: 'M35.5,100V50.9A15.25,15.25,0,0,1,48.78,35.6,15,15,0,0,1,65.5,50.5V100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30.001033782958984,
                height: 64.49894714355469,
                offsetX: 50.49948310852051,
                offsetY: 67.75052642822266
            }, {
                id: 'SHAPE_LAMP',
                'children': ['SHAPE_LAMP2kRPcHo', 'SHAPE_LAMP3MlvoCM']
            }, {
                id: 'SHAPE_LARGEDCONNECTOR2h5oxHy',
                shape: {
                    type: 'Path',
                    data: 'M1.81,42.5H98.19a1.32,1.32,0,0,1,1.31,1.33V61.17a1.32,1.32,0,0,1-1.31,1.33H1.81A1.32,1.32,0,0,1,.5,61.17V43.83A1.32,1.32,0,0,1,1.81,42.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99.00007629394531,
                height: 20,
                offsetX: 49.999999940395355,
                offsetY: 52.5
            }, {
                id: 'SHAPE_LARGEDCONNECTOR3ufEXTe',
                shape: {
                    type: 'Path',
                    data: 'M11.49,58.5a1.31,1.31,0,0,1-1.32-1.07L7.26,47.57A1.32,1.32,0,0,1,8.58,46.5H90.17a1.29,1.29,0,0,1,1,.19,1.32,1.32,0,0,1,.57.88l-3.17,9.86a1.32,1.32,0,0,1-1.32,1.07Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 84.4800033569336,
                height: 12.030864715576172,
                offsetX: 49.50000190734863,
                offsetY: 52.48496055603027
            }, {
                id: 'SHAPE_LARGEDCONNECTOR',
                'children': ['SHAPE_LARGEDCONNECTOR2h5oxHy', 'SHAPE_LARGEDCONNECTOR3ufEXTe']
            }, {
                id: 'SHAPE_LIGHTBULB2Mim6V5',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_LIGHTBULB3FKGw1V',
                shape: {
                    type: 'Path',
                    data: 'M32.2,31.7,67.8,67.3m-.3-35.8L32.2,67.3M20,49.5h5m50,0h5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 35.79999923706055,
                offsetX: 50,
                offsetY: 49.40000343322754
            }, {
                id: 'SHAPE_LIGHTBULB',
                'children': ['SHAPE_LIGHTBULB2Mim6V5', 'SHAPE_LIGHTBULB3FKGw1V']
            }, {
                id: 'SHAPE_LOOPANTENNA2JjXfj0',
                shape: {
                    type: 'Path',
                    data: 'M38.5,86V74.53a29.63,29.63,0,0,1,10-57.65,29.63,29.63,0,0,1,10,57.65V86'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60.00542449951172,
                height: 69.12234497070312,
                offsetX: 48.50000190734863,
                offsetY: 51.438825607299805
            }, {
                id: 'SHAPE_LOOPANTENNA',
                'children': ['SHAPE_LOOPANTENNA2JjXfj0']
            }, {
                id: 'SHAPE_LOOPANTENNA127t297r',
                shape: {
                    type: 'Path',
                    data: 'M0,99.5H44.5V84.68L4.5,45.16,49.5.69l45,44.47-40,39.52V99.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 98.80999755859375,
                offsetX: 50,
                offsetY: 50.094998836517334
            }, {
                id: 'SHAPE_LOOPANTENNA1',
                'children': ['SHAPE_LOOPANTENNA127t297r']
            }, {
                id: 'SHAPE_LOWPASSFILTER2OtMhDj',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 52,
                height: 46,
                offsetX: 50.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_LOWPASSFILTER3uIG7PH',
                shape: {
                    type: 'Path',
                    data: 'M31,37.5H60.5l10,20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 39.5,
                height: 20,
                offsetX: 50.75,
                offsetY: 47.5
            }, {
                id: 'SHAPE_LOWPASSFILTER',
                'children': ['SHAPE_LOWPASSFILTER2OtMhDj', 'SHAPE_LOWPASSFILTER3uIG7PH']
            }, {
                id: 'SHAPE_M-FCONTACT2ayvpe1',
                shape: {
                    type: 'Path',
                    data: 'M0,47.5H97'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 97,
                height: 1,
                offsetX: 48.5,
                offsetY: 48
            }, {
                id: 'SHAPE_M-FCONTACT3btTXD1',
                shape: {
                    type: 'Path',
                    data: 'M77.38,58l21-10.5L77.38,37'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21,
                height: 21,
                offsetX: 87.87999725341797,
                offsetY: 47.5
            }, {
                id: 'SHAPE_M-FCONTACT',
                'children': ['SHAPE_M-FCONTACT2ayvpe1', 'SHAPE_M-FCONTACT3btTXD1']
            }, {
                id: 'SHAPE_MATERIAL2dCQrhu',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 38,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_MATERIAL',
                'children': ['SHAPE_MATERIAL2dCQrhu']
            }, {
                id: 'SHAPE_MFCONTACT226qxRBv',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 50,
                height: 10,
                offsetX: 74.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_MFCONTACT23kmvB9O',
                shape: {
                    type: 'Path',
                    data: 'M0,50.5H50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 50,
                height: 1,
                offsetX: 25,
                offsetY: 51
            }, {
                id: 'SHAPE_MFCONTACT2',
                'children': ['SHAPE_MFCONTACT226qxRBv', 'SHAPE_MFCONTACT23kmvB9O']
            }, {
                id: 'SHAPE_MOTORARMATURE2nRnF9m',
                shape: {
                    type: 'Path',
                    data: 'M15.5,45.51h6.7a30,30,0,0,1,56.6,0h6.7v20H78.8a30,30,0,0,1-56.6,0H15.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 70,
                height: 60.089210510253906,
                offsetX: 50.5,
                offsetY: 55.50999069213867
            }, {
                id: 'SHAPE_MOTORARMATURE3wGdUi0',
                shape: {
                    type: 'Path',
                    data: 'M.5,55.5h15m70,0h15m-78.3-10a29.88,29.88,0,0,0,0,20m56.6-20a29.88,29.88,0,0,1,0,20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 20,
                offsetX: 50.5,
                offsetY: 55.5
            }, {
                id: 'SHAPE_MOTORARMATURE',
                'children': ['SHAPE_MOTORARMATURE2nRnF9m', 'SHAPE_MOTORARMATURE3wGdUi0']
            }, {
                id: 'SHAPE_MULTIPLIER2Mp8tiJ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_MULTIPLIER3GQP7dU',
                shape: {
                    type: 'Path',
                    data: 'M32.7,28.7,68.3,64.3m.2-34.8L32.7,64.3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 35.79999923706055,
                height: 35.60000228881836,
                offsetX: 50.60000038146973,
                offsetY: 46.50000190734863
            }, {
                id: 'SHAPE_MULTIPLIER',
                'children': ['SHAPE_MULTIPLIER2Mp8tiJ', 'SHAPE_MULTIPLIER3GQP7dU']
            }, {
                id: 'SHAPE_MUX-DEMUX2uFjksr',
                shape: {
                    type: 'Path',
                    data: 'M34.5,4.5l40,20v50l-40,20Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 90,
                offsetX: 54.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MUX-DEMUX3xX1Rko',
                shape: {
                    type: 'Path',
                    data: 'M54.5,84.5v10m20-45h10m-60,40h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 85,
                offsetX: 54.5,
                offsetY: 52
            }, {
                id: 'SHAPE_MUX-DEMUX',
                'children': ['SHAPE_MUX-DEMUX2uFjksr', 'SHAPE_MUX-DEMUX3xX1Rko']
            }, {
                id: 'SHAPE_MUX2iYuPTo',
                shape: {
                    type: 'Path',
                    data: 'M32.5,4.5l40,20v50l-40,20Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 90,
                offsetX: 52.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MUX3sUxKBx',
                shape: {
                    type: 'Path',
                    data: 'M47.5,87v8M73,49.5H83m-60.5,40h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10m-10-10h10M57.5,82V95'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60.5,
                height: 85.5,
                offsetX: 52.75,
                offsetY: 52.25
            }, {
                id: 'SHAPE_MUX',
                'children': ['SHAPE_MUX2iYuPTo', 'SHAPE_MUX3sUxKBx']
            }, {
                id: 'SHAPE_NEONLAMP2tsoxpu',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_NEONLAMP3d64G4d',
                shape: {
                    type: 'Path',
                    data: 'M20.5,49.5h25m0-9.5V60m10-20V60m0-10.5h25'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 20,
                offsetX: 50.5,
                offsetY: 50
            }, {
                id: 'SHAPE_NEONLAMP44sck3F',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4,
                height: 4,
                offsetX: 40.5,
                offsetY: 57.5
            }, {
                id: 'SHAPE_NEONLAMP',
                'children': ['SHAPE_NEONLAMP2tsoxpu', 'SHAPE_NEONLAMP3d64G4d', 'SHAPE_NEONLAMP44sck3F']
            }, {
                id: 'SHAPE_NORMALLEDJACK2HfRMVZ',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 14,
                height: 45,
                offsetX: 7.5,
                offsetY: 46
            }, {
                id: 'SHAPE_NORMALLEDJACK3bCi00x',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 9,
                height: 9,
                offsetX: 95.05000305175781,
                offsetY: 42.41999816894531
            }, {
                id: 'SHAPE_NORMALLEDJACK4XngNEb',
                shape: {
                    type: 'Path',
                    data: 'M27.48,41.5l9,9,9-9H91'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 63.52000045776367,
                height: 9,
                offsetX: 59.239999771118164,
                offsetY: 46
            }, {
                id: 'SHAPE_NORMALLEDJACK5YHhykv',
                shape: {
                    type: 'Path',
                    data: 'M72.52,42.49l-4.5,9h9Zm0,8.51V83'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 9,
                height: 40.5099983215332,
                offsetX: 72.5199966430664,
                offsetY: 62.7450008392334
            }, {
                id: 'SHAPE_NORMALLEDJACK',
                'children': ['SHAPE_NORMALLEDJACK2HfRMVZ', 'SHAPE_NORMALLEDJACK3bCi00x', 'SHAPE_NORMALLEDJACK4XngNEb', 'SHAPE_NORMALLEDJACK5YHhykv']
            }, {
                id: 'SHAPE_NORMALLEDJACKS2Hw9XAe',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 21,
                offsetX: 40.5,
                offsetY: 45
            }, {
                id: 'SHAPE_NORMALLEDJACKS3DU485s',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 4,
                height: 4,
                offsetX: 2.5,
                offsetY: 43.5
            }, {
                id: 'SHAPE_NORMALLEDJACKS4UvXu6p',
                shape: {
                    type: 'Path',
                    data: 'M31.15,43.5l-4.29,4.29-4.3-4.29H5m64.78,0,4.29,4.29,4.29-4.29H96M9.5,44V62.5h82V44'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 91,
                height: 19,
                offsetX: 50.5,
                offsetY: 53
            }, {
                id: 'SHAPE_NORMALLEDJACKS5Fbkx1V',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 21,
                offsetX: 60.5,
                offsetY: 45
            }, {
                id: 'SHAPE_NORMALLEDJACKS6Puz5Kt',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 4,
                height: 4,
                offsetX: 97.5,
                offsetY: 43.5
            }, {
                id: 'SHAPE_NORMALLEDJACKS71urXyu',
                shape: {
                    type: 'Path',
                    data: 'M9.5,44.17,7.79,47.5h3.42Zm82,0L89.79,47.5h3.42Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 85.41999816894531,
                height: 3.3300018310546875,
                offsetX: 50.499999046325684,
                offsetY: 45.834999084472656
            }, {
                id: 'SHAPE_NORMALLEDJACKS',
                'children': ['SHAPE_NORMALLEDJACKS2Hw9XAe', 'SHAPE_NORMALLEDJACKS3DU485s', 'SHAPE_NORMALLEDJACKS4UvXu6p', 'SHAPE_NORMALLEDJACKS5Fbkx1V', 'SHAPE_NORMALLEDJACKS6Puz5Kt', 'SHAPE_NORMALLEDJACKS71urXyu']
            }, {
                id: 'SHAPE_OPERATIONALAMP2h3Kofc',
                shape: {
                    type: 'Path',
                    data: 'M5.5,4.5l93,45-93,45Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 93,
                height: 90,
                offsetX: 52,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OPERATIONALAMP34BZTbi',
                shape: {
                    type: 'Path',
                    data: 'M61,67.5H83M.5,19.5h5m-5,60h5M83,30.5H60M9,19.5h6m-6,60h6M11.5,77v6m29-73.5v12m0,56v12m5.5-57h6M48.5,30v6M46,66.5h6'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 82.5,
                height: 80,
                offsetX: 41.75,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OPERATIONALAMP',
                'children': ['SHAPE_OPERATIONALAMP2h3Kofc', 'SHAPE_OPERATIONALAMP34BZTbi']
            }, {
                id: 'SHAPE_OPERATIONALAMP12EMBkxc',
                shape: {
                    type: 'Path',
                    data: 'M5.5,5.8,98.85,50.5,5.5,95.2Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 93.3499984741211,
                height: 89.39999389648438,
                offsetX: 52.17499923706055,
                offsetY: 50.49999713897705
            }, {
                id: 'SHAPE_OPERATIONALAMP13NDbcU1',
                shape: {
                    type: 'Path',
                    data: 'M.5,20.5h5m-5,60h5M60.5,16V32m0,37V86M9,20.5h6m-6,60h6M11.5,78v6'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 70,
                offsetX: 30.5,
                offsetY: 51
            }, {
                id: 'SHAPE_OPERATIONALAMP1',
                'children': ['SHAPE_OPERATIONALAMP12EMBkxc', 'SHAPE_OPERATIONALAMP13NDbcU1']
            }, {
                id: 'SHAPE_OTA2wh17dF',
                shape: {
                    type: 'Path',
                    data: 'M4.5,94.5V4.5L67.5,35V64Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 63,
                height: 90,
                offsetX: 36,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OTA3qyKr3C',
                shape: {
                    type: 'Path',
                    data: 'M.5,49.5h4m63,0h32'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99,
                height: 1,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_OTA',
                'children': ['SHAPE_OTA2wh17dF', 'SHAPE_OTA3qyKr3C']
            }, {
                id: 'SHAPE_OTA12yA3sL5',
                shape: {
                    type: 'Path',
                    data: 'M4.5,94.5V4.5L67.5,35V64Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 63,
                height: 90,
                offsetX: 36,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OTA13mIN06A',
                shape: {
                    type: 'Path',
                    data: 'M.5,19.5h4m63,30h32M8,19.5h6m-6,60h7M11.5,76v7M.5,79.5h4M45,66.5h6m-6-34h6M47.5,30v6M58,68.5H80m0-38H58m-18.5,47v12m0-80v12'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99,
                height: 80,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OTA1',
                'children': ['SHAPE_OTA12yA3sL5', 'SHAPE_OTA13mIN06A']
            }, {
                id: 'SHAPE_OTA222Y9dF5',
                shape: {
                    type: 'Path',
                    data: 'M4.5,94.5V4.5L67.5,35V64Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 63,
                height: 90,
                offsetX: 36,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OTA23QJaEig',
                shape: {
                    type: 'Path',
                    data: 'M.5,19.5h4M68,49.5h32M8,19.5h6m-6,60h7M11.5,76v7M.5,79.5h4m35-1.5V90m0-80V21'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99.5,
                height: 80,
                offsetX: 50.25,
                offsetY: 50
            }, {
                id: 'SHAPE_OTA2',
                'children': ['SHAPE_OTA222Y9dF5', 'SHAPE_OTA23QJaEig']
            }, {
                id: 'SHAPE_PERMANENTMAGNET2HQpmMb',
                shape: {
                    type: 'Path',
                    data: 'M40.5,15.5h20v70h-20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 20,
                height: 70,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_PERMANENTMAGNET',
                'children': ['SHAPE_PERMANENTMAGNET2HQpmMb']
            }, {
                id: 'SHAPE_PICKUPHEAD2ALiVYS',
                shape: {
                    type: 'Path',
                    data: 'M.5,35.5h89l9.89,15-9.89,15H.5v-30Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 98.88999938964844,
                height: 30,
                offsetX: 49.94499969482422,
                offsetY: 50.5
            }, {
                id: 'SHAPE_PICKUPHEAD',
                'children': ['SHAPE_PICKUPHEAD2ALiVYS']
            }, {
                id: 'SHAPE_PILOTLIGHT2YQFtCZ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 51,
                offsetY: 49.5
            }, {
                id: 'SHAPE_PILOTLIGHT3KkCMVq',
                shape: {
                    type: 'Path',
                    data: 'M33.2,31.7,68.8,67.3m0-35.6L33.2,67.3M21,49.5h5m50,0h5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 35.60000228881836,
                offsetX: 51,
                offsetY: 49.50000190734863
            }, {
                id: 'SHAPE_PILOTLIGHT',
                'children': ['SHAPE_PILOTLIGHT2YQFtCZ', 'SHAPE_PILOTLIGHT3KkCMVq']
            }, {
                id: 'SHAPE_QUANTIZER2xKdkIi',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 52,
                height: 46,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_QUANTIZER36pBywI',
                shape: {
                    type: 'Path',
                    data: 'M46,59.5h4.5v-20H56m-10,10H56'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 20,
                offsetX: 51,
                offsetY: 49.5
            }, {
                id: 'SHAPE_QUANTIZER',
                'children': ['SHAPE_QUANTIZER2xKdkIi', 'SHAPE_QUANTIZER36pBywI']
            }, {
                id: 'SHAPE_SENSINGLINKSQUIB29dkMwC',
                shape: {
                    type: 'Path',
                    data: 'M3.38,53.28A15.34,15.34,0,0,1,18.85,38.07,15.34,15.34,0,0,1,34.33,53.28a15.48,15.48,0,0,0,31,0,15.48,15.48,0,0,1,31,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 92.95001220703125,
                height: 30.992427825927734,
                offsetX: 49.85500621795654,
                offsetY: 53.27620887756348
            }, {
                id: 'SHAPE_SENSINGLINKSQUIB3OhtYTa',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 3.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SENSINGLINKSQUIB48RBRJi',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 96.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SENSINGLINKSQUIB',
                'children': ['SHAPE_SENSINGLINKSQUIB29dkMwC', 'SHAPE_SENSINGLINKSQUIB3OhtYTa', 'SHAPE_SENSINGLINKSQUIB48RBRJi']
            }, {
                id: 'SHAPE_SHIELDEDJACK-PLUGGED2ARZH9f',
                shape: {
                    type: 'Path',
                    data: 'M45,99.5H55m-18-7H63m-32-7H69M49.5,51V86'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 38,
                height: 48.5,
                offsetX: 50,
                offsetY: 75.25
            }, {
                id: 'SHAPE_SHIELDEDJACK-PLUGGED3mPN7ap',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 49.5,
                offsetY: 25.5
            }, {
                id: 'SHAPE_SHIELDEDJACK-PLUGGED4OfaPt3',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 28,
                height: 28,
                offsetX: 49.5,
                offsetY: 25.5
            }, {
                id: 'SHAPE_SHIELDEDJACK-PLUGGED',
                'children': ['SHAPE_SHIELDEDJACK-PLUGGED2ARZH9f', 'SHAPE_SHIELDEDJACK-PLUGGED3mPN7ap', 'SHAPE_SHIELDEDJACK-PLUGGED4OfaPt3']
            }, {
                id: 'SHAPE_SMALLDCONNECTOR2BdZMCp',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 50,
                offsetX: 50,
                offsetY: 46.5
            }, {
                id: 'SHAPE_SMALLDCONNECTOR38BnQLu',
                shape: {
                    type: 'Path',
                    data: 'M29.33,61.5A3.33,3.33,0,0,1,26,58.83L18.66,34.17A3.34,3.34,0,0,1,22,31.5H78.66A3.34,3.34,0,0,1,82,34.17L74,58.83a3.34,3.34,0,0,1-3.34,2.67Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 63.33999252319336,
                height: 30.00136947631836,
                offsetX: 50.32999610900879,
                offsetY: 46.49999809265137
            }, {
                id: 'SHAPE_SMALLDCONNECTOR',
                'children': ['SHAPE_SMALLDCONNECTOR2BdZMCp', 'SHAPE_SMALLDCONNECTOR38BnQLu']
            }, {
                id: 'SHAPE_SQUIBIGNITOR2uBkTrE',
                shape: {
                    type: 'Path',
                    data: 'M34.5,99V60.5H4.5V.5h90v60h-30V99m-15-48V81M0,30.5H25.5l4-10,8,20,8-20,8,20,8-20,8,20,4-10H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 98.5,
                offsetX: 50,
                offsetY: 49.75
            }, {
                id: 'SHAPE_SQUIBIGNITOR3u7dLtW',
                shape: {
                    type: 'Path',
                    data: 'M45.5,80.5h8l-4,10Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 8,
                height: 10,
                offsetX: 49.5,
                offsetY: 85.5
            }, {
                id: 'SHAPE_SQUIBIGNITOR',
                'children': ['SHAPE_SQUIBIGNITOR2uBkTrE', 'SHAPE_SQUIBIGNITOR3u7dLtW']
            }, {
                id: 'SHAPE_SUM22DOsBx',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 51,
                offsetY: 50.5
            }, {
                id: 'SHAPE_SUM3fzmtHX',
                shape: {
                    type: 'Path',
                    data: 'M58,60.5H44l10-10-10-10H58'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 20,
                offsetX: 51,
                offsetY: 50.5
            }, {
                id: 'SHAPE_SUM',
                'children': ['SHAPE_SUM22DOsBx', 'SHAPE_SUM3fzmtHX']
            }, {
                id: 'SHAPE_SUMMATIONPOINT2gAmXBm',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 51.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_SUMMATIONPOINT3UPgAF8',
                shape: {
                    type: 'Path',
                    data: 'M51.5,36V66M37,50.5H67'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 30,
                offsetX: 52,
                offsetY: 51
            }, {
                id: 'SHAPE_SUMMATIONPOINT',
                'children': ['SHAPE_SUMMATIONPOINT2gAmXBm', 'SHAPE_SUMMATIONPOINT3UPgAF8']
            }, {
                id: 'SHAPE_SURGEPROTECTOR-342vuSJbA',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 20,
                height: 20,
                offsetX: 39,
                offsetY: 49.5
            }, {
                id: 'SHAPE_SURGEPROTECTOR-343XXYEgx',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 20,
                height: 20,
                offsetX: 62,
                offsetY: 49.5
            }, {
                id: 'SHAPE_SURGEPROTECTOR-344slPC0G',
                shape: {
                    type: 'Path',
                    data: 'M16,49.5H29m43,0H86'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70,
                height: 1,
                offsetX: 51,
                offsetY: 50
            }, {
                id: 'SHAPE_SURGEPROTECTOR-34',
                'children': ['SHAPE_SURGEPROTECTOR-342vuSJbA', 'SHAPE_SURGEPROTECTOR-343XXYEgx', 'SHAPE_SURGEPROTECTOR-344slPC0G']
            }, {
                id: 'SHAPE_SURGEPROTECTOR-352ZSWJiL',
                shape: {
                    type: 'Path',
                    data: 'M17,53.5H35m34,0H87'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70,
                height: 1,
                offsetX: 52,
                offsetY: 54
            }, {
                id: 'SHAPE_SURGEPROTECTOR-353sIwf1k',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 24,
                offsetX: 40.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SURGEPROTECTOR-354E6Aimu',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 24,
                offsetX: 62.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SURGEPROTECTOR-35',
                'children': ['SHAPE_SURGEPROTECTOR-352ZSWJiL', 'SHAPE_SURGEPROTECTOR-353sIwf1k', 'SHAPE_SURGEPROTECTOR-354E6Aimu']
            }, {
                id: 'SHAPE_TERMINALBOARD29yRBTb',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 49,
                height: 99,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_TERMINALBOARD3Kvk34C',
                shape: {
                    type: 'Path',
                    data: 'M25,50.5H74m-49-26H74m-49,50H74'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 49,
                height: 50,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TERMINALBOARD4IzpqLY',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.539999961853027,
                height: 6.599999904632568,
                offsetX: 50.200000286102295,
                offsetY: 12.890000104904175
            }, {
                id: 'SHAPE_TERMINALBOARD5rkTOgr',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.539999961853027,
                height: 6.599999904632568,
                offsetX: 50.200000286102295,
                offsetY: 37.34999918937683
            }, {
                id: 'SHAPE_TERMINALBOARD6x6lSjv',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.539999961853027,
                height: 6.599999904632568,
                offsetX: 50.200000286102295,
                offsetY: 62.459999799728394
            }, {
                id: 'SHAPE_TERMINALBOARD75U3Br1',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.539999961853027,
                height: 6.599999904632568,
                offsetX: 50.200000286102295,
                offsetY: 86.91999506950378
            }, {
                id: 'SHAPE_TERMINALBOARD',
                'children': ['SHAPE_TERMINALBOARD29yRBTb', 'SHAPE_TERMINALBOARD3Kvk34C', 'SHAPE_TERMINALBOARD4IzpqLY', 'SHAPE_TERMINALBOARD5rkTOgr', 'SHAPE_TERMINALBOARD6x6lSjv', 'SHAPE_TERMINALBOARD75U3Br1']
            }, {
                id: 'SHAPE_THERMALELEMENT2jcdA4e',
                shape: {
                    type: 'Path',
                    data: 'M0,50.5H17.5a16,16,0,1,1,16,16m66.5-16H81.5a16,16,0,1,1-16-16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 32,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_THERMALELEMENT',
                'children': ['SHAPE_THERMALELEMENT2jcdA4e']
            }, {
                id: 'SHAPE_THERMISTERWITHINDEPENDENT-INTEGRALHEATER2IVxrGj',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 80,
                height: 80,
                offsetX: 53.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_THERMISTERWITHINDEPENDENT-INTEGRALHEATER3sL2VdA',
                shape: {
                    type: 'Path',
                    data: 'M3,49.5H21l4-10,8,20,8-20,8,20,8-20,8,20,8-20,8,20,4-10h18M3,89.5H18l8.5-10M46.5,98l.5-8.75L56.75,77.5l8.75,9.75.25,11.5M90,4.5l-11.7,14'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 94.25,
                offsetX: 53,
                offsetY: 51.625
            }, {
                id: 'SHAPE_THERMISTERWITHINDEPENDENT-INTEGRALHEATER',
                'children': ['SHAPE_THERMISTERWITHINDEPENDENT-INTEGRALHEATER2IVxrGj', 'SHAPE_THERMISTERWITHINDEPENDENT-INTEGRALHEATER3sL2VdA']
            }, {
                id: 'SHAPE_THERMOCOUPLE2rTRHHx',
                shape: {
                    type: 'Path',
                    data: 'M20.5,10V59.39L50.5,89l30-29.63V10m-67,1v7M10,14.5h7m68,0h7'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 82,
                height: 79,
                offsetX: 51,
                offsetY: 49.5
            }, {
                id: 'SHAPE_THERMOCOUPLE',
                'children': ['SHAPE_THERMOCOUPLE2rTRHHx']
            }, {
                id: 'SHAPE_THERMOPILE2Hy1Ls8',
                shape: {
                    type: 'Path',
                    data: 'M19.5,9V58.5l10,30,10-30,10,30,10-30,10,30,10-30V9m-68,2v7M8,14.5h7m69-1h6'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 82,
                height: 79.5,
                offsetX: 49,
                offsetY: 48.75
            }, {
                id: 'SHAPE_THERMOPILE',
                'children': ['SHAPE_THERMOPILE2Hy1Ls8']
            }, {
                id: 'SHAPE_TRANSDUCER-212yu4Tmn',
                shape: {
                    type: 'Path',
                    data: 'M27.78,46.76,50,67.32,72.22,46.76Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 44.44000244140625,
                height: 20.560001373291016,
                offsetX: 50.00000190734863,
                offsetY: 57.03999900817871
            }, {
                id: 'SHAPE_TRANSDUCER-2135GcHQl',
                shape: {
                    type: 'Path',
                    data: 'M50.49,37V47.28'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 10.279998779296875,
                offsetX: 50.9900016784668,
                offsetY: 42.13999938964844
            }, {
                id: 'SHAPE_TRANSDUCER-21',
                'children': ['SHAPE_TRANSDUCER-212yu4Tmn', 'SHAPE_TRANSDUCER-2135GcHQl']
            }, {
                id: 'SHAPE_TRANSDUCER-302OSoTbG',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 48,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TRANSDUCER-303ICBHdZ',
                shape: {
                    type: 'Path',
                    data: 'M18,49.5H88m-40-30,30,30-30,30'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70,
                height: 60,
                offsetX: 53,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TRANSDUCER-30',
                'children': ['SHAPE_TRANSDUCER-302OSoTbG', 'SHAPE_TRANSDUCER-303ICBHdZ']
            }, {
                id: 'SHAPE_TRANSDUCER-312oq7LXc',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 60,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TRANSDUCER-313uZdrTr',
                shape: {
                    type: 'Path',
                    data: 'M35.5,25V75m30-50V75M10.5,0V49.5h25M90.5,0V49.5h-25'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 80,
                height: 75,
                offsetX: 50.5,
                offsetY: 37.5
            }, {
                id: 'SHAPE_TRANSDUCER-314MmqXAi',
                shape: {
                    type: 'Path',
                    data: 'M50.5,80v20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 1,
                height: 20,
                offsetX: 51,
                offsetY: 90
            }, {
                id: 'SHAPE_TRANSDUCER-31',
                'children': ['SHAPE_TRANSDUCER-312oq7LXc', 'SHAPE_TRANSDUCER-313uZdrTr', 'SHAPE_TRANSDUCER-314MmqXAi']
            }, {
                id: 'SHAPE_Vdd25Ay81D',
                shape: {
                    type: 'Path',
                    data: 'M23.5,58.5h60m-30,0v-40'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 40,
                offsetX: 53.5,
                offsetY: 38.5
            }, {
                id: 'SHAPE_Vdd',
                'children': ['SHAPE_Vdd25Ay81D']
            }, {
                id: 'SHAPE_VOLTAGEREGULATOR2jr9mEt',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 52,
                height: 46,
                offsetX: 52.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_VOLTAGEREGULATOR3sXYa90',
                shape: {
                    type: 'Path',
                    data: 'M17.5,47.5h9m26,35v-12m26-23h9'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70,
                height: 35,
                offsetX: 52.5,
                offsetY: 65
            }, {
                id: 'SHAPE_VOLTAGEREGULATOR',
                'children': ['SHAPE_VOLTAGEREGULATOR2jr9mEt', 'SHAPE_VOLTAGEREGULATOR3sXYa90']
            }, {
                id: 'SHAPE_VOLTAGE2tk53HF',
                shape: {
                    type: 'Path',
                    data: 'M42.5,13V83m-5-10.5,5,10,5-10m-10-50,5-10,5,10'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 70.5,
                offsetX: 42.5,
                offsetY: 47.75
            }, {
                id: 'SHAPE_VOLTAGE',
                'children': ['SHAPE_VOLTAGE2tk53HF']
            }, {
                id: 'SHAPE_Vss47DW5Hj',
                shape: {
                    type: 'Path',
                    data: 'M21.5,54.5h60m-30,0v40'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 40,
                offsetX: 51.5,
                offsetY: 74.5
            }, {
                id: 'SHAPE_Vss',
                'children': ['SHAPE_Vss47DW5Hj']
            }
        ];
        for (let i = 0; i < miscShapes.length; i++) {
            if(!miscShapes[i].children) {
                miscShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            miscShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return miscShapes;
    }

    private getElectricalOpticalShapes(): NodeModel[] {
        let opticalShapes: NodeModel[] = [
            {
                id: 'SHAPE_LED2ycpV3b',
                shape: {
                    type: 'Path',
                    data: 'M0,48.5H29.5M69.5,19V79m0-30.5H100'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60,
                offsetX: 50,
                offsetY: 49
            }, {
                id: 'SHAPE_LED3hFmvOV',
                shape: {
                    type: 'Path',
                    data: 'M 83.65 , 5.35 L 73.35 , 15.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 78.5,
                offsetY: 10.499999523162842
            }, {
                id: 'SHAPE_LED4yqYHaE',
                shape: {
                    type: 'Path',
                    data: 'M83.5 10 83.5 5.5 79 5.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 81.25,
                offsetY: 7.75
            }, {
                id: 'SHAPE_LED5POSKfo',
                shape: {
                    type: 'Path',
                    data: 'M 90.65 , 12.35 L 80.35 , 22.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 85.5,
                offsetY: 17.5
            }, {
                id: 'SHAPE_LED6JbyWlx',
                shape: {
                    type: 'Path',
                    data: 'M90.5 17 90.5 12.5 86 12.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 88.25,
                offsetY: 14.75
            }, {
                id: 'SHAPE_LED7zr2Kev',
                shape: {
                    type: 'Path',
                    data: 'M29.5 18.5 69.5 48.5 29.5 78.5 29.5 18.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_LED',
                'children': ['SHAPE_LED2ycpV3b', 'SHAPE_LED3hFmvOV', 'SHAPE_LED4yqYHaE', 'SHAPE_LED5POSKfo', 'SHAPE_LED6JbyWlx', 'SHAPE_LED7zr2Kev']
            }, {
                id: 'SHAPE_LED12jdsS1K',
                shape: {
                    type: 'Path',
                    data: 'M29.5,18.5l40,30-40,30ZM0,48.5H29.5M69.5,19V79m0-30.5H100'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60.5,
                offsetX: 50,
                offsetY: 48.75
            }, {
                id: 'SHAPE_LED13OFHLfn',
                shape: {
                    type: 'Path',
                    data: 'M85.5 17 85.5 12.5 81 12.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 83.25,
                offsetY: 14.75
            }, {
                id: 'SHAPE_LED14RjCSQB',
                shape: {
                    type: 'Path',
                    data: 'M 85.65 , 12.35 L 75.35 , 22.65'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 80.5,
                offsetY: 17.5
            }, {
                id: 'SHAPE_LED1',
                'children': ['SHAPE_LED12jdsS1K', 'SHAPE_LED13OFHLfn', 'SHAPE_LED14RjCSQB']
            }, {
                id: 'SHAPE_LIGHTACTIVATEDSCR2qiTM21',
                shape: {
                    type: 'Path',
                    data: 'M0,53.5H29.5M69.5,24V84m0-30.5H100'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60,
                offsetX: 50,
                offsetY: 54
            }, {
                id: 'SHAPE_LIGHTACTIVATEDSCR3RPWw9t',
                shape: {
                    type: 'Path',
                    data: 'M 80.35 , 27.65 L 90.65 , 17.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 85.5,
                offsetY: 22.5
            }, {
                id: 'SHAPE_LIGHTACTIVATEDSCR4wSbPCk',
                shape: {
                    type: 'Path',
                    data: 'M80.5 23 80.5 27.5 85 27.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 82.75,
                offsetY: 25.25
            }, {
                id: 'SHAPE_LIGHTACTIVATEDSCR5Zp5Kha',
                shape: {
                    type: 'Path',
                    data: 'M 73.35 , 20.65 L 83.65 , 10.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 78.5,
                offsetY: 15.5
            }, {
                id: 'SHAPE_LIGHTACTIVATEDSCR6BuQHk0',
                shape: {
                    type: 'Path',
                    data: 'M73.5 16 73.5 20.5 78 20.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 75.75,
                offsetY: 18.25
            }, {
                id: 'SHAPE_LIGHTACTIVATEDSCR7aGJwTd',
                shape: {
                    type: 'Path',
                    data: 'M29.5 23.5 69.5 53.5 29.5 83.5 29.5 23.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_LIGHTACTIVATEDSCR',
                'children': ['SHAPE_LIGHTACTIVATEDSCR2qiTM21', 'SHAPE_LIGHTACTIVATEDSCR3RPWw9t', 'SHAPE_LIGHTACTIVATEDSCR4wSbPCk', 'SHAPE_LIGHTACTIVATEDSCR5Zp5Kha', 'SHAPE_LIGHTACTIVATEDSCR6BuQHk0', 'SHAPE_LIGHTACTIVATEDSCR7aGJwTd']
            }, {
                id: 'SHAPE_OPTO-COUPLER2xsl79x',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 60,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OPTO-COUPLER3VvbBcu',
                shape: {
                    type: 'Path',
                    data: 'M47,52.5l3,2-3,2m-7-12H50m-3-2,3,2-3,2m-37,8H31M60.5,32V68m0-26.5,20-12V20m0,60V70.22l-20-12.41M20.5,20V80M40,54.5H50'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70.5,
                height: 60,
                offsetX: 45.25,
                offsetY: 50
            }, {
                id: 'SHAPE_OPTO-COUPLER4c4yt8A',
                shape: {
                    type: 'Path',
                    data: 'M11,44.64l9.34,9.77,9.33-9.77Zm65.84,21,3,4-5-.6Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 68.83999633789062,
                height: 25,
                offsetX: 45.41999816894531,
                offsetY: 57.13999938964844
            }, {
                id: 'SHAPE_OPTO-COUPLER',
                'children': ['SHAPE_OPTO-COUPLER2xsl79x', 'SHAPE_OPTO-COUPLER3VvbBcu', 'SHAPE_OPTO-COUPLER4c4yt8A']
            }, {
                id: 'SHAPE_OPTOTRANSISTOR2O1qiPK',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 55.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OPTOTRANSISTOR3mAd5Tm',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 29 L 42 , 70'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 42.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OPTOTRANSISTOR4L7kVwN',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 48.5 L 5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 37,
                height: 1,
                offsetX: 23.5,
                offsetY: 49
            }, {
                id: 'SHAPE_OPTOTRANSISTOR5dCV7Sp',
                shape: {
                    type: 'Path',
                    data: 'M73.5 99 73.48 84.24 42.43 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.06999969482422,
                height: 35.5,
                offsetX: 57.96500015258789,
                offsetY: 81.25
            }, {
                id: 'SHAPE_OPTOTRANSISTOR6R6G01Q',
                shape: {
                    type: 'Path',
                    data: 'M73.5 0 73.48 15.01 42.43 35.75'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.06999969482422,
                height: 35.75,
                offsetX: 57.96500015258789,
                offsetY: 17.875
            }, {
                id: 'SHAPE_OPTOTRANSISTOR7DWJP3Z',
                shape: {
                    type: 'Path',
                    data: 'M72.36 83.52 72.36 83.52 72.36 83.52 55.76 78.44 61.33 70.17 72.36 83.52'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16.60000228881836,
                height: 13.349998474121094,
                offsetX: 64.05999946594238,
                offsetY: 76.84499740600586
            }, {
                id: 'SHAPE_OPTOTRANSISTOR8L1TY0u',
                shape: {
                    type: 'Path',
                    data: 'M 7.35 , 13.35 L 17.65 , 23.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.299999237060547,
                height: 10.299999237060547,
                offsetX: 12.499999523162842,
                offsetY: 18.5
            }, {
                id: 'SHAPE_OPTOTRANSISTOR9xi2gOu',
                shape: {
                    type: 'Path',
                    data: 'M13 23.5 17.5 23.5 17.5 19'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 15.25,
                offsetY: 21.25
            }, {
                id: 'SHAPE_OPTOTRANSISTOR10hXKr7Z',
                shape: {
                    type: 'Path',
                    data: 'M 14.35 , 6.35 L 24.65 , 16.65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.299999237060547,
                height: 10.299999237060547,
                offsetX: 19.5,
                offsetY: 11.499999523162842
            }, {
                id: 'SHAPE_OPTOTRANSISTOR11UKEQJy',
                shape: {
                    type: 'Path',
                    data: 'M20 16.5 24.5 16.5 24.5 12'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 22.25,
                offsetY: 14.25
            }, {
                id: 'SHAPE_OPTOTRANSISTOR',
                'children': ['SHAPE_OPTOTRANSISTOR2O1qiPK', 'SHAPE_OPTOTRANSISTOR3mAd5Tm', 'SHAPE_OPTOTRANSISTOR4L7kVwN', 'SHAPE_OPTOTRANSISTOR5dCV7Sp', 'SHAPE_OPTOTRANSISTOR6R6G01Q', 'SHAPE_OPTOTRANSISTOR7DWJP3Z', 'SHAPE_OPTOTRANSISTOR8L1TY0u', 'SHAPE_OPTOTRANSISTOR9xi2gOu', 'SHAPE_OPTOTRANSISTOR10hXKr7Z', 'SHAPE_OPTOTRANSISTOR11UKEQJy']
            }, {
                id: 'SHAPE_PHOTODIODE2Bt3fOr',
                shape: {
                    type: 'Path',
                    data: 'M0,54.5H29.5M69.5,25V85m0-30.5H100'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60,
                offsetX: 50,
                offsetY: 55
            }, {
                id: 'SHAPE_PHOTODIODE3TemJ6S',
                shape: {
                    type: 'Path',
                    data: 'M 80.35 , 28.65 L 90.65 , 18.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 85.5,
                offsetY: 23.5
            }, {
                id: 'SHAPE_PHOTODIODE4Ah6EVd',
                shape: {
                    type: 'Path',
                    data: 'M80.5 24 80.5 28.5 85 28.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 82.75,
                offsetY: 26.25
            }, {
                id: 'SHAPE_PHOTODIODE51r9AZV',
                shape: {
                    type: 'Path',
                    data: 'M 73.35 , 21.65 L 83.65 , 11.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 78.5,
                offsetY: 16.5
            }, {
                id: 'SHAPE_PHOTODIODE61KTXJZ',
                shape: {
                    type: 'Path',
                    data: 'M73.5 17 73.5 21.5 78 21.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 75.75,
                offsetY: 19.25
            }, {
                id: 'SHAPE_PHOTODIODE77wyjHg',
                shape: {
                    type: 'Path',
                    data: 'M29.5 24.5 69.5 54.5 29.5 84.5 29.5 24.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 60,
                offsetX: 49.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_PHOTODIODE',
                'children': ['SHAPE_PHOTODIODE2Bt3fOr', 'SHAPE_PHOTODIODE3TemJ6S', 'SHAPE_PHOTODIODE4Ah6EVd', 'SHAPE_PHOTODIODE51r9AZV', 'SHAPE_PHOTODIODE61KTXJZ', 'SHAPE_PHOTODIODE77wyjHg']
            }, {
                id: 'SHAPE_PHOTORESISTOR-132CJlBmc',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 77,
                height: 77,
                offsetX: 49,
                offsetY: 54
            }, {
                id: 'SHAPE_PHOTORESISTOR-133bOkAJg',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 51,
                height: 11.25,
                offsetX: 49,
                offsetY: 54.005001068115234
            }, {
                id: 'SHAPE_PHOTORESISTOR-134bYpxfs',
                shape: {
                    type: 'Path',
                    data: 'M 84.35 , 24.65 L 94.65 , 14.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 89.5,
                offsetY: 19.5
            }, {
                id: 'SHAPE_PHOTORESISTOR-135A5Qw7r',
                shape: {
                    type: 'Path',
                    data: 'M84.5 20 84.5 24.5 89 24.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 86.75,
                offsetY: 22.25
            }, {
                id: 'SHAPE_PHOTORESISTOR-136Q6Scks',
                shape: {
                    type: 'Path',
                    data: 'M 77.35 , 17.65 L 87.65 , 7.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 82.5,
                offsetY: 12.499999523162842
            }, {
                id: 'SHAPE_PHOTORESISTOR-137tvZPLq',
                shape: {
                    type: 'Path',
                    data: 'M77.5 13 77.5 17.5 82 17.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 79.75,
                offsetY: 15.25
            }, {
                id: 'SHAPE_PHOTORESISTOR-138eF8pki',
                shape: {
                    type: 'Path',
                    data: 'M 74.5 , 54 L 94.5 , 54'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 84.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_PHOTORESISTOR-1393SYbuf',
                shape: {
                    type: 'Path',
                    data: 'M 4 , 54.5 L 23.5 , 54.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 1,
                offsetX: 13.75,
                offsetY: 55
            }, {
                id: 'SHAPE_PHOTORESISTOR-13',
                'children': ['SHAPE_PHOTORESISTOR-132CJlBmc', 'SHAPE_PHOTORESISTOR-133bOkAJg', 'SHAPE_PHOTORESISTOR-134bYpxfs', 'SHAPE_PHOTORESISTOR-135A5Qw7r', 'SHAPE_PHOTORESISTOR-136Q6Scks', 'SHAPE_PHOTORESISTOR-137tvZPLq', 'SHAPE_PHOTORESISTOR-138eF8pki', 'SHAPE_PHOTORESISTOR-1393SYbuf']
            }, {
                id: 'SHAPE_PHOTORESISTOR-142RGVaXn',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 51,
                height: 14.6899995803833,
                offsetX: 51,
                offsetY: 53.99500131607056
            }, {
                id: 'SHAPE_PHOTORESISTOR-143J9IYB0',
                shape: {
                    type: 'Path',
                    data: 'M 82.35 , 36.65 L 92.65 , 26.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.30000114440918,
                offsetX: 87.5,
                offsetY: 31.500000953674316
            }, {
                id: 'SHAPE_PHOTORESISTOR-144UR6VCk',
                shape: {
                    type: 'Path',
                    data: 'M82.5 32 82.5 36.5 87 36.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 84.75,
                offsetY: 34.25
            }, {
                id: 'SHAPE_PHOTORESISTOR-145HHzleS',
                shape: {
                    type: 'Path',
                    data: 'M 75.35 , 29.65 L 85.65 , 19.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 80.5,
                offsetY: 24.5
            }, {
                id: 'SHAPE_PHOTORESISTOR-146JkVK9K',
                shape: {
                    type: 'Path',
                    data: 'M75.5 25 75.5 29.5 80 29.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 77.75,
                offsetY: 27.25
            }, {
                id: 'SHAPE_PHOTORESISTOR-147UWwVUx',
                shape: {
                    type: 'Path',
                    data: 'M 76.5 , 54 L 96.5 , 54'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 86.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_PHOTORESISTOR-148xHtvEJ',
                shape: {
                    type: 'Path',
                    data: 'M 6 , 54.5 L 26 , 54.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 16,
                offsetY: 55
            }, {
                id: 'SHAPE_PHOTORESISTOR-14',
                'children': ['SHAPE_PHOTORESISTOR-142RGVaXn', 'SHAPE_PHOTORESISTOR-143J9IYB0', 'SHAPE_PHOTORESISTOR-144UR6VCk', 'SHAPE_PHOTORESISTOR-145HHzleS', 'SHAPE_PHOTORESISTOR-146JkVK9K', 'SHAPE_PHOTORESISTOR-147UWwVUx', 'SHAPE_PHOTORESISTOR-148xHtvEJ']
            }, {
                id: 'SHAPE_PHOTORESISTOR-152PAxDgw',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 77,
                height: 77,
                offsetX: 50,
                offsetY: 54
            }, {
                id: 'SHAPE_PHOTORESISTOR-153ogQaXg',
                shape: {
                    type: 'Path',
                    data: 'M 83.35 , 23.65 L 93.65 , 13.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 88.5,
                offsetY: 18.5
            }, {
                id: 'SHAPE_PHOTORESISTOR-154trJFiw',
                shape: {
                    type: 'Path',
                    data: 'M83.5 19 83.5 23.5 88 23.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 85.75,
                offsetY: 21.25
            }, {
                id: 'SHAPE_PHOTORESISTOR-155euCir3',
                shape: {
                    type: 'Path',
                    data: 'M 76.35 , 16.65 L 86.65 , 6.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.300003051757812,
                height: 10.299999237060547,
                offsetX: 81.5,
                offsetY: 11.499999523162842
            }, {
                id: 'SHAPE_PHOTORESISTOR-156LAN5C6',
                shape: {
                    type: 'Path',
                    data: 'M76.5 12 76.5 16.5 81 16.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 78.75,
                offsetY: 14.25
            }, {
                id: 'SHAPE_PHOTORESISTOR-157MqhqCZ',
                shape: {
                    type: 'Path',
                    data: 'M0 55.5 26.84 55.5 30.85 44.39 39.16 65.31 46.86 44.36 55.18 65.28 62.87 44.36 71.83 65.31 75.25 55.5 100 55.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 20.949996948242188,
                offsetX: 50,
                offsetY: 54.834999084472656
            }, {
                id: 'SHAPE_PHOTORESISTOR-15',
                'children': ['SHAPE_PHOTORESISTOR-152PAxDgw', 'SHAPE_PHOTORESISTOR-153ogQaXg', 'SHAPE_PHOTORESISTOR-154trJFiw', 'SHAPE_PHOTORESISTOR-155euCir3', 'SHAPE_PHOTORESISTOR-156LAN5C6', 'SHAPE_PHOTORESISTOR-157MqhqCZ']
            }, {
                id: 'SHAPE_SOLARCELL2g9szHa',
                shape: {
                    type: 'Path',
                    data: 'M0,55.5H41m14-30v60m0-30h45m-20-28,7-7m-7,4v3h3m-8-5,7-7m-7,4v3h3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 70,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_SOLARCELL3Fn92B8',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 4,
                height: 30,
                offsetX: 43,
                offsetY: 55.5
            }, {
                id: 'SHAPE_SOLARCELL',
                'children': ['SHAPE_SOLARCELL2g9szHa', 'SHAPE_SOLARCELL3Fn92B8']
            }
        ];
        for (let i = 0; i < opticalShapes.length; i++) {
            if(!opticalShapes[i].children) {
                opticalShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            opticalShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return opticalShapes;
    }

    private getElectricalLadderShapes(): NodeModel[] {
        let ladderShapes: NodeModel[] = [
            {
                id: 'SHAPE_CONTACTN2TqjPoE',
                shape: {
                    type: 'Path',
                    data: 'M 39.5 , 35 L 39.5 , 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 29,
                offsetX: 40,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CONTACTN3ecInie',
                shape: {
                    type: 'Path',
                    data: 'M 60.6 , 35.3 L 39.4 , 63.7'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.199996948242188,
                height: 28.400001525878906,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CONTACTN44E23cc',
                shape: {
                    type: 'Path',
                    data: 'M 60.5 , 35 L 60.5 , 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 29,
                offsetX: 61,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CONTACTN5ttLEIp',
                shape: {
                    type: 'Path',
                    data: 'M 60.5 , 49.5 L 74.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 67.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CONTACTN679AvEq',
                shape: {
                    type: 'Path',
                    data: 'M 25.5 , 49.5 L 39.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 32.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CONTACTN',
                'children': ['SHAPE_CONTACTN2TqjPoE', 'SHAPE_CONTACTN3ecInie', 'SHAPE_CONTACTN44E23cc', 'SHAPE_CONTACTN5ttLEIp', 'SHAPE_CONTACTN679AvEq']
            }, {
                id: 'SHAPE_CONTACT2Zk0NrZ',
                shape: {
                    type: 'Path',
                    data: 'M 40.5 , 35 L 40.5 , 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 29,
                offsetX: 41,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CONTACT3iaiHkH',
                shape: {
                    type: 'Path',
                    data: 'M 61.5 , 35 L 61.5 , 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 29,
                offsetX: 62,
                offsetY: 49.5
            }, {
                id: 'SHAPE_CONTACT4XeZwYb',
                shape: {
                    type: 'Path',
                    data: 'M 61.5 , 49.5 L 75.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 68.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CONTACT5EhuHsF',
                shape: {
                    type: 'Path',
                    data: 'M 26.5 , 49.5 L 40.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 33.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CONTACT',
                'children': ['SHAPE_CONTACT2Zk0NrZ', 'SHAPE_CONTACT3iaiHkH', 'SHAPE_CONTACT4XeZwYb', 'SHAPE_CONTACT5EhuHsF']
            }, {
                id: 'SHAPE_OUTPUTN2Sn54Jc',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 28,
                height: 28,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OUTPUTN31ZXoCn',
                shape: {
                    type: 'Path',
                    data: 'M 61.6 , 35.31 L 39.5 , 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 22.099998474121094,
                height: 28.189998626708984,
                offsetX: 50.54999923706055,
                offsetY: 49.40500068664551
            }, {
                id: 'SHAPE_OUTPUTN4Y3kCy1',
                shape: {
                    type: 'Path',
                    data: 'M 64.5 , 49.5 L 78.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 71.5,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUTN5sBSfOf',
                shape: {
                    type: 'Path',
                    data: 'M 22.5 , 49.5 L 36.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 29.5,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUTN',
                'children': ['SHAPE_OUTPUTN2Sn54Jc', 'SHAPE_OUTPUTN31ZXoCn', 'SHAPE_OUTPUTN4Y3kCy1', 'SHAPE_OUTPUTN5sBSfOf']
            }, {
                id: 'SHAPE_OUTPUTN12P4THx0',
                shape: {
                    type: 'Path',
                    data: 'M42.5,35h0a25.54,25.54,0,0,0,0,29h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.515216827392578,
                height: 29.00000762939453,
                offsetX: 40.24239158630371,
                offsetY: 49.500003814697266
            }, {
                id: 'SHAPE_OUTPUTN13Chhgfy',
                shape: {
                    type: 'Path',
                    data: 'M 60.6 , 35.3 L 39.4 , 63.7'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.199996948242188,
                height: 28.400001525878906,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OUTPUTN142IhvVv',
                shape: {
                    type: 'Path',
                    data: 'M57.5,35h0a25.54,25.54,0,0,1,0,29h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.515216827392578,
                height: 29,
                offsetX: 59.75760459899902,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OUTPUTN159IVyqK',
                shape: {
                    type: 'Path',
                    data: 'M 62 , 49.5 L 76 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 69,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUTN16vnUtui',
                shape: {
                    type: 'Path',
                    data: 'M 24 , 49.5 L 38 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 31,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUTN1',
                'children': ['SHAPE_OUTPUTN12P4THx0', 'SHAPE_OUTPUTN13Chhgfy', 'SHAPE_OUTPUTN142IhvVv', 'SHAPE_OUTPUTN159IVyqK', 'SHAPE_OUTPUTN16vnUtui']
            }, {
                id: 'SHAPE_OUTPUT2skMIEr',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 28,
                height: 28,
                offsetX: 53.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OUTPUT3prgikY',
                shape: {
                    type: 'Path',
                    data: 'M 67.5 , 49.5 L 81.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 74.5,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUT418QoiF',
                shape: {
                    type: 'Path',
                    data: 'M 25.5 , 49.5 L 39.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 32.5,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUT',
                'children': ['SHAPE_OUTPUT2skMIEr', 'SHAPE_OUTPUT3prgikY', 'SHAPE_OUTPUT418QoiF']
            }, {
                id: 'SHAPE_OUTPUT12Edk9Yx',
                shape: {
                    type: 'Path',
                    data: 'M44.5,35h0a25.54,25.54,0,0,0,0,29h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5152130126953125,
                height: 29,
                offsetX: 42.242393493652344,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OUTPUT13NqExNk',
                shape: {
                    type: 'Path',
                    data: 'M59.5,35h0a25.54,25.54,0,0,1,0,29h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.515216827392578,
                height: 29,
                offsetX: 61.75760459899902,
                offsetY: 49.5
            }, {
                id: 'SHAPE_OUTPUT14lcohvt',
                shape: {
                    type: 'Path',
                    data: 'M 64 , 49.5 L 78 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 71,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUT15pxdnsE',
                shape: {
                    type: 'Path',
                    data: 'M 26 , 49.5 L 40 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 14,
                height: 1,
                offsetX: 33,
                offsetY: 50
            }, {
                id: 'SHAPE_OUTPUT1',
                'children': ['SHAPE_OUTPUT12Edk9Yx', 'SHAPE_OUTPUT13NqExNk', 'SHAPE_OUTPUT14lcohvt', 'SHAPE_OUTPUT15pxdnsE']
            }];
        for (let i = 0; i < ladderShapes.length; i++) {
            if(!ladderShapes[i].children) {
                ladderShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            ladderShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return ladderShapes;
    }

    private getElectricalResistorShapes(): NodeModel[] {
        let resistorShapes: NodeModel[] = [
            {
                id: 'SHAPE_ATTENUATOR2gmQsSJ',
                shape: {
                    type: 'Path',
                    data: 'M 50 , 21 L 50 , 80'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 59,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ATTENUATOR3FB7BmK',
                shape: {
                    type: 'Path',
                    data: 'M0 50.5 15.26 50.5 21.03 34.53 32.98 64.61 44.04 34.49 56 64.56 67.07 34.49 79.95 64.61 84.86 50.5 100 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.119998931884766,
                offsetX: 50,
                offsetY: 49.55000114440918
            }, {
                id: 'SHAPE_ATTENUATOR',
                'children': ['SHAPE_ATTENUATOR2gmQsSJ', 'SHAPE_ATTENUATOR3FB7BmK']
            }, {
                id: 'SHAPE_MEMRISTOR2vqdXKX',
                shape: {
                    type: 'Path',
                    data: 'M.5,51.5H19.44v-10H29.5v20h10v-20h10v20h10v-20h10v20h10v-10h19'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 20,
                offsetX: 49.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_MEMRISTOR',
                'children': ['SHAPE_MEMRISTOR2vqdXKX']
            }, {
                id: 'SHAPE_MEMRISTOR12uOXeXj',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 66,
                height: 25.950000762939453,
                offsetX: 50.5,
                offsetY: 51.47500038146973
            }, {
                id: 'SHAPE_MEMRISTOR13bV1ROm',
                shape: {
                    type: 'Path',
                    data: 'M0,51.5H20.5v-10h10v20h10v-20h10v20h10v-20h10v20h10v-10H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 20,
                offsetX: 50,
                offsetY: 51.5
            }, {
                id: 'SHAPE_MEMRISTOR1',
                'children': ['SHAPE_MEMRISTOR12uOXeXj', 'SHAPE_MEMRISTOR13bV1ROm']
            }, {
                id: 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical2UtpQ9u',
                shape: {
                    type: 'Path',
                    data: 'M0 52.5 15.26 52.5 21.03 36.53 32.98 66.61 44.04 36.49 56 66.56 67.07 36.49 79.95 66.61 84.86 52.5 100 52.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.119998931884766,
                offsetX: 50,
                offsetY: 51.55000114440918
            }, {
                id: 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical3aQ6sRr',
                shape: {
                    type: 'Path',
                    data: 'M 81.5 , 31.5 L 91.65 , 21.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.150001525878906,
                height: 10.149999618530273,
                offsetX: 86.57500076293945,
                offsetY: 26.425000190734863
            }, {
                id: 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical4YSPNG3',
                shape: {
                    type: 'Path',
                    data: 'M81.5 27 81.5 31.5 86 31.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 83.75,
                offsetY: 29.25
            }, {
                id: 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical5z4Uowj',
                shape: {
                    type: 'Path',
                    data: 'M 74.5 , 24.5 L 84.65 , 14.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.150001525878906,
                height: 10.149999618530273,
                offsetX: 79.57500076293945,
                offsetY: 19.425000190734863
            }, {
                id: 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical63GVC2Z',
                shape: {
                    type: 'Path',
                    data: 'M74.5 20 74.5 24.5 79 24.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 4.5,
                height: 4.5,
                offsetX: 76.75,
                offsetY: 22.25
            }, {
                id: 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical',
                'children': ['SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical2UtpQ9u', 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical3aQ6sRr', 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical4YSPNG3', 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical5z4Uowj', 'SHAPE_PHOTOCONDUCTORTRANSDUCER-Symmetrical63GVC2Z']
            }, {
                id: 'SHAPE_POTENTIOMETER2WfC6wj',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 58,
                height: 20,
                offsetX: 49.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_POTENTIOMETER3KYIRVC',
                shape: {
                    type: 'Path',
                    data: 'M 78.5 , 48.5 L 98.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 88.5,
                offsetY: 49
            }, {
                id: 'SHAPE_POTENTIOMETER41zPPR5',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 48.5 L 20.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 10.5,
                offsetY: 49
            }, {
                id: 'SHAPE_POTENTIOMETER5UgmFI4',
                shape: {
                    type: 'Path',
                    data: 'M 49.5 , 58.5 L 49.5 , 78.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 20,
                offsetX: 50,
                offsetY: 68.5
            }, {
                id: 'SHAPE_POTENTIOMETER6X4KJRQ',
                shape: {
                    type: 'Path',
                    data: 'M44.32 63.62 49.5 58.5 49.5 58.5 49.5 58.5 54.68 63.62'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.360000610351562,
                height: 5.119998931884766,
                offsetX: 49.5,
                offsetY: 61.05999946594238
            }, {
                id: 'SHAPE_POTENTIOMETER',
                'children': ['SHAPE_POTENTIOMETER2WfC6wj', 'SHAPE_POTENTIOMETER3KYIRVC', 'SHAPE_POTENTIOMETER41zPPR5', 'SHAPE_POTENTIOMETER5UgmFI4', 'SHAPE_POTENTIOMETER6X4KJRQ']
            }, {
                id: 'SHAPE_POTENTIOMETER12oXaFOc',
                shape: {
                    type: 'Path',
                    data: 'M0.5 49.5 15.61 49.5 21.32 34.41 33.14 63.63 44.1 34.37 55.94 63.59 66.89 34.37 79.64 63.63 84.5 49.5 98.5 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 29.26000213623047,
                offsetX: 49.5,
                offsetY: 49
            }, {
                id: 'SHAPE_POTENTIOMETER13kclwDc',
                shape: {
                    type: 'Path',
                    data: 'M 48.5 , 65.5 L 48.5 , 85.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 20,
                offsetX: 49,
                offsetY: 75.5
            }, {
                id: 'SHAPE_POTENTIOMETER14qXuEpb',
                shape: {
                    type: 'Path',
                    data: 'M43.32 70.62 48.5 65.5 48.5 65.5 48.5 65.5 53.68 70.62'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10.360000610351562,
                height: 5.120002746582031,
                offsetX: 48.5,
                offsetY: 68.06000137329102
            }, {
                id: 'SHAPE_POTENTIOMETER1',
                'children': ['SHAPE_POTENTIOMETER12oXaFOc', 'SHAPE_POTENTIOMETER13kclwDc', 'SHAPE_POTENTIOMETER14qXuEpb']
            }, {
                id: 'SHAPE_RESISTORAdjustableContact29yZqjT',
                shape: {
                    type: 'Path',
                    data: 'M51.3 73.53 56.49 63.15 61.7 73.5 51.3 73.53'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10.400001525878906,
                height: 10.379997253417969,
                offsetX: 56.5,
                offsetY: 68.34000015258789
            }, {
                id: 'SHAPE_RESISTORAdjustableContact3RKHQb6',
                shape: {
                    type: 'Path',
                    data: 'M0 49.92 15.26 49.92 21.48 34.35 32.98 63.63 44.45 34.35 56.5 63.63 67.53 34.35 79.95 63.63 84.86 49.92 100 49.92'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 29.28000259399414,
                offsetX: 50,
                offsetY: 48.989999771118164
            }, {
                id: 'SHAPE_RESISTORAdjustableContact4ZNKJFT',
                shape: {
                    type: 'Path',
                    data: 'M 56.5 , 74 L 56.5 , 82'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 8,
                offsetX: 57,
                offsetY: 78
            }, {
                id: 'SHAPE_RESISTORAdjustableContact',
                'children': ['SHAPE_RESISTORAdjustableContact29yZqjT', 'SHAPE_RESISTORAdjustableContact3RKHQb6', 'SHAPE_RESISTORAdjustableContact4ZNKJFT']
            }, {
                id: 'SHAPE_RESISTORInstrument-RelayShunt2xIqzsZ',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 58,
                height: 20,
                offsetX: 49.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_RESISTORInstrument-RelayShunt3dt9r6g',
                shape: {
                    type: 'Path',
                    data: 'M 78.5 , 51.5 L 98.5 , 51.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 88.5,
                offsetY: 52
            }, {
                id: 'SHAPE_RESISTORInstrument-RelayShunt4PuPBdq',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 51.5 L 20.5 , 51.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 10.5,
                offsetY: 52
            }, {
                id: 'SHAPE_RESISTORInstrument-RelayShunt5iUqmEV',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 42.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_RESISTORInstrument-RelayShunt6s1PsQ3',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 57.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_RESISTORInstrument-RelayShunt',
                'children': ['SHAPE_RESISTORInstrument-RelayShunt2xIqzsZ', 'SHAPE_RESISTORInstrument-RelayShunt3dt9r6g', 'SHAPE_RESISTORInstrument-RelayShunt4PuPBdq', 'SHAPE_RESISTORInstrument-RelayShunt5iUqmEV', 'SHAPE_RESISTORInstrument-RelayShunt6s1PsQ3']
            }, {
                id: 'SHAPE_RESISTORNonLinear-3921V42vW',
                shape: {
                    type: 'Path',
                    data: 'M61.36 19.79 39.64 80.5 29.5 80.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.860000610351562,
                height: 60.709999084472656,
                offsetX: 45.43000030517578,
                offsetY: 50.14500045776367
            }, {
                id: 'SHAPE_RESISTORNonLinear-393CLH5VN',
                shape: {
                    type: 'Path',
                    data: 'M0 50.5 15.26 50.5 21.03 34.53 32.98 64.61 44.04 34.49 56 64.56 67.07 34.49 79.95 64.61 84.86 50.5 100 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.119998931884766,
                offsetX: 50,
                offsetY: 49.55000114440918
            }, {
                id: 'SHAPE_RESISTORNonLinear-39',
                'children': ['SHAPE_RESISTORNonLinear-3921V42vW', 'SHAPE_RESISTORNonLinear-393CLH5VN']
            }, {
                id: 'SHAPE_RESISTORNonLinear-402jREGcg',
                shape: {
                    type: 'Path',
                    data: 'M 61.36 , 19.79 L 39.64 , 80.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.720001220703125,
                height: 60.709999084472656,
                offsetX: 50.5,
                offsetY: 50.14500045776367
            }, {
                id: 'SHAPE_RESISTORNonLinear-403ZT65QO',
                shape: {
                    type: 'Path',
                    data: 'M0 50.5 15.26 50.5 21.03 34.53 32.98 64.61 44.04 34.49 56 64.56 67.07 34.49 79.95 64.61 84.86 50.5 100 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.119998931884766,
                offsetX: 50,
                offsetY: 49.55000114440918
            }, {
                id: 'SHAPE_RESISTORNonLinear-404Adq2NP',
                shape: {
                    type: 'Path',
                    data: 'M 52.4 , 67.29 L 63.6 , 82.71'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11.199996948242188,
                height: 15.419998168945312,
                offsetX: 58,
                offsetY: 75
            }, {
                id: 'SHAPE_RESISTORNonLinear-4058sosRm',
                shape: {
                    type: 'Path',
                    data: 'M 63.6 , 67.29 L 52.4 , 82.71'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11.199996948242188,
                height: 15.419998168945312,
                offsetX: 58,
                offsetY: 75
            }, {
                id: 'SHAPE_RESISTORNonLinear-40',
                'children': ['SHAPE_RESISTORNonLinear-402jREGcg', 'SHAPE_RESISTORNonLinear-403ZT65QO', 'SHAPE_RESISTORNonLinear-404Adq2NP', 'SHAPE_RESISTORNonLinear-4058sosRm']
            }, {
                id: 'SHAPE_RESISTORShunt2T2tsbZ',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 58,
                height: 20,
                offsetX: 49.5,
                offsetY: 61.5
            }, {
                id: 'SHAPE_RESISTORShunt3AerGP6',
                shape: {
                    type: 'Path',
                    data: 'M 78.5 , 60.5 L 98.5 , 60.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 88.5,
                offsetY: 61
            }, {
                id: 'SHAPE_RESISTORShunt4zInp4x',
                shape: {
                    type: 'Path',
                    data: 'M 66.5 , 51.5 L 66.5 , 21.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 30,
                offsetX: 67,
                offsetY: 36.5
            }, {
                id: 'SHAPE_RESISTORShunt5hmhiwu',
                shape: {
                    type: 'Path',
                    data: 'M 32.5 , 51.5 L 32.5 , 21.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 30,
                offsetX: 33,
                offsetY: 36.5
            }, {
                id: 'SHAPE_RESISTORShunt6FQOYDB',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 61.5 L 20.5 , 61.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 10.5,
                offsetY: 62
            }, {
                id: 'SHAPE_RESISTORShunt',
                'children': ['SHAPE_RESISTORShunt2T2tsbZ', 'SHAPE_RESISTORShunt3AerGP6', 'SHAPE_RESISTORShunt4zInp4x', 'SHAPE_RESISTORShunt5hmhiwu', 'SHAPE_RESISTORShunt6FQOYDB']
            }, {
                id: 'SHAPE_RESISTORTrapped2BUagzZ',
                shape: {
                    type: 'Path',
                    data: 'M0 50.5 15.26 50.5 21.03 34.53 32.5 64.61 44.04 34.49 55.5 64.61 67.07 34.49 79.5 64.61 84.86 50.5 100 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.119998931884766,
                offsetX: 50,
                offsetY: 49.55000114440918
            }, {
                id: 'SHAPE_RESISTORTrapped3h9hTfz',
                shape: {
                    type: 'Path',
                    data: 'M 32.5 , 64.5 L 32.5 , 80.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 16,
                offsetX: 33,
                offsetY: 72.5
            }, {
                id: 'SHAPE_RESISTORTrapped4duNYdC',
                shape: {
                    type: 'Path',
                    data: 'M 55.5 , 64.5 L 55.5 , 80.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 16,
                offsetX: 56,
                offsetY: 72.5
            }, {
                id: 'SHAPE_RESISTORTrapped',
                'children': ['SHAPE_RESISTORTrapped2BUagzZ', 'SHAPE_RESISTORTrapped3h9hTfz', 'SHAPE_RESISTORTrapped4duNYdC']
            }, {
                id: 'SHAPE_RESISTORTrimmer-312icegt3',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 58,
                height: 20,
                offsetX: 49.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_RESISTORTrimmer-3132IyHwN',
                shape: {
                    type: 'Path',
                    data: 'M 78.5 , 48.5 L 98.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 88.5,
                offsetY: 49
            }, {
                id: 'SHAPE_RESISTORTrimmer-314E8Ezi8',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 48.5 L 20.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 10.5,
                offsetY: 49
            }, {
                id: 'SHAPE_RESISTORTrimmer-315quqb3P',
                shape: {
                    type: 'Path',
                    data: 'M 38.64 , 80.36 L 59.64 , 21.41'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21,
                height: 58.95000076293945,
                offsetX: 49.13999938964844,
                offsetY: 50.885000228881836
            }, {
                id: 'SHAPE_RESISTORTrimmer-316cl9Mlp',
                shape: {
                    type: 'Path',
                    data: 'M 51.29 , 17.99 L 67.48 , 24.6'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16.19000244140625,
                height: 6.6100006103515625,
                offsetX: 59.38500213623047,
                offsetY: 21.295000076293945
            }, {
                id: 'SHAPE_RESISTORTrimmer-31',
                'children': ['SHAPE_RESISTORTrimmer-312icegt3', 'SHAPE_RESISTORTrimmer-3132IyHwN', 'SHAPE_RESISTORTrimmer-314E8Ezi8', 'SHAPE_RESISTORTrimmer-315quqb3P', 'SHAPE_RESISTORTrimmer-316cl9Mlp']
            }, {
                id: 'SHAPE_RESISTORTrimmer-322M62smj',
                shape: {
                    type: 'Path',
                    data: 'M 39.64 , 80.36 L 60.64 , 21.41'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21,
                height: 58.95000076293945,
                offsetX: 50.13999938964844,
                offsetY: 50.885000228881836
            }, {
                id: 'SHAPE_RESISTORTrimmer-3230rHiHq',
                shape: {
                    type: 'Path',
                    data: 'M 52.26 , 18.08 L 68.51 , 24.51'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16.250003814697266,
                height: 6.430000305175781,
                offsetX: 60.385000228881836,
                offsetY: 21.295000076293945
            }, {
                id: 'SHAPE_RESISTORTrimmer-324z4lxB4',
                shape: {
                    type: 'Path',
                    data: 'M0 50.5 15.26 50.5 21.03 34.53 32.98 64.61 44.04 34.49 56 64.56 67.07 34.49 79.95 64.61 84.86 50.5 100 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.119998931884766,
                offsetX: 50,
                offsetY: 49.55000114440918
            }, {
                id: 'SHAPE_RESISTORTrimmer-32',
                'children': ['SHAPE_RESISTORTrimmer-322M62smj', 'SHAPE_RESISTORTrimmer-3230rHiHq', 'SHAPE_RESISTORTrimmer-324z4lxB4']
            }, {
                id: 'SHAPE_RESISTORVariable-332203PbM',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 58,
                height: 20,
                offsetX: 49.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_RESISTORVariable-333rjcoyK',
                shape: {
                    type: 'Path',
                    data: 'M 78.5 , 48.5 L 98.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 88.5,
                offsetY: 49
            }, {
                id: 'SHAPE_RESISTORVariable-334GeCHtC',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 48.5 L 20.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 10.5,
                offsetY: 49
            }, {
                id: 'SHAPE_RESISTORVariable-335Hu8zdY',
                shape: {
                    type: 'Path',
                    data: 'M 37.64 , 80.36 L 59.57 , 22.08'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.93000030517578,
                height: 58.279998779296875,
                offsetX: 48.60499954223633,
                offsetY: 51.21999931335449
            }, {
                id: 'SHAPE_RESISTORVariable-336dPUQ4Q',
                shape: {
                    type: 'Path',
                    data: 'M51.71 29.15 59.71 21.5 60.47 32.47'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8.760002136230469,
                height: 10.970001220703125,
                offsetX: 56.09000015258789,
                offsetY: 26.985000610351562
            }, {
                id: 'SHAPE_RESISTORVariable-33',
                'children': ['SHAPE_RESISTORVariable-332203PbM', 'SHAPE_RESISTORVariable-333rjcoyK', 'SHAPE_RESISTORVariable-334GeCHtC', 'SHAPE_RESISTORVariable-335Hu8zdY', 'SHAPE_RESISTORVariable-336dPUQ4Q']
            }, {
                id: 'SHAPE_RESISTORVariable-342c4J9d5',
                shape: {
                    type: 'Path',
                    data: 'M 39.64 , 77.36 L 61.36 , 19.64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.720001220703125,
                height: 57.720001220703125,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_RESISTORVariable-343GdNMS3',
                shape: {
                    type: 'Path',
                    data: 'M53.71 26.15 61.71 18.5 62.47 29.47'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8.760002136230469,
                height: 10.969999313354492,
                offsetX: 58.09000015258789,
                offsetY: 23.984999656677246
            }, {
                id: 'SHAPE_RESISTORVariable-344BrWSdi',
                shape: {
                    type: 'Path',
                    data: 'M0 50.5 15.26 50.5 21.03 34.53 32.98 64.61 44.04 34.49 56 64.56 67.07 34.49 79.95 64.61 84.86 50.5 100 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 30.119998931884766,
                offsetX: 50,
                offsetY: 49.55000114440918
            }, {
                id: 'SHAPE_RESISTORVariable-34',
                'children': ['SHAPE_RESISTORVariable-342c4J9d5', 'SHAPE_RESISTORVariable-343GdNMS3', 'SHAPE_RESISTORVariable-344BrWSdi']
            }, {
                id: 'SHAPE_RESISTOR2uSI1ze',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 58,
                height: 20,
                offsetX: 49.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_RESISTOR3z8JCfR',
                shape: {
                    type: 'Path',
                    data: 'M 78.5 , 48.5 L 98.5 , 48.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 88.5,
                offsetY: 49
            }, {
                id: 'SHAPE_RESISTOR4i47I9x',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 48.5 L 20.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 10.5,
                offsetY: 49
            }, {
                id: 'SHAPE_RESISTOR',
                'children': ['SHAPE_RESISTOR2uSI1ze', 'SHAPE_RESISTOR3z8JCfR', 'SHAPE_RESISTOR4i47I9x']
            }, {
                id: 'SHAPE_RESISTOR126s1q7t',
                shape: {
                    type: 'Path',
                    data: 'M0.5 49.5 15.76 49.5 21.53 34.4 33.48 63.64 44.54 34.36 56.5 63.59 67.57 34.36 80.45 63.64 85.36 49.5 99.5 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99,
                height: 29.279998779296875,
                offsetX: 50,
                offsetY: 49
            }, {
                id: 'SHAPE_RESISTOR1',
                'children': ['SHAPE_RESISTOR126s1q7t']
            }, {
                id: 'SHAPE_TRIMMER2qU0U46',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 58,
                height: 20,
                offsetX: 49.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_TRIMMER3IQzcnL',
                shape: {
                    type: 'Path',
                    data: 'M 78.5 , 48.5 L 98.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 88.5,
                offsetY: 49
            }, {
                id: 'SHAPE_TRIMMER4iXw2B4',
                shape: {
                    type: 'Path',
                    data: 'M 49.5 , 62.5 L 49.5 , 78.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 16,
                offsetX: 50,
                offsetY: 70.5
            }, {
                id: 'SHAPE_TRIMMER5i5VnaR',
                shape: {
                    type: 'Path',
                    data: 'M 0.5 , 48.5 L 20.5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 1,
                offsetX: 10.5,
                offsetY: 49
            }, {
                id: 'SHAPE_TRIMMER6jGFgnq',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16,
                height: 3,
                offsetX: 49.5,
                offsetY: 61
            }, {
                id: 'SHAPE_TRIMMER',
                'children': ['SHAPE_TRIMMER2qU0U46', 'SHAPE_TRIMMER3IQzcnL', 'SHAPE_TRIMMER4iXw2B4', 'SHAPE_TRIMMER5i5VnaR', 'SHAPE_TRIMMER6jGFgnq']
            }, {
                id: 'SHAPE_TRIMMER12CUxvZW',
                shape: {
                    type: 'Path',
                    data: 'M1.5 49.5 16.61 49.5 22.32 34.41 34.14 63.63 45.1 34.37 56.94 63.59 67.89 34.37 80.64 63.63 85.5 49.5 99.5 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 98,
                height: 29.26000213623047,
                offsetX: 50.5,
                offsetY: 49
            }, {
                id: 'SHAPE_TRIMMER13jBeuOr',
                shape: {
                    type: 'Path',
                    data: 'M 49.5 , 68.5 L 49.5 , 86.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 18,
                offsetX: 50,
                offsetY: 77.5
            }, {
                id: 'SHAPE_TRIMMER14YF5oij',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16,
                height: 3,
                offsetX: 49.5,
                offsetY: 67
            }, {
                id: 'SHAPE_TRIMMER1',
                'children': ['SHAPE_TRIMMER12CUxvZW', 'SHAPE_TRIMMER13jBeuOr', 'SHAPE_TRIMMER14YF5oij']
            }, {
                id: 'SHAPE_VARISTORSymmetrical2uFOjUJ',
                shape: {
                    type: 'Path',
                    data: 'M61.86 19.79 40.14 80.5 30 80.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.860000610351562,
                height: 60.709999084472656,
                offsetX: 45.93000030517578,
                offsetY: 50.14500045776367
            }, {
                id: 'SHAPE_VARISTORSymmetrical36h0l87',
                shape: {
                    type: 'Path',
                    data: 'M1 50.5 15.76 50.5 21.53 34.53 33.48 64.61 44.54 34.49 56.5 64.56 67.57 34.49 80.45 64.61 85.36 50.5 100 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99,
                height: 30.119998931884766,
                offsetX: 50.5,
                offsetY: 49.55000114440918
            }, {
                id: 'SHAPE_VARISTORSymmetrical4fdzDJ1',
                shape: {
                    type: 'Path',
                    data: 'M55.44 68.23 60.99 81.92 66.56 68.26'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 11.119998931884766,
                height: 13.689994812011719,
                offsetX: 60.99999809265137,
                offsetY: 75.07500076293945
            }, {
                id: 'SHAPE_VARISTORSymmetrical',
                'children': ['SHAPE_VARISTORSymmetrical2uFOjUJ', 'SHAPE_VARISTORSymmetrical36h0l87', 'SHAPE_VARISTORSymmetrical4fdzDJ1']
            }];
        for (let i = 0; i < resistorShapes.length; i++) {
            if(!resistorShapes[i].children) {
                resistorShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            resistorShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return resistorShapes;
    }

    private getElectricalEquipmentShapes(): NodeModel[] {
        let equipmentShapes: NodeModel[] = [
            {
                id: 'SHAPE_ARMATURE2y7tUg6',
                shape: {
                    type: 'Path',
                    data: 'M77.35 22.65 84.23 15.77 99.65 0.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 22.300003051757812,
                height: 22.299999237060547,
                offsetX: 88.5,
                offsetY: 11.499999642372131
            }, {
                id: 'SHAPE_ARMATURE3DU2AhP',
                shape: {
                    type: 'Path',
                    data: 'M 0.35 , 99.65 L 22.65 , 77.35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 22.299999237060547,
                height: 22.300003051757812,
                offsetX: 11.499999612569809,
                offsetY: 88.5
            }, {
                id: 'SHAPE_ARMATURE',
                'children': ['SHAPE_ARMATURE2y7tUg6', 'SHAPE_ARMATURE3DU2AhP']
            }, {
                id: 'SHAPE_AUTOMATICRETURN2m5et9W',
                shape: {
                    type: 'Path',
                    data: 'M0,51.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 52
            }, {
                id: 'SHAPE_AUTOMATICRETURN3zNruL9',
                shape: {
                    type: 'Path',
                    data: 'M57.5,45V57l-16-6Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16,
                height: 12,
                offsetX: 49.5,
                offsetY: 51
            }, {
                id: 'SHAPE_AUTOMATICRETURN',
                'children': ['SHAPE_AUTOMATICRETURN2m5et9W', 'SHAPE_AUTOMATICRETURN3zNruL9']
            }, {
                id: 'SHAPE_BLOCKINGDEVICE2shTBnf',
                shape: {
                    type: 'Path',
                    data: 'M0,57.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 58
            }, {
                id: 'SHAPE_BLOCKINGDEVICE3BibsXd',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 36,
                height: 15,
                offsetX: 50.5,
                offsetY: 50
            }, {
                id: 'SHAPE_BLOCKINGDEVICE',
                'children': ['SHAPE_BLOCKINGDEVICE2shTBnf', 'SHAPE_BLOCKINGDEVICE3BibsXd']
            }, {
                id: 'SHAPE_BRAKE2o47gac',
                shape: {
                    type: 'Path',
                    data: 'M14,64.5l15-25H74l15,25Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 75,
                height: 25,
                offsetX: 51.5,
                offsetY: 52
            }, {
                id: 'SHAPE_BRAKE',
                'children': ['SHAPE_BRAKE2o47gac']
            }, {
                id: 'SHAPE_CLUTCH2bPeGKg',
                shape: {
                    type: 'Path',
                    data: 'M21.5 55 21.5 39.5 80.5 39.5 80.5 55'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 59,
                height: 15.5,
                offsetX: 51,
                offsetY: 47.25
            }, {
                id: 'SHAPE_CLUTCH3teADQv',
                shape: {
                    type: 'Path',
                    data: 'M67.5 45 67.5 62.5 98 62.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '3'
                },
                width: 30.5,
                height: 17.5,
                offsetX: 82.75,
                offsetY: 53.75
            }, {
                id: 'SHAPE_CLUTCH49HLcHe',
                shape: {
                    type: 'Path',
                    data: 'M34.5 45 34.5 62.5 4 62.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '3'
                },
                width: 30.5,
                height: 17.5,
                offsetX: 19.25,
                offsetY: 53.75
            }, {
                id: 'SHAPE_CLUTCH',
                'children': ['SHAPE_CLUTCH2bPeGKg', 'SHAPE_CLUTCH3teADQv', 'SHAPE_CLUTCH49HLcHe']
            }, {
                id: 'SHAPE_CLUTCH12jEWHQJ',
                shape: {
                    type: 'Path',
                    data: 'M25.27 16.42 38.5 26.44 38.5 74.56 25.27 84.58'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 13.229999542236328,
                height: 68.16000366210938,
                offsetX: 31.885000228881836,
                offsetY: 50.50000190734863
            }, {
                id: 'SHAPE_CLUTCH13EYcs9P',
                shape: {
                    type: 'Path',
                    data: 'M49.27 16.42 62.5 26.44 62.5 74.56 49.27 84.58'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 13.229999542236328,
                height: 68.16000366210938,
                offsetX: 55.885000228881836,
                offsetY: 50.50000190734863
            }, {
                id: 'SHAPE_CLUTCH143Xdjp6',
                shape: {
                    type: 'Path',
                    data: 'M 62.5 , 50.5 L 86 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '3'
                },
                width: 23.5,
                height: 1,
                offsetX: 74.25,
                offsetY: 51
            }, {
                id: 'SHAPE_CLUTCH158NnO7C',
                shape: {
                    type: 'Path',
                    data: 'M 15 , 50.5 L 38.47 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '3'
                },
                width: 23.470001220703125,
                height: 1,
                offsetX: 26.735000610351562,
                offsetY: 51
            }, {
                id: 'SHAPE_CLUTCH1',
                'children': ['SHAPE_CLUTCH12jEWHQJ', 'SHAPE_CLUTCH13EYcs9P', 'SHAPE_CLUTCH143Xdjp6', 'SHAPE_CLUTCH158NnO7C']
            }, {
                id: 'SHAPE_DELAYEDOPTION2XMcqI9',
                shape: {
                    type: 'Path',
                    data: 'M27.5,19.27h0a56.45,56.45,0,0,0,0,61.46h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 9.097394943237305,
                height: 61.45999526977539,
                offsetX: 22.951302528381348,
                offsetY: 49.99999809265137
            }, {
                id: 'SHAPE_DELAYEDOPTION3FpMQ4Z',
                shape: {
                    type: 'Path',
                    data: 'M 18.58 , 45.5 L 87 , 45.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 68.41999816894531,
                height: 1,
                offsetX: 52.78999900817871,
                offsetY: 46
            }, {
                id: 'SHAPE_DELAYEDOPTION43NKuLY',
                shape: {
                    type: 'Path',
                    data: 'M 18.51 , 53.5 L 87 , 53.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 68.48999786376953,
                height: 1,
                offsetX: 52.7549991607666,
                offsetY: 54
            }, {
                id: 'SHAPE_DELAYEDOPTION',
                'children': ['SHAPE_DELAYEDOPTION2XMcqI9', 'SHAPE_DELAYEDOPTION3FpMQ4Z', 'SHAPE_DELAYEDOPTION43NKuLY']
            }, {
                id: 'SHAPE_DETENT2CQutKq',
                shape: {
                    type: 'Path',
                    data: 'M0,51.5H46m54,0H54M45.69,51l3.8,8,3.81-8'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 100,
                height: 8,
                offsetX: 50,
                offsetY: 55
            }, {
                id: 'SHAPE_DETENT',
                'children': ['SHAPE_DETENT2CQutKq']
            }, {
                id: 'SHAPE_FIELD2Mhm9Zv',
                shape: {
                    type: 'Path',
                    data: 'M65.17,58A14.17,14.17,0,1,1,93.5,58'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 28.339996337890625,
                height: 14.546394348144531,
                offsetX: 79.33499908447266,
                offsetY: 50.726802825927734
            }, {
                id: 'SHAPE_FIELD390om9g',
                shape: {
                    type: 'Path',
                    data: 'M8.5,58A14.33,14.33,0,0,1,22.67,43.5,14.33,14.33,0,0,1,36.83,58a14.17,14.17,0,1,1,28.34,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 56.671016693115234,
                height: 14.5,
                offsetX: 36.834489822387695,
                offsetY: 50.75
            }, {
                id: 'SHAPE_FIELD',
                'children': ['SHAPE_FIELD2Mhm9Zv', 'SHAPE_FIELD390om9g']
            }, {
                id: 'SHAPE_GEARING2U5JKro',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 40,
                height: 40,
                offsetX: 47.5,
                offsetY: 35.5
            }, {
                id: 'SHAPE_GEARING3Xctgc8',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 24,
                height: 24,
                offsetX: 47.5,
                offsetY: 67.5
            }, {
                id: 'SHAPE_GEARING4TOzM4G',
                shape: {
                    type: 'Path',
                    data: 'M 100 , 35.5 L 68 , 35.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 32,
                height: 1,
                offsetX: 84,
                offsetY: 36
            }, {
                id: 'SHAPE_GEARING5GHfoCB',
                shape: {
                    type: 'Path',
                    data: 'M 35 , 67.5 L 1 , 67.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 34,
                height: 1,
                offsetX: 18,
                offsetY: 68
            }, {
                id: 'SHAPE_GEARING',
                'children': ['SHAPE_GEARING2U5JKro', 'SHAPE_GEARING3Xctgc8', 'SHAPE_GEARING4TOzM4G', 'SHAPE_GEARING5GHfoCB']
            }, {
                id: 'SHAPE_LATCHINGDEVICE2orukVD',
                shape: {
                    type: 'Path',
                    data: 'M0,54.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 55
            }, {
                id: 'SHAPE_LATCHINGDEVICE3JUW2Yp',
                shape: {
                    type: 'Path',
                    data: 'M49.5,32V49'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 17,
                offsetX: 50,
                offsetY: 40.5
            }, {
                id: 'SHAPE_LATCHINGDEVICE4bHH6w1',
                shape: {
                    type: 'Path',
                    data: 'M44.5,54.5h-20v-10Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 10,
                offsetX: 34.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_LATCHINGDEVICE',
                'children': ['SHAPE_LATCHINGDEVICE2orukVD', 'SHAPE_LATCHINGDEVICE3JUW2Yp', 'SHAPE_LATCHINGDEVICE4bHH6w1']
            }, {
                id: 'SHAPE_MANUALCONTROL2GXefIZ',
                shape: {
                    type: 'Path',
                    data: 'M30.5,28V78'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 50,
                offsetX: 31,
                offsetY: 53
            }, {
                id: 'SHAPE_MANUALCONTROL3G76WCD',
                shape: {
                    type: 'Path',
                    data: 'M30.5,52.5H79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '3'
                },
                width: 48.5,
                height: 1,
                offsetX: 54.75,
                offsetY: 53
            }, {
                id: 'SHAPE_MANUALCONTROL',
                'children': ['SHAPE_MANUALCONTROL2GXefIZ', 'SHAPE_MANUALCONTROL3G76WCD']
            }, {
                id: 'SHAPE_MECHANICALINTERLOCK2yHpJPt',
                shape: {
                    type: 'Path',
                    data: 'M0,50.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 51
            }, {
                id: 'SHAPE_MECHANICALINTERLOCK3819tW2',
                shape: {
                    type: 'Path',
                    data: 'M49.5,28V41.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 13.5,
                offsetX: 50,
                offsetY: 34.75
            }, {
                id: 'SHAPE_MECHANICALINTERLOCK4KA4Lrt',
                shape: {
                    type: 'Path',
                    data: 'M41.5,41.5h16l-8,17Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16,
                height: 17,
                offsetX: 49.5,
                offsetY: 50
            }, {
                id: 'SHAPE_MECHANICALINTERLOCK',
                'children': ['SHAPE_MECHANICALINTERLOCK2yHpJPt', 'SHAPE_MECHANICALINTERLOCK3819tW2', 'SHAPE_MECHANICALINTERLOCK4KA4Lrt']
            }, {
                id: 'SHAPE_PERMANENTMAGNET2mX945a',
                shape: {
                    type: 'Path',
                    data: 'M40.5,15.5h20v70h-20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 20,
                height: 70,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_PERMANENTMAGNET',
                'children': ['SHAPE_PERMANENTMAGNET2mX945a']
            }, {
                id: 'SHAPE_ROTATINGMACHINE2wtXXhT',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 99,
                offsetX: 50,
                offsetY: 50.5
            }, {
                id: 'SHAPE_ROTATINGMACHINE',
                'children': ['SHAPE_ROTATINGMACHINE2wtXXhT']
            }, {
                id: 'SHAPE_ROTATION2Pg2jEP',
                shape: {
                    type: 'Path',
                    data: 'M23.59,28.28a30.46,30.46,0,1,0,50.83,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60.91999053955078,
                height: 47.24957275390625,
                offsetX: 49.0049934387207,
                offsetY: 51.9047794342041
            }, {
                id: 'SHAPE_ROTATION3uiAHta',
                shape: {
                    type: 'Path',
                    data: 'M72.56,24.14,72.5,40.28l12.56-4.66Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 12.55999755859375,
                height: 16.139999389648438,
                offsetX: 78.77999877929688,
                offsetY: 32.209999084472656
            }, {
                id: 'SHAPE_ROTATION',
                'children': ['SHAPE_ROTATION2Pg2jEP', 'SHAPE_ROTATION3uiAHta']
            }, {
                id: 'SHAPE_SHYNCRO2pR9uQl',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 84,
                height: 84,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_SHYNCRO3384Gs5',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 72,
                height: 72,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_SHYNCRO4AubC28',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 0 L 50.5 , 13.51'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 13.510000228881836,
                offsetX: 51,
                offsetY: 6.755000114440918
            }, {
                id: 'SHAPE_SHYNCRO5oI6oGf',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 85.49 L 50.5 , 100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 14.510002136230469,
                offsetX: 51,
                offsetY: 92.74499893188477
            }, {
                id: 'SHAPE_SHYNCRO',
                'children': ['SHAPE_SHYNCRO2pR9uQl', 'SHAPE_SHYNCRO3384Gs5', 'SHAPE_SHYNCRO4AubC28', 'SHAPE_SHYNCRO5oI6oGf']
            }, {
                id: 'SHAPE_WINDINGCONNECTION2Vvwi1z',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 99,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_WINDINGCONNECTION343B7eM',
                shape: {
                    type: 'Path',
                    data: 'M90.48 78.5 9.52 78.5 50 0.5 90.48 78.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 80.96000671386719,
                height: 78,
                offsetX: 50.000003814697266,
                offsetY: 39.5
            }, {
                id: 'SHAPE_WINDINGCONNECTION',
                'children': ['SHAPE_WINDINGCONNECTION2Vvwi1z', 'SHAPE_WINDINGCONNECTION343B7eM']
            }];
        for (let i = 0; i < equipmentShapes.length; i++) {
            if(!equipmentShapes[i].children) {
                equipmentShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            equipmentShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return equipmentShapes;
    }

    private getElectricalSourcesShapes(): NodeModel[] {
        let sourcesShapes: NodeModel[] = [
            {
                id: 'SHAPE_AC2wodMyq',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 59,
                height: 59,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_AC3m6aDFC',
                shape: {
                    type: 'Path',
                    data: 'M35.47,50A7.55,7.55,0,0,1,50,50a7.55,7.55,0,0,0,14.53,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 29.05999755859375,
                height: 10.990352630615234,
                offsetX: 50,
                offsetY: 49.99999809265137
            }, {
                id: 'SHAPE_AC',
                'children': ['SHAPE_AC2wodMyq', 'SHAPE_AC3m6aDFC']
            }, {
                id: 'SHAPE_ACCUMULATOR--MONOCELLBATTERY2FrSxtA',
                shape: {
                    type: 'Path',
                    data: 'M0,47.5H45M54.5,18V78M55,47.5h45'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 60,
                offsetX: 50,
                offsetY: 48
            }, {
                id: 'SHAPE_ACCUMULATOR--MONOCELLBATTERY35O0nX0',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 4,
                height: 30,
                offsetX: 42.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_ACCUMULATOR--MONOCELLBATTERY',
                'children': ['SHAPE_ACCUMULATOR--MONOCELLBATTERY2FrSxtA', 'SHAPE_ACCUMULATOR--MONOCELLBATTERY35O0nX0']
            }, {
                id: 'SHAPE_CURRENT2SdGnVN',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 49.5,
                offsetY: 60.5
            }, {
                id: 'SHAPE_CURRENT3pKJFyW',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 49.5,
                offsetY: 34.5
            }, {
                id: 'SHAPE_CURRENT4uQUm3J',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 40,
                offsetX: 49.5,
                offsetY: 60.5
            }, {
                id: 'SHAPE_CURRENT',
                'children': ['SHAPE_CURRENT2SdGnVN', 'SHAPE_CURRENT3pKJFyW', 'SHAPE_CURRENT4uQUm3J']
            }, {
                id: 'SHAPE_DC2h1LGg8',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 59,
                height: 59,
                offsetX: 56,
                offsetY: 49
            }, {
                id: 'SHAPE_DC3aDOGaN',
                shape: {
                    type: 'Path',
                    data: 'M14,86.5H24M18.5,12v9M14,16.5h9'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 74.5,
                offsetX: 19,
                offsetY: 49.25
            }, {
                id: 'SHAPE_DC',
                'children': ['SHAPE_DC2h1LGg8', 'SHAPE_DC3aDOGaN']
            }, {
                id: 'SHAPE_DC12EVYtDl',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 48.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DC136cXcNl',
                shape: {
                    type: 'Path',
                    data: 'M28,49.5H68m-10-5,10,5-10,5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 10,
                offsetX: 48,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DC1',
                'children': ['SHAPE_DC12EVYtDl', 'SHAPE_DC136cXcNl']
            }, {
                id: 'SHAPE_DC22PGkBG4',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DC23lkJfEi',
                shape: {
                    type: 'Path',
                    data: 'M48,75.5h5M50.5,23v5M48,25.5h5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 5,
                height: 52.5,
                offsetX: 50.5,
                offsetY: 49.25
            }, {
                id: 'SHAPE_DC2',
                'children': ['SHAPE_DC22PGkBG4', 'SHAPE_DC23lkJfEi']
            }, {
                id: 'SHAPE_DEPENDENT2nT1OUR',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 42.130001068115234,
                height: 42.130001068115234,
                offsetX: 50.4950008392334,
                offsetY: 50.4950008392334
            }, {
                id: 'SHAPE_DEPENDENT',
                'children': ['SHAPE_DEPENDENT2nT1OUR']
            }, {
                id: 'SHAPE_DEPENDENT12ajQ7oT',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 42.130001068115234,
                height: 42.130001068115234,
                offsetX: 50.4950008392334,
                offsetY: 50.4950008392334
            }, {
                id: 'SHAPE_DEPENDENT13PHzU9K',
                shape: {
                    type: 'Path',
                    data: 'M50.5,30V70m5-10-5,10-5-10'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 10,
                height: 40,
                offsetX: 50.5,
                offsetY: 50
            }, {
                id: 'SHAPE_DEPENDENT1',
                'children': ['SHAPE_DEPENDENT12ajQ7oT', 'SHAPE_DEPENDENT13PHzU9K']
            }, {
                id: 'SHAPE_DEPENDENT22zoTsmX',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 42.130001068115234,
                height: 42.130001068115234,
                offsetX: 50.4950008392334,
                offsetY: 50.4950008392334
            }, {
                id: 'SHAPE_DEPENDENT23joH3lH',
                shape: {
                    type: 'Path',
                    data: 'M48,73.5h5M50.5,27v5M48,29.5h5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 5,
                height: 46.5,
                offsetX: 50.5,
                offsetY: 50.25
            }, {
                id: 'SHAPE_DEPENDENT2',
                'children': ['SHAPE_DEPENDENT22zoTsmX', 'SHAPE_DEPENDENT23joH3lH']
            }, {
                id: 'SHAPE_EXPLOSIVESQUIB2VBjsGA',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_EXPLOSIVESQUIB3pIkZx0',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 24.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_EXPLOSIVESQUIB4jLiO8r',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 75.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_EXPLOSIVESQUIB5sWuZSK',
                shape: {
                    type: 'Path',
                    data: 'M70.5,56.5l-6,6-28-28-6,6'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 40,
                height: 28,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_EXPLOSIVESQUIB6jQlBaq',
                shape: {
                    type: 'Path',
                    data: 'M32.5,33.5l-4,9,9-4Z'
                },
                width: 9,
                height: 9,
                offsetX: 33,
                offsetY: 38
            }, {
                id: 'SHAPE_EXPLOSIVESQUIB',
                'children': ['SHAPE_EXPLOSIVESQUIB2VBjsGA', 'SHAPE_EXPLOSIVESQUIB3pIkZx0', 'SHAPE_EXPLOSIVESQUIB4jLiO8r', 'SHAPE_EXPLOSIVESQUIB5sWuZSK', 'SHAPE_EXPLOSIVESQUIB6jQlBaq']
            }, {
                id: 'SHAPE_IDEALSOURCE2cEFeqx',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_IDEALSOURCE394xOSw',
                shape: {
                    type: 'Path',
                    data: 'M 20 , 49.5 L 80 , 49.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 1,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_IDEALSOURCE',
                'children': ['SHAPE_IDEALSOURCE2cEFeqx', 'SHAPE_IDEALSOURCE394xOSw']
            }, {
                id: 'SHAPE_MULTICELLBATTERYTAPPED25Z9NMI',
                shape: {
                    type: 'Path',
                    data: 'M0,44.5H20M34.5,14V74M80,44.5h20M80.5,14V74M34,44.5h5m5,0h5m5,0h5m5,0h2M50.5,84V58'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 100,
                height: 70,
                offsetX: 50,
                offsetY: 49
            }, {
                id: 'SHAPE_MULTICELLBATTERYTAPPED36RenOE',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 4,
                height: 30,
                offsetX: 22.5,
                offsetY: 44.5
            }, {
                id: 'SHAPE_MULTICELLBATTERYTAPPED4zJ836w',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 4,
                height: 30,
                offsetX: 68.5,
                offsetY: 44.5
            }, {
                id: 'SHAPE_MULTICELLBATTERYTAPPED5JWD2Qo',
                shape: {
                    type: 'Path',
                    data: 'M44.77,64.5,50,53.12,56.16,64.5Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 11.389999389648438,
                height: 11.380001068115234,
                offsetX: 50.46500015258789,
                offsetY: 58.80999946594238
            }, {
                id: 'SHAPE_MULTICELLBATTERYTAPPED',
                'children': ['SHAPE_MULTICELLBATTERYTAPPED25Z9NMI', 'SHAPE_MULTICELLBATTERYTAPPED36RenOE', 'SHAPE_MULTICELLBATTERYTAPPED4zJ836w', 'SHAPE_MULTICELLBATTERYTAPPED5JWD2Qo']
            }, {
                id: 'SHAPE_MULTICELLBATTERY2bFOff1',
                shape: {
                    type: 'Path',
                    data: 'M0,47.5H20M33.5,17V77M80,47.5h20M79.5,17V77M34,47.5h5m5,0h5m5,0h5m5,0h2'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 100,
                height: 60,
                offsetX: 50,
                offsetY: 47
            }, {
                id: 'SHAPE_MULTICELLBATTERY32AKWFQ',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 4,
                height: 30,
                offsetX: 21.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_MULTICELLBATTERY4VuyUzn',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 4,
                height: 30,
                offsetX: 67.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_MULTICELLBATTERY',
                'children': ['SHAPE_MULTICELLBATTERY2bFOff1', 'SHAPE_MULTICELLBATTERY32AKWFQ', 'SHAPE_MULTICELLBATTERY4VuyUzn']
            }, {
                id: 'SHAPE_NOISE2EF0ZU6',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_NOISE3OqOlE5',
                shape: {
                    type: 'Path',
                    data: 'M60.74 64.56 50.5 50.08 39.49 64.56'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.25,
                height: 14.479995727539062,
                offsetX: 50.1150016784668,
                offsetY: 57.31999969482422
            }, {
                id: 'SHAPE_NOISE49QvAkM',
                shape: {
                    type: 'Path',
                    data: 'M67.24 44.76 50.5 50.08 50.49 32'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16.749996185302734,
                height: 18.080001831054688,
                offsetX: 58.864999771118164,
                offsetY: 41.040000915527344
            }, {
                id: 'SHAPE_NOISE5G0sKef',
                shape: {
                    type: 'Path',
                    data: 'M33.76 44.76 50.5 50.08 50.51 32'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 16.75,
                height: 18.080001831054688,
                offsetX: 42.1349983215332,
                offsetY: 41.040000915527344
            }, {
                id: 'SHAPE_NOISE',
                'children': ['SHAPE_NOISE2EF0ZU6', 'SHAPE_NOISE3OqOlE5', 'SHAPE_NOISE49QvAkM', 'SHAPE_NOISE5G0sKef']
            }];
        for (let i = 0; i < sourcesShapes.length; i++) {
            if(!sourcesShapes[i].children) {
                sourcesShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            sourcesShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return sourcesShapes;
    }

    private getElectricalSwitchesShapes(): NodeModel[] {
        let switchesShapes: NodeModel[] = [
            {
                id: 'SHAPE_2POSITIONSWITCH2BDyixX',
                shape: {
                    type: 'Path',
                    data: 'M13,52.5H28m45,0H88M50.5,18V30m0,45V88M46,60.5,58,48.7M42,56.3l12-12'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 75,
                height: 70,
                offsetX: 50.5,
                offsetY: 53
            }, {
                id: 'SHAPE_2POSITIONSWITCH3JmzaTu',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69.5,
                offsetY: 52.5
            }, {
                id: 'SHAPE_2POSITIONSWITCH4pUinyb',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 30.5,
                offsetY: 52.5
            }, {
                id: 'SHAPE_2POSITIONSWITCH5O2yaKL',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 50.5,
                offsetY: 33.5
            }, {
                id: 'SHAPE_2POSITIONSWITCH6EzdASX',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 50.5,
                offsetY: 72.5
            }, {
                id: 'SHAPE_2POSITIONSWITCH7SOdrrG',
                shape: {
                    type: 'Path',
                    data: 'M31,52.5A19.86,19.86,0,0,1,50.5,72m0-39A19.5,19.5,0,0,0,70,52.5m-10-25a15,15,0,0,1,15,15'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44,
                height: 44.5,
                offsetX: 53,
                offsetY: 49.75
            }, {
                id: 'SHAPE_2POSITIONSWITCH8svRXo9',
                shape: {
                    type: 'Path',
                    data: 'M60.5,24.5l-5.5,3,5.5,3ZM72,42.5h6L75,48Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 23,
                height: 23.5,
                offsetX: 66.5,
                offsetY: 36.25
            }, {
                id: 'SHAPE_2POSITIONSWITCH',
                'children': ['SHAPE_2POSITIONSWITCH2BDyixX', 'SHAPE_2POSITIONSWITCH3JmzaTu', 'SHAPE_2POSITIONSWITCH4pUinyb', 'SHAPE_2POSITIONSWITCH5O2yaKL', 'SHAPE_2POSITIONSWITCH6EzdASX', 'SHAPE_2POSITIONSWITCH7SOdrrG', 'SHAPE_2POSITIONSWITCH8svRXo9']
            }, {
                id: 'SHAPE_3POSITIONSWITCH2cCjEvU',
                shape: {
                    type: 'Path',
                    data: 'M27.5,75.5,40.2,65m34.6,0L87.5,75.5M57.5,16V28'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 59.5,
                offsetX: 57.5,
                offsetY: 45.75
            }, {
                id: 'SHAPE_3POSITIONSWITCH3PRqZf1',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 72.5,
                offsetY: 63.5
            }, {
                id: 'SHAPE_3POSITIONSWITCH4qDaDD6',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 42.5,
                offsetY: 63.5
            }, {
                id: 'SHAPE_3POSITIONSWITCH5oMTcG0',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 57.5,
                offsetY: 31.5
            }, {
                id: 'SHAPE_3POSITIONSWITCH6xf7ZbV',
                shape: {
                    type: 'Path',
                    data: 'M57.5,31a40,40,0,0,1-15,32'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.007392883300781,
                height: 32,
                offsetX: 50.00369644165039,
                offsetY: 47
            }, {
                id: 'SHAPE_3POSITIONSWITCH73fGTKs',
                shape: {
                    type: 'Path',
                    data: 'M48.07,33.25l2.73-5.63-6.22.75ZM32,53.25l5.92-1-2.06,5.92Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 18.799999237060547,
                height: 30.549999237060547,
                offsetX: 41.39999961853027,
                offsetY: 42.89499855041504
            }, {
                id: 'SHAPE_3POSITIONSWITCH8e3ijlX',
                shape: {
                    type: 'Path',
                    data: 'M35,53.5a22.5,22.5,0,0,1,12-23'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 12.200340270996094,
                height: 23,
                offsetX: 40.89983367919922,
                offsetY: 42
            }, {
                id: 'SHAPE_3POSITIONSWITCH',
                'children': ['SHAPE_3POSITIONSWITCH2cCjEvU', 'SHAPE_3POSITIONSWITCH3PRqZf1', 'SHAPE_3POSITIONSWITCH4qDaDD6', 'SHAPE_3POSITIONSWITCH5oMTcG0', 'SHAPE_3POSITIONSWITCH6xf7ZbV', 'SHAPE_3POSITIONSWITCH73fGTKs', 'SHAPE_3POSITIONSWITCH8e3ijlX']
            }, {
                id: 'SHAPE_4POSITIONSWITCH24aQhj8',
                shape: {
                    type: 'Path',
                    data: 'M17,53.5H32m45,0H92M54.5,19V31m0,45V89M40.32,67.4a19.51,19.51,0,0,1,27.58-.22M40.1,39.82a19.51,19.51,0,0,0,27.58-.22M44,28.5a15,15,0,0,0-15,15M56.5,62V45m-5,17-.14-17'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 70,
                offsetX: 54.5,
                offsetY: 54
            }, {
                id: 'SHAPE_4POSITIONSWITCH3sJhogy',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 73.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_4POSITIONSWITCH4HXTRaE',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 34.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_4POSITIONSWITCH5JafWbs',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 54.5,
                offsetY: 34.5
            }, {
                id: 'SHAPE_4POSITIONSWITCH6g3svl6',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 54.5,
                offsetY: 73.5
            }, {
                id: 'SHAPE_4POSITIONSWITCH7yAxfou',
                shape: {
                    type: 'Path',
                    data: 'M44.5,25.5l5.5,3-5.5,3ZM32,43.5H26L29,49Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 24,
                height: 23.5,
                offsetX: 38,
                offsetY: 37.25
            }, {
                id: 'SHAPE_4POSITIONSWITCH8a9CKmJ',
                shape: {
                    type: 'Path',
                    data: 'M35,53.5H74'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 39,
                height: 1,
                offsetX: 54.5,
                offsetY: 54
            }, {
                id: 'SHAPE_4POSITIONSWITCH',
                'children': ['SHAPE_4POSITIONSWITCH24aQhj8', 'SHAPE_4POSITIONSWITCH3sJhogy', 'SHAPE_4POSITIONSWITCH4HXTRaE', 'SHAPE_4POSITIONSWITCH5JafWbs', 'SHAPE_4POSITIONSWITCH6g3svl6', 'SHAPE_4POSITIONSWITCH7yAxfou', 'SHAPE_4POSITIONSWITCH8a9CKmJ']
            }, {
                id: 'SHAPE_BREAKCONTACT2VLZQ9h',
                shape: {
                    type: 'Path',
                    data: 'M12,54.5H30l36.5-7m-5-2.5v9.5H87'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 9.5,
                offsetX: 49.5,
                offsetY: 49.75
            }, {
                id: 'SHAPE_BREAKCONTACT',
                'children': ['SHAPE_BREAKCONTACT2VLZQ9h']
            }, {
                id: 'SHAPE_CHANGEOVERCONTACT2ai9EmN',
                shape: {
                    type: 'Path',
                    data: 'M73,60.5H88m-75,0H31l38.5-16m18.5-4H62.5V51'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 20,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_CHANGEOVERCONTACT',
                'children': ['SHAPE_CHANGEOVERCONTACT2ai9EmN']
            }, {
                id: 'SHAPE_CIRCUITBREAKER2XhqKHk',
                shape: {
                    type: 'Path',
                    data: 'M0,53.5H30m40,0h30M28,50.4a29.39,29.39,0,0,1,44,0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 13.002254486083984,
                offsetX: 50,
                offsetY: 46.99887275695801
            }, {
                id: 'SHAPE_CIRCUITBREAKER',
                'children': ['SHAPE_CIRCUITBREAKER2XhqKHk']
            }, {
                id: 'SHAPE_DPDT2oP2fKS',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_DPDT39LdKRV',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 30.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_DPDT4UQNgqm',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69.5,
                offsetY: 60.5
            }, {
                id: 'SHAPE_DPDT5uTzNau',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 30.5,
                offsetY: 60.5
            }, {
                id: 'SHAPE_DPDT6QGZ1Bb',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 48.5,
                offsetY: 60.5
            }, {
                id: 'SHAPE_DPDT7Fz6yMW',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 48.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_DPDT8Xxlwdz',
                shape: {
                    type: 'Path',
                    data: 'M13,40.5H28m-15,20H28m45-20H88m-15,20H88m-36.83-1,19.66-7.06M51.17,39.53l19.66-7.06'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 28.03000259399414,
                offsetX: 50.5,
                offsetY: 46.48499870300293
            }, {
                id: 'SHAPE_DPDT9s79dhn',
                shape: {
                    type: 'Path',
                    data: 'M 59.5 , 37 L 59.5 , 42'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 1,
                height: 5,
                offsetX: 60,
                offsetY: 39.5
            }, {
                id: 'SHAPE_DPDT10ktRKfV',
                shape: {
                    type: 'Path',
                    data: 'M 59.5 , 51 L 59.5 , 57'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 6,
                offsetX: 60,
                offsetY: 54
            }, {
                id: 'SHAPE_DPDT11y5gNTk',
                shape: {
                    type: 'Path',
                    data: 'M 59.5 , 44 L 59.5 , 49'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 5,
                offsetX: 60,
                offsetY: 46.5
            }, {
                id: 'SHAPE_DPDT',
                'children': ['SHAPE_DPDT2oP2fKS', 'SHAPE_DPDT39LdKRV', 'SHAPE_DPDT4UQNgqm', 'SHAPE_DPDT5uTzNau', 'SHAPE_DPDT6QGZ1Bb', 'SHAPE_DPDT7Fz6yMW', 'SHAPE_DPDT8Xxlwdz', 'SHAPE_DPDT9s79dhn', 'SHAPE_DPDT10ktRKfV', 'SHAPE_DPDT11y5gNTk']
            }, {
                id: 'SHAPE_DPST2W8vb2t',
                shape: {
                    type: 'Path',
                    data: 'M14,40.5H90m-76,20H90'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 76,
                height: 20,
                offsetX: 52,
                offsetY: 50.5
            }, {
                id: 'SHAPE_DPST3kzCLTJ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 71.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_DPST4O2XCSx',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 32.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_DPST5ee7SsE',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 71.5,
                offsetY: 60.5
            }, {
                id: 'SHAPE_DPST6B4A5HR',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 32.5,
                offsetY: 60.5
            }, {
                id: 'SHAPE_DPST79lqwr0',
                shape: {
                    type: 'Path',
                    data: 'M51.5,41V61'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 1,
                height: 20,
                offsetX: 52,
                offsetY: 51
            }, {
                id: 'SHAPE_DPST',
                'children': ['SHAPE_DPST2W8vb2t', 'SHAPE_DPST3kzCLTJ', 'SHAPE_DPST4O2XCSx', 'SHAPE_DPST5ee7SsE', 'SHAPE_DPST6B4A5HR', 'SHAPE_DPST79lqwr0']
            }, {
                id: 'SHAPE_FLOWACTUATED2VF3aSA',
                shape: {
                    type: 'Path',
                    data: 'M12,43.5H27m45,0H87m-54.5,1,36,15'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 49.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_FLOWACTUATED3Z0lpPp',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 68.5,
                offsetY: 43.5
            }, {
                id: 'SHAPE_FLOWACTUATED4cErukS',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 29.5,
                offsetY: 43.5
            }, {
                id: 'SHAPE_FLOWACTUATED5yIZYsx',
                shape: {
                    type: 'Path',
                    data: 'M48.5,51V71.5h8l-8-11'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 8,
                height: 20.5,
                offsetX: 52.5,
                offsetY: 61.25
            }, {
                id: 'SHAPE_FLOWACTUATED',
                'children': ['SHAPE_FLOWACTUATED2VF3aSA', 'SHAPE_FLOWACTUATED3Z0lpPp', 'SHAPE_FLOWACTUATED4cErukS', 'SHAPE_FLOWACTUATED5yIZYsx']
            }, {
                id: 'SHAPE_FUSE2xLRXPx',
                shape: {
                    type: 'Path',
                    data: 'M39.5,53l3,6.5,16.2-6.7-3-6.4Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 19.200000762939453,
                height: 13.10000228881836,
                offsetX: 49.10000038146973,
                offsetY: 52.94999885559082
            }, {
                id: 'SHAPE_FUSE3oHd9S6',
                shape: {
                    type: 'Path',
                    data: 'M73.5,60h15m-75,0H32L70.5,44'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 51,
                offsetY: 52
            }, {
                id: 'SHAPE_FUSE',
                'children': ['SHAPE_FUSE2xLRXPx', 'SHAPE_FUSE3oHd9S6']
            }, {
                id: 'SHAPE_GASFLOWACTUATED2LJkVav',
                shape: {
                    type: 'Path',
                    data: 'M74,66.5H89m-75,0H32l38.5-16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 51.5,
                offsetY: 58.5
            }, {
                id: 'SHAPE_GASFLOWACTUATED3gxNVu3',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 12,
                offsetX: 50.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_GASFLOWACTUATED4ESapbg',
                shape: {
                    type: 'Path',
                    data: 'M53.5,45V37.5h-6v5H54'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.5,
                height: 7.5,
                offsetX: 50.75,
                offsetY: 41.25
            }, {
                id: 'SHAPE_GASFLOWACTUATED5P39GBY',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 2,
                height: 2,
                offsetX: 49.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_GASFLOWACTUATED6hAbZSI',
                shape: {
                    type: 'Path',
                    data: 'M50.5,59V47'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 1,
                height: 12,
                offsetX: 51,
                offsetY: 53
            }, {
                id: 'SHAPE_GASFLOWACTUATED',
                'children': ['SHAPE_GASFLOWACTUATED2LJkVav', 'SHAPE_GASFLOWACTUATED3gxNVu3', 'SHAPE_GASFLOWACTUATED4ESapbg', 'SHAPE_GASFLOWACTUATED5P39GBY', 'SHAPE_GASFLOWACTUATED6hAbZSI']
            }, {
                id: 'SHAPE_INERTIASWITCH2EcEms3',
                shape: {
                    type: 'Path',
                    data: 'M13,56.5H28m45,0H88m-54.5-1,36-15M45,45.5h4.5V49'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_INERTIASWITCH38twQ0A',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69.5,
                offsetY: 56.5
            }, {
                id: 'SHAPE_INERTIASWITCH4g9rNJL',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 30.5,
                offsetY: 56.5
            }, {
                id: 'SHAPE_INERTIASWITCH5CKuOjs',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 41.5,
                offsetY: 45.5
            }, {
                id: 'SHAPE_INERTIASWITCH',
                'children': ['SHAPE_INERTIASWITCH2EcEms3', 'SHAPE_INERTIASWITCH38twQ0A', 'SHAPE_INERTIASWITCH4g9rNJL', 'SHAPE_INERTIASWITCH5CKuOjs']
            }, {
                id: 'SHAPE_ISOLATOR2juffpV',
                shape: {
                    type: 'Path',
                    data: 'M73,56.5H88m-75,0H31.5L70,40.5M73.5,52v9'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 20.5,
                offsetX: 50.5,
                offsetY: 50.75
            }, {
                id: 'SHAPE_ISOLATOR',
                'children': ['SHAPE_ISOLATOR2juffpV']
            }, {
                id: 'SHAPE_LIMITSWITCHNC2pSPR8M',
                shape: {
                    type: 'Path',
                    data: 'M15,51.5H30m45,0H90m-18-4-39,4,28,9L69,48'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 13,
                offsetX: 52.5,
                offsetY: 54
            }, {
                id: 'SHAPE_LIMITSWITCHNC3yc6STI',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 72,
                offsetY: 51.5
            }, {
                id: 'SHAPE_LIMITSWITCHNC4jd0YbC',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 33,
                offsetY: 51.5
            }, {
                id: 'SHAPE_LIMITSWITCHNC',
                'children': ['SHAPE_LIMITSWITCHNC2pSPR8M', 'SHAPE_LIMITSWITCHNC3yc6STI', 'SHAPE_LIMITSWITCHNC4jd0YbC']
            }, {
                id: 'SHAPE_LIMITSWITCHNO2lLZdUc',
                shape: {
                    type: 'Path',
                    data: 'M13,50.5H28m45,0H88M67.2,65.22,31,50.5l20.5,21,13-7.11'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 21,
                offsetX: 50.5,
                offsetY: 61
            }, {
                id: 'SHAPE_LIMITSWITCHNO3zTGoMi',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 5.920000076293945,
                offsetX: 70.5,
                offsetY: 50.54000186920166
            }, {
                id: 'SHAPE_LIMITSWITCHNO4kDQwmx',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 5.920000076293945,
                offsetX: 31.5,
                offsetY: 50.54000186920166
            }, {
                id: 'SHAPE_LIMITSWITCHNO',
                'children': ['SHAPE_LIMITSWITCHNO2lLZdUc', 'SHAPE_LIMITSWITCHNO3zTGoMi', 'SHAPE_LIMITSWITCHNO4kDQwmx']
            }, {
                id: 'SHAPE_LIMITSWITCH2OMDUpi',
                shape: {
                    type: 'Path',
                    data: 'M73,57.5H88M55.54,47.68,53.5,43l-6.11,7.72M13,57.5H31l38.5-16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_LIMITSWITCH',
                'children': ['SHAPE_LIMITSWITCH2OMDUpi']
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED24mJM69',
                shape: {
                    type: 'Path',
                    data: 'M74,65.5H89m-75,0H32l38.5-16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 51.5,
                offsetY: 57.5
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED347oR8N',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 12,
                offsetX: 50.5,
                offsetY: 39.5
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED42joxsu',
                shape: {
                    type: 'Path',
                    data: 'M47.5,41.5a4,4,0,0,1,6,0,4,4,0,0,1-6,0Zm3-4.5v3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6,
                height: 5.854248046875,
                offsetX: 50.5,
                offsetY: 39.9271240234375
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED5Wu4U9W',
                shape: {
                    type: 'Path',
                    data: 'M50.5,58V46'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 1,
                height: 12,
                offsetX: 51,
                offsetY: 52
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED',
                'children': ['SHAPE_LIQUIDLEVELACTUATED24mJM69', 'SHAPE_LIQUIDLEVELACTUATED347oR8N', 'SHAPE_LIQUIDLEVELACTUATED42joxsu', 'SHAPE_LIQUIDLEVELACTUATED5Wu4U9W']
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED1240go37',
                shape: {
                    type: 'Path',
                    data: 'M14,42.5H29m45,0H89m-54.5-1,36-3M50.5,41V59'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 75,
                height: 20.5,
                offsetX: 51.5,
                offsetY: 48.75
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED13Iba4Wu',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 42.5
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED14mlGAsF',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 42.5
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED15RhYMhV',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 50.5,
                offsetY: 62.5
            }, {
                id: 'SHAPE_LIQUIDLEVELACTUATED1',
                'children': ['SHAPE_LIQUIDLEVELACTUATED1240go37', 'SHAPE_LIQUIDLEVELACTUATED13Iba4Wu', 'SHAPE_LIQUIDLEVELACTUATED14mlGAsF', 'SHAPE_LIQUIDLEVELACTUATED15RhYMhV']
            }, {
                id: 'SHAPE_MAKECONTACT2HRej5h',
                shape: {
                    type: 'Path',
                    data: 'M73,57.5H88m-75,0H31.5L70,41.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MAKECONTACT',
                'children': ['SHAPE_MAKECONTACT2HRej5h']
            }, {
                id: 'SHAPE_MANUALSWITCH2SI1M0v',
                shape: {
                    type: 'Path',
                    data: 'M74,58.5H89m-43-18H57m-43,18H32.5L71,42.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 18,
                offsetX: 51.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MANUALSWITCH3EbO9Dr',
                shape: {
                    type: 'Path',
                    data: 'M51.5,51V41'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    'strokeDashArray': '5'
                },
                width: 1,
                height: 10,
                offsetX: 52,
                offsetY: 46
            }, {
                id: 'SHAPE_MANUALSWITCH',
                'children': ['SHAPE_MANUALSWITCH2SI1M0v', 'SHAPE_MANUALSWITCH3EbO9Dr']
            }, {
                id: 'SHAPE_MERCURYSWITCH2QjncFO',
                shape: {
                    type: 'Path',
                    data: 'M51.5,9.5v80m-17-32a8,8,0,0,1,0-16h34a8,8,0,0,1,0,16Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 50,
                height: 80,
                offsetX: 51.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_MERCURYSWITCH3ZYVWfQ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 15.5,
                offsetY: 13.5
            }, {
                id: 'SHAPE_MERCURYSWITCH4XHdBeG',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 87.5,
                offsetY: 13.5
            }, {
                id: 'SHAPE_MERCURYSWITCH5lk6FfK',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 87.5,
                offsetY: 85.5
            }, {
                id: 'SHAPE_MERCURYSWITCH6y3Q9SD',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 8,
                height: 8,
                offsetX: 15.5,
                offsetY: 85.5
            }, {
                id: 'SHAPE_MERCURYSWITCH',
                'children': ['SHAPE_MERCURYSWITCH2QjncFO', 'SHAPE_MERCURYSWITCH3ZYVWfQ', 'SHAPE_MERCURYSWITCH4XHdBeG', 'SHAPE_MERCURYSWITCH5lk6FfK', 'SHAPE_MERCURYSWITCH6y3Q9SD']
            }, {
                id: 'SHAPE_MERCURYSWITCH12vaiLh7',
                shape: {
                    type: 'Path',
                    data: 'M50.5,10V90M32.66,57.5a8.51,8.51,0,0,1,0-17H67.34a8.51,8.51,0,0,1,0,17ZM30.5,5V24m40-19V24m0,52V95m-40-19V95'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 50.875099182128906,
                height: 90,
                offsetX: 49.999996185302734,
                offsetY: 50
            }, {
                id: 'SHAPE_MERCURYSWITCH1',
                'children': ['SHAPE_MERCURYSWITCH12vaiLh7']
            }, {
                id: 'SHAPE_PASSINGMAKECONTACT2jaDKAD',
                shape: {
                    type: 'Path',
                    data: 'M13,52.5H31.5L70,36.5m18,16H71l12,7'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 23,
                offsetX: 50.5,
                offsetY: 48
            }, {
                id: 'SHAPE_PASSINGMAKECONTACT',
                'children': ['SHAPE_PASSINGMAKECONTACT2jaDKAD']
            }, {
                id: 'SHAPE_PILOTLIGHT2ABzgqq',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 50,
                height: 50,
                offsetX: 51,
                offsetY: 49.5
            }, {
                id: 'SHAPE_PILOTLIGHT3K13J14',
                shape: {
                    type: 'Path',
                    data: 'M33.2,31.7,68.8,67.3m0-35.6L33.2,67.3M21,49.5h5m50,0h5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 35.60000228881836,
                offsetX: 51,
                offsetY: 49.50000190734863
            }, {
                id: 'SHAPE_PILOTLIGHT',
                'children': ['SHAPE_PILOTLIGHT2ABzgqq', 'SHAPE_PILOTLIGHT3K13J14']
            }, {
                id: 'SHAPE_PRESSUREACTUATED2jiyNof',
                shape: {
                    type: 'Path',
                    data: 'M14,42.5H29m45,0H89m-54.5,1,36,15M50.5,50V63'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 20.5,
                offsetX: 51.5,
                offsetY: 52.75
            }, {
                id: 'SHAPE_PRESSUREACTUATED3hyTiul',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 42.5
            }, {
                id: 'SHAPE_PRESSUREACTUATED4PTcnA0',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 42.5
            }, {
                id: 'SHAPE_PRESSUREACTUATED5DgRel0',
                shape: {
                    type: 'Path',
                    data: 'M42.5,70.5a8,8,0,0,1,16,0Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16,
                height: 8,
                offsetX: 50.5,
                offsetY: 66.5
            }, {
                id: 'SHAPE_PRESSUREACTUATED',
                'children': ['SHAPE_PRESSUREACTUATED2jiyNof', 'SHAPE_PRESSUREACTUATED3hyTiul', 'SHAPE_PRESSUREACTUATED4PTcnA0', 'SHAPE_PRESSUREACTUATED5DgRel0']
            }, {
                id: 'SHAPE_PROXIMITYLIMITSWITCH2rTTRbN',
                shape: {
                    type: 'Path',
                    data: 'M13,50.5H28m45,0H88m-18-4-39,4,28,9L67,47M22.71,50.5,50.5,22.71,78.29,50.5,50.5,78.29Z'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 55.58000183105469,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_PROXIMITYLIMITSWITCH39N17gi',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70,
                offsetY: 50.5
            }, {
                id: 'SHAPE_PROXIMITYLIMITSWITCH4he73AI',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31,
                offsetY: 50.5
            }, {
                id: 'SHAPE_PROXIMITYLIMITSWITCH',
                'children': ['SHAPE_PROXIMITYLIMITSWITCH2rTTRbN', 'SHAPE_PROXIMITYLIMITSWITCH39N17gi', 'SHAPE_PROXIMITYLIMITSWITCH4he73AI']
            }, {
                id: 'SHAPE_PUSHBUTTON2-CIRCUIT2MPRZyP',
                shape: {
                    type: 'Path',
                    data: 'M13,62.5H28m45,0H88m-57,4H71M50.5,13V67M73,82.5H88m-75,0H28'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 69.5,
                offsetX: 50.5,
                offsetY: 47.75
            }, {
                id: 'SHAPE_PUSHBUTTON2-CIRCUIT3AEqf8Y',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 62.5
            }, {
                id: 'SHAPE_PUSHBUTTON2-CIRCUIT49Ixoix',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 62.5
            }, {
                id: 'SHAPE_PUSHBUTTON2-CIRCUIT5WC4JoX',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 82.5
            }, {
                id: 'SHAPE_PUSHBUTTON2-CIRCUIT6Oggna7',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 82.5
            }, {
                id: 'SHAPE_PUSHBUTTON2-CIRCUIT',
                'children': ['SHAPE_PUSHBUTTON2-CIRCUIT2MPRZyP', 'SHAPE_PUSHBUTTON2-CIRCUIT3AEqf8Y', 'SHAPE_PUSHBUTTON2-CIRCUIT49Ixoix', 'SHAPE_PUSHBUTTON2-CIRCUIT5WC4JoX', 'SHAPE_PUSHBUTTON2-CIRCUIT6Oggna7']
            }, {
                id: 'SHAPE_PUSHBUTTONBREAK24lT9GM',
                shape: {
                    type: 'Path',
                    data: 'M13,68.5H29m45,0H89m-58,4H71M50.5,19V73'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 76,
                height: 54,
                offsetX: 51,
                offsetY: 46
            }, {
                id: 'SHAPE_PUSHBUTTONBREAK3smf7hG',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 68.5
            }, {
                id: 'SHAPE_PUSHBUTTONBREAK4UIEATa',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 68.5
            }, {
                id: 'SHAPE_PUSHBUTTONBREAK',
                'children': ['SHAPE_PUSHBUTTONBREAK24lT9GM', 'SHAPE_PUSHBUTTONBREAK3smf7hG', 'SHAPE_PUSHBUTTONBREAK4UIEATa']
            }, {
                id: 'SHAPE_PUSHBUTTONMAKE2jAa0nk',
                shape: {
                    type: 'Path',
                    data: 'M16,70.5H32m45,0H92m-57-8H74M54.5,21V63'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 76,
                height: 49.5,
                offsetX: 54,
                offsetY: 45.75
            }, {
                id: 'SHAPE_PUSHBUTTONMAKE3JnTfJv',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 73.5,
                offsetY: 70.5
            }, {
                id: 'SHAPE_PUSHBUTTONMAKE4GnRNNk',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 34.5,
                offsetY: 70.5
            }, {
                id: 'SHAPE_PUSHBUTTONMAKE',
                'children': ['SHAPE_PUSHBUTTONMAKE2jAa0nk', 'SHAPE_PUSHBUTTONMAKE3JnTfJv', 'SHAPE_PUSHBUTTONMAKE4GnRNNk']
            }, {
                id: 'SHAPE_PUSHBUTTONNC25jCa5M',
                shape: {
                    type: 'Path',
                    data: 'M13,53.5H30m40,0H87m-57,4H71M49.5,48V58M47,47.5h5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 74,
                height: 10.5,
                offsetX: 50,
                offsetY: 52.75
            }, {
                id: 'SHAPE_PUSHBUTTONNC3Pog2tG',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 68.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_PUSHBUTTONNC4oBCTyB',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 32.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_PUSHBUTTONNC',
                'children': ['SHAPE_PUSHBUTTONNC25jCa5M', 'SHAPE_PUSHBUTTONNC3Pog2tG', 'SHAPE_PUSHBUTTONNC4oBCTyB']
            }, {
                id: 'SHAPE_PUSHBUTTONNO2X0hXpt',
                shape: {
                    type: 'Path',
                    data: 'M12,57.5H29m41,0H87m-57-6H71M49.5,42V52M47,41.5h5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_PUSHBUTTONNO3vwS303',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 68.5,
                offsetY: 57.5
            }, {
                id: 'SHAPE_PUSHBUTTONNO4CvKJzV',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 57.5
            }, {
                id: 'SHAPE_PUSHBUTTONNO',
                'children': ['SHAPE_PUSHBUTTONNO2X0hXpt', 'SHAPE_PUSHBUTTONNO3vwS303', 'SHAPE_PUSHBUTTONNO4CvKJzV']
            }, {
                id: 'SHAPE_REEDSWITCH2ZEqlnd',
                shape: {
                    type: 'Path',
                    data: 'M37,39.5H65a10,10,0,0,1,10,10h0a10,10,0,0,1-10,10H37a10,10,0,0,1-10-10h0A10,10,0,0,1,37,39.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 48,
                height: 20.000003814697266,
                offsetX: 51,
                offsetY: 49.50000190734863
            }, {
                id: 'SHAPE_REEDSWITCH3nX5ru9',
                shape: {
                    type: 'Path',
                    data: 'M63,49.5H89m-75,0H39.5l23-5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 5,
                offsetX: 51.5,
                offsetY: 47
            }, {
                id: 'SHAPE_REEDSWITCH',
                'children': ['SHAPE_REEDSWITCH2ZEqlnd', 'SHAPE_REEDSWITCH3nX5ru9']
            }, {
                id: 'SHAPE_RELAYCOIL-382u2zOZq',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 70,
                height: 21,
                offsetX: 51.5,
                offsetY: 52
            }, {
                id: 'SHAPE_RELAYCOIL-3831t8Isb',
                shape: {
                    type: 'Path',
                    data: 'M51.5,34v7m0,22v7'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 36,
                offsetX: 52,
                offsetY: 52
            }, {
                id: 'SHAPE_RELAYCOIL-38',
                'children': ['SHAPE_RELAYCOIL-382u2zOZq', 'SHAPE_RELAYCOIL-3831t8Isb']
            }, {
                id: 'SHAPE_RELAYCOIL-432oL0vnQ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 70,
                height: 70,
                offsetX: 50,
                offsetY: 49.5
            }, {
                id: 'SHAPE_RELAYCOIL-4335jhb6w',
                shape: {
                    type: 'Path',
                    data: 'M0,49.5H15m70,0h15'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_RELAYCOIL-43',
                'children': ['SHAPE_RELAYCOIL-432oL0vnQ', 'SHAPE_RELAYCOIL-4335jhb6w']
            }, {
                id: 'SHAPE_RELAYCONTACTS2kiKXmk',
                shape: {
                    type: 'Path',
                    data: 'M45.5,36V61m10-25V61M56,48.5H66m-20,0H35'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31,
                height: 25,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_RELAYCONTACTS',
                'children': ['SHAPE_RELAYCONTACTS2kiKXmk']
            }, {
                id: 'SHAPE_RELAY2Zw6swS',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 30,
                offsetX: 50,
                offsetY: 51.5
            }, {
                id: 'SHAPE_RELAY33UcGiY',
                shape: {
                    type: 'Path',
                    data: 'M50.5,26V37m0,30V77m-25-40V67M5.56,48.5c.93-2.67,2.45-4,3.94-3.32s2.7,3.07,3.13,6.32,1.63,5.69,3.12,6.32,3-.65,3.95-3.32'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44.939998626708984,
                height: 51,
                offsetX: 28.029999256134033,
                offsetY: 51.5
            }, {
                id: 'SHAPE_RELAY',
                'children': ['SHAPE_RELAY2Zw6swS', 'SHAPE_RELAY33UcGiY']
            }, {
                id: 'SHAPE_RESONATOR26TP4K3',
                shape: {
                    type: 'Path',
                    data: 'M49.5,25V35M0,54.5H39m22,0h39M38.5,35V75m22-40V75'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 50,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_RESONATOR39RLwBP',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 14,
                height: 40,
                offsetX: 49.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_RESONATOR',
                'children': ['SHAPE_RESONATOR26TP4K3', 'SHAPE_RESONATOR39RLwBP']
            }, {
                id: 'SHAPE_SAFETYINTERLOCK2xat2XZ',
                shape: {
                    type: 'Path',
                    data: 'M11,53.5H26m45,0H86'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 1,
                offsetX: 48.5,
                offsetY: 54
            }, {
                id: 'SHAPE_SAFETYINTERLOCK3ioknqK',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 67.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SAFETYINTERLOCK4DkeyoP',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 28.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SAFETYINTERLOCK57M32SP',
                shape: {
                    type: 'Path',
                    data: 'M29.5,38.5h37L48,75.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 37,
                height: 37,
                offsetX: 48,
                offsetY: 57
            }, {
                id: 'SHAPE_SAFETYINTERLOCK',
                'children': ['SHAPE_SAFETYINTERLOCK2xat2XZ', 'SHAPE_SAFETYINTERLOCK3ioknqK', 'SHAPE_SAFETYINTERLOCK4DkeyoP', 'SHAPE_SAFETYINTERLOCK57M32SP']
            }, {
                id: 'SHAPE_SELECTORSWITCH26p0DDz',
                shape: {
                    type: 'Path',
                    data: 'M12,49.5H27m45,10H87m-15-20H87m-24-20H87m-24,60H87m-57-30,29-29'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 60,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_SELECTORSWITCH3KnNgby',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69,
                offsetY: 59.5
            }, {
                id: 'SHAPE_SELECTORSWITCH4YnoDmt',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69,
                offsetY: 39.5
            }, {
                id: 'SHAPE_SELECTORSWITCH5mxnwF6',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 60,
                offsetY: 19.5
            }, {
                id: 'SHAPE_SELECTORSWITCH6XkAtYu',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 60,
                offsetY: 79.5
            }, {
                id: 'SHAPE_SELECTORSWITCH7pLjU5X',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 30,
                offsetY: 49.5
            }, {
                id: 'SHAPE_SELECTORSWITCH89YGZ91',
                shape: {
                    type: 'Path',
                    data: 'M52.67,22.83,59,20.5l-2,6Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 6.3300018310546875,
                height: 6,
                offsetX: 55.834999084472656,
                offsetY: 23.5
            }, {
                id: 'SHAPE_SELECTORSWITCH',
                'children': ['SHAPE_SELECTORSWITCH26p0DDz', 'SHAPE_SELECTORSWITCH3KnNgby', 'SHAPE_SELECTORSWITCH4YnoDmt', 'SHAPE_SELECTORSWITCH5mxnwF6', 'SHAPE_SELECTORSWITCH6XkAtYu', 'SHAPE_SELECTORSWITCH7pLjU5X', 'SHAPE_SELECTORSWITCH89YGZ91']
            }, {
                id: 'SHAPE_SHORTINGSELECTOR2BttuHr',
                shape: {
                    type: 'Path',
                    data: 'M17,49.5H32m3,0,25-25'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 43,
                height: 25,
                offsetX: 38.5,
                offsetY: 37
            }, {
                id: 'SHAPE_SHORTINGSELECTOR3BUT9RK',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 74.5,
                offsetY: 59.5
            }, {
                id: 'SHAPE_SHORTINGSELECTOR4n5kQ28',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 74.5,
                offsetY: 39.5
            }, {
                id: 'SHAPE_SHORTINGSELECTOR5iZ1pKZ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 65.5,
                offsetY: 19.5
            }, {
                id: 'SHAPE_SHORTINGSELECTOR6hEBUqw',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 65.5,
                offsetY: 79.5
            }, {
                id: 'SHAPE_SHORTINGSELECTOR7YNU5YS',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 35.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_SHORTINGSELECTOR8qN9wGz',
                shape: {
                    type: 'Path',
                    data: 'M54.5,22.5v-3a12,12,0,0,1,12,9l-3,1A9,9,0,0,0,54.5,22.5Z'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 10.006002426147461,
                offsetX: 60.5,
                offsetY: 24.49699878692627
            }, {
                id: 'SHAPE_SHORTINGSELECTOR',
                'children': ['SHAPE_SHORTINGSELECTOR2BttuHr', 'SHAPE_SHORTINGSELECTOR3BUT9RK', 'SHAPE_SHORTINGSELECTOR4n5kQ28', 'SHAPE_SHORTINGSELECTOR5iZ1pKZ', 'SHAPE_SHORTINGSELECTOR6hEBUqw', 'SHAPE_SHORTINGSELECTOR7YNU5YS', 'SHAPE_SHORTINGSELECTOR8qN9wGz']
            }, {
                id: 'SHAPE_SPDT2uNyO94',
                shape: {
                    type: 'Path',
                    data: 'M12.5,58.5h15m45,0h15m-54-1,36-15m3-4h15'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 75,
                height: 20,
                offsetX: 50,
                offsetY: 48.5
            }, {
                id: 'SHAPE_SPDT39imhJX',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69.5,
                offsetY: 58.5
            }, {
                id: 'SHAPE_SPDT4IOqZIw',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 30.5,
                offsetY: 58.5
            }, {
                id: 'SHAPE_SPDT5E0Bmlc',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69.5,
                offsetY: 38.5
            }, {
                id: 'SHAPE_SPDT',
                'children': ['SHAPE_SPDT2uNyO94', 'SHAPE_SPDT39imhJX', 'SHAPE_SPDT4IOqZIw', 'SHAPE_SPDT5E0Bmlc']
            }, {
                id: 'SHAPE_SPRINGRETURN2SovY7W',
                shape: {
                    type: 'Path',
                    data: 'M13,49.5H31.5L70,59.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 57,
                height: 10,
                offsetX: 41.5,
                offsetY: 54.5
            }, {
                id: 'SHAPE_SPRINGRETURN3TwARQW',
                shape: {
                    type: 'Path',
                    data: 'M88,49.5H60l5,8,5-8'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 28,
                height: 8,
                offsetX: 74,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SPRINGRETURN',
                'children': ['SHAPE_SPRINGRETURN2SovY7W', 'SHAPE_SPRINGRETURN3TwARQW']
            }, {
                id: 'SHAPE_SPRINGRETURN12TfCoRw',
                shape: {
                    type: 'Path',
                    data: 'M89,55.5H61l5-8,5,8'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 28,
                height: 8,
                offsetX: 75,
                offsetY: 51.5
            }, {
                id: 'SHAPE_SPRINGRETURN13KhbWnT',
                shape: {
                    type: 'Path',
                    data: 'M14,55.5H32.5L71,39.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 57,
                height: 16,
                offsetX: 42.5,
                offsetY: 47.5
            }, {
                id: 'SHAPE_SPRINGRETURN14ABukTG',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 33,
                offsetY: 55.5
            }, {
                id: 'SHAPE_SPRINGRETURN1',
                'children': ['SHAPE_SPRINGRETURN12TfCoRw', 'SHAPE_SPRINGRETURN13KhbWnT', 'SHAPE_SPRINGRETURN14ABukTG']
            }, {
                id: 'SHAPE_SPST2rAIQxD',
                shape: {
                    type: 'Path',
                    data: 'M13,54.5H28m45,0H88m-54-1,36-15'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 16,
                offsetX: 50.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_SPST3JqqEWa',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70,
                offsetY: 54.5
            }, {
                id: 'SHAPE_SPST4rlELJC',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31,
                offsetY: 54.5
            }, {
                id: 'SHAPE_SPST',
                'children': ['SHAPE_SPST2rAIQxD', 'SHAPE_SPST3JqqEWa', 'SHAPE_SPST4rlELJC']
            }, {
                id: 'SHAPE_STAYPUT2NxZ3di',
                shape: {
                    type: 'Path',
                    data: 'M13,50.5H28m45,0H88m-54,1,36,3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 4,
                offsetX: 50.5,
                offsetY: 52.5
            }, {
                id: 'SHAPE_STAYPUT35uUCv1',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 51
            }, {
                id: 'SHAPE_STAYPUT4UPc79k',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 51
            }, {
                id: 'SHAPE_STAYPUT',
                'children': ['SHAPE_STAYPUT2NxZ3di', 'SHAPE_STAYPUT35uUCv1', 'SHAPE_STAYPUT4UPc79k']
            }, {
                id: 'SHAPE_SWITCHDISCONNECTOR2tnlWdA',
                shape: {
                    type: 'Path',
                    data: 'M72,53.5H87M71.5,50v7M12,53.5H30l38.5-16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 19.5,
                offsetX: 49.5,
                offsetY: 47.25
            }, {
                id: 'SHAPE_SWITCHDISCONNECTOR3Rmn26m',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 68.5,
                offsetY: 53.5
            }, {
                id: 'SHAPE_SWITCHDISCONNECTOR',
                'children': ['SHAPE_SWITCHDISCONNECTOR2tnlWdA', 'SHAPE_SWITCHDISCONNECTOR3Rmn26m']
            }, {
                id: 'SHAPE_TEMPERATUREACTUATED2GrgGFY',
                shape: {
                    type: 'Path',
                    data: 'M12,39.5H28m45,0H88m-54.5,1,36,15M49.5,68V61.5h5v-5h-5V47'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 76,
                height: 28.5,
                offsetX: 50,
                offsetY: 53.75
            }, {
                id: 'SHAPE_TEMPERATUREACTUATED3zqhsxr',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 69.5,
                offsetY: 39.5
            }, {
                id: 'SHAPE_TEMPERATUREACTUATED4T2MbFT',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 30.5,
                offsetY: 39.5
            }, {
                id: 'SHAPE_TEMPERATUREACTUATED',
                'children': ['SHAPE_TEMPERATUREACTUATED2GrgGFY', 'SHAPE_TEMPERATUREACTUATED3zqhsxr', 'SHAPE_TEMPERATUREACTUATED4T2MbFT']
            }, {
                id: 'SHAPE_TEMPERATURESWITCH2eCc2Ph',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 8,
                height: 4,
                offsetX: 45.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_TEMPERATURESWITCH3Jj26cc',
                shape: {
                    type: 'Path',
                    data: 'M70,56.5H85M45.5,38v4M10,56.5H28l38.5-16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 18.5,
                offsetX: 47.5,
                offsetY: 47.25
            }, {
                id: 'SHAPE_TEMPERATURESWITCH',
                'children': ['SHAPE_TEMPERATURESWITCH2eCc2Ph', 'SHAPE_TEMPERATURESWITCH3Jj26cc']
            }, {
                id: 'SHAPE_THERMOSTAT2B4Iulf',
                shape: {
                    type: 'Path',
                    data: 'M14,57.5H29m45,0H89M34.5,56l36-3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 4.5,
                offsetX: 51.5,
                offsetY: 55.25
            }, {
                id: 'SHAPE_THERMOSTAT3q8gI5r',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 57.5
            }, {
                id: 'SHAPE_THERMOSTAT4DRB1eS',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 57.5
            }, {
                id: 'SHAPE_THERMOSTAT',
                'children': ['SHAPE_THERMOSTAT2B4Iulf', 'SHAPE_THERMOSTAT3q8gI5r', 'SHAPE_THERMOSTAT4DRB1eS']
            }, {
                id: 'SHAPE_TIMEDELAYBREAK-3224ozv0f',
                shape: {
                    type: 'Path',
                    data: 'M15,44.5H30m45,0H90m-54.5-1,36-3m-25,32,5-6,5,6m-5-5.5V42'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 32,
                offsetX: 52.5,
                offsetY: 56.5
            }, {
                id: 'SHAPE_TIMEDELAYBREAK-323oeXeJj',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 71.5,
                offsetY: 44.5
            }, {
                id: 'SHAPE_TIMEDELAYBREAK-32436yfZF',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 32.5,
                offsetY: 44.5
            }, {
                id: 'SHAPE_TIMEDELAYBREAK-32',
                'children': ['SHAPE_TIMEDELAYBREAK-3224ozv0f', 'SHAPE_TIMEDELAYBREAK-323oeXeJj', 'SHAPE_TIMEDELAYBREAK-32436yfZF']
            }, {
                id: 'SHAPE_TIMEDELAYBREAK-3420oX8JS',
                shape: {
                    type: 'Path',
                    data: 'M42.5,69.5a8,8,0,0,1,15,0m-5-4.5V46m-5,19V47M13,49.5H31l36.5-7m-5-2.5v9.5H88'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 29.5,
                offsetX: 50.5,
                offsetY: 54.75
            }, {
                id: 'SHAPE_TIMEDELAYBREAK-34',
                'children': ['SHAPE_TIMEDELAYBREAK-3420oX8JS']
            }, {
                id: 'SHAPE_TIMEDELAYMAKE2fZb5MF',
                shape: {
                    type: 'Path',
                    data: 'M13,40.5H28m45,0H89m-55,1,36,15m-25,12,5-6,5,6M50.5,63V48'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 76,
                height: 28,
                offsetX: 51,
                offsetY: 54.5
            }, {
                id: 'SHAPE_TIMEDELAYMAKE3vYwphk',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 70.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_TIMEDELAYMAKE40K6umL',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31.5,
                offsetY: 40.5
            }, {
                id: 'SHAPE_TIMEDELAYMAKE',
                'children': ['SHAPE_TIMEDELAYMAKE2fZb5MF', 'SHAPE_TIMEDELAYMAKE3vYwphk', 'SHAPE_TIMEDELAYMAKE40K6umL']
            }, {
                id: 'SHAPE_TIMEDELAYMAKE12K9PSaQ',
                shape: {
                    type: 'Path',
                    data: 'M73,47.5H88m-75,0H31l38.5-16m-27,36a8,8,0,0,1,15,0m-5-4.5V39m-5,24V41'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 36,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_TIMEDELAYMAKE1',
                'children': ['SHAPE_TIMEDELAYMAKE12K9PSaQ']
            }, {
                id: 'SHAPE_TWOWAYCONTACT2HSRBCY',
                shape: {
                    type: 'Path',
                    data: 'M62,35.5H87m-25,30H87m-75-15H62'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 75,
                height: 30,
                offsetX: 49.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TWOWAYCONTACT3dGUonw',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6,
                height: 6,
                offsetX: 31,
                offsetY: 50.5
            }, {
                id: 'SHAPE_TWOWAYCONTACT',
                'children': ['SHAPE_TWOWAYCONTACT2HSRBCY', 'SHAPE_TWOWAYCONTACT3dGUonw']
            }];
        for (let i = 0; i < switchesShapes.length; i++) {
            if(!switchesShapes[i].children) {
                switchesShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            switchesShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return switchesShapes;
    }

    private getElectricalTransmissionShapes(): NodeModel[] {
        let transmissionShapes: NodeModel[] = [
            {
                id: 'SHAPE_2LINESBUSELBOW2UISPFS',
                shape: {
                    type: 'Path',
                    data: 'M0,99.5H99.5V0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99.5,
                height: 99.5,
                offsetX: 49.75,
                offsetY: 49.75
            }, {
                id: 'SHAPE_2LINESBUSELBOW3ja4hmc',
                shape: {
                    type: 'Path',
                    data: 'M0,79.5H79.5V0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 79.5,
                height: 79.5,
                offsetX: 39.75,
                offsetY: 39.75
            }, {
                id: 'SHAPE_2LINESBUSELBOW',
                'children': ['SHAPE_2LINESBUSELBOW2UISPFS', 'SHAPE_2LINESBUSELBOW3ja4hmc']
            }, {
                id: 'SHAPE_2LINESBUS2Q3qHyF',
                shape: {
                    type: 'Path',
                    data: 'M0,41.5H100M0,56.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 15,
                offsetX: 50,
                offsetY: 49
            }, {
                id: 'SHAPE_2LINESBUS',
                'children': ['SHAPE_2LINESBUS2Q3qHyF']
            }, {
                id: 'SHAPE_3LINESBUSELBOW2xUo2yk',
                shape: {
                    type: 'Path',
                    data: 'M0,99.5H99.5V0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99.5,
                height: 99.5,
                offsetX: 49.75,
                offsetY: 49.75
            }, {
                id: 'SHAPE_3LINESBUSELBOW3VikwMH',
                shape: {
                    type: 'Path',
                    data: 'M0,89.5H89.5V0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 89.5,
                height: 89.5,
                offsetX: 44.75,
                offsetY: 44.75
            }, {
                id: 'SHAPE_3LINESBUSELBOW4jJoqMS',
                shape: {
                    type: 'Path',
                    data: 'M0,79.5H79.5V0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 79.5,
                height: 79.5,
                offsetX: 39.75,
                offsetY: 39.75
            }, {
                id: 'SHAPE_3LINESBUSELBOW',
                'children': ['SHAPE_3LINESBUSELBOW2xUo2yk', 'SHAPE_3LINESBUSELBOW3VikwMH', 'SHAPE_3LINESBUSELBOW4jJoqMS']
            }, {
                id: 'SHAPE_3LINESBUS2qU51qs',
                shape: {
                    type: 'Path',
                    data: 'M0,41.5H100M0,48.5H100M0,55.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 14,
                offsetX: 50,
                offsetY: 48.5
            }, {
                id: 'SHAPE_3LINESBUS',
                'children': ['SHAPE_3LINESBUS2qU51qs']
            }, {
                id: 'SHAPE_4LINESBUSELBOW2v20uOn',
                shape: {
                    type: 'Path',
                    data: 'M3,95.5H95.5V3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 92.5,
                height: 92.5,
                offsetX: 49.25,
                offsetY: 49.25
            }, {
                id: 'SHAPE_4LINESBUSELBOW3h1sYuQ',
                shape: {
                    type: 'Path',
                    data: 'M3,79.5H79.5V3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 76.5,
                height: 76.5,
                offsetX: 41.25,
                offsetY: 41.25
            }, {
                id: 'SHAPE_4LINESBUSELBOW4IrnuTJ',
                shape: {
                    type: 'Path',
                    data: 'M3,63.5H63.5V3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60.5,
                height: 60.5,
                offsetX: 33.25,
                offsetY: 33.25
            }, {
                id: 'SHAPE_4LINESBUSELBOW5W6rwEU',
                shape: {
                    type: 'Path',
                    data: 'M3,47.5H47.5V3'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 44.5,
                height: 44.5,
                offsetX: 25.25,
                offsetY: 25.25
            }, {
                id: 'SHAPE_4LINESBUSELBOW',
                'children': ['SHAPE_4LINESBUSELBOW2v20uOn', 'SHAPE_4LINESBUSELBOW3h1sYuQ', 'SHAPE_4LINESBUSELBOW4IrnuTJ', 'SHAPE_4LINESBUSELBOW5W6rwEU']
            }, {
                id: 'SHAPE_4LINESBUS20xkULJ',
                shape: {
                    type: 'Path',
                    data: 'M0,27.5H100M0,42.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 15,
                offsetX: 50,
                offsetY: 35
            }, {
                id: 'SHAPE_4LINESBUS3hyU44Z',
                shape: {
                    type: 'Path',
                    data: 'M0,56.5H100M0,71.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 15,
                offsetX: 50,
                offsetY: 64
            }, {
                id: 'SHAPE_4LINESBUS',
                'children': ['SHAPE_4LINESBUS20xkULJ', 'SHAPE_4LINESBUS3hyU44Z']
            }, {
                id: 'SHAPE_8LINESBUSELBOW2JuJyKC',
                shape: {
                    type: 'Path',
                    data: 'M0,97.5H99.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 99.5,
                height: 96.5,
                offsetX: 49.75,
                offsetY: 49.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW3ZBjxlE',
                shape: {
                    type: 'Path',
                    data: 'M0,87.5H89.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 89.5,
                height: 86.5,
                offsetX: 44.75,
                offsetY: 44.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW4GwDxqg',
                shape: {
                    type: 'Path',
                    data: 'M0,77.5H79.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 79.5,
                height: 76.5,
                offsetX: 39.75,
                offsetY: 39.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW53OWi4Z',
                shape: {
                    type: 'Path',
                    data: 'M0,67.5H69.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 69.5,
                height: 66.5,
                offsetX: 34.75,
                offsetY: 34.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW6ez4Rbv',
                shape: {
                    type: 'Path',
                    data: 'M0,57.5H59.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 59.5,
                height: 56.5,
                offsetX: 29.75,
                offsetY: 29.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW7foX5l9',
                shape: {
                    type: 'Path',
                    data: 'M0,47.5H49.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 49.5,
                height: 46.5,
                offsetX: 24.75,
                offsetY: 24.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW8ULgMeD',
                shape: {
                    type: 'Path',
                    data: 'M0,37.5H39.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 39.5,
                height: 36.5,
                offsetX: 19.75,
                offsetY: 19.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW916Nnrp',
                shape: {
                    type: 'Path',
                    data: 'M0,27.5H29.5V1'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 29.5,
                height: 26.5,
                offsetX: 14.75,
                offsetY: 14.25
            }, {
                id: 'SHAPE_8LINESBUSELBOW',
                'children': ['SHAPE_8LINESBUSELBOW2JuJyKC', 'SHAPE_8LINESBUSELBOW3ZBjxlE', 'SHAPE_8LINESBUSELBOW4GwDxqg', 'SHAPE_8LINESBUSELBOW53OWi4Z', 'SHAPE_8LINESBUSELBOW6ez4Rbv', 'SHAPE_8LINESBUSELBOW7foX5l9', 'SHAPE_8LINESBUSELBOW8ULgMeD', 'SHAPE_8LINESBUSELBOW916Nnrp']
            }, {
                id: 'SHAPE_8LINESBUS2JnVssy',
                shape: {
                    type: 'Path',
                    data: 'M0,30.5H100M0,43.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 13,
                offsetX: 50,
                offsetY: 37
            }, {
                id: 'SHAPE_8LINESBUS305RbPD',
                shape: {
                    type: 'Path',
                    data: 'M0,4.5H100M0,17.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 13,
                offsetX: 50,
                offsetY: 11
            }, {
                id: 'SHAPE_8LINESBUS4rjQDC0',
                shape: {
                    type: 'Path',
                    data: 'M0,56.5H100M0,69.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 13,
                offsetX: 50,
                offsetY: 63
            }, {
                id: 'SHAPE_8LINESBUS5Z3KrUi',
                shape: {
                    type: 'Path',
                    data: 'M0,82.5H100M0,95.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 13,
                offsetX: 50,
                offsetY: 89
            }, {
                id: 'SHAPE_8LINESBUS',
                'children': ['SHAPE_8LINESBUS2JnVssy', 'SHAPE_8LINESBUS305RbPD', 'SHAPE_8LINESBUS4rjQDC0', 'SHAPE_8LINESBUS5Z3KrUi']
            }, {
                id: 'SHAPE_ANTICREEPAGEDEVICE24bzfOh',
                shape: {
                    type: 'Path',
                    data: 'M3,50.5H97M21.5,31V69M82.34,18.4a42.81,42.81,0,0,1,0,63.87'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 94,
                height: 63.8699951171875,
                offsetX: 50,
                offsetY: 50.33499717712402
            }, {
                id: 'SHAPE_ANTICREEPAGEDEVICE',
                'children': ['SHAPE_ANTICREEPAGEDEVICE24bzfOh']
            }, {
                id: 'SHAPE_BUSWIDTH2ldExfE',
                shape: {
                    type: 'Path',
                    data: 'M8.38,99.68,91.62.32'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 83.24000549316406,
                height: 99.36000061035156,
                offsetX: 50.00000286102295,
                offsetY: 50.000000327825546
            }, {
                id: 'SHAPE_BUSWIDTH',
                'children': ['SHAPE_BUSWIDTH2ldExfE']
            }, {
                id: 'SHAPE_CABLEGROUP2mA2Pav',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 20,
                height: 93,
                offsetX: 50.5,
                offsetY: 50
            }, {
                id: 'SHAPE_CABLEGROUP3ynhzJn',
                shape: {
                    type: 'Path',
                    data: 'M 60.5 , 20.5 L 90.5 , 20.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 75.5,
                offsetY: 21
            }, {
                id: 'SHAPE_CABLEGROUP4GLjkQM',
                shape: {
                    type: 'Path',
                    data: 'M 60.5 , 35.5 L 90.5 , 35.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 75.5,
                offsetY: 36
            }, {
                id: 'SHAPE_CABLEGROUP5BzaOlZ',
                shape: {
                    type: 'Path',
                    data: 'M 60.5 , 50.5 L 90.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 75.5,
                offsetY: 51
            }, {
                id: 'SHAPE_CABLEGROUP6yJttwc',
                shape: {
                    type: 'Path',
                    data: 'M 60.5 , 64.5 L 90.5 , 64.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 75.5,
                offsetY: 65
            }, {
                id: 'SHAPE_CABLEGROUP7pJQwQh',
                shape: {
                    type: 'Path',
                    data: 'M 60.5 , 79.5 L 90.5 , 79.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 75.5,
                offsetY: 80
            }, {
                id: 'SHAPE_CABLEGROUP87kH7pl',
                shape: {
                    type: 'Path',
                    data: 'M 10.5 , 20.5 L 40.5 , 20.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 25.5,
                offsetY: 21
            }, {
                id: 'SHAPE_CABLEGROUP9iHWvVd',
                shape: {
                    type: 'Path',
                    data: 'M 10.5 , 35.5 L 40.5 , 35.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 25.5,
                offsetY: 36
            }, {
                id: 'SHAPE_CABLEGROUP10dlSaww',
                shape: {
                    type: 'Path',
                    data: 'M 10.5 , 50.5 L 40.5 , 50.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 25.5,
                offsetY: 51
            }, {
                id: 'SHAPE_CABLEGROUP11WcoZiA',
                shape: {
                    type: 'Path',
                    data: 'M 10.5 , 64.5 L 40.5 , 64.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 25.5,
                offsetY: 65
            }, {
                id: 'SHAPE_CABLEGROUP12SNJDu9',
                shape: {
                    type: 'Path',
                    data: 'M 10.5 , 79.5 L 40.5 , 79.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30,
                height: 1,
                offsetX: 25.5,
                offsetY: 80
            }, {
                id: 'SHAPE_CABLEGROUP',
                'children': ['SHAPE_CABLEGROUP2mA2Pav', 'SHAPE_CABLEGROUP3ynhzJn', 'SHAPE_CABLEGROUP4GLjkQM', 'SHAPE_CABLEGROUP5BzaOlZ', 'SHAPE_CABLEGROUP6yJttwc', 'SHAPE_CABLEGROUP7pJQwQh', 'SHAPE_CABLEGROUP87kH7pl', 'SHAPE_CABLEGROUP9iHWvVd', 'SHAPE_CABLEGROUP10dlSaww', 'SHAPE_CABLEGROUP11WcoZiA', 'SHAPE_CABLEGROUP12SNJDu9']
            }, {
                id: 'SHAPE_DIRECTIONOFFLOW-502ZmNelW',
                shape: {
                    type: 'Path',
                    data: 'M10,51.5H77'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 67,
                height: 1,
                offsetX: 43.5,
                offsetY: 52
            }, {
                id: 'SHAPE_DIRECTIONOFFLOW-503Plrjnx',
                shape: {
                    type: 'Path',
                    data: 'M73 60 77 51.5 73 43 90 51.5 73 60'
                },
                width: 17,
                height: 17,
                offsetX: 81.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_DIRECTIONOFFLOW-50',
                'children': ['SHAPE_DIRECTIONOFFLOW-502ZmNelW', 'SHAPE_DIRECTIONOFFLOW-503Plrjnx']
            }, {
                id: 'SHAPE_DIRECTIONOFFLOW-602YYbnsc',
                shape: {
                    type: 'Path',
                    data: 'M0,51.5H100'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 52
            }, {
                id: 'SHAPE_DIRECTIONOFFLOW-60',
                'children': ['SHAPE_DIRECTIONOFFLOW-602YYbnsc']
            }, {
                id: 'SHAPE_ELBOWBUS2oYQPiG',
                shape: {
                    type: 'Path',
                    data: 'M74.5 90.5 74.5 35.5 26.5 35.5 26.5 44.27 10.33 28.16 26.5 12.05 26.5 20.5 89.5 20.5 89.5 90.5 74.5 90.5'
                },
                style: {
                    fill: '#fff'
                },
                width: 79.16999816894531,
                height: 78.44999694824219,
                offsetX: 49.91499900817871,
                offsetY: 51.27499866485596
            }, {
                id: 'SHAPE_ELBOWBUS38nkd0n',
                shape: {
                    type: 'Path',
                    data: 'M26,13.26V21H89V90H75V35H26v8.06L11,28.16l15-14.9m1-2.41L9.63,28.16,27,45.47V36H74V91H90V20H27V10.85Z'
                },
                width: 80.37000274658203,
                height: 80.1500015258789,
                offsetX: 49.815001487731934,
                offsetY: 50.92500114440918
            }, {
                id: 'SHAPE_ELBOWBUS',
                'children': ['SHAPE_ELBOWBUS2oYQPiG', 'SHAPE_ELBOWBUS38nkd0n']
            }, {
                id: 'SHAPE_ELBOWBUS12yDtceH',
                shape: {
                    type: 'Path',
                    data: 'M12.5 90.5 12.5 20.5 75.5 20.5 75.5 12.05 91.67 28.16 75.5 44.27 75.5 35.5 27.5 35.5 27.5 90.5 12.5 90.5'
                },
                style: {
                    fill: '#fff'
                },
                width: 79.16999816894531,
                height: 78.44999694824219,
                offsetX: 52.084999084472656,
                offsetY: 51.27499866485596
            }, {
                id: 'SHAPE_ELBOWBUS13fmF3Bn',
                shape: {
                    type: 'Path',
                    data: 'M76,13.26l15,14.9L76,43.06V35H27V90H13V21H76V13.26m-1-2.41V20H12V91H28V36H75v9.47L92.37,28.16,75,10.85Z'
                },
                width: 80.37000274658203,
                height: 80.1500015258789,
                offsetX: 52.185001373291016,
                offsetY: 50.92500114440918
            }, {
                id: 'SHAPE_ELBOWBUS1',
                'children': ['SHAPE_ELBOWBUS12yDtceH', 'SHAPE_ELBOWBUS13fmF3Bn']
            }, {
                id: 'SHAPE_LINECABLE2FbWzUH',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 60,
                height: 60,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_LINECABLE3yb9uXs',
                shape: {
                    type: 'Path',
                    data: 'M 0 , 48.5 L 100 , 48.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 100,
                height: 1,
                offsetX: 50,
                offsetY: 49
            }, {
                id: 'SHAPE_LINECABLE',
                'children': ['SHAPE_LINECABLE2FbWzUH', 'SHAPE_LINECABLE3yb9uXs']
            }, {
                id: 'SHAPE_LINECONCENTRATOR2oyh2ky',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 99,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_LINECONCENTRATOR3v2qgK2',
                shape: {
                    type: 'Path',
                    data: 'M 46.5 , 15 L 46.5 , 84'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 69,
                offsetX: 47,
                offsetY: 49.5
            }, {
                id: 'SHAPE_LINECONCENTRATOR4hOkBNV',
                shape: {
                    type: 'Path',
                    data: 'M 46.5 , 29.5 L 64.5 , 29.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 18,
                height: 1,
                offsetX: 55.5,
                offsetY: 30
            }, {
                id: 'SHAPE_LINECONCENTRATOR5E04OnB',
                shape: {
                    type: 'Path',
                    data: 'M 46.5 , 70.5 L 64.5 , 70.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 18,
                height: 1,
                offsetX: 55.5,
                offsetY: 71
            }, {
                id: 'SHAPE_LINECONCENTRATOR6dMAhMy',
                shape: {
                    type: 'Path',
                    data: 'M 28.5 , 49.5 L 46.5 , 49.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 18,
                height: 1,
                offsetX: 37.5,
                offsetY: 50
            }, {
                id: 'SHAPE_LINECONCENTRATOR',
                'children': ['SHAPE_LINECONCENTRATOR2oyh2ky', 'SHAPE_LINECONCENTRATOR3v2qgK2', 'SHAPE_LINECONCENTRATOR4hOkBNV', 'SHAPE_LINECONCENTRATOR5E04OnB', 'SHAPE_LINECONCENTRATOR6dMAhMy']
            }, {
                id: 'SHAPE_OPTICALFIBRE2gk0CsH',
                shape: {
                    type: 'Path',
                    data: 'M6.5,50.5h16m56,0h16'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 88,
                height: 1,
                offsetX: 50.5,
                offsetY: 51
            }, {
                id: 'SHAPE_OPTICALFIBRE3KLas2U',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 56,
                height: 56,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_OPTICALFIBRE4M8lUyB',
                shape: {
                    type: 'Path',
                    data: 'M29.23,57.42,50,36.65M43.08,70.49,63.85,49.72'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34.619998931884766,
                height: 33.839996337890625,
                offsetX: 46.53999900817871,
                offsetY: 53.56999969482422
            }, {
                id: 'SHAPE_OPTICALFIBRE5wAbR7L',
                shape: {
                    type: 'Path',
                    data: 'M46.19,33.54,57.62,29,53.46,40.12ZM60,46.61l11.42-4.5L67.31,53.19Z'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 25.229999542236328,
                height: 24.189998626708984,
                offsetX: 58.80499839782715,
                offsetY: 41.09499931335449
            }, {
                id: 'SHAPE_OPTICALFIBRE',
                'children': ['SHAPE_OPTICALFIBRE2gk0CsH', 'SHAPE_OPTICALFIBRE3KLas2U', 'SHAPE_OPTICALFIBRE4M8lUyB', 'SHAPE_OPTICALFIBRE5wAbR7L']
            }, {
                id: 'SHAPE_OVERGROUNDENCLOSURE21bxmAr',
                shape: {
                    type: 'Path',
                    data: 'M90.64,14.5h0a92.11,92.11,0,0,0-81.46,0h0'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 81.45999908447266,
                height: 9.4945068359375,
                offsetX: 49.90999984741211,
                offsetY: 9.752750873565674
            }, {
                id: 'SHAPE_OVERGROUNDENCLOSURE3ZppBFT',
                shape: {
                    type: 'Path',
                    data: 'M73.5 8 73.5 95.5 26.5 95.5 26.5 8'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 47,
                height: 87.5,
                offsetX: 50,
                offsetY: 51.75
            }, {
                id: 'SHAPE_OVERGROUNDENCLOSURE',
                'children': ['SHAPE_OVERGROUNDENCLOSURE21bxmAr', 'SHAPE_OVERGROUNDENCLOSURE3ZppBFT']
            }, {
                id: 'SHAPE_STRAIGHTBUS2Lr1o3J',
                shape: {
                    type: 'Path',
                    data: 'M34.5 5 34.5 66.5 22.1 66.5 50 94.48 77.9 66.5 65.5 66.5 65.5 5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 55.80000305175781,
                height: 89.4800033569336,
                offsetX: 50.00000190734863,
                offsetY: 49.7400016784668
            }, {
                id: 'SHAPE_STRAIGHTBUS',
                'children': ['SHAPE_STRAIGHTBUS2Lr1o3J']
            }, {
                id: 'SHAPE_TERMINAL21j82q1',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 99,
                height: 99,
                offsetX: 50,
                offsetY: 50
            }, {
                id: 'SHAPE_TERMINAL',
                'children': ['SHAPE_TERMINAL21j82q1']
            }, {
                id: 'SHAPE_TESTPOINT2Gwfigc',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    strokeColor: '#000'
                },
                width: 38,
                height: 38,
                offsetX: 47.5,
                offsetY: 28.5
            }, {
                id: 'SHAPE_TESTPOINT3l2mDFT',
                shape: {
                    type: 'Path',
                    data: 'M47.5,48V93'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 1,
                height: 45,
                offsetX: 48,
                offsetY: 70.5
            }, {
                id: 'SHAPE_TESTPOINT',
                'children': ['SHAPE_TESTPOINT2Gwfigc', 'SHAPE_TESTPOINT3l2mDFT']
            }];
        for (let i = 0; i < transmissionShapes.length; i++) {
            if(!transmissionShapes[i].children) {
                transmissionShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            transmissionShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return transmissionShapes;
    }

    private getElectricalTransistorsShapes(): NodeModel[] {
        let transistorsShapes: NodeModel[] = [
            {
                id: 'SHAPE_BJTNPN2EojLgJ',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 55.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_BJTNPN3rw3wYJ',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 29 L 42 , 70'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 42.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_BJTNPN4cTRw0O',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 48.5 L 5 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 37,
                height: 1,
                offsetX: 23.5,
                offsetY: 49
            }, {
                id: 'SHAPE_BJTNPN5dtlMoM',
                shape: {
                    type: 'Path',
                    data: 'M73.5 99 73.48 84.24 42.43 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.06999969482422,
                height: 35.5,
                offsetX: 57.96500015258789,
                offsetY: 81.25
            }, {
                id: 'SHAPE_BJTNPN6oEefav',
                shape: {
                    type: 'Path',
                    data: 'M73.5 0 73.48 15.01 42.43 35.75'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.06999969482422,
                height: 35.75,
                offsetX: 57.96500015258789,
                offsetY: 17.875
            }, {
                id: 'SHAPE_BJTNPN7Wz9DWq',
                shape: {
                    type: 'Path',
                    data: 'M72.36 83.52 72.36 83.52 72.36 83.52 55.76 78.44 61.33 70.17 72.36 83.52'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16.60000228881836,
                height: 13.349998474121094,
                offsetX: 64.05999946594238,
                offsetY: 76.84499740600586
            }, {
                id: 'SHAPE_BJTNPN',
                'children': ['SHAPE_BJTNPN2EojLgJ', 'SHAPE_BJTNPN3rw3wYJ', 'SHAPE_BJTNPN4cTRw0O', 'SHAPE_BJTNPN5dtlMoM', 'SHAPE_BJTNPN6oEefav', 'SHAPE_BJTNPN7Wz9DWq']
            }, {
                id: 'SHAPE_BJTPNP2jDZbiH',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 53.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_BJTPNP3MY254S',
                shape: {
                    type: 'Path',
                    data: 'M 40 , 29 L 40 , 70'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 40.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_BJTPNP4o0trx6',
                shape: {
                    type: 'Path',
                    data: 'M 40 , 48.5 L 3 , 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 37,
                height: 1,
                offsetX: 21.5,
                offsetY: 49
            }, {
                id: 'SHAPE_BJTPNP5GtVfy5',
                shape: {
                    type: 'Path',
                    data: 'M71.5 99 71.48 84.24 40.43 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.06999969482422,
                height: 35.5,
                offsetX: 55.96500015258789,
                offsetY: 81.25
            }, {
                id: 'SHAPE_BJTPNP6z7pZQH',
                shape: {
                    type: 'Path',
                    data: 'M71.5 0 71.48 15.01 40.43 35.75'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.06999969482422,
                height: 35.75,
                offsetX: 55.96500015258789,
                offsetY: 17.875
            }, {
                id: 'SHAPE_BJTPNP7GJY4gs',
                shape: {
                    type: 'Path',
                    data: 'M40.47 35.68 40.47 35.68 40.47 35.68 57.07 30.59 51.5 22.32 40.47 35.68'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 16.599998474121094,
                height: 13.360000610351562,
                offsetX: 48.77000045776367,
                offsetY: 29
            }, {
                id: 'SHAPE_BJTPNP',
                'children': ['SHAPE_BJTPNP2jDZbiH', 'SHAPE_BJTPNP3MY254S', 'SHAPE_BJTPNP4o0trx6', 'SHAPE_BJTPNP5GtVfy5', 'SHAPE_BJTPNP6z7pZQH', 'SHAPE_BJTPNP7GJY4gs']
            }, {
                id: 'SHAPE_DUALGATEMOSFETN2szW6hq',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 53.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DUALGATEMOSFETN3BGVbaj',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 29 L 43 , 70'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 43.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DUALGATEMOSFETN4oRswhv',
                shape: {
                    type: 'Path',
                    data: 'M43.5 49.5 55.5 45.5 55.5 53.5 43.5 49.5 43.5 49.5 43.5 49.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DUALGATEMOSFETN5VHXrZm',
                shape: {
                    type: 'Path',
                    data: 'M39.5 60 39.5 69.5 9 69.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30.5,
                height: 9.5,
                offsetX: 24.25,
                offsetY: 64.75
            }, {
                id: 'SHAPE_DUALGATEMOSFETN63Rpqmp',
                shape: {
                    type: 'Path',
                    data: 'M39.5 29 39.5 38.5 9 38.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30.5,
                height: 9.5,
                offsetX: 24.25,
                offsetY: 33.75
            }, {
                id: 'SHAPE_DUALGATEMOSFETN7xssnhM',
                shape: {
                    type: 'Path',
                    data: 'M62.5 100 62.48 64.5 43 64.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 52.75,
                offsetY: 82.25
            }, {
                id: 'SHAPE_DUALGATEMOSFETN8KlF6ps',
                shape: {
                    type: 'Path',
                    data: 'M62.5 1 62.48 34.5 43 34.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 52.75,
                offsetY: 17.75
            }, {
                id: 'SHAPE_DUALGATEMOSFETN9tbCGdb',
                shape: {
                    type: 'Path',
                    data: 'M56 49.5 62.5 49.5 62.5 65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 6.5,
                height: 15.5,
                offsetX: 59.25,
                offsetY: 57.25
            }, {
                id: 'SHAPE_DUALGATEMOSFETN',
                'children': ['SHAPE_DUALGATEMOSFETN2szW6hq', 'SHAPE_DUALGATEMOSFETN3BGVbaj', 'SHAPE_DUALGATEMOSFETN4oRswhv', 'SHAPE_DUALGATEMOSFETN5VHXrZm', 'SHAPE_DUALGATEMOSFETN63Rpqmp', 'SHAPE_DUALGATEMOSFETN7xssnhM', 'SHAPE_DUALGATEMOSFETN8KlF6ps', 'SHAPE_DUALGATEMOSFETN9tbCGdb']
            }, {
                id: 'SHAPE_DUALGATEMOSFETP2zN2DOF',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 53.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DUALGATEMOSFETP3nPlher',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 29 L 43 , 70'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 43.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DUALGATEMOSFETP4pnBYNh',
                shape: {
                    type: 'Path',
                    data: 'M62.5 100 62.48 64.5 43 64.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 52.75,
                offsetY: 82.25
            }, {
                id: 'SHAPE_DUALGATEMOSFETP5asoLIN',
                shape: {
                    type: 'Path',
                    data: 'M62.5 1 62.48 34.5 43 34.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 52.75,
                offsetY: 17.75
            }, {
                id: 'SHAPE_DUALGATEMOSFETP66f4YWt',
                shape: {
                    type: 'Path',
                    data: 'M42 49.5 62.5 49.5 62.5 65'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 20.5,
                height: 15.5,
                offsetX: 52.25,
                offsetY: 57.25
            }, {
                id: 'SHAPE_DUALGATEMOSFETP7ey58nx',
                shape: {
                    type: 'Path',
                    data: 'M39.5 60 39.5 69.5 9 69.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30.5,
                height: 9.5,
                offsetX: 24.25,
                offsetY: 64.75
            }, {
                id: 'SHAPE_DUALGATEMOSFETP8fj1f3W',
                shape: {
                    type: 'Path',
                    data: 'M39.5 29 39.5 38.5 9 38.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 30.5,
                height: 9.5,
                offsetX: 24.25,
                offsetY: 33.75
            }, {
                id: 'SHAPE_DUALGATEMOSFETP9R3iwZc',
                shape: {
                    type: 'Path',
                    data: 'M61.42 49.5 49.42 53.5 49.42 45.5 61.42 49.5 61.42 49.5 61.42 49.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 55.41999816894531,
                offsetY: 49.5
            }, {
                id: 'SHAPE_DUALGATEMOSFETP',
                'children': ['SHAPE_DUALGATEMOSFETP2zN2DOF', 'SHAPE_DUALGATEMOSFETP3nPlher', 'SHAPE_DUALGATEMOSFETP4pnBYNh', 'SHAPE_DUALGATEMOSFETP5asoLIN', 'SHAPE_DUALGATEMOSFETP66f4YWt', 'SHAPE_DUALGATEMOSFETP7ey58nx', 'SHAPE_DUALGATEMOSFETP8fj1f3W', 'SHAPE_DUALGATEMOSFETP9R3iwZc']
            }, {
                id: 'SHAPE_MOSFETN21m4Osd',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 52.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETN3Aham4N',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 28 L 42 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 42.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETN4lNKuN9',
                shape: {
                    type: 'Path',
                    data: 'M42.5 48.5 54.5 44.5 54.5 52.5 42.5 48.5 42.5 48.5 42.5 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 48.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETN5ytKqMP',
                shape: {
                    type: 'Path',
                    data: 'M38.5 28 38.5 68.5 9 68.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 29.5,
                height: 40.5,
                offsetX: 23.75,
                offsetY: 48.25
            }, {
                id: 'SHAPE_MOSFETN6EGVaVa',
                shape: {
                    type: 'Path',
                    data: 'M61.5 99 61.48 63.5 42 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 51.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_MOSFETN7wTe55s',
                shape: {
                    type: 'Path',
                    data: 'M61.5 0 61.48 33.5 42 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 51.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_MOSFETN8aQ6azi',
                shape: {
                    type: 'Path',
                    data: 'M54.5 48.5 61.5 48.5 61.5 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 15.5,
                offsetX: 58,
                offsetY: 56.25
            }, {
                id: 'SHAPE_MOSFETN',
                'children': ['SHAPE_MOSFETN21m4Osd', 'SHAPE_MOSFETN3Aham4N', 'SHAPE_MOSFETN4lNKuN9', 'SHAPE_MOSFETN5ytKqMP', 'SHAPE_MOSFETN6EGVaVa', 'SHAPE_MOSFETN7wTe55s', 'SHAPE_MOSFETN8aQ6azi']
            }, {
                id: 'SHAPE_MOSFETP283fTfO',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 52.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETP3nzf0f9',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 28 L 42 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 42.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETP4RBDmfn',
                shape: {
                    type: 'Path',
                    data: 'M38.5 28 38.5 68.5 9 68.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 29.5,
                height: 40.5,
                offsetX: 23.75,
                offsetY: 48.25
            }, {
                id: 'SHAPE_MOSFETP5CEtEv4',
                shape: {
                    type: 'Path',
                    data: 'M61.5 99 61.48 63.5 42 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 51.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_MOSFETP6TnnVyD',
                shape: {
                    type: 'Path',
                    data: 'M61.5 0 61.48 33.5 42 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 51.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_MOSFETP74jCyJI',
                shape: {
                    type: 'Path',
                    data: 'M42 48.5 61.5 48.5 61.5 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 15.5,
                offsetX: 51.75,
                offsetY: 56.25
            }, {
                id: 'SHAPE_MOSFETP8DLd0IN',
                shape: {
                    type: 'Path',
                    data: 'M60.42 48.5 48.42 52.5 48.42 44.5 60.42 48.5 60.42 48.5 60.42 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 54.41999816894531,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETP',
                'children': ['SHAPE_MOSFETP283fTfO', 'SHAPE_MOSFETP3nzf0f9', 'SHAPE_MOSFETP4RBDmfn', 'SHAPE_MOSFETP5CEtEv4', 'SHAPE_MOSFETP6TnnVyD', 'SHAPE_MOSFETP74jCyJI', 'SHAPE_MOSFETP8DLd0IN']
            }, {
                id: 'SHAPE_MOSFETNOBULKN2bzC4Kb',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 52.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETNOBULKN3XeQKtM',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 28 L 42 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 42.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETNOBULKN4XU7J5C',
                shape: {
                    type: 'Path',
                    data: 'M 38.5 , 30 L 38.5 , 67'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 37,
                offsetX: 39,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETNOBULKN5fdzOzf',
                shape: {
                    type: 'Path',
                    data: 'M 38 , 48.5 L 4 , 48.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34,
                height: 1,
                offsetX: 21,
                offsetY: 49
            }, {
                id: 'SHAPE_MOSFETNOBULKN6O6T0ir',
                shape: {
                    type: 'Path',
                    data: 'M61.5 99 61.48 63.5 42 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 51.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_MOSFETNOBULKN7D5t4i8',
                shape: {
                    type: 'Path',
                    data: 'M61.5 0 61.48 33.5 42 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 51.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_MOSFETNOBULKN',
                'children': ['SHAPE_MOSFETNOBULKN2bzC4Kb', 'SHAPE_MOSFETNOBULKN3XeQKtM', 'SHAPE_MOSFETNOBULKN4XU7J5C', 'SHAPE_MOSFETNOBULKN5fdzOzf', 'SHAPE_MOSFETNOBULKN6O6T0ir', 'SHAPE_MOSFETNOBULKN7D5t4i8']
            }, {
                id: 'SHAPE_MOSFETNOBULKP2xGZOWc',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 54.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETNOBULKP3ZwcFDr',
                shape: {
                    type: 'Path',
                    data: 'M 44 , 28 L 44 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 44.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETNOBULKP4wznlUW',
                shape: {
                    type: 'Path',
                    data: 'M 40.5 , 30 L 40.5 , 67'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 37,
                offsetX: 41,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETNOBULKP51IUDeF',
                shape: {
                    type: 'Path',
                    data: 'M 40 , 48.5 L 6 , 48.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34,
                height: 1,
                offsetX: 23,
                offsetY: 49
            }, {
                id: 'SHAPE_MOSFETNOBULKP6ISnnqU',
                shape: {
                    type: 'Path',
                    data: 'M63.5 99 63.48 63.5 44 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 53.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_MOSFETNOBULKP7qW1NRb',
                shape: {
                    type: 'Path',
                    data: 'M63.5 0 63.48 33.5 44 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 53.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_MOSFETNOBULKP8ih0O4t',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 4,
                height: 4,
                offsetX: 38.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_MOSFETNOBULKP',
                'children': ['SHAPE_MOSFETNOBULKP2xGZOWc', 'SHAPE_MOSFETNOBULKP3ZwcFDr', 'SHAPE_MOSFETNOBULKP4wznlUW', 'SHAPE_MOSFETNOBULKP51IUDeF', 'SHAPE_MOSFETNOBULKP6ISnnqU', 'SHAPE_MOSFETNOBULKP7qW1NRb', 'SHAPE_MOSFETNOBULKP8ih0O4t']
            }, {
                id: 'SHAPE_NCHANNELJFET26iql0z',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 51.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_NCHANNELJFET3OUzF4C',
                shape: {
                    type: 'Path',
                    data: 'M 41 , 28 L 41 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 41.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_NCHANNELJFET4nHlw6v',
                shape: {
                    type: 'Path',
                    data: 'M 28 , 63.5 L 6 , 63.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 22,
                height: 1,
                offsetX: 17,
                offsetY: 64
            }, {
                id: 'SHAPE_NCHANNELJFET5deOD7m',
                shape: {
                    type: 'Path',
                    data: 'M60.5 99 60.48 63.5 41 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 50.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_NCHANNELJFET6QlbEZl',
                shape: {
                    type: 'Path',
                    data: 'M60.5 0 60.48 33.5 41 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 50.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_NCHANNELJFET7TsJEHx',
                shape: {
                    type: 'Path',
                    data: 'M40.5 63.5 28.5 67.5 28.5 59.5 40.5 63.5 40.5 63.5 40.5 63.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 34.5,
                offsetY: 63.5
            }, {
                id: 'SHAPE_NCHANNELJFET',
                'children': ['SHAPE_NCHANNELJFET26iql0z', 'SHAPE_NCHANNELJFET3OUzF4C', 'SHAPE_NCHANNELJFET4nHlw6v', 'SHAPE_NCHANNELJFET5deOD7m', 'SHAPE_NCHANNELJFET6QlbEZl', 'SHAPE_NCHANNELJFET7TsJEHx']
            }, {
                id: 'SHAPE_NMOS-7920CBjnS',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 52.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_NMOS-793absNni',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 28 L 42 , 39'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 11,
                offsetX: 42.5,
                offsetY: 33.5
            }, {
                id: 'SHAPE_NMOS-7945XDPac',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 43 L 42 , 54'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 11,
                offsetX: 42.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_NMOS-795othxsY',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 58 L 42 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 11,
                offsetX: 42.5,
                offsetY: 63.5
            }, {
                id: 'SHAPE_NMOS-796M16NDw',
                shape: {
                    type: 'Path',
                    data: 'M42.5 48.5 54.5 44.5 54.5 52.5 42.5 48.5 42.5 48.5 42.5 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 48.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_NMOS-797m6x61d',
                shape: {
                    type: 'Path',
                    data: 'M38.5 28 38.5 68.5 9 68.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 29.5,
                height: 40.5,
                offsetX: 23.75,
                offsetY: 48.25
            }, {
                id: 'SHAPE_NMOS-7982Vzgja',
                shape: {
                    type: 'Path',
                    data: 'M61.5 99 61.48 63.5 42 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 51.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_NMOS-799unhPoq',
                shape: {
                    type: 'Path',
                    data: 'M61.5 0 61.48 33.5 42 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 51.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_NMOS-791009DfMB',
                shape: {
                    type: 'Path',
                    data: 'M54.5 48.5 61.5 48.5 61.5 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 7,
                height: 15.5,
                offsetX: 58,
                offsetY: 56.25
            }, {
                id: 'SHAPE_NMOS-79',
                'children': ['SHAPE_NMOS-7920CBjnS', 'SHAPE_NMOS-793absNni', 'SHAPE_NMOS-7945XDPac', 'SHAPE_NMOS-795othxsY', 'SHAPE_NMOS-796M16NDw', 'SHAPE_NMOS-797m6x61d', 'SHAPE_NMOS-7982Vzgja', 'SHAPE_NMOS-799unhPoq', 'SHAPE_NMOS-791009DfMB']
            }, {
                id: 'SHAPE_NMOS-852vyuBFX',
                shape: {
                    type: 'Path',
                    data: 'M 46.5 , 30 L 46.5 , 67'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 37,
                offsetX: 47,
                offsetY: 48.5
            }, {
                id: 'SHAPE_NMOS-8533L3Kln',
                shape: {
                    type: 'Path',
                    data: 'M 46 , 48.5 L 12 , 48.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34,
                height: 1,
                offsetX: 29,
                offsetY: 49
            }, {
                id: 'SHAPE_NMOS-854ePJnJX',
                shape: {
                    type: 'Path',
                    data: 'M70.5 0 70.48 30.5 49.5 30.5 49.5 66.5 70.5 66.5 70.52 99'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.019996643066406,
                height: 99,
                offsetX: 60.0099983215332,
                offsetY: 49.5
            }, {
                id: 'SHAPE_NMOS-8550jsNuk',
                shape: {
                    type: 'Path',
                    data: 'M69.42 66.5 57.42 70.5 57.42 62.5 69.42 66.5 69.42 66.5 69.42 66.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 63.41999816894531,
                offsetY: 66.5
            }, {
                id: 'SHAPE_NMOS-85',
                'children': ['SHAPE_NMOS-852vyuBFX', 'SHAPE_NMOS-8533L3Kln', 'SHAPE_NMOS-854ePJnJX', 'SHAPE_NMOS-8550jsNuk']
            }, {
                id: 'SHAPE_PCHANNELJFET22yMq8N',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 53.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_PCHANNELJFET3miIxii',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 28 L 43 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 41,
                offsetX: 43.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_PCHANNELJFET4e5aKpA',
                shape: {
                    type: 'Path',
                    data: 'M 19 , 63.5 L 8 , 63.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 11,
                height: 1,
                offsetX: 13.5,
                offsetY: 64
            }, {
                id: 'SHAPE_PCHANNELJFET5SBrxmL',
                shape: {
                    type: 'Path',
                    data: 'M62.5 99 62.48 63.5 31 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 31.5,
                height: 35.5,
                offsetX: 46.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_PCHANNELJFET6RBthcP',
                shape: {
                    type: 'Path',
                    data: 'M62.5 0 62.48 33.5 43 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 52.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_PCHANNELJFET7Qgk5Lr',
                shape: {
                    type: 'Path',
                    data: 'M18.58 63.5 30.58 59.5 30.58 67.5 18.58 63.5 18.58 63.5 18.58 63.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 24.579999923706055,
                offsetY: 63.5
            }, {
                id: 'SHAPE_PCHANNELJFET',
                'children': ['SHAPE_PCHANNELJFET22yMq8N', 'SHAPE_PCHANNELJFET3miIxii', 'SHAPE_PCHANNELJFET4e5aKpA', 'SHAPE_PCHANNELJFET5SBrxmL', 'SHAPE_PCHANNELJFET6RBthcP', 'SHAPE_PCHANNELJFET7Qgk5Lr']
            }, {
                id: 'SHAPE_PMOS-802Qf9jPj',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 78,
                height: 78,
                offsetX: 52.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_PMOS-803YzJGlb',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 28 L 42 , 39'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 11,
                offsetX: 42.5,
                offsetY: 33.5
            }, {
                id: 'SHAPE_PMOS-804is8UzP',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 43 L 42 , 54'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 11,
                offsetX: 42.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_PMOS-805IKoiqT',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 58 L 42 , 69'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 1,
                height: 11,
                offsetX: 42.5,
                offsetY: 63.5
            }, {
                id: 'SHAPE_PMOS-806qdPJ9R',
                shape: {
                    type: 'Path',
                    data: 'M38.5 28 38.5 68.5 9 68.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 29.5,
                height: 40.5,
                offsetX: 23.75,
                offsetY: 48.25
            }, {
                id: 'SHAPE_PMOS-807tEknIH',
                shape: {
                    type: 'Path',
                    data: 'M61.5 99 61.48 63.5 42 63.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 35.5,
                offsetX: 51.75,
                offsetY: 81.25
            }, {
                id: 'SHAPE_PMOS-8084THT7q',
                shape: {
                    type: 'Path',
                    data: 'M61.5 0 61.48 33.5 42 33.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 33.5,
                offsetX: 51.75,
                offsetY: 16.75
            }, {
                id: 'SHAPE_PMOS-809wftP1m',
                shape: {
                    type: 'Path',
                    data: 'M42 48.5 61.5 48.5 61.5 64'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 19.5,
                height: 15.5,
                offsetX: 51.75,
                offsetY: 56.25
            }, {
                id: 'SHAPE_PMOS-8010Xcc5sJ',
                shape: {
                    type: 'Path',
                    data: 'M60.42 48.5 48.42 52.5 48.42 44.5 60.42 48.5 60.42 48.5 60.42 48.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 54.41999816894531,
                offsetY: 48.5
            }, {
                id: 'SHAPE_PMOS-80',
                'children': ['SHAPE_PMOS-802Qf9jPj', 'SHAPE_PMOS-803YzJGlb', 'SHAPE_PMOS-804is8UzP', 'SHAPE_PMOS-805IKoiqT', 'SHAPE_PMOS-806qdPJ9R', 'SHAPE_PMOS-807tEknIH', 'SHAPE_PMOS-8084THT7q', 'SHAPE_PMOS-809wftP1m', 'SHAPE_PMOS-8010Xcc5sJ']
            }, {
                id: 'SHAPE_PMOS-862EToOKg',
                shape: {
                    type: 'Path',
                    data: 'M 52.5 , 30 L 52.5 , 67'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 37,
                offsetX: 53,
                offsetY: 48.5
            }, {
                id: 'SHAPE_PMOS-863VO247Z',
                shape: {
                    type: 'Path',
                    data: 'M 52 , 48.5 L 18 , 48.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 34,
                height: 1,
                offsetX: 35,
                offsetY: 49
            }, {
                id: 'SHAPE_PMOS-864HxH41H',
                shape: {
                    type: 'Path',
                    data: 'M76.5 0 76.48 30.5 55.5 30.5 55.5 66.5 76.5 66.5 76.52 99'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 21.019996643066406,
                height: 99,
                offsetX: 66.0099983215332,
                offsetY: 49.5
            }, {
                id: 'SHAPE_PMOS-8656Xkuqq',
                shape: {
                    type: 'Path',
                    data: 'M56.5 30.5 68.5 26.5 68.5 34.5 56.5 30.5 56.5 30.5 56.5 30.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 12,
                height: 8,
                offsetX: 62.5,
                offsetY: 30.5
            }, {
                id: 'SHAPE_PMOS-86',
                'children': ['SHAPE_PMOS-862EToOKg', 'SHAPE_PMOS-863VO247Z', 'SHAPE_PMOS-864HxH41H', 'SHAPE_PMOS-8656Xkuqq']
            }];
        for (let i = 0; i < transistorsShapes.length; i++) {
            if(!transistorsShapes[i].children) {
                transistorsShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            transistorsShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return transistorsShapes;
    }

    private getElectricalVaccumShapes(): NodeModel[] {
        let vaccumShapes: NodeModel[] = [
            {
                id: 'SHAPE_DIODE2iXKE4N',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 77,
                height: 77,
                offsetX: 51,
                offsetY: 50
            }, {
                id: 'SHAPE_DIODE33hKAGf',
                shape: {
                    type: 'Path',
                    data: 'M 51.5 , 11.5 L 51.5 , 23'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 11.5,
                offsetX: 52,
                offsetY: 17.25
            }, {
                id: 'SHAPE_DIODE4IfZjm5',
                shape: {
                    type: 'Path',
                    data: 'M43.5,95V85A7.5,7.5,0,0,1,51,77.5h0A7.5,7.5,0,0,1,58.5,85V95'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15,
                height: 17.5,
                offsetX: 51,
                offsetY: 86.25
            }, {
                id: 'SHAPE_DIODE5hLNO3l',
                shape: {
                    type: 'Path',
                    data: 'M38 79 44.97 73 56.97 73 64 79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 26,
                height: 6,
                offsetX: 51,
                offsetY: 76
            }, {
                id: 'SHAPE_DIODE6QqFnQ0',
                shape: {
                    type: 'Path',
                    data: 'M 44 , 23 L 59 , 23'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 51.5,
                offsetY: 23.5
            }, {
                id: 'SHAPE_DIODE',
                'children': ['SHAPE_DIODE2iXKE4N', 'SHAPE_DIODE33hKAGf', 'SHAPE_DIODE4IfZjm5', 'SHAPE_DIODE5hLNO3l', 'SHAPE_DIODE6QqFnQ0']
            }, {
                id: 'SHAPE_DOUBLEDIODE21IBXqw',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 68,
                height: 68,
                offsetX: 51,
                offsetY: 51
            }, {
                id: 'SHAPE_DOUBLEDIODE3XyLuyM',
                shape: {
                    type: 'Path',
                    data: 'M44.5,94V84A7.5,7.5,0,0,1,52,76.5h0A7.5,7.5,0,0,1,59.5,84V94'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.000003814697266,
                height: 17.5,
                offsetX: 52.00000190734863,
                offsetY: 85.25
            }, {
                id: 'SHAPE_DOUBLEDIODE4BEXTne',
                shape: {
                    type: 'Path',
                    data: 'M 35.5 , 17 L 35.5 , 28'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 11,
                offsetX: 36,
                offsetY: 22.5
            }, {
                id: 'SHAPE_DOUBLEDIODE5J23Lui',
                shape: {
                    type: 'Path',
                    data: 'M 65.5 , 17 L 65.5 , 28'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 11,
                offsetX: 66,
                offsetY: 22.5
            }, {
                id: 'SHAPE_DOUBLEDIODE6Ns9z69',
                shape: {
                    type: 'Path',
                    data: 'M29 78 35.97 72 67.97 72 75 78'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 46,
                height: 6,
                offsetX: 52,
                offsetY: 75
            }, {
                id: 'SHAPE_DOUBLEDIODE74V8Ws5',
                shape: {
                    type: 'Path',
                    data: 'M 28 , 28 L 43 , 28'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 35.5,
                offsetY: 28.5
            }, {
                id: 'SHAPE_DOUBLEDIODE8J4lz04',
                shape: {
                    type: 'Path',
                    data: 'M 58 , 28 L 73 , 28'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 65.5,
                offsetY: 28.5
            }, {
                id: 'SHAPE_DOUBLEDIODE',
                'children': ['SHAPE_DOUBLEDIODE21IBXqw', 'SHAPE_DOUBLEDIODE3XyLuyM', 'SHAPE_DOUBLEDIODE4BEXTne', 'SHAPE_DOUBLEDIODE5J23Lui', 'SHAPE_DOUBLEDIODE6Ns9z69', 'SHAPE_DOUBLEDIODE74V8Ws5', 'SHAPE_DOUBLEDIODE8J4lz04']
            }, {
                id: 'SHAPE_DOUBLETRIODE2C8wgQr',
                shape: {
                    type: 'Basic',
                    shape: 'Rectangle'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 68,
                height: 68,
                offsetX: 50.5,
                offsetY: 51.5
            }, {
                id: 'SHAPE_DOUBLETRIODE3PEBAvB',
                shape: {
                    type: 'Path',
                    data: 'M28 78 34.97 72 66.97 72 74 78'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 46,
                height: 6,
                offsetX: 51,
                offsetY: 75
            }, {
                id: 'SHAPE_DOUBLETRIODE4I42wST',
                shape: {
                    type: 'Path',
                    data: 'M 27 , 28 L 42 , 28'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 34.5,
                offsetY: 28.5
            }, {
                id: 'SHAPE_DOUBLETRIODE5bh6UNX',
                shape: {
                    type: 'Path',
                    data: 'M 57 , 28 L 72 , 28'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 64.5,
                offsetY: 28.5
            }, {
                id: 'SHAPE_DOUBLETRIODE6LdEK1P',
                shape: {
                    type: 'Path',
                    data: 'M43.5,94V84A7.5,7.5,0,0,1,51,76.5h0A7.5,7.5,0,0,1,58.5,84V94'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15,
                height: 17.5,
                offsetX: 51,
                offsetY: 85.25
            }, {
                id: 'SHAPE_DOUBLETRIODE7rSRJ2q',
                shape: {
                    type: 'Path',
                    data: 'M 34.5 , 17.5 L 34.5 , 28'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 10.5,
                offsetX: 35,
                offsetY: 22.75
            }, {
                id: 'SHAPE_DOUBLETRIODE897CZWS',
                shape: {
                    type: 'Path',
                    data: 'M 64.5 , 17.5 L 64.5 , 28'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 10.5,
                offsetX: 65,
                offsetY: 22.75
            }, {
                id: 'SHAPE_DOUBLETRIODE9IH1pkI',
                shape: {
                    type: 'Path',
                    data: 'M 16.5 , 51.5 L 27 , 51.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10.5,
                height: 1,
                offsetX: 21.75,
                offsetY: 52
            }, {
                id: 'SHAPE_DOUBLETRIODE10ru5HzB',
                shape: {
                    type: 'Path',
                    data: 'M 35 , 51.5 L 46 , 51.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 11,
                height: 1,
                offsetX: 40.5,
                offsetY: 52
            }, {
                id: 'SHAPE_DOUBLETRIODE11UjFyHE',
                shape: {
                    type: 'Path',
                    data: 'M 55 , 51.5 L 66 , 51.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 11,
                height: 1,
                offsetX: 60.5,
                offsetY: 52
            }, {
                id: 'SHAPE_DOUBLETRIODE12t1vdRB',
                shape: {
                    type: 'Path',
                    data: 'M 74 , 51.5 L 84.5 , 51.5'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 10.5,
                height: 1,
                offsetX: 79.25,
                offsetY: 52
            }, {
                id: 'SHAPE_DOUBLETRIODE',
                'children': ['SHAPE_DOUBLETRIODE2C8wgQr', 'SHAPE_DOUBLETRIODE3PEBAvB', 'SHAPE_DOUBLETRIODE4I42wST', 'SHAPE_DOUBLETRIODE5bh6UNX', 'SHAPE_DOUBLETRIODE6LdEK1P', 'SHAPE_DOUBLETRIODE7rSRJ2q', 'SHAPE_DOUBLETRIODE897CZWS', 'SHAPE_DOUBLETRIODE9IH1pkI', 'SHAPE_DOUBLETRIODE10ru5HzB', 'SHAPE_DOUBLETRIODE11UjFyHE', 'SHAPE_DOUBLETRIODE12t1vdRB']
            }, {
                id: 'SHAPE_PENTODE2XTlNSI',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 77,
                height: 77,
                offsetX: 50,
                offsetY: 47
            }, {
                id: 'SHAPE_PENTODE3cXRurM',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 8.5 L 50.5 , 20'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 11.5,
                offsetX: 51,
                offsetY: 14.25
            }, {
                id: 'SHAPE_PENTODE4QroQCT',
                shape: {
                    type: 'Path',
                    data: 'M42.5,92V82A7.5,7.5,0,0,1,50,74.5h0A7.5,7.5,0,0,1,57.5,82V92'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.000003814697266,
                height: 17.5,
                offsetX: 50.00000190734863,
                offsetY: 83.25
            }, {
                id: 'SHAPE_PENTODE5P4HhCh',
                shape: {
                    type: 'Path',
                    data: 'M37 76 43.97 70 55.97 70 63 76'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 26,
                height: 6,
                offsetX: 50,
                offsetY: 73
            }, {
                id: 'SHAPE_PENTODE6fyidrq',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 20 L 58 , 20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 20.5
            }, {
                id: 'SHAPE_PENTODE7uC7hj2',
                shape: {
                    type: 'Path',
                    data: 'M 20 , 36 L 35 , 36'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 27.5,
                offsetY: 36.5
            }, {
                id: 'SHAPE_PENTODE8HSvr6N',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 36 L 58 , 36'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 36.5
            }, {
                id: 'SHAPE_PENTODE9e6j0IF',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 36 L 80 , 36'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 72.5,
                offsetY: 36.5
            }, {
                id: 'SHAPE_PENTODE10bQveYX',
                shape: {
                    type: 'Path',
                    data: 'M 20 , 46 L 35 , 46'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 27.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_PENTODE11hcJ2dD',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 46 L 58 , 46'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_PENTODE12FMiKbX',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 46 L 80 , 46'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 72.5,
                offsetY: 46.5
            }, {
                id: 'SHAPE_PENTODE13YMYjj4',
                shape: {
                    type: 'Path',
                    data: 'M 20 , 56 L 35 , 56'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 27.5,
                offsetY: 56.5
            }, {
                id: 'SHAPE_PENTODE14TQh5rO',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 56 L 58 , 56'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 56.5
            }, {
                id: 'SHAPE_PENTODE15ZAxIAh',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 56 L 80 , 56'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 72.5,
                offsetY: 56.5
            }, {
                id: 'SHAPE_PENTODE',
                'children': ['SHAPE_PENTODE2XTlNSI', 'SHAPE_PENTODE3cXRurM', 'SHAPE_PENTODE4QroQCT', 'SHAPE_PENTODE5P4HhCh', 'SHAPE_PENTODE6fyidrq', 'SHAPE_PENTODE7uC7hj2', 'SHAPE_PENTODE8HSvr6N', 'SHAPE_PENTODE9e6j0IF', 'SHAPE_PENTODE10bQveYX', 'SHAPE_PENTODE11hcJ2dD', 'SHAPE_PENTODE12FMiKbX', 'SHAPE_PENTODE13YMYjj4', 'SHAPE_PENTODE14TQh5rO', 'SHAPE_PENTODE15ZAxIAh']
            }, {
                id: 'SHAPE_PHOTOCELL2bNLfma',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 77,
                height: 77,
                offsetX: 49,
                offsetY: 50
            }, {
                id: 'SHAPE_PHOTOCELL3z2mR6P',
                shape: {
                    type: 'Path',
                    data: 'M36 79 42.97 73 54.97 73 62 79'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 26,
                height: 6,
                offsetX: 49,
                offsetY: 76
            }, {
                id: 'SHAPE_PHOTOCELL4FRt7si',
                shape: {
                    type: 'Path',
                    data: 'M 42 , 23 L 57 , 23'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 49.5,
                offsetY: 23.5
            }, {
                id: 'SHAPE_PHOTOCELL5pQXhyD',
                shape: {
                    type: 'Path',
                    data: 'M 49.5 , 11.5 L 49.5 , 23'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 11.5,
                offsetX: 50,
                offsetY: 17.25
            }, {
                id: 'SHAPE_PHOTOCELL6bOB4Nk',
                shape: {
                    type: 'Path',
                    data: 'M41.5,95V85A7.5,7.5,0,0,1,49,77.5h0A7.5,7.5,0,0,1,56.5,85V95'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.000003814697266,
                height: 17.5,
                offsetX: 49.00000190734863,
                offsetY: 86.25
            }, {
                id: 'SHAPE_PHOTOCELL77ddiVx',
                shape: {
                    type: 'Path',
                    data: 'M71.5 9.5 71.5 12.5 74.5 12.5 71.5 9.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 3,
                height: 3,
                offsetX: 73,
                offsetY: 11
            }, {
                id: 'SHAPE_PHOTOCELL8bugR0Z',
                shape: {
                    type: 'Path',
                    data: 'M 73.02 , 11.29 L 79.38 , 4.93'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6.3600006103515625,
                height: 6.360000133514404,
                offsetX: 76.19999694824219,
                offsetY: 8.109999895095825
            }, {
                id: 'SHAPE_PHOTOCELL9pQ922x',
                shape: {
                    type: 'Path',
                    data: 'M77.5 15.5 77.5 18.5 80.5 18.5 77.5 15.5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 3,
                height: 3,
                offsetX: 79,
                offsetY: 17
            }, {
                id: 'SHAPE_PHOTOCELL10piIxty',
                shape: {
                    type: 'Path',
                    data: 'M 79.02 , 17.29 L 85.38 , 10.93'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 6.3600006103515625,
                height: 6.3600006103515625,
                offsetX: 82.19999694824219,
                offsetY: 14.110000610351562
            }, {
                id: 'SHAPE_PHOTOCELL',
                'children': ['SHAPE_PHOTOCELL2bNLfma', 'SHAPE_PHOTOCELL3z2mR6P', 'SHAPE_PHOTOCELL4FRt7si', 'SHAPE_PHOTOCELL5pQXhyD', 'SHAPE_PHOTOCELL6bOB4Nk', 'SHAPE_PHOTOCELL77ddiVx', 'SHAPE_PHOTOCELL8bugR0Z', 'SHAPE_PHOTOCELL9pQ922x', 'SHAPE_PHOTOCELL10piIxty']
            }, {
                id: 'SHAPE_TEDRODE2xvE6D8',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 77,
                height: 77,
                offsetX: 50,
                offsetY: 47
            }, {
                id: 'SHAPE_TEDRODE3vxXWvc',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 8.5 L 50.5 , 20'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 11.5,
                offsetX: 51,
                offsetY: 14.25
            }, {
                id: 'SHAPE_TEDRODE4ZMVHTf',
                shape: {
                    type: 'Path',
                    data: 'M42.5,92V82A7.5,7.5,0,0,1,50,74.5h0A7.5,7.5,0,0,1,57.5,82V92'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.000003814697266,
                height: 17.5,
                offsetX: 50.00000190734863,
                offsetY: 83.25
            }, {
                id: 'SHAPE_TEDRODE5l6F0pe',
                shape: {
                    type: 'Path',
                    data: 'M37 76 43.97 70 55.97 70 63 76'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 26,
                height: 6,
                offsetX: 50,
                offsetY: 73
            }, {
                id: 'SHAPE_TEDRODE6hTwgBJ',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 20 L 58 , 20'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 20.5
            }, {
                id: 'SHAPE_TEDRODE73qvBH2',
                shape: {
                    type: 'Path',
                    data: 'M 20 , 42 L 35 , 42'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 27.5,
                offsetY: 42.5
            }, {
                id: 'SHAPE_TEDRODE8ZIaCQ5',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 42 L 58 , 42'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 42.5
            }, {
                id: 'SHAPE_TEDRODE9x68gES',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 42 L 80 , 42'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 72.5,
                offsetY: 42.5
            }, {
                id: 'SHAPE_TEDRODE10igAcRd',
                shape: {
                    type: 'Path',
                    data: 'M 20 , 52 L 35 , 52'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 27.5,
                offsetY: 52.5
            }, {
                id: 'SHAPE_TEDRODE11Bgh138',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 52 L 58 , 52'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 52.5
            }, {
                id: 'SHAPE_TEDRODE12K9DWjw',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 52 L 80 , 52'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 72.5,
                offsetY: 52.5
            }, {
                id: 'SHAPE_TEDRODE',
                'children': ['SHAPE_TEDRODE2xvE6D8', 'SHAPE_TEDRODE3vxXWvc', 'SHAPE_TEDRODE4ZMVHTf', 'SHAPE_TEDRODE5l6F0pe', 'SHAPE_TEDRODE6hTwgBJ', 'SHAPE_TEDRODE73qvBH2', 'SHAPE_TEDRODE8ZIaCQ5', 'SHAPE_TEDRODE9x68gES', 'SHAPE_TEDRODE10igAcRd', 'SHAPE_TEDRODE11Bgh138', 'SHAPE_TEDRODE12K9DWjw']
            }, {
                id: 'SHAPE_TRIODE2wp3oKk',
                shape: {
                    type: 'Basic',
                    shape: 'Ellipse'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 77,
                height: 77,
                offsetX: 50,
                offsetY: 48
            }, {
                id: 'SHAPE_TRIODE3BxKnO6',
                shape: {
                    type: 'Path',
                    data: 'M 50.5 , 9.5 L 50.5 , 21'
                },
                style: {
                    fill: '#fff',
                    strokeColor: '#000'
                },
                width: 1,
                height: 11.5,
                offsetX: 51,
                offsetY: 15.25
            }, {
                id: 'SHAPE_TRIODE45HyO9T',
                shape: {
                    type: 'Path',
                    data: 'M42.5,93V83A7.5,7.5,0,0,1,50,75.5h0A7.5,7.5,0,0,1,57.5,83V93'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 15.000003814697266,
                height: 17.5,
                offsetX: 50.00000190734863,
                offsetY: 84.25
            }, {
                id: 'SHAPE_TRIODE5llN2t0',
                shape: {
                    type: 'Path',
                    data: 'M37 77 43.97 71 55.97 71 63 77'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 26,
                height: 6,
                offsetX: 50,
                offsetY: 74
            }, {
                id: 'SHAPE_TRIODE66fZHof',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 21 L 58 , 21'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 21.5
            }, {
                id: 'SHAPE_TRIODE7OnFcNB',
                shape: {
                    type: 'Path',
                    data: 'M 20 , 48 L 35 , 48'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 27.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_TRIODE84L6MQn',
                shape: {
                    type: 'Path',
                    data: 'M 43 , 48 L 58 , 48'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 50.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_TRIODE9WThrF7',
                shape: {
                    type: 'Path',
                    data: 'M 65 , 48 L 80 , 48'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000',
                    strokeWidth: 2
                },
                width: 15,
                height: 1,
                offsetX: 72.5,
                offsetY: 48.5
            }, {
                id: 'SHAPE_TRIODE',
                'children': ['SHAPE_TRIODE2wp3oKk', 'SHAPE_TRIODE3BxKnO6', 'SHAPE_TRIODE45HyO9T', 'SHAPE_TRIODE5llN2t0', 'SHAPE_TRIODE66fZHof', 'SHAPE_TRIODE7OnFcNB', 'SHAPE_TRIODE84L6MQn', 'SHAPE_TRIODE9WThrF7']
            }];
        for (let i = 0; i < vaccumShapes.length; i++) {
            if(!vaccumShapes[i].children) {
                vaccumShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            vaccumShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return vaccumShapes;
    }

    private getElectricalWaveformsShapes(): NodeModel[] {
        let WaveformsShapes: NodeModel[] = [
            {
                id: 'SHAPE_CHOPPEDSQUAREWAVE2rJmtK7',
                shape: {
                    type: 'Path',
                    data: 'M5.49,49,15.38,9.5H40.11l19.78,79H84.62L94.51,49'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 89.02000427246094,
                height: 79,
                offsetX: 50.00000190734863,
                offsetY: 49
            }, {
                id: 'SHAPE_CHOPPEDSQUAREWAVE',
                'children': ['SHAPE_CHOPPEDSQUAREWAVE2rJmtK7']
            }, {
                id: 'SHAPE_PULSE2TZd6MK',
                shape: {
                    type: 'Path',
                    data: 'M96,4.5H70.5v90h-40V4.5H5'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 91,
                height: 90,
                offsetX: 50.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_PULSE',
                'children': ['SHAPE_PULSE2TZd6MK']
            }, {
                id: 'SHAPE_PULSE12Wz2JTO',
                shape: {
                    type: 'Path',
                    data: 'M4,94.5H29.5V4.5h40v90H95'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 91,
                height: 90,
                offsetX: 49.5,
                offsetY: 49.5
            }, {
                id: 'SHAPE_PULSE1',
                'children': ['SHAPE_PULSE12Wz2JTO']
            }, {
                id: 'SHAPE_SAWTOOTH23iQXaS',
                shape: {
                    type: 'Path',
                    data: 'M5.41,70.47,35.5,30.53V70.46l29-39.92V70.47l30-39.94V71'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 89.08999633789062,
                height: 40.470001220703125,
                offsetX: 49.95499801635742,
                offsetY: 50.76500129699707
            }, {
                id: 'SHAPE_SAWTOOTH',
                'children': ['SHAPE_SAWTOOTH23iQXaS']
            }, {
                id: 'SHAPE_SINEWAVE2OntGon',
                shape: {
                    type: 'Path',
                    data: 'M14.21,51.58S15.6,17.11,32,15.87c0,0,17-2.09,17.79,35.71'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 35.58000183105469,
                height: 35.7307243347168,
                offsetX: 32.000000953674316,
                offsetY: 33.714640617370605
            }, {
                id: 'SHAPE_SINEWAVE3MNMsOL',
                shape: {
                    type: 'Path',
                    data: 'M85.36,51.09S84,85.55,67.57,86.8c0,0-16.95,2.08-17.78-35.72'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 35.56999969482422,
                height: 35.740447998046875,
                offsetX: 67.57500076293945,
                offsetY: 68.95022583007812
            }, {
                id: 'SHAPE_SINEWAVE',
                'children': ['SHAPE_SINEWAVE2OntGon', 'SHAPE_SINEWAVE3MNMsOL']
            }, {
                id: 'SHAPE_SQUAREWAVE2brAxAJ',
                shape: {
                    type: 'Path',
                    data: 'M5.5,51V10.5h45v80h45V51'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 90,
                height: 80,
                offsetX: 50.5,
                offsetY: 50.5
            }, {
                id: 'SHAPE_SQUAREWAVE',
                'children': ['SHAPE_SQUAREWAVE2brAxAJ']
            }, {
                id: 'SHAPE_STEP-302NI72U5',
                shape: {
                    type: 'Path',
                    data: 'M7,94.5H51.5V4.5H97'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 90,
                height: 90,
                offsetX: 52,
                offsetY: 49.5
            }, {
                id: 'SHAPE_STEP-30',
                'children': ['SHAPE_STEP-302NI72U5']
            }, {
                id: 'SHAPE_STEP-312MRixVb',
                shape: {
                    type: 'Path',
                    data: 'M6,4.5H50.5v90H96'
                },
                style: {
                    fill: 'none',
                    strokeColor: '#000'
                },
                width: 90,
                height: 90,
                offsetX: 51,
                offsetY: 49.5
            }, {
                id: 'SHAPE_STEP-31',
                'children': ['SHAPE_STEP-312MRixVb']
            }];
        for (let i = 0; i < WaveformsShapes.length; i++) {
            if(!WaveformsShapes[i].children) {
                WaveformsShapes[i].constraints = NodeConstraints.Default & ~NodeConstraints.Select;
            }
            WaveformsShapes[i].addInfo = { type: 'CustomShapes' };
        }
        return WaveformsShapes;
    }

    public getElectricalShapes(): PaletteModel[] {
        return [
            { id: 'electricalAudio', expanded: false, symbols: this.getElectricalAudioShapes(), title: 'Electrical / Audio' },
            { id: 'electricalCapacitors', expanded: false, symbols: this.getElectricalCapcitorsShapes(), title: 'Electrical / Capacitors' },
            { id: 'electricalDiodes', expanded: false, symbols: this.getElectricalDiodesShapes(), title: 'Electrical / Diodes' },
            { id: 'electricalGates', expanded: false, symbols: this.getElectricalGatesShapes(), title: 'Electrical / Gates' },
            { id: 'electricalInductors', expanded: false, symbols: this.getElectricalInductorsShapes(), title: 'Electrical / Inductors' },
            { id: 'electricalInstruments', expanded: false, symbols: this.getElectricalInstrumentsShapes(), title: 'Electrical / Instruments' },
            { id: 'electricalMisc', expanded: false, symbols: this.getElectricalMiscShapes(), title: 'Electrical / Misc' },
            { id: 'electricalOptical', expanded: false, symbols: this.getElectricalOpticalShapes(), title: 'Electrical / Optical' },
            { id: 'electricalPLC', expanded: false, symbols: this.getElectricalLadderShapes(), title: 'Electrical / PLC Ladder' },
            { id: 'electricalResistors', expanded: false, symbols: this.getElectricalResistorShapes(), title: 'Electrical / Resistors' },
            { id: 'electricalRotatingEquipments', expanded: false, symbols: this.getElectricalEquipmentShapes(), title: 'Electrical / Rotating Equipment and Mechanical Functions' },
            { id: 'electricalSources', expanded: false, symbols: this.getElectricalSourcesShapes(), title: 'Electrical / Sources' },
            { id: 'electricalSwitches', expanded: false, symbols: this.getElectricalSwitchesShapes(), title: 'Electrical / Switches and Relays' },
            { id: 'electricalTransmission', expanded: false, symbols: this.getElectricalTransmissionShapes(), title: 'Electrical / Transmission Path' },
            { id: 'electricalTransistors', expanded: false, symbols: this.getElectricalTransistorsShapes(), title: 'Electrical / Transistors' },
            { id: 'electricalVaccum', expanded: false, symbols: this.getElectricalVaccumShapes(), title: 'Electrical / Vaccum Tubes' },
            { id: 'electricalWaveForms', expanded: false, symbols: this.getElectricalWaveformsShapes(), title: 'Electrical / Waveforms' },
        ];
    }
}
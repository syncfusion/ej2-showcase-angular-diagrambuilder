
/**
 *  Home page handler
 */

import {
    NodeModel, NodeConstraints, ShapeAnnotationModel, PointModel, ConnectorModel,
    Diagram, ConnectorConstraints, Node, TextStyle, TextStyleModel, SelectorConstraints, 
    TextAlign, HorizontalAlignment, VerticalAlignment, LinearGradient
} from '@syncfusion/ej2-diagrams';
import { SelectorViewModel } from './selector';
import { Dialog } from '@syncfusion/ej2-angular-popups';
import { MindMapUtilityMethods, MindMap } from './mindmap';
import { OrgChartUtilityMethods, OrgChartData } from './orgchart';
import { Toolbar, ContextMenu } from '@syncfusion/ej2-angular-navigations';
import { PageCreation } from './pages';
import { Ajax } from '@syncfusion/ej2-base';


export class PaperSize {
    public pageWidth: number;
    public pageHeight: number;
}

export class UtilityMethods {

    public page: PageCreation;
    public tempDialog: Dialog;
    public toolbarEditor: Toolbar;

    public bindNodeProperties(node: NodeModel, selectedItem: SelectorViewModel): void {
        selectedItem.preventPropertyChange = true;
        selectedItem.nodeProperties.offsetX = (Math.round(node.offsetX * 100) / 100);
        selectedItem.nodeProperties.offsetY = (Math.round(node.offsetY * 100) / 100);
        selectedItem.nodeProperties.width = node.width ? (Math.round(node.width * 100) / 100) : (Math.round(node.minWidth * 100) / 100);
        selectedItem.nodeProperties.height = node.height ? (Math.round(node.height * 100) / 100) : (Math.round(node.minHeight * 100) / 100);
        selectedItem.nodeProperties.rotateAngle = node.rotateAngle;
        selectedItem.nodeProperties.strokeColor = this.getHexColor(node.style.strokeColor);
        selectedItem.nodeProperties.strokeStyle = node.style.strokeDashArray ? node.style.strokeDashArray : 'None';
        selectedItem.nodeProperties.strokeWidth = node.style.strokeWidth;
        selectedItem.nodeProperties.fillColor = this.getHexColor(node.style.fill);
        selectedItem.nodeProperties.opacity = node.style.opacity * 100;
        selectedItem.nodeProperties.opacityText = selectedItem.nodeProperties.opacity + '%';
        selectedItem.nodeProperties.aspectRatio = node.constraints & NodeConstraints.AspectRatio ? true : false;
        selectedItem.nodeProperties.gradient = node.style.gradient.type !== 'None' ? true : false;
        let gradientElement: HTMLElement = document.getElementById('gradientStyle');
        if (selectedItem.nodeProperties.gradient) {
            gradientElement.className = 'row db-prop-row db-gradient-style-show';
            selectedItem.nodeProperties.gradientColor = node.style.gradient.stops[1].color;
            let gradient: LinearGradient = node.style.gradient as LinearGradient;
            if (gradient.x1) {
                selectedItem.nodeProperties.gradientDirection = 'North';
            } else if (gradient.x2) {
                selectedItem.nodeProperties.gradientDirection = 'East';
            } else if (gradient.y1) {
                selectedItem.nodeProperties.gradientDirection = 'West';
            } else if (gradient.y2) {
                selectedItem.nodeProperties.gradientDirection = 'South';
            }
        } else {
            gradientElement.className = 'row db-prop-row db-gradient-style-hide';
            selectedItem.nodeProperties.gradientColor = '#ffffff';
            selectedItem.nodeProperties.gradientDirection = 'South';
        }
        selectedItem.preventPropertyChange = false;
    }

    public bindMindMapProperties(node: NodeModel, selectedItem: SelectorViewModel): void {
        selectedItem.preventPropertyChange = true;
        selectedItem.mindmapSettings.stroke = node.style.strokeColor;
        selectedItem.mindmapSettings.strokeStyle = node.style.strokeDashArray ? node.style.strokeDashArray : 'None';
        selectedItem.mindmapSettings.strokeWidth = node.style.strokeWidth;
        selectedItem.mindmapSettings.fill = node.style.fill;
        selectedItem.mindmapSettings.opacity = (node.style.opacity || 1) * 100;
        selectedItem.mindmapSettings.opacityText = (selectedItem.mindmapSettings.opacity || '100') + '%';
        if (node.annotations.length > 0) {
            let annotation: TextStyle = node.annotations[0].style as TextStyle;
            selectedItem.mindmapSettings.fontFamily = annotation.fontFamily;
            selectedItem.mindmapSettings.fontColor = annotation.color;
            selectedItem.mindmapSettings.fontSize = annotation.fontSize;
            selectedItem.mindmapSettings.textOpacity = (annotation.opacity || 1) * 100;
            selectedItem.mindmapSettings.textOpacityText = (selectedItem.mindmapSettings.textOpacity || '100') + '%';
        }
        selectedItem.preventPropertyChange = false;
    }

    public bindTextProperties(text: TextStyleModel, selectedItem: SelectorViewModel): void {
        selectedItem.preventPropertyChange = true;
        selectedItem.textProperties.fontColor = this.getHexColor(text.color);
        selectedItem.textProperties.fontFamily = text.fontFamily;
        selectedItem.textProperties.fontSize = text.fontSize;
        selectedItem.textProperties.opacity = text.opacity * 100;
        selectedItem.textProperties.opacityText = selectedItem.textProperties.opacity + '%';
        let toolbarTextStyle: any = document.getElementById('toolbarTextStyle');
        if (toolbarTextStyle) {
            toolbarTextStyle = toolbarTextStyle.ej2_instances[0];
        }
        if (toolbarTextStyle) {
            toolbarTextStyle.items[0].cssClass = text.bold ? 'tb-item-start tb-item-selected' : 'tb-item-start';
            toolbarTextStyle.items[1].cssClass = text.italic ? 'tb-item-middle tb-item-selected' : 'tb-item-middle';
            toolbarTextStyle.items[2].cssClass = text.textDecoration === 'Underline' ? 'tb-item-end tb-item-selected' : 'tb-item-end';
        }
        this.updateTextAlign(text.textAlign);
        selectedItem.preventPropertyChange = false;
    }

    public updateTextAlign(textAlign: TextAlign): void {
        let toolbarTextSubAlignment: any = document.getElementById('toolbarTextSubAlignment');
        if (toolbarTextSubAlignment) {
            toolbarTextSubAlignment = toolbarTextSubAlignment.ej2_instances[0];
        }
        if (toolbarTextSubAlignment) {
            for (let i: number = 0; i < toolbarTextSubAlignment.items.length; i++) {
                toolbarTextSubAlignment.items[i].cssClass = toolbarTextSubAlignment.items[i].cssClass.replace(' tb-item-selected', '');
            }
            let index: number = textAlign === 'Left' ? 0 : (textAlign === 'Center' ? 1 : 2)
            toolbarTextSubAlignment.items[index].cssClass = toolbarTextSubAlignment.items[index].cssClass + ' tb-item-selected';
        }
    }

    public updateHorVertAlign(horizontalAlignment: HorizontalAlignment, verticalAlignment: VerticalAlignment): void {
        let toolbarHorVerAlignment: any = document.getElementById('toolbarTextAlignment');
        if (toolbarHorVerAlignment) {
            toolbarHorVerAlignment = toolbarHorVerAlignment.ej2_instances[0];
        }
        if (toolbarHorVerAlignment) {
            for (let i: number = 0; i < toolbarHorVerAlignment.items.length; i++) {
                toolbarHorVerAlignment.items[i].cssClass = toolbarHorVerAlignment.items[i].cssClass.replace(' tb-item-selected', '');
            }
            let index: number = horizontalAlignment === 'Right' ? 0 : (horizontalAlignment === 'Center' ? 1 : 2);
            toolbarHorVerAlignment.items[index].cssClass = toolbarHorVerAlignment.items[index].cssClass + ' tb-item-selected';
            index = verticalAlignment === 'Bottom' ? 3 : (verticalAlignment === 'Center' ? 4 : 5);
            toolbarHorVerAlignment.items[index].cssClass = toolbarHorVerAlignment.items[index].cssClass + ' tb-item-selected';
        }
    }

    public bindConnectorProperties(connector: ConnectorModel, selectedItem: SelectorViewModel): void {
        selectedItem.preventPropertyChange = true;
        selectedItem.connectorProperties.lineColor = this.getHexColor(connector.style.strokeColor);
        selectedItem.connectorProperties.lineStyle = connector.style.strokeDashArray ? connector.style.strokeDashArray : 'None';
        selectedItem.connectorProperties.lineType = connector.type;
        selectedItem.connectorProperties.lineWidth = connector.style.strokeWidth;
        selectedItem.connectorProperties.sourceType = connector.sourceDecorator.shape;
        selectedItem.connectorProperties.targetType = connector.targetDecorator.shape;
        selectedItem.connectorProperties.opacity = connector.style.opacity * 100;
        selectedItem.connectorProperties.opacityText = selectedItem.connectorProperties.opacity + '%';
        selectedItem.connectorProperties.lineJumpSize = connector.bridgeSpace;
        selectedItem.connectorProperties.lineJump = connector.constraints & ConnectorConstraints.Bridging ? true : false;
        if (selectedItem.connectorProperties.lineJump) {
            document.getElementById('lineJumpSizeDiv').style.display = '';
        } else {
            document.getElementById('lineJumpSizeDiv').style.display = 'none';
        }
        selectedItem.connectorProperties.targetSize = connector.targetDecorator.width;
        selectedItem.connectorProperties.sourceSize = connector.sourceDecorator.width;
        selectedItem.preventPropertyChange = false;
    }

    public getHexColor(colorStr: string): string {
        let a: HTMLDivElement = document.createElement('div');
        a.style.color = colorStr;
        let colors: number[] = window.getComputedStyle(document.body.appendChild(a)).color.match(/\d+/g).map(
            (a: string): number => {
                return parseInt(a, 10);
            }
        );
        document.body.removeChild(a);
        return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : '';
    }

    public getOffset(position: string): PointModel {
        switch (position.toLowerCase()) {
            case 'topleft':
                return { x: 0, y: 0 };
            case 'topcenter':
                return { x: 0.5, y: 0 };
            case 'topright':
                return { x: 1, y: 0 };
            case 'middleleft':
                return { x: 0, y: 0.5 };
            default:
                return { x: 0.5, y: 0.5 };
            case 'middleright':
                return { x: 1, y: 0.5 };
            case 'bottomleft':
                return { x: 0, y: 1 };
            case 'bottomcenter':
                return { x: 0.5, y: 1 };
            case 'bottomright':
                return { x: 1, y: 1 };
        }
    }

    public getPosition(offset: PointModel): string {
        if (offset.x === 0 && offset.y === 0) {
            return 'TopLeft';
        } else if (offset.x === 0.5 && offset.y === 0) {
            return 'TopCenter';
        } else if (offset.x === 1 && offset.y === 0) {
            return 'TopRight';
        } else if (offset.x === 0 && offset.y === 0.5) {
            return 'MiddleLeft';
        } else if (offset.x === 1 && offset.y === 0.5) {
            return 'MiddleRight';
        } else if (offset.x === 0 && offset.y === 1) {
            return 'BottomLeft';
        } else if (offset.x === 0.5 && offset.y === 1) {
            return 'BottomCenter';
        } else if (offset.x === 1 && offset.y === 1) {
            return 'BottomRight';
        } else {
            return 'Center';
        }
    }

    public hideElements(elementType: string, diagram?: Diagram): void {
        let diagramContainer: HTMLElement = document.getElementsByClassName('diagrambuilder-container')[0] as HTMLElement;
        if (diagramContainer.classList.contains(elementType)) {
            diagramContainer.classList.remove(elementType);
        } else {
            diagramContainer.classList.add(elementType);
        }
        if (diagram) {
            diagram.updateViewPort();
        }
    }

    public objectTypeChange(objectType: string): void {
        document.getElementById('diagramPropertyContainer').style.display = 'none';
        document.getElementById('nodePropertyContainer').style.display = 'none';
        document.getElementById('textPropertyContainer').style.display = 'none';
        document.getElementById('connectorPropertyContainer').style.display = 'none';
        switch (objectType) {
            case 'diagram':
                document.getElementById('diagramPropertyContainer').style.display = '';
                break;
            case 'node':
                document.getElementById('nodePropertyContainer').style.display = '';
                break;
            case 'connector':
                document.getElementById('connectorPropertyContainer').style.display = '';
                break;
        }
    }

    public getDefaultDiagramTemplates1(selectedItem: SelectorViewModel, tempCount?: number, backgroundColor?: string, parentId?: string): void {
        tempCount = tempCount ? tempCount : 4;
        backgroundColor = backgroundColor ? backgroundColor : 'red';
        parentId = parentId ? parentId : 'Flow Chart';
        let parentDiv: HTMLDivElement = document.getElementById('diagramTemplateDiv1') as HTMLDivElement;
        parentDiv = parentDiv.cloneNode(true) as HTMLDivElement;
        parentDiv.id = '';
        parentDiv.style.display = '';

        let parentElements: HTMLCollectionOf<HTMLDivElement> =
            parentDiv.getElementsByClassName('db-diagram-template-parent-text') as HTMLCollectionOf<HTMLDivElement>;

        for (let i: number = 0; i < parentElements.length; i++) {
            if (parentElements[i].children[0].innerHTML.trim() === parentId) {
                parentElements[i].classList.add('active');
            }
            parentElements[i].onclick = this.showDiagramTemplates.bind(this, selectedItem);
        }

        let diagramTemplatesDiv: HTMLDivElement = parentDiv.getElementsByClassName('diagramTemplates')[0] as HTMLDivElement;
        diagramTemplatesDiv.appendChild(this.generateDiagramTemplates(tempCount, backgroundColor, parentId, selectedItem));
        this.tempDialog.content = parentDiv.outerHTML;
        this.triggerTemplateEvent(selectedItem);
    }

    public generateDiagramTemplates(tempCount: number, backgroundColor: string, parentId: string, selectedItem: SelectorViewModel): HTMLDivElement {

        let parentTemplateDiv: HTMLDivElement = document.createElement('div');
        parentTemplateDiv.classList.add('class', 'db-parent-diagram-template');

        let divElement: HTMLDivElement = document.getElementById('diagramTemplateDiv') as HTMLDivElement;
        for (let i: number = 0; i < tempCount; i++) {
            let cloneTemplateDiv: HTMLDivElement = divElement.cloneNode(true) as HTMLDivElement;
            cloneTemplateDiv.style.display = '';
            cloneTemplateDiv.id = '';
            let imageDiv: HTMLDivElement = cloneTemplateDiv.children[0] as HTMLDivElement;
            imageDiv.setAttribute('id', parentId.replace(' ', '').toLowerCase() + '_child' + i);
            imageDiv.onclick = this.generateDiagram.bind(this, selectedItem);
            let diagramType: { [key: string]: string } = this.getImageSource(parentId, i);
            (imageDiv.children[0] as HTMLDivElement).style.backgroundImage = 'url(' + diagramType.source + ')';
            if (diagramType.type) {
                if (diagramType.type === 'svg_blank') {
                    (imageDiv.children[0] as HTMLDivElement).className = 'db-diagram-template-svg-blank-image';
                } else {
                    (imageDiv.children[0] as HTMLDivElement).className = 'db-diagram-template-svg-image';
                }
            } else {
                (imageDiv.children[0] as HTMLDivElement).className = 'db-diagram-template-image';
            }
            cloneTemplateDiv.children[1].children[0].innerHTML = diagramType.name;
            parentTemplateDiv.appendChild(cloneTemplateDiv);
        }
        return parentTemplateDiv;
    }

    public triggerTemplateEvent(selectedItem: SelectorViewModel): void {
        let parentElements: HTMLCollectionOf<HTMLDivElement> =
            document.getElementsByClassName('db-diagram-template-parent-text') as HTMLCollectionOf<HTMLDivElement>;
        for (let i: number = 0; i < parentElements.length; i++) {
            parentElements[i].onclick = this.showDiagramTemplates.bind(this, selectedItem);
        }

        let parentElements1: HTMLCollectionOf<HTMLDivElement> =
            document.getElementsByClassName('db-diagram-template-image-div') as HTMLCollectionOf<HTMLDivElement>;
        for (let i: number = 0; i < parentElements1.length; i++) {
            parentElements1[i].onclick = this.generateDiagram.bind(this, selectedItem);
        }
    }

    public flowChartImage: { [key: string]: string }[] = [
        { source: './assets/dbstyle/common_images/blank_diagram.svg', name: 'Blank Diagram', type: 'svg_blank' },
        { source: './assets/dbstyle/flowchart_Images/Credit_Card_Processing.svg', name: 'Credit Card Processing', type: 'svg_image' },
        { source: './assets/dbstyle/flowchart_Images/Bank_Teller_Flow.svg', name: 'Banking Teller Process Flow', type: 'svg_image' },
        { source: './assets/dbstyle/flowchart_Images/Developer_Workflow.SVG', name: 'Agile"s Developer Workflow', type: 'svg_image' },
    ];

    public mindMapImage: { [key: string]: string }[] = [
        { source: './assets/dbstyle/common_images/blank_diagram_mind.svg', name: 'Blank Diagram', type: 'svg_image' },
        { source: './assets/dbstyle/mindmap_images/BusinessPlanning.SVG', name: 'Business Planning', type: 'svg_image' },
        { source: './assets/dbstyle/mindmap_images/TQM.SVG', name: 'Quality Management', type: 'svg_image' },
        { source: './assets/dbstyle/mindmap_images/SoftwareLifeCycle.SVG', name: 'Software Life Cycle', type: 'svg_image' },
    ];

    public orgChartImage: { [key: string]: string }[] = [
        { source: './assets/dbstyle/common_images/blank_diagram_org.svg', name: 'Blank Diagram', type: 'svg_image' },
        { source: './assets/dbstyle/orgchart_images/OrgRenderingStyle_1.svg', name: 'Org Template Style - 1', type: 'svg_image' },
        { source: './assets/dbstyle/orgchart_images/OrgRenderingStyle_2.svg', name: 'Org Template Style - 2', type: 'svg_image' },
        { source: './assets/dbstyle/orgchart_images/OrgRenderingStyle_3.svg', name: 'Org Template Style - 3', type: 'svg_image' },
    ];

    public bpmnImage: { [key: string]: string }[] = [
        { source: './assets/dbstyle/common_images/blank_diagram.svg', name: 'Blank Diagram', type: 'svg_blank' },
        { source: './assets/dbstyle/bpmn_images/Template1.png', name: 'BPMN Diagram 1' },
        { source: './assets/dbstyle/bpmn_images/Template1.png', name: 'BPMN Diagram 2' },
        { source: './assets/dbstyle/bpmn_images/Template1.png', name: 'BPMN Diagram 3' },
    ];

    public getImageSource(diagramType: string, index: number): { [key: string]: string } {
        switch (diagramType) {
            case 'Flow Chart':
                return this.flowChartImage[index];
            case 'Mind Map':
                return this.mindMapImage[index];
            case 'Org Chart':
                return this.orgChartImage[index];
            default:
                return this.bpmnImage[index];
        }
    }

    public readTextFile(file: string, selectedItem: SelectorViewModel): void {
        (document.getElementsByClassName('sb-content-overlay')[0] as HTMLDivElement).style.display = '';
        let ajax: Ajax = new Ajax(file, 'GET', true);
        ajax.send().then();
        let context: any = this;
        ajax.onSuccess = (data: string): void => {
            selectedItem.preventSelectionChange = true;
            selectedItem.isTemplateLoad = true;
            this.page.loadPage(data);
            this.page.loadDiagramSettings();
            selectedItem.isTemplateLoad = false;
            if (selectedItem.diagramType === 'MindMap') {
                let rootNode: Node = MindMapUtilityMethods.getNode(selectedItem.selectedDiagram.nodes, 'rootNode');
                selectedItem.utilityMethods.bindMindMapProperties(rootNode, selectedItem);
            }
            if (selectedItem.diagramType === 'OrgChart') {
                selectedItem.selectedDiagram.layout.getLayoutInfo = OrgChartUtilityMethods.getLayoutInfo.bind(OrgChartUtilityMethods);
                selectedItem.selectedDiagram.selectedItems.userHandles = OrgChartUtilityMethods.handle;
                selectedItem.selectedDiagram.selectedItems.constraints = SelectorConstraints.UserHandle;
                selectedItem.selectedDiagram.dataBind();
            }
            selectedItem.preventSelectionChange = false;
            (document.getElementsByClassName('sb-content-overlay')[0] as HTMLDivElement).style.display = 'none';
        };
        ajax.onFailure = (data: string): void => {
            (document.getElementsByClassName('sb-content-overlay')[0] as HTMLDivElement).style.display = 'none';
        };
        ajax.onError = (evt: Event): object => {
            (document.getElementsByClassName('sb-content-overlay')[0] as HTMLDivElement).style.display = 'none';
            return null;
        };
    }

    public generateDiagram(selectedItem: SelectorViewModel, evt: MouseEvent): void {
        let diagramContainer: HTMLElement = document.getElementsByClassName('diagrambuilder-container')[0] as HTMLElement;
        let target: HTMLDivElement = evt.target as HTMLDivElement;
        if (target.id.startsWith('mindmap')) {
            selectedItem.diagramType = 'MindMap';
            MindMapUtilityMethods.selectedItem = selectedItem;
            let mindMapObject: MindMap = new MindMap(selectedItem);
            if (target.id === 'mindmap_child0') {
                mindMapObject.createMindMap(true);
                MindMapUtilityMethods.templateType = 'template1';
            } else if (target.id === 'mindmap_child1') {
                mindMapObject.createMindMap(false);
                this.readTextFile('./assets/dbstyle/mindmap_images/BusinessPlanning.json', selectedItem);
                MindMapUtilityMethods.templateType = 'template1';
            } else if (target.id === 'mindmap_child2') {
                mindMapObject.createMindMap(false);
                this.readTextFile('./assets/dbstyle/mindmap_images/TQM.json', selectedItem);
                MindMapUtilityMethods.templateType = 'template2';
            } else if (target.id === 'mindmap_child3') {
                mindMapObject.createMindMap(false);
                this.readTextFile('./assets/dbstyle/mindmap_images/SoftwareDevelopmentLifeCycle.json', selectedItem);
                MindMapUtilityMethods.templateType = 'template1';
            }
            this.hideMenuItems();
            diagramContainer.classList.add('custom-diagram');
        } else if (target.id.startsWith('orgchart')) {
            selectedItem.diagramType = 'OrgChart';
            OrgChartUtilityMethods.selectedItem = selectedItem;
            let orgChartObject: OrgChartData = new OrgChartData(selectedItem);
            if (target.id === 'orgchart_child0') {
                orgChartObject.createOrgChart(true);
            } else {
                OrgChartUtilityMethods.subTreeOrientation = 'Horizontal';
                OrgChartUtilityMethods.subTreeAlignments = 'Center';
                if (target.id === 'orgchart_child1') {
                    orgChartObject.createOrgChart(false);
                    this.readTextFile('./assets/dbstyle/orgchart_images/OrgTemplateStyle1.json', selectedItem);
                } else if (target.id === 'orgchart_child2') {
                    orgChartObject.createOrgChart(false);
                    this.readTextFile('./assets/dbstyle/orgchart_images/OrgTemplateStyle2.json', selectedItem);
                } else if (target.id === 'orgchart_child3') {
                    orgChartObject.createOrgChart(false);
                    this.readTextFile('./assets/dbstyle/orgchart_images/OrgTemplateStyle3.json', selectedItem);
                }
            }
            this.hideMenuItems();
            diagramContainer.classList.add('custom-diagram');
        } else if (target.id.startsWith('flowchart')) {
            if (target.id === 'flowchart_child0') {
                selectedItem.selectedDiagram.clear();
            } else if (target.id === 'flowchart_child1') {
                this.readTextFile('./assets/dbstyle/flowchart_Images/CreditCardFlow.json', selectedItem);
            } else if (target.id === 'flowchart_child2') {
                this.readTextFile('./assets/dbstyle/flowchart_Images/BankingTellerProcess.json', selectedItem);
            } else if (target.id === 'flowchart_child3') {
                this.readTextFile('./assets/dbstyle/flowchart_Images/Developer_Workflow.json', selectedItem);
            }
            selectedItem.diagramType = 'GeneralDiagram';
            diagramContainer.classList.add('general-diagram');
        } else {
            selectedItem.selectedDiagram.clear();
            selectedItem.diagramType = 'GeneralDiagram';
            diagramContainer.classList.add('general-diagram');
        }
        let diagramName: string = target.parentElement.children[1].children[0].innerHTML;
        if (diagramName !== 'Blank Diagram') {
            document.getElementById('diagramName').innerHTML = diagramName;
        }
        this.tempDialog.hide();
    }

    private hideMenuItems(): void {
        let btnWindow: any = document.getElementById('btnWindowMenu');
        btnWindow.ej2_instances[0].items[1].iconCss = '';

        let btnView: any = document.getElementById('btnViewMenu');
        btnView.ej2_instances[0].items[7].iconCss = '';
    }
    public currentDiagramVisibility(diagramname: string, selectedItem: SelectorViewModel): void {
        if (diagramname === 'mindmap-diagram' || diagramname === 'orgchart-diagram') {
            selectedItem.utilityMethods.hideElements('hide-palette');

            let diagramContainer: HTMLDivElement = document.getElementsByClassName('db-current-diagram-container')[0] as HTMLDivElement;
            diagramContainer.classList.add(diagramname);

            let propertyContainer: HTMLDivElement = document.getElementsByClassName('db-property-editor-container')[0] as HTMLDivElement;
            if (diagramname === 'mindmap-diagram') {
                propertyContainer.classList.remove('orgchart-diagram');
            } else {
                propertyContainer.classList.remove('mindmap-diagram');
            }
            propertyContainer.classList.add(diagramname);
        }
    }
    public showDiagramTemplates(selectedItem: SelectorViewModel, evt: MouseEvent): void {
        let target: HTMLDivElement = evt.target as HTMLDivElement;
        if (target.tagName.toLowerCase() === 'span') {
            target = target.parentElement as HTMLDivElement;
        }
        switch (target.children[0].innerHTML.trim()) {
            case 'Flow Chart':
                this.getDefaultDiagramTemplates1(selectedItem, 4, 'red', 'Flow Chart');
                break;
            case 'Mind Map':
                this.getDefaultDiagramTemplates1(selectedItem, 4, 'blue', 'Mind Map');
                break;
            case 'Org Chart':
                this.getDefaultDiagramTemplates1(selectedItem, 4, 'orange', 'Org Chart');
                break;
            case 'BPMN':
                this.getDefaultDiagramTemplates1(selectedItem, 4, 'brown', 'BPMN');
                break;
        }
    }

    public enableToolbarItems(selectedItems: Object[]): void {
        let toolbarContainer: HTMLDivElement = document.getElementsByClassName('db-toolbar-container')[0] as HTMLDivElement;
        let toolbarClassName: string = 'db-toolbar-container';
        if (toolbarContainer.classList.contains('db-undo')) {
            toolbarClassName += ' db-undo';
        }
        if (toolbarContainer.classList.contains('db-redo')) {
            toolbarClassName += ' db-redo';
        }
        toolbarContainer.className = toolbarClassName;
        if (selectedItems.length === 1) {
            toolbarContainer.className = toolbarContainer.className + ' db-select';
            if (selectedItems[0] instanceof Node) {
                if ((selectedItems[0] as Node).children) {
                    if ((selectedItems[0] as Node).children.length > 2) {
                        toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-multiple db-node db-group';
                    } else {
                        toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-node db-group';
                    }
                } else {
                    toolbarContainer.className = toolbarContainer.className + ' db-select db-node';
                }
            }
        } else if (selectedItems.length === 2) {
            toolbarContainer.className = toolbarContainer.className + ' db-select db-double';
        } else if (selectedItems.length > 2) {
            toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-multiple';
        }
        if (selectedItems.length > 1) {
            let isNodeExist: boolean = false;
            for (let i: number = 0; i < selectedItems.length; i++) {
                if (selectedItems[i] instanceof Node) {
                    toolbarContainer.className = toolbarContainer.className + ' db-select db-node';
                    break;
                }
            }
        }
    }

    public enableMenuItems(itemText: string, selectedItem: SelectorViewModel): boolean {
        let selectedItems: Object[] = selectedItem.selectedDiagram.selectedItems.nodes;
        selectedItems = selectedItems.concat(selectedItem.selectedDiagram.selectedItems.connectors);
        if (itemText) {
            let commandType: string = itemText.replace(/[' ']/g, '');
            if (selectedItems.length === 0 || selectedItem.diagramType !== 'GeneralDiagram') {
                switch (commandType.toLowerCase()) {
                    case 'edittooltip':
                        let disable: boolean = false;
                        if (!(selectedItems.length === 1)) {
                            disable = true;
                        }
                        return disable;
                    case 'cut':
                        return true;
                    case 'copy':
                        return true;
                    case 'delete':
                        return true;
                    case 'duplicate':
                        return true;
                }
            }
            if (selectedItems.length > 1) {
                switch (commandType.toLowerCase()) {
                    case 'edittooltip':
                        return true;
                }
            }
            if (selectedItem.pasteData.length === 0 && itemText === 'Paste') {
                return true;
            }
            if (itemText === 'Undo' && selectedItem.selectedDiagram.historyManager.undoStack.length === 0) {
                return true;
            }
            if (itemText === 'Redo' && selectedItem.selectedDiagram.historyManager.redoStack.length === 0) {
                return true;
            }
            if (itemText === 'Select All') {
                if (selectedItem.diagramType !== 'GeneralDiagram' || (selectedItem.selectedDiagram.nodes.length === 0 && selectedItem.selectedDiagram.connectors.length === 0)) {
                    return true;
                }
            }
            if (selectedItem.diagramType !== 'GeneralDiagram') {
                if (itemText === 'Themes' || itemText === 'Paste' || itemText === 'Show Rulers' || itemText === 'Show Guides'
                    || itemText === 'Show Grid' || itemText === 'Snap To Grid' || itemText === 'Show Stencil') {
                    return true;
                }
            }
        }
        return false;
    }

    public enableArrangeMenuItems(selectedItem: SelectorViewModel): void {
        let contextInstance: any = document.getElementById('arrangeContextMenu');
        let contextMenu: ContextMenu = contextInstance.ej2_instances[0] as ContextMenu;
        let selectedItems: Object[] = selectedItem.selectedDiagram.selectedItems.nodes;
        selectedItems = selectedItems.concat(selectedItem.selectedDiagram.selectedItems.connectors);
        for (let i: number = 0; i < contextMenu.items.length; i++) {
            contextMenu.enableItems([contextMenu.items[i].text], false);
        }
        if (selectedItem.diagramType === 'GeneralDiagram') {
            if (selectedItems.length > 1) {
                contextMenu.enableItems(['Align Objects', 'Distribute Objects', 'Match Size', 'Lock', 'Unlock', 'Group'], true);
            } else if (selectedItems.length === 1) {
                contextMenu.enableItems(['Send To Back', 'Bring To Front', 'Send Backward', 'Bring Forward']);
                let object: Object = selectedItems[0];
                if (object instanceof Node) {
                    if (object.children && object.children.length > 0) {
                        contextMenu.enableItems(['Ungroup']);
                    }
                    if (object.constraints & NodeConstraints.Drag) {
                        contextMenu.enableItems(['Lock'], true);
                    } else {
                        contextMenu.enableItems(['Unlock'], true);
                    }
                }
            }
        }
    }

    public fillColorCode: string[] = ['#C4F2E8', '#F7E0B3', '#E5FEE4', '#E9D4F1', '#D4EFED', '#DEE2FF'];

    public borderColorCode: string[] = ['#8BC1B7', '#E2C180', '#ACCBAA', '#D1AFDF', '#90C8C2', '#BBBFD6'];

    public getPaperSize(paperName: string): PaperSize {
        let paperSize: PaperSize = new PaperSize();
        switch (paperName) {
            case 'Letter':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1056;
                break;
            case 'Legal':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1344;
                break;
            case 'Tabloid':
                paperSize.pageWidth = 1056;
                paperSize.pageHeight = 1632;
                break;
            case 'A3':
                paperSize.pageWidth = 1122;
                paperSize.pageHeight = 1587;
                break;
            case 'A4':
                paperSize.pageWidth = 793;
                paperSize.pageHeight = 1122;
                break;
            case 'A5':
                paperSize.pageWidth = 559;
                paperSize.pageHeight = 793;
                break;
            case 'A6':
                paperSize.pageWidth = 396;
                paperSize.pageHeight = 559;
                break;
        }
        return paperSize;
    }

    public updateLayout(selectedItem: SelectorViewModel, bindBindingFields?: boolean, imageField?: boolean): void {
        for (let i: number = 0; i < selectedItem.selectedDiagram.nodes.length; i++) {
            let node: Node = selectedItem.selectedDiagram.nodes[i] as Node;
            if (node.id !== 'textNode') {
                let nodeInfo: any = node.addInfo as { [key: string]: Object };
                let keys: string[] = Object.keys(nodeInfo);
                let bindingFields: string[] = [];
                let additionalFields: string[] = [];
                let propName: string = 'Name';
                if (nodeInfo[propName] && nodeInfo[propName].checked) {
                    bindingFields.push(propName);
                }

                for (let i: number = 0; i < keys.length; i++) {
                    let keyValue: any = nodeInfo[keys[i]];
                    if (keyValue.type === 'bindingField') {
                        if (keyValue.checked) {
                            if (bindBindingFields) {
                                bindingFields.push(keys[i]);
                            }
                        } else {
                            additionalFields.push(keys[i]);
                        }
                    }
                }

                selectedItem.selectedDiagram.removeLabels(node, node.annotations);
                propName = 'Image URL';
                if (!imageField) {
                    node.minWidth = 150; node.minHeight = 50; node.maxHeight = 50;
                    selectedItem.selectedDiagram.dataBind();
                    node.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 5 };
                    selectedItem.selectedDiagram.dataBind();
                } else if (imageField) {
                    node.minWidth = 300; node.minHeight = 100; node.maxHeight = 100;
                    selectedItem.selectedDiagram.dataBind();
                    node.shape = {
                        type: 'Image', source: nodeInfo[propName] && nodeInfo[propName].value ? nodeInfo[propName].value.toString() : './assets/dbstyle/orgchart_images/blank-male.jpg',
                        align: 'XMinYMin', scale: 'Meet'
                    };
                    selectedItem.selectedDiagram.dataBind();
                }
                let annotations: ShapeAnnotationModel[] = [];
                let startY: number = 0.5 - ((bindingFields.length - 1) / 10);
                for (let i: number = 0; i < bindingFields.length; i++) {
                    let annotation1: ShapeAnnotationModel = {
                        content: nodeInfo[bindingFields[i]].value.toString(), offset: { x: 0.5, y: startY }
                    };
                    if (node.shape && node.shape.type === 'Image') {
                        annotation1.offset.x = 0;
                        annotation1.margin = { left: 110 };
                        annotation1.horizontalAlignment = 'Left';
                    }
                    if (i === 0) {
                        annotation1.style = { fontSize: 14, bold: true };
                    }
                    startY += 0.2;
                    annotations.push(annotation1);
                }
                if (annotations.length > 0) {
                    selectedItem.selectedDiagram.addLabels(node, annotations);
                }
                let content: string = '';
                if (additionalFields.length > 0) {
                    for (let i: number = 0; i < additionalFields.length; i++) {
                        if (nodeInfo[additionalFields[i]].value) {
                            content = content + additionalFields[i] + ':' + nodeInfo[additionalFields[i]].value + '\n';
                        }
                    }
                }
                if (content) {
                    node.tooltip = { content: content, position: 'BottomCenter', relativeMode: 'Object' };
                    node.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
                } else {
                    node.constraints = NodeConstraints.Default & ~NodeConstraints.Tooltip;
                }
            }
        }
        selectedItem.selectedDiagram.dataBind();
        selectedItem.selectedDiagram.doLayout();
        selectedItem.isModified = true;
    }
}
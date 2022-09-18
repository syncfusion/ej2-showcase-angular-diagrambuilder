/**
 *  Layers handler
 */

import { SelectorViewModel } from './selector';
import { Button, CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { LayerModel } from '@syncfusion/ej2-diagrams/src/diagram/diagram/layer-model';
import { Diagram } from '@syncfusion/ej2-diagrams';
import { Dialog } from '@syncfusion/ej2-angular-popups';


export class DiagramBuilderLayer {
    private removeLayer: Button;
    // public selectionLayer: Button;
    public selectedItem: SelectorViewModel;
    public layerDialog: Dialog;
    private isEditing: boolean = false;
    private layerCount1: number = 0;
    constructor(selectedItem: SelectorViewModel, layerDialog: Dialog) {
        this.selectedItem = selectedItem;
        this.layerDialog = layerDialog;
    }

    private getLayers(): LayerModel[] {
        return this.selectedItem.selectedDiagram.layers.sort((a: LayerModel, b: LayerModel): number => {
            return a.zIndex - b.zIndex;
        });
    }

    public getLayerDialogContent(): void {
        let layerDialogContent: HTMLElement = document.createElement('div');
        let layers: LayerModel[] = this.getLayers();
        if (layers.length > 0) {
            let orderType: string = 'None';
            for (let i: number = layers.length - 1; i >= 0; i--) {
                if (layers.length > 1) {
                    if (i === layers.length - 1) {
                        orderType = 'Backward';
                    } else if (i === 0) {
                        orderType = 'Forward';
                    } else {
                        orderType = 'Both';
                    }
                }
                layerDialogContent.appendChild(this.cloneLayerTemplate(layers[i], orderType, i));
            }
            if (layers.length === 1) {
                this.removeLayer.disabled = true;
            } else {
                this.removeLayer.disabled = false;
            }
        }
        this.layerDialog.content = layerDialogContent.outerHTML;
        this.triggerEvents();
    }

    public cloneLayerTemplate(layer: LayerModel, orderType: string, index: number): HTMLDivElement {
        let layerTemplate: HTMLDivElement =
            (document.getElementsByClassName('db-layer-template')[0] as HTMLDivElement).cloneNode(true) as HTMLDivElement;
        layerTemplate.style.display = '';
        if (this.getActiveLayer(layer)) {
            layerTemplate.className = 'db-layer-template active';
        }

        let layerNameElement: HTMLSpanElement =
            layerTemplate.getElementsByClassName('db-layer-name')[0] as HTMLSpanElement;
        layerNameElement.innerHTML = (layer.addInfo as { [key: string]: Object }).name as string;
        layerNameElement.className = 'db-layer-name ' + layer.id;

        (layerNameElement.parentNode as HTMLDivElement).style.width = 'calc(100% - ' + 88 + 'px)';
        return layerTemplate;
    }

    public triggerEvents(): void {
        let visibleElements: HTMLCollectionOf<HTMLButtonElement> =
            document.getElementsByClassName('db-layer-visible') as HTMLCollectionOf<HTMLButtonElement>;
        let lockElements: HTMLCollectionOf<HTMLButtonElement> =
            document.getElementsByClassName('db-layer-lock') as HTMLCollectionOf<HTMLButtonElement>;

        let layers: LayerModel[] = this.getLayers();
        for (let i: number = 0; i < layers.length; i++) {
            let layer: LayerModel = layers[i];
            let visibleLayer: Button = new Button({
                iconCss: layer.visible ? 'sf-icon-View' : 'sf-icon-Invisible',
                cssClass: layer.id
            });
            let visibleElement: HTMLButtonElement = visibleElements[layers.length - i];
            visibleLayer.appendTo(visibleElement);
            visibleElement.onclick = this.changeLayerVisibility.bind(this);
            if (!layer.visible) {
                visibleElement.parentElement.className = 'db-layer-content-btn db-layer-invisible';
            }

            let lockElement: HTMLButtonElement = lockElements[layers.length - i];
            let lockLayer: Button = new Button({
                iconCss: layer.lock ? 'sf-icon-Lock' : 'sf-icon-Unlock',
                cssClass: layer.id,
            });
            lockLayer.appendTo(lockElement);
            lockElement.onclick = this.changeLayerSelection.bind(this);
        }

        let layerNameElements: HTMLCollectionOf<HTMLDivElement> =
            document.getElementsByClassName('db-layer-name') as HTMLCollectionOf<HTMLDivElement>;

        for (let i: number = 0; i < layerNameElements.length; i++) {
            let layerNameElement: HTMLDivElement = layerNameElements[i];
            layerNameElement.parentElement.onclick = this.setActiveLayer.bind(this);
            layerNameElement.parentElement.ondblclick = this.btnRenameLayer.bind(this);
            (layerNameElement.parentElement.children[1] as HTMLInputElement).addEventListener('focusout', this.renameLayer.bind(this));
            (layerNameElement.parentElement.children[1] as HTMLInputElement).addEventListener('keydown', this.renameLayerKeyDown.bind(this));
        }
    }
    public renameLayerKeyDown(args: MouseEvent): void {
        if (args.which === 13) {
            this.renameLayer(args);
        }
    }

    public getLayerBottomPanel(): string {

        let bottomPanel: string = '<div class="db-layer-bottom-panel">' +
            '<div class="row" style="margin-top: 6px;">' +
            '<div class="col-xs-2">' +
            '<button id="btnAdd" style="right:16px;position:absolute"></button>' +
            '</div>' +
            '<div class="col-xs-2">' +
            '<button id="btnDuplicate" style="right:14px;position:absolute"></button>' +
            '</div>' +
            '<div class="col-xs-2">' +
            '<button id="btnRemove" style="right:12px;position:absolute"></button>' +
            '</div>' +
            '<div class="col-xs-2">' +
            '<button id="btnCloseLayer" style="right:10px;position:absolute"></button>' +
            '</div>' +
            // '<div class="col-xs-2" style="padding-left:0px">' +
            // '<button id="btnSelection" style="width:100%" ></button>' +
            // '</div>' +
            '</div>' +
            '</div>';
        return bottomPanel;
    }

    public initLayerBottomPanel(): void {

        this.removeLayer = new Button({ iconCss: 'sf-icon-Delete' });
        this.removeLayer.appendTo('#btnRemove');
        document.getElementById('btnRemove').onclick = this.btnRemoveLayer.bind(this);

        // this.selectionLayer = new Button({ content: 'M.Selection', disabled: true });
        // this.selectionLayer.appendTo('#btnSelection');
        // document.getElementById('btnSelection').onclick = this.btnSelectionLayer;

        let duplicateLayer: Button = new Button({ iconCss: 'sf-icon-Copy' });
        duplicateLayer.appendTo('#btnDuplicate');
        document.getElementById('btnDuplicate').onclick = this.btnDuplicateLayer.bind(this);

        let addLayer: Button = new Button({ iconCss: 'sf-icon-Plus' });
        addLayer.appendTo('#btnAdd');
        document.getElementById('btnAdd').onclick = this.btnAddLayer.bind(this);

        let closeLayer: Button = new Button({ iconCss: 'sf-icon-Close' });
        closeLayer.appendTo('#btnCloseLayer');
        document.getElementById('btnCloseLayer').onclick = this.btnCloseDialog.bind(this);
    }

    public changeLayerSelection(args: MouseEvent): void {
        let element: any = args.target;
        let layerName: string = element.className.replace('db-layer-lock e-control e-btn ', '').replace(' e-icon-btn', '').replace(' e-ripple', '');
        let layer: LayerModel = this.findLayer(layerName);
        layer.lock = !layer.lock;
        element.ej2_instances[0].iconCss = layer.lock ? 'sf-icon-Lock' : 'sf-icon-Unlock';
        this.selectedItem.selectedDiagram.dataBind();
    }

    public changeLayerVisibility(args: MouseEvent): void {
        let element: any = args.target;
        let layerName: string = element.className.replace('db-layer-visible e-control e-btn ', '').replace(' e-icon-btn', '').replace(' e-ripple', '');
        let layer: LayerModel = this.findLayer(layerName);
        layer.visible = !layer.visible;
        element.ej2_instances[0].iconCss = layer.visible ? 'sf-icon-View' : 'sf-icon-Invisible';
        element.parentElement.className = layer.visible ? 'db-layer-content-btn' : 'db-layer-content-btn db-layer-invisible';
        this.selectedItem.selectedDiagram.dataBind();
    }

    public changeLayerZorder(args: MouseEvent): void {
        let element: HTMLElement = args.target as HTMLElement;
        let layerName: string = element.className.replace('db-layer-order-second e-control e-btn ', '').replace(' e-icon-btn', '').replace(' e-ripple', '');
        layerName = layerName.replace('db-layer-order-first e-control e-btn ', '').replace(' e-ripple', '');
        if (element.innerText.toLowerCase() === 'forward') {
            this.selectedItem.selectedDiagram.bringLayerForward(layerName);
        } else {
            this.selectedItem.selectedDiagram.sendLayerBackward(layerName);
        }
        this.getLayerDialogContent();
    }

    public setActiveLayer(args: MouseEvent): void {
        if (!this.isEditing) {
            let target: HTMLDivElement = args.target as HTMLDivElement;
            this.selectedItem.selectedDiagram.setActiveLayer(target.children[0].className.replace('db-layer-name ', ''));
            let elements: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName('db-layer-template active') as HTMLCollectionOf<HTMLDivElement>;
            if (elements.length > 0) {
                elements[0].className = 'db-layer-template';
            }
            target.parentElement.parentElement.className = 'db-layer-template active';
        }
    }

    public btnRenameLayer(args: MouseEvent): void {
        if (!this.isEditing) {
            let target: HTMLDivElement = args.target as HTMLDivElement;
            target.classList.add('db-layer-editing');
            let inputElement: HTMLInputElement = target.children[1] as HTMLInputElement;
            inputElement.focus();
            inputElement.value = target.children[0].innerHTML;
            this.isEditing = true;
        }
    }

    public renameLayer(args: MouseEvent): void {
        let target: HTMLInputElement = args.target as HTMLInputElement;
        let addInfo: { [key: string]: Object } = this.selectedItem.selectedDiagram.activeLayer.addInfo as { [key: string]: Object };
        target.parentElement.children[0].innerHTML = addInfo.name = target.value;
        target.parentElement.classList.remove('db-layer-editing');
        this.isEditing = false;
    }

    public btnRemoveLayer(args: MouseEvent): void {
        let activeLayerIndex: number = this.getLayers().indexOf(this.selectedItem.selectedDiagram.activeLayer);
        this.selectedItem.selectedDiagram.removeLayer(this.selectedItem.selectedDiagram.activeLayer.id);
        if (activeLayerIndex - 1 < 0) {
            this.selectedItem.selectedDiagram.setActiveLayer(this.getLayers()[0].id);
        } else {
            this.selectedItem.selectedDiagram.setActiveLayer(this.getLayers()[activeLayerIndex - 1].id);
        }
        this.getLayerDialogContent();
    }

    public btnCloseDialog(): void {
        this.layerDialog.hide();
        let btnWindow: any = document.getElementById('btnWindowMenu');
        btnWindow.ej2_instances[0].items[3].iconCss = '';
    }

    // public btnSelectionLayer(): void {
    //     let diagram: Diagram = this.selectedItem.selectedDiagram;
    //     let objects: string[] = [];
    //     for (let i: number = 0; i < diagram.selectedItems.nodes.length; i++) {
    //         objects.push(diagram.selectedItems.nodes[i].id);
    //     }
    //     for (let i: number = 0; i < diagram.selectedItems.connectors.length; i++) {
    //         objects.push(diagram.selectedItems.connectors[i].id);
    //     }
    //     diagram.moveObjects(objects, diagram.activeLayer.id);
    // }

    public btnDuplicateLayer(): void {
        let name: string = (this.selectedItem.selectedDiagram.activeLayer.addInfo as { [key: string]: string }).name;
        this.selectedItem.selectedDiagram.cloneLayer(this.selectedItem.selectedDiagram.activeLayer.id);
        this.selectedItem.selectedDiagram.layers[this.selectedItem.selectedDiagram.layers.length - 1].addInfo = {
            'name': name + ' Copy'
        };
        this.getLayerDialogContent();
    }

    public btnAddLayer(): void {
        let layer: LayerModel = {
            id: 'Untitled_Layer' + this.layerCount1,
            addInfo: {
                'name': 'Untitled_Layer' + this.layerCount1
            }
        };
        this.selectedItem.selectedDiagram.addLayer(layer);
        this.getLayerDialogContent();
        this.layerCount1++;
    }

    public getActiveLayer(layer: LayerModel): LayerModel {
        if (layer.id === this.selectedItem.selectedDiagram.activeLayer.id) {
            return layer;
        }
        return null;
    }

    public findLayer(layerName: string): LayerModel {
        let layers: LayerModel[] = this.getLayers();
        for (let i: number = 0; i < layers.length; i++) {
            if (layers[i].id === layerName) {
                return layers[i];
            }
        }
        return null;
    }
}
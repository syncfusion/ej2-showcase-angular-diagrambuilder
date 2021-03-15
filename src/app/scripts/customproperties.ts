/**
 *  Custom Properties handler
 */

import { NodeModel, Diagram, NodeConstraints, Node, ShapeAnnotationModel } from '@syncfusion/ej2-diagrams';
import { Button, CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { SelectorViewModel } from './selector';
import { Dialog } from '@syncfusion/ej2-angular-popups';


export class CustomProperties {
    public selectedItem: SelectorViewModel;
    public customPropertyDialog: Dialog;
    public deleteField: string;

    constructor(selectedItem: SelectorViewModel, customPropertyDialog: Dialog) {
        this.selectedItem = selectedItem;
        this.customPropertyDialog = customPropertyDialog;
    }

    public getPropertyDialogContent(addInfo: Object): void {
        let propertyDialogContent: HTMLElement = document.createElement('div');
        if (addInfo) {
            let addInfo1: { [key: string]: Object } = addInfo as { [key: string]: Object };
            let keys: string[] = Object.keys(addInfo1);
            for (let i: number = 0; i < keys.length; i++) {
                propertyDialogContent.appendChild(this.clonePropInfoTemplate(keys[i], addInfo1[keys[i]] as { [key: string]: Object }));
            }
            this.createSpaceElement(propertyDialogContent);
        }
        propertyDialogContent.appendChild(this.clonePropTemplate());
        this.customPropertyDialog.content = propertyDialogContent.outerHTML;
        this.triggerEvents(addInfo);
    }

    private triggerEvents(addInfo: Object): void {
        let removeBtnElements: HTMLCollectionOf<HTMLDivElement> =
            document.getElementsByClassName('propertyLabelDiv') as HTMLCollectionOf<HTMLDivElement>;

        let removeCheckBoxElements: HTMLCollectionOf<HTMLDivElement> =
            document.getElementsByClassName('propertyTooltipDiv') as HTMLCollectionOf<HTMLDivElement>;

        let propertyValueElements: HTMLCollectionOf<HTMLDivElement> =
            document.getElementsByClassName('propertyValueDiv') as HTMLCollectionOf<HTMLDivElement>;

        let addInfo1: { [key: string]: Object } = addInfo as { [key: string]: Object };
        let keys: string[] = Object.keys(addInfo1);
        for (let i: number = 0; i < keys.length; i++) {
            let removeBtnElement: HTMLButtonElement = removeBtnElements[i + 1].children[0] as HTMLButtonElement;
            let removeButton: Button = new Button({ iconCss: 'sf-icon-Delete', cssClass: keys[i] });
            removeButton.appendTo(removeBtnElement);
            removeBtnElement.onclick = this.showConfirmationDialog.bind(this);

            let checkboxTooltipElement: HTMLInputElement = removeCheckBoxElements[i + 1].children[0] as HTMLInputElement;
            let checkboxTooltip: CheckBox = new CheckBox({ checked: Boolean((addInfo1[keys[i]] as { [key: string]: Object }).checked), cssClass: keys[i] });
            checkboxTooltip.change = this.removeField.bind(this);
            checkboxTooltip.appendTo(checkboxTooltipElement);

            (propertyValueElements[i + 1].children[0] as HTMLInputElement).value = (addInfo1[keys[i]] as { [key: string]: Object }).value.toString();
            (propertyValueElements[i + 1].children[0] as HTMLInputElement).onchange = this.valueChange.bind(this);
        }
        let propButton: HTMLButtonElement =
            document.getElementsByClassName('db-custom-prop-button')[1] as HTMLButtonElement;
        let button: Button = new Button();
        button.appendTo(propButton);
        propButton.onclick = this.addCustomProperty.bind(this);
    }

    private clonePropInfoTemplate(key: string, keyValue: { [key: string]: Object }): HTMLDivElement {
        let propertyInfo: HTMLDivElement =
            (document.getElementsByClassName('db-custom-prop-info-template')[0] as HTMLDivElement).cloneNode(true) as HTMLDivElement;
        propertyInfo.style.display = '';
        let propertyName: string = key;
        if (keyValue.type === 'nameField') {
            propertyName = 'Name';
        } else if (keyValue.type === 'imageField') {
            propertyName = 'Image URL';
        }
        propertyInfo.getElementsByClassName('propertyNameDiv')[0].innerHTML = propertyName;

        let removeBtnElement: HTMLButtonElement = propertyInfo.getElementsByClassName('btnRemoveProperty')[0] as HTMLButtonElement;
        if (keyValue.type !== 'bindingField') {
            removeBtnElement.style.display = 'None';
        }
        return propertyInfo;
    }

    private valueChange(args: MouseEvent): void {
        let target: HTMLInputElement = args.target as HTMLInputElement;
        let addInfo: any = this.selectedItem.selectedDiagram.selectedItems.nodes[0].addInfo;
        addInfo[target.parentElement.parentElement.children[0].innerHTML].value = target.value;
        let imageField: boolean = false;
        if (addInfo['Image URL'] && addInfo['Image URL'].checked) {
            imageField = true;
        }
        this.selectedItem.utilityMethods.updateLayout(this.selectedItem, true, imageField);
    }

    private removeField(args: ChangeEventArgs): void {
        let target: HTMLInputElement = args.event.target as HTMLInputElement;
        let className: string = target.parentElement.parentElement.className.replace('e-checkbox-wrapper ', '').trim();
        for (let i: number = 0; i < this.selectedItem.selectedDiagram.nodes.length; i++) {
            let node: Node = this.selectedItem.selectedDiagram.nodes[i] as Node;
            if (node.id !== 'textNode') {
                let nodeInfo: any = node.addInfo;
                nodeInfo[className].checked = args.checked;
            }
        }
        let imageField: boolean = false;
        let addInfo: any = this.selectedItem.selectedDiagram.selectedItems.nodes[0].addInfo;
        if (addInfo['Image URL'] && addInfo['Image URL'].checked) {
            imageField = true;
        }
        this.selectedItem.utilityMethods.updateLayout(this.selectedItem, true, imageField);
    }

    private showConfirmationDialog(args: MouseEvent): void {
        let target: HTMLElement = args.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'span') {
            target = target.parentElement;
        }
        this.deleteField = target.className.replace('btnRemoveProperty e-control e-btn ', '').replace(' e-icon-btn', '').trim();
        let dialog: any = document.getElementById('deleteConfirmationDialog');
        dialog.ej2_instances[0].show();
    }

    public removeProperty(args: MouseEvent): void {
        for (let i: number = 0; i < this.selectedItem.selectedDiagram.nodes.length; i++) {
            let node: Node = this.selectedItem.selectedDiagram.nodes[i] as Node;
            if (node.id !== 'textNode') {
                let nodeInfo: any = node.addInfo;
                delete nodeInfo[this.deleteField];
            }
        }
        let addInfo: any = this.selectedItem.selectedDiagram.selectedItems.nodes[0].addInfo;
        this.getPropertyDialogContent(addInfo);
        let imageField: boolean = false;
        if (addInfo['Image URL'] && addInfo['Image URL'].checked) {
            imageField = true;
        }
        this.selectedItem.utilityMethods.updateLayout(this.selectedItem, true, imageField);
        this.deleteField = '';
        let dialog: any = document.getElementById('deleteConfirmationDialog');
        dialog.ej2_instances[0].hide();
    }

    private createSpaceElement(element: HTMLElement): void {
        let spaceDiv: HTMLElement = document.createElement('div');
        spaceDiv.style.height = '10px';
        element.appendChild(spaceDiv);
    }

    private clonePropTemplate(): HTMLDivElement {
        let propertyInfo: HTMLDivElement =
            (document.getElementsByClassName('db-custom-prop-template')[0] as HTMLDivElement).cloneNode(true) as HTMLDivElement;
        propertyInfo.style.display = '';
        return propertyInfo;
    }

    private addCustomProperty(): void {
        let propName: string = (document.getElementsByClassName('txtPropertyName')[1] as HTMLInputElement).value;
        if (propName) {
            for (let i: number = 0; i < this.selectedItem.selectedDiagram.nodes.length; i++) {
                let node: Node = this.selectedItem.selectedDiagram.nodes[i] as Node;
                if (node.id !== 'textNode') {
                    let nodeInfo: any = node.addInfo;
                    nodeInfo[propName] = { value: '', type: 'bindingField', checked: false };
                }
            }
            this.getPropertyDialogContent(this.selectedItem.selectedDiagram.selectedItems.nodes[0].addInfo);
        } else {
            alert('Invalid Name');
        }
    }

    public setTooltip(node: NodeModel, content: string): void {
        if (content) {
            node.constraints = node.constraints | NodeConstraints.Tooltip;
            node.tooltip = { content: content, position: 'BottomCenter', relativeMode: 'Object' };
        } else {
            node.constraints = node.constraints & ~NodeConstraints.Tooltip;
        }
    }
}






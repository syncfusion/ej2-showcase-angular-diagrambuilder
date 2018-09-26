/**
 * Page Handler
 */
import { Button } from '@syncfusion/ej2-buttons';
import { SelectorViewModel } from './selector';
import { Ajax } from '@syncfusion/ej2-base';
import { NodeModel, Diagram, SnapConstraints } from '@syncfusion/ej2-diagrams';
import { MindMapUtilityMethods, MindMap } from './mindmap';
import { OrgChartUtilityMethods, OrgChartData } from './orgchart';

export class PageOptions {
    public name: string;
    public diagram?: any;
    public text: string;
    public templateDiagramType: string;
    public mindmapTemplateType: string;
    public orgChartTemplateType: string;
}

export class PageCreation {

    public pageOptionList: PageOptions[] = [];
    public activePage: PageOptions;
    public selectedItem: SelectorViewModel;
    public pageSwitch: boolean = false;
    constructor(selectedItem: SelectorViewModel) {
        this.selectedItem = selectedItem;
    }

    public generatePageButtons(pages: PageOptions[]): void {
        let pageOptionElement: HTMLDivElement = document.getElementById('pageOptionList') as HTMLDivElement;
        let pageContainerWidth: number = pageOptionElement.parentElement.getBoundingClientRect().width - 1;
        let buttonWidth: number = 75;
        if (pages.length * buttonWidth > pageContainerWidth) {
            buttonWidth = (pageContainerWidth - 32) / pages.length;
        }
        while (pageOptionElement.hasChildNodes()) {
            pageOptionElement.removeChild(pageOptionElement.lastChild);
        }
        for (let i: number = 0; i < pages.length; i++) {
            let pageOption: PageOptions = pages[i];
            let buttonElement: HTMLButtonElement = document.createElement('button');
            buttonElement.setAttribute('id', pageOption.name);
            buttonElement.setAttribute('style', 'width:' + buttonWidth + 'px');
            buttonElement.setAttribute('title', pageOption.text);
            buttonElement.onclick = this.showPageData.bind(this);
            pageOptionElement.appendChild(buttonElement);
            let pageButton: Button = new Button({
                content: pageOption.text
            });
            pageButton.appendTo(buttonElement);
            if (this.activePage.name === pageOption.name) {
                buttonElement.classList.add('db-active-page');
            }
        }
        let buttonElement: HTMLButtonElement = document.createElement('button');
        buttonElement.setAttribute('id', 'addNewPage');
        pageOptionElement.appendChild(buttonElement);
        buttonElement.setAttribute('style', 'width:32px');
        buttonElement.onclick = this.addNewPage.bind(this);
        let pageButton: Button = new Button({
            iconCss: 'sf-icon-Plus'
        });
        pageButton.appendTo(buttonElement);
    }

    public showPageData(evt: MouseEvent): void {
        let target: HTMLButtonElement = evt.target as HTMLButtonElement;
        let page1: PageOptions = this.findPage(target.id);
        if (page1 != null) {
            if (this.activePage) {
                let button: HTMLElement = document.getElementById(this.activePage.name);
                if (button.classList.contains('db-active-page')) {
                    button.classList.remove('db-active-page');
                }
                this.saveDiagramSettings();
            }
            this.activePage = page1;
            this.pageSwitch = true;
            this.loadDiagramSettings();
            this.pageSwitch = false;
        }
        target.classList.add('db-active-page');
    }

    public findPage(id: string): PageOptions {
        for (let i: number = 0; i < this.pageOptionList.length; i++) {
            if (this.pageOptionList[i].name === id) {
                return this.pageOptionList[i];
            }
        }
        return null;
    }

    public addNewPage(): void {
        if (this.activePage) {
            this.saveDiagramSettings();
            this.selectedItem.selectedDiagram.clear();
        }
        if (this.selectedItem.diagramType === 'MindMap') {
            MindMapUtilityMethods.createEmptyMindMap();
            this.selectedItem.selectedDiagram.doLayout();
        } else if (this.selectedItem.diagramType === 'OrgChart') {
            OrgChartUtilityMethods.createEmptyOrgChart();
            this.selectedItem.selectedDiagram.doLayout();
        }
        this.activePage = new PageOptions();
        this.activePage.name = 'page' + (this.pageOptionList.length + 1);
        this.activePage.text = 'Page' + (this.pageOptionList.length + 1);
        this.pageOptionList.push(this.activePage);
        this.generatePageButtons(this.pageOptionList);
    }

    public savePage(): string {
        let pageData: { [key: string]: Object } = {};
        this.saveDiagramSettings();
        pageData.pageOptionList = this.pageOptionList;
        pageData.activePage = this.activePage.name;
        pageData.diagramType = this.selectedItem.diagramType;
        return JSON.stringify(pageData);
    }

    public loadPage(savedData: string): void {
        let pageData: { [key: string]: Object } = JSON.parse(savedData);
        this.pageOptionList = pageData.pageOptionList as PageOptions[];
        this.activePage = this.findPage(pageData.activePage.toString());
        this.selectedItem.diagramType = pageData.diagramType.toString();
        this.generatePageButtons(this.pageOptionList);
    }

    public saveDiagramSettings(): void {
        this.activePage.diagram = JSON.parse(this.selectedItem.selectedDiagram.saveDiagram());
        if (this.selectedItem.diagramType === 'MindMap') {
            this.activePage.mindmapTemplateType = MindMapUtilityMethods.templateType;
        }
    }

    public loadDiagramSettings(): void {
        let diagram: Diagram = this.selectedItem.selectedDiagram;
        document.getElementsByClassName('sidebar')[0].className = 'sidebar show-overview';
        this.selectedItem.isLoading = true;
        diagram.loadDiagram(JSON.stringify(this.activePage.diagram));
        diagram.clearSelection();
        this.selectedItem.isLoading = false;
        document.getElementsByClassName('sidebar')[0].className = 'sidebar';
        if (this.selectedItem.diagramType === 'MindMap') {
            MindMapUtilityMethods.templateType = this.activePage.mindmapTemplateType;
            if (!this.pageSwitch && !this.selectedItem.isTemplateLoad) {
                MindMapUtilityMethods.selectedItem = this.selectedItem;
                let map: MindMap = new MindMap(this.selectedItem);
                map.createMindMap(false);
            }
            (document.getElementById('diagram').querySelector('#closeIconDiv') as HTMLElement).onclick =
                MindMapUtilityMethods.onHideNodeClick.bind(MindMapUtilityMethods);
        }
        if (this.selectedItem.diagramType === 'OrgChart') {
            if (!this.pageSwitch && !this.selectedItem.isTemplateLoad) {
                OrgChartUtilityMethods.selectedItem = this.selectedItem;
                let org: OrgChartData = new OrgChartData(this.selectedItem);
                org.createOrgChart(false);
            }
            (document.getElementById('diagram').querySelector('#closeIconDiv') as HTMLElement).onclick =
                OrgChartUtilityMethods.onHideNodeClick.bind(OrgChartUtilityMethods);
        }
        let btnView: any = document.getElementById('btnViewMenu');
        btnView = btnView.ej2_instances[0];
        if (diagram.rulerSettings) {
            btnView.items[5].iconCss = diagram.rulerSettings.showRulers ? 'sf-icon-Selection' : '';
            let containerDiv: HTMLElement = document.getElementById('diagramContainerDiv');
            if (!diagram.rulerSettings.showRulers) {
                containerDiv.classList.remove('db-show-ruler');
            } else {
                if (!containerDiv.classList.contains('db-show-ruler')) {
                    containerDiv.classList.add('db-show-ruler');
                }
            }
        }
        if (diagram.snapSettings) {
            btnView.items[6].iconCss = (diagram.snapSettings.constraints & SnapConstraints.SnapToObject) ? 'sf-icon-Selection' : '';
            btnView.items[7].iconCss = (diagram.snapSettings.constraints & SnapConstraints.ShowLines) ? 'sf-icon-Selection' : '';
            btnView.items[9].iconCss = (diagram.snapSettings.constraints & SnapConstraints.SnapToLines) ? 'sf-icon-Selection' : '';
        }
    }
}





import { ChangeArgs } from '@syncfusion/ej2-buttons';
import { SelectorViewModel } from './selector';

export class DownloadExampleFiles {

    private selectedItem: SelectorViewModel;
    constructor(selectedItem: SelectorViewModel) {
        this.selectedItem = selectedItem;
    }

    private data: { [key: string]: Object }[] = [
        {
            'Name': 'Maria Anders', 'EmployeeID': '1', 'Role': 'Managing Director', 'Department': '',
            'Location': 'US', 'Phone': '(555) 111-1111', 'Email': 'mariaanders@fakecompany.com', 'Supervisor Name': '',
            'Supervisor ID': '', 'Image URL': './assets/dbstyle/orgchart_images/blank-male.jpg'
        },
        {
            'Name': 'Carine Schmitt', 'EmployeeID': '2', 'Role': 'Project Manager', 'Department': 'Development',
            'Location': 'US', 'Phone': '(555) 222-2222', 'Email': 'carineschmitt@fakecompany.com', 'Supervisor Name': 'Maria Anders',
            'Supervisor ID': '1', 'Image URL': './assets/dbstyle/orgchart_images/blank-male.jpg'
        },
        {
            'Name': 'Daniel Tonini', 'EmployeeID': '3', 'Role': 'Project Manager', 'Department': 'Development',
            'Location': 'US', 'Phone': '(555) 333-3333', 'Email': 'danieltonini@fakecompany.com', 'Supervisor Name': 'Maria Anders',
            'Supervisor ID': '1', 'Image URL': './assets/dbstyle/orgchart_images/blank-male.jpg'
        },
        {
            'Name': 'Alex Camino', 'EmployeeID': '4', 'Role': 'Project Lead', 'Department': 'Development',
            'Location': 'US', 'Phone': '(555) 444-4444', 'Email': 'alexcamino@fakecompany.com', 'Supervisor Name': 'Daniel Tonini',
            'Supervisor ID': '3', 'Image URL': './assets/dbstyle/orgchart_images/blank-male.jpg'
        },
        {
            'Name': 'Jones Bergson', 'EmployeeID': '5', 'Role': 'Project Lead', 'Department': 'Development',
            'Location': 'US', 'Phone': '(555) 555-5555', 'Email': 'jonesbergson@fakecompany.com', 'Supervisor Name': 'Daniel Tonini',
            'Supervisor ID': '3', 'Image URL': './assets/dbstyle/orgchart_images/blank-male.jpg'
        },
        {
            'Name': 'Rene Phillips', 'EmployeeID': '6', 'Role': 'Project Lead', 'Department': 'Development',
            'Location': 'US', 'Phone': '(555) 666-6666', 'Email': 'renephillips@fakecompany.com', 'Supervisor Name': 'Daniel Tonini',
            'Supervisor ID': '3', 'Image URL': './assets/dbstyle/orgchart_images/blank-male.jpg'
        },
    ];

    public downloadCSV(): void {
        let csv: string = 'Name,EmployeeID,Role,Department,Location,Phone,Email,Supervisor Name,Supervisor ID,Image URL\n';
        this.data.forEach((row: any): void => {
            for (let prop in row) {
                csv += row[prop].toString() + ',';
            }
            csv += '\n';
        });
        if (window.navigator.msSaveBlob) {
            let blob: Blob = new Blob([csv], { type: 'text/plain;charset=utf-8;' });
            window.navigator.msSaveOrOpenBlob(blob, 'people.csv');
        } else {
            let hiddenElement: HTMLAnchorElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'people.csv';
            document.body.appendChild(hiddenElement);
            hiddenElement.click();
            hiddenElement.remove();
        }
    }

    public downloadJSON(): void {
        let dataStr: string = JSON.stringify(this.data);
        if (window.navigator.msSaveBlob) {
            let blob: Blob = new Blob([dataStr], { type: 'data:text/json;charset=utf-8,' });
            window.navigator.msSaveOrOpenBlob(blob, 'people.json');
        } else {
            dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(dataStr);
            let downloadAnchorNode: HTMLAnchorElement = document.createElement('a');
            downloadAnchorNode.setAttribute('href', dataStr);
            downloadAnchorNode.setAttribute('download', 'people.json');
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        }
    }

    public downloadXML(): void {
        let xmltext: string = '<?xml version="1.0" encoding="utf-8" ?><people>' +
            '<person Name="Maria Anders" Role="Managing Director" Location="US" Phone="(555) 111-1111" Email="mariaanders@fakecompany.com" ImageURL="./assets/dbstyle/orgchart_images/blank-male.jpg">' +
            '<person Name="Carine Schmitt" Role="Project Manager" Department="Development" Location="US" Phone="(555) 222-2222" Email="carineschmitt@fakecompany.com" SupervisorName="Maria Anders" ImageURL="./assets/dbstyle/orgchart_images/blank-male.jpg"></person>' +
            '<person Name="Daniel Tonini" Role="Project Manager" Department="Development" Location="US" Phone="(555) 333-3333" Email="danieltonini@fakecompany.com" SupervisorName="Maria Anders" ImageURL="./assets/dbstyle/orgchart_images/blank-male.jpg">' +
            '<person Name="Alex Camino" Role="Project Manager" Department="Development" Location="US" Phone="(555) 444-4444" Email="alexcamino@fakecompany.com" SupervisorName="Daniel Tonini" ImageURL="./assets/dbstyle/orgchart_images/blank-male.jpg"></person>' +
            '<person Name="Jones Bergson" Role="Project Lead" Department="Development" Location="US" Phone="(555) 555-5555" Email="jonesbergson@fakecompany.com" SupervisorName="Daniel Tonini" ImageURL="./assets/dbstyle/orgchart_images/blank-male.jpg"></person>' +
            '<person Name="Rene Phillips" Role="Project Lead" Department="Development" Location="US" Phone="(555) 666-6666" Email="renephillips@fakecompany.com" SupervisorName="Daniel Tonini" ImageURL="./assets/dbstyle/orgchart_images/blank-male.jpg"></person>' +
            '</person>' +
            '</person>' +
            '</people>';
        let filename: string = 'people.xml';
        let bb: Blob = new Blob([xmltext], { type: 'text/plain' });
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveOrOpenBlob(bb, filename);
        } else {
            let pom: HTMLAnchorElement = document.createElement('a');
            pom.setAttribute('href', window.URL.createObjectURL(bb));
            pom.setAttribute('download', filename);
            document.body.appendChild(pom);
            pom.click();
            pom.remove();
        }
    }

    public downloadFormatChange(args: ChangeArgs): void {
        if (args.event) {
            let target: HTMLElement = args.event.target as HTMLElement;
            if (target.id === 'csvFormat') {
                this.selectedItem.orgDataSettings.buttonContent = 'Download Example CSV';
                this.selectedItem.orgDataSettings.extensionType = '.csv';
                document.getElementById('descriptionText1').innerHTML = 'Make sure that each column of the table has a header';
                document.getElementById('descriptionText2').innerHTML = 'Each employee should have a reporting person (except the top most employee of the organization)' +
                    ', and it should be indicated by any field from the data source.';
            } else if (target.id === 'xmlFormat') {
                this.selectedItem.orgDataSettings.buttonContent = 'Download Example XML';
                this.selectedItem.orgDataSettings.extensionType = '.xml';
                document.getElementById('descriptionText1').innerHTML = 'Make sure that XML document has a unique root element and start-tags have matching end-tags.';
                document.getElementById('descriptionText2').innerHTML = 'All XML elements will be considered employees and will act as a reporting person for its child XML elements.';
            } else {
                this.selectedItem.orgDataSettings.buttonContent = 'Download Example JSON';
                this.selectedItem.orgDataSettings.extensionType = '.json';
                document.getElementById('descriptionText1').innerHTML = 'Make sure that you have defined a valid JSON format.';
                document.getElementById('descriptionText2').innerHTML = 'Each employee should have a reporting person (except the top most employee of the organization)' +
                ', and it should be indicated by any field from the data source.';
            }
        }
    }

    public downloadExampleFiles(args: MouseEvent): void {
        if (this.selectedItem.orgDataSettings.buttonContent === 'Download Example CSV') {
            this.downloadCSV();
        } else if (this.selectedItem.orgDataSettings.buttonContent === 'Download Example XML') {
            this.downloadXML();
        } else {
            this.downloadJSON();
        }
    }
}
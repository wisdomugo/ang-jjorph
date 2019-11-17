import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'simple-modal',
    template: `
        <!-- Modal -->
        <div class="modal fade" id="simple-modal" tabindex="-1" role="dialog" aria-labelledby="simple-modal"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <!--<div class="modal-header">
                <h5 class="modal-title" >{{modalTitle}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>-->
            <div class="modal-body">
                <ng-content></ng-content>
            </div>
            <div class="modal-footer">
                <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            </div>
            </div>
        </div>
        </div>
    `,
    styles: [
        `
        `]

})
export class SimpleModalComponent {}

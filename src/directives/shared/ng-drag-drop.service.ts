import { Subject } from 'rxjs';
export declare class NgDragDropService {
    dragData: any;
    scope: string | Array<string>;
    onDragStart: Subject<any>;
    onDragEnd: Subject<any>;
    constructor();
}

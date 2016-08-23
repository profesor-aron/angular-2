import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

export function asObservable(subject: Subject<Object>) {
    return new Observable(fn => subject.subscribe(fn));
}
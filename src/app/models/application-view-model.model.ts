import { ApplicationEvent } from './application-event.model';

export interface ApplicationViewModel {
    id: string;
    userName: string;
    date: string;
    operationSystem: string;
    appVersion: string;
    events: ApplicationEvent[];
}

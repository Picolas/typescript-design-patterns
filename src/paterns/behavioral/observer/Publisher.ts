import {Observer} from "./model/Observer";
import {Subject} from "./model/Subject";

export class Publisher implements Subject {
    private _observers: Observer[] = [];
    private _news: string = '';

    attach(observer: Observer): void {
        const isExist = this._observers.find(obs => obs === observer);
        if (!isExist) {
            this._observers.push(observer)
        }
    }

    detach(observer: Observer): void {
        const observerIndex = this._observers.indexOf(observer);
        if (observerIndex !== -1) {
            this._observers.splice(observerIndex, 1);
        }
    }

    notify(): void {
        for (const observer of this._observers) {
            observer.update(this);
        }
    }

    addNews(news: string) {
        this.news = news;
        this.notify();
    }


    get news(): string {
        return this._news;
    }

    set news(value: string) {
        this._news = value;
    }
}
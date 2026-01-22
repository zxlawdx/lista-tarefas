import { ITarefa } from "../interface/tarefa.interface";

export class Tarefa implements ITarefa{
    content: string;
    isConclused: boolean;
    name: string;
    constructor(content: string, name: string,isConclused: boolean = false){
        this.content  = content;
        this.isConclused = isConclused;
        this.name = name;
    }
    done: any;
}
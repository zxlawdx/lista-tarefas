import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITarefa } from '../../../../interface/tarefa.interface';
import { Tarefa } from '../../../../model/tarefa';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-page',
  imports: [CommonModule, Footer],
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class Page {
  public tarefas = signal<ITarefa[]>([]);
  toogleDelete = false;

  OnToogleDelete() {
    this.toogleDelete = !this.toogleDelete;
    if(this.toogleDelete){
      this.tarefas.set([])
    }
  }

  public novaTarefa(nameTarefa: string, conteudoTarefa: string){
    if(!nameTarefa || !conteudoTarefa)
      return alert("Não pode ser vazio");
    let tarefa = new Tarefa(nameTarefa, conteudoTarefa, false);
    return this.update(tarefa);
  }

  public update(value: ITarefa){
    this.tarefas.update((oldValues: ITarefa[]) =>
    {
        return [...oldValues, value];
    })
  }


  public toggle(item: ITarefa, event: Event) {
      const checked = (event.target as HTMLInputElement).checked;

      this.tarefas.update((oldValues) =>
        oldValues.map(tarefa =>
          tarefa === item
            ? { ...tarefa, isConclused: checked }
            : tarefa
        )
      );
  }

  public deleteItemFromArray(item: ITarefa){
    this.tarefas.update(oldValues =>
      oldValues.filter(tarefa => tarefa !== item)
    );
  }

}


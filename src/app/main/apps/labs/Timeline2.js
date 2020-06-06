import React from "react";
import { FrappeGantt } from 'frappe-gantt-react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Timeline2(props)
{

  const tasks = [
    {
      id: '1',
      name: 'discord no topos',
      start: '2020-03-28',
      end: '2020-05-29',
      progress: 100,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: '2',
      name: 'integração com google maps',
      start: '2020-03-28',
      end: '2020-05-29',
      progress: 100,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: '3',
      name: 'pesquisar monitoramento web',
      start: '2020-03-28',
      end: '2020-05-29',
      progress: 100,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: '4',
      name: 'Pesquisar whatsapp open source',
      start: '2020-03-28',
      end: '2020-05-29',
      progress: 100,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: '5',
      name: 'cadastro na cooperativa',
      start: '2020-03-28',
      end: '2020-05-29',
      progress: 100,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: '6',
      name: 'Cards na lista de times com cores aleatórias',
      start: '2020-03-28',
      end: '2020-05-29',
      progress: 100,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: '7',
      name: 'Feature apontamento de Horas',
      start: '2020-03-28',
      end: '2020-05-29',
      progress: 100,
      custom_class: 'bar-milestone' // optional
    }
  ]

  return(
    <Card elevation={1} className="m-24">
      <CardContent>
        <div className="flex flex-row justify-between items-center p-12">
          <div>Timeline</div>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button>Dia</Button>
            <Button>Semana</Button>
            <Button>Mês</Button>
          </ButtonGroup>
      </div>
      <div>
      </div>
      <FrappeGantt
          tasks={tasks}
          viewMode={"Month"}
          onClick={task => console.log(task)}
          onDateChange={(task, start, end) => console.log(task, start, end)}
          onProgressChange={(task, progress) => console.log(task, progress)}
          onTasksChange={tasks => console.log(tasks)}
          />
    </CardContent>
  </Card>
  )
}
export default Timeline2;

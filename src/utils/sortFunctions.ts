import { Task } from "../assets/types/Task";

export function sortByCreationDate(array: Task[]): Task[] {
  return [...array].sort((first, second) => {
    return new Date(first.createdAt).getTime() - new Date(second.createdAt).getTime();
  });
}

export function sortByCompletion(array: Task[]):Task[] {
  return [...array].sort((first, second) => {
    return first.hasDone === second.hasDone ? 0 : first.hasDone ? 1 : -1;
  });
}

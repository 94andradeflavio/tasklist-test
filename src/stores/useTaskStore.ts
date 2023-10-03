import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task } from "../assets/types/Task";
import { convertDate } from "../utils/convertDate";

const LOCAL_STORAGE_KEY = "tasklist:savedTasks"

interface iTaskStore {
    tasks: Task[];
    filteredName: string;
}

interface iTaskActions {
    addToTasks: (taskName: string) => void;
    updateTask: (taskId: string, text: string) => void;
    completeTask: (taskId: string) => void;
    removeTask: (taskId: string) => void;
}

export const useTaskStore = create<iTaskStore & iTaskActions>()(
    persist(
        (set) => ({
            tasks: [],
            filteredName: 'all',
            addToTasks: taskName => {
                set((state) => ({ tasks: [...state.tasks, {
                    id: crypto.randomUUID(),
                    hasDone: false,
                    text: taskName,
                    createdAt: convertDate()
                }] }))
            },
            removeTask: (taskId) => set((state) => ({tasks: state.tasks.filter(task => task.id !== taskId)})),
            updateTask: (taskId, text) => set((state) => ({tasks: state.tasks.map((task) => {
                if(task.id === taskId) {return {...task, text }}
                return task
            })})),
            completeTask: (taskId) => set((state) => ({tasks: state.tasks.map((task) => {
                if(task.id === taskId) {return {...task, hasDone: !task.hasDone }}
                return task
            })}))
        }),
        {
            partialize: state => ({ tasks: state.tasks }),
            name: LOCAL_STORAGE_KEY
        }
    )
)
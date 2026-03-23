export interface ModalState {
  isOpen: boolean;
  type: "create" | "edit" | "delete" | null;
  taskId?: string;
}
